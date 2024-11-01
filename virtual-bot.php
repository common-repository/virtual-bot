<?php 
/* 

* Plugin Name: Virtual Bot
* Description: VirtualBot is an easy to use, Native, No coding required,Custom ChatBot plugin for your WordPress and Woocommerce website
*Version: 1.0.0
*Author: Ofek Nakar
*Author URI: https://www.ofek-nakar.herokuapp.com
*Plugin URI:/virtual-Bot
*Text Domain: Virtual Bot
* License: GPLv2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html

**/


if( !defined('ABSPATH')) exit;
require_once plugin_dir_path( __FILE__ ) . 'inc/dashboard/dashboard.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/dashboard/settings.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/dashboard/dashboard-conversation.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/editor/editor.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/editor/editorEdit.php';

class VirtualChatBot{
    function __construct()
    {

        global $wpdb;
        $this->charset = $wpdb->get_charset_collate();
        $this->tablename =  $wpdb->prefix . 'virtual_bot';
        $this->tablename_conversations =  $wpdb->prefix . 'virtual_bot_conversations';


        add_action('admin_menu',[$this,'adminMenu']);
        add_action('admin_init',[$this,'adminAssets']);
      
        add_action('init',[$this,'Bots']);
        add_action('init',[$this,'ajaxCalls']);


        add_action('activate_virtual-bot/virtual-bot.php',[$this,'onActivate']);


        
        add_filter('admin_footer_text', [$this,'adminFooter']);

   



    }

    function onActivate ()
    {

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta("CREATE TABLE $this->tablename (
          id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
          title varchar(60) NOT NULL DEFAULT '',
          content varchar(8000) NOT NULL DEFAULT '',
          theme varchar(255) NOT NULL DEFAULT '',
          avatar varchar(255) NOT NULL DEFAULT '',
          position varchar(255) NOT NULL DEFAULT '',
          shortcode varchar(60) NOT NULL DEFAULT '',
          PRIMARY KEY  (id)
         ) $this->charset;");

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta("CREATE TABLE $this->tablename_conversations (
          id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
          bot_title varchar(60) NOT NULL DEFAULT '',
          bot_id varchar(60) NOT NULL DEFAULT '',
          content varchar(8000) NOT NULL DEFAULT '',
          bot_read varchar(60) NOT NULL DEFAULT '',
          date varchar(60) NOT NULL DEFAULT '',
          PRIMARY KEY  (id)
         ) $this->charset;");

    }




    function adminFooter() 
    {

        if(str_contains(add_query_arg( $wp->query_vars, home_url() ),'page=chatbot') || str_contains(add_query_arg( $wp->query_vars, home_url() ),'chatbot-bot-conversation') ||
        str_contains(add_query_arg( $wp->query_vars, home_url() ),'chatbot-add-new') || str_contains(add_query_arg( $wp->query_vars, home_url() ),'chatbot-edit-bot') )
        {
            echo '<span id="footer-thankyou">Developed by <a style="text-decoration:none;font-weight:700;color#000;" href="https://www.pixliy.com/" target="_blank">Pixliy</a></span>';
        }
    }

    function adminMenu()
    {

      global $wpdb;
      $this->charset = $wpdb->get_charset_collate();
      $tablename =  $wpdb->prefix . 'virtual_bot';
      $query = $wpdb->prepare("SELECT * FROM $tablename LIMIT 100");
      $bots = $wpdb->get_results($query);


    

        add_menu_page('Chatbot','VirtualBot','manage_options','chatbot','dashboardVirtualBot','dashicons-admin-users',61);

        add_submenu_page(
          'chatbot' // Use the parent slug as usual.
          , __( 'Add new', 'textdomain' )
          , 'Add new'
          , 'manage_options'
          , 'chatbot-add-new'
          , 'editorVirtualBot'
      );
      add_submenu_page(
          null 
          , __( 'Edit', 'textdomain' )
          , 'edit'
          , 'manage_options'
          , 'chatbot-edit-bot'
          , 'editorEditVirtualBot'
      );
      add_submenu_page(
        null 
        , __( 'Conversation', 'textdomain' )
        , 'conversation'
        , 'manage_options'
        , 'chatbot-bot-conversation'
        , 'editorConversation'
      );
      // add_submenu_page(
      //   'chatbot' // Use the parent slug as usual.
      //   , __( 'Settings', 'textdomain' )
      //   , 'Settings'
      //   , 'manage_options'
      //   , 'chatbot-settings'
      //   , 'settings'
      // );



      $num = count($bots) + 1;

      // edit post
      if(isset( $_POST['bot-edit-save']))
      {
        
          $dat_edit = array(
              'title'=> sanitize_text_field( $_POST['bot-edit-name'] ),
              'content'=> json_encode(sanitize_text_field( $_POST['bot-edit-content'] ),true),
              'avatar'=> sanitize_text_field( $_POST['bot-edit-avatar'] ),
              'theme'=> sanitize_text_field( $_POST['bot-edit-theme'] ),
              'position'=> sanitize_text_field( $_POST['bot-edit-pos'] ),
          );

          $wpdb->update($this->tablename,$dat_edit,array('ID'=>sanitize_text_field( $_POST['bot-edit-id'] ) ) );

        
      }


      // save new post

      if(isset( $_POST['bot-save']))
      {
          $dat = array(
              'title'=> sanitize_text_field( $_POST['bot-new-name'] ),
              'content'=> json_encode(sanitize_text_field($_POST['bot-new-content']),true) ,
              'avatar'=> sanitize_text_field( $_POST['bot-new-avatar'] ),
              'theme'=> sanitize_text_field( $_POST['bot-new-theme'] ),
              'position'=> sanitize_text_field( $_POST['bot-new-pos'] ),
              'shortcode'=> "wp_virtual-bot-".$num,

          );

          $wpdb->insert($this->tablename,$dat);
          wp_safe_redirect( menu_page_url('chatbot',false));

        
      }


      foreach($bots as $bot){
        $wpdb->update($this->tablename,array('shortcode'=>"wp_virtual-bot-".esc_attr($bot->id)),array('ID'=>$bot->id));
      }

      // delete existing post

      if(isset( $_POST['bot-id']))
      {
        if(current_user_can( 'administrator'))
        {
          $id = sanitize_text_field( $_POST['bot-id'] );
          global $wpdb;
          $wpdb->delete($this->tablename, array('id'=>$id));
          
        }
      }


        
    }

    function ajaxCalls(){



              // woo ajax calls

              if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

                // check if woocommerce activated and init product viewer class
        
                      // Get cart contents action
                      add_action( 'wp_ajax_get_cart_items', 'wp_ajax_get_cart_items_action' );
                      add_action( 'wp_ajax_nopriv_get_cart_items', 'wp_ajax_get_cart_items_action' );
                      function wp_ajax_get_cart_items_action() {
                          $cart = WC()->cart;
                          if ( $cart ) {
                              wp_send_json_success( $cart->get_cart_contents() );
                              wp_die();
                          }
                      }
                      // Get checkout url action
                      add_action( 'wp_ajax_get_checkouturl', 'wp_ajax_get_checkouturl_action' );
                      add_action( 'wp_ajax_nopriv_get_checkouturl', 'wp_ajax_get_checkouturl_action' );
                      function wp_ajax_get_checkouturl_action() {
                            wp_send_json_success( wc_get_checkout_url()  );
                            wp_die();
                        
                      }
                      // Get products action
                      add_action( 'wp_ajax_get_products', 'wp_ajax_get_products_action' );
                      add_action( 'wp_ajax_nopriv_get_products', 'wp_ajax_get_products_action' );

                    

                      function wp_ajax_get_products_action() {

                        $all = array();
                        $arr = wc_get_products(  array('limit' => -1 ));
                        $locations = array_map(function ($product) {
                          /** @var WC_Product $product */
                          return [
                              'id' => $product->get_id(),
                              'title' => $product->get_title(),
                              'price' => $product->get_price() . get_woocommerce_currency(),
                              'stock' => $product->get_stock_quantity(),
                              'img_url' => get_the_post_thumbnail_url($product->get_id()),
                              'url' => get_permalink( $product->get_id() ),
                              // if easier, just include the popup html here and not the other stuff
                          ];
                      }, $arr);


                          wp_send_json_success(  $locations  );
                          wp_die();
                        
                      }
              }

               // save conversation through ajax call
            
              add_action( 'wp_ajax_nopriv_save_conversation', 'save_conversation' );
              add_action( 'wp_ajax_save_conversation', 'save_conversation' );

              function save_conversation($da){
                  global $wpdb;

                  $msg = 'Conversation saved successfully';
            
              
                  $tablenamex =  $wpdb->prefix . 'virtual_bot_conversations';
                    
                  
                          $datx = array(
                            'content'=> sanitize_text_field( $_POST['virtual-bot-conversation'] ),
                            'bot_title'=> sanitize_text_field( $_POST['virtual-bot-title'] ),
                            'bot_id'=> sanitize_text_field( $_POST['virtual-bot-id'] ),
                            'bot_read'=>'false',
                            'date'=> date('Y/m/d H:i:s')
                            );
                
                        $wpdb->insert($tablenamex,$datx);
                
              
                

                  echo json_encode(array('log'=>true, 'message'=> $msg));
                  die();
                
              }


              // read conversation through ajax call
              add_action( 'wp_ajax_nopriv_read_conversation', 'read_conversation' );
              add_action( 'wp_ajax_read_conversation', 'read_conversation' );
              function read_conversation(){
                global $wpdb;

                $msg = 'Conversation read successfully';
          
            
                $tablenamex =  $wpdb->prefix . 'virtual_bot_conversations';
                  
                
                $dat = array(
                  'bot_read'=> sanitize_text_field( $_POST['conv-read'] ) ,
                );
    
                $wpdb->update($tablenamex,$dat,array('ID'=>sanitize_text_field( $_POST['conv-id'] ) ) );
    
              

                echo json_encode(array('log'=>true, 'message'=> $msg));
                die();
              
                
              }

              // delete conversation through ajax call
              
              add_action( 'wp_ajax_nopriv_delete_conversation', 'delete_conversation' );
              add_action( 'wp_ajax_delete_conversation', 'delete_conversation' );
              function delete_conversation(){
                
                global $wpdb;
                $tablename0d =  $wpdb->prefix . 'virtual_bot_conversations';

                $msg = str_replace('//','',sanitize_text_field( $_POST['conv-ids'] ));
                $msg = str_replace('"','',$msg);

                $msg = explode(",", $msg);

                $wo = '';
                $arr = array();
                foreach ($msg as $m) {
                  $id = $m;
                  $wo = intval(str_replace('\\','',$m));
                  $wpdb->query( "DELETE FROM $tablename0d WHERE ID IN($wo)" );

                  
                }
                  

                echo json_encode(array('log'=>true, 'message'=> intval($wo)));
                die();
              
                
              }


              // get conversation through ajax call
              add_action( 'wp_ajax_nopriv_get_conversation', 'get_conversation' );
              add_action( 'wp_ajax_get_conversation', 'get_conversation' );

              function get_conversation() {
                    global $wpdb;
                    $tablename0 =  $wpdb->prefix . 'virtual_bot';
                    $tablename =  $wpdb->prefix . 'virtual_bot_conversations';
                    $limit = 9;
                    $pageNumber = sanitize_Text_field($_POST['page']);
                    $offset = ($limit * $pageNumber) - $limit;
                    $query_c = $wpdb->prepare("SELECT * FROM $tablename WHERE bot_id=".sanitize_Text_field($_POST['id'])." ORDER BY id DESC LIMIT ".$limit." OFFSET ".$offset);
                    $conversations = $wpdb->get_results($query_c);

                    $query_b = $wpdb->prepare("SELECT * FROM $tablename0 WHERE id=".sanitize_Text_field($_POST['id'])." LIMIT 10");
                    $bot = $wpdb->get_results($query_b);

                    wp_send_json_success( [$conversations,$bot ]);
                    wp_die();
              }


              add_action( 'wp_ajax_nopriv_get_conversation_num', 'get_conversation_num' );
              add_action( 'wp_ajax_get_conversation_num', 'get_conversation_num' );

              function get_conversation_num() {
                    global $wpdb;
                    $tablename =  $wpdb->prefix . 'virtual_bot_conversations';
                    $query_c = $wpdb->prepare("SELECT * FROM $tablename ORDER BY id DESC LIMIT 100");
                    $conversations_a = $wpdb->get_results($query_c);
                    wp_send_json_success(count($conversations_a));
                    wp_die();
              }



    }

    function adminAssets()
    {
        wp_enqueue_script('adminBotScript',plugin_dir_url(__FILE__). 'js/bot/botEngine.js',array());
        wp_enqueue_script('adminEngineScript',plugin_dir_url(__FILE__). 'js/bot/scriptEngine.js',array());
        wp_enqueue_script('adminNewScript',plugin_dir_url(__FILE__). 'js/editor.js',array());
        wp_enqueue_script('adminEditScript',plugin_dir_url(__FILE__). 'js/editorEdit.js',array());
        wp_enqueue_script('textEditorScript',plugin_dir_url(__FILE__). 'js/textEditor.js',array());
        wp_enqueue_script('messageScript',plugin_dir_url(__FILE__). 'js/messages.js',[ 'jquery' ] );
        wp_enqueue_style('dashboardStyles',plugin_dir_url(__FILE__). 'css/dashboard.css', array(), '1.0.0', 'all' );
        wp_enqueue_style('dashboardBotStyles',plugin_dir_url(__FILE__). 'css/bot.css', array(), '1.0.0', 'all' );

        wp_enqueue_script('conversationScript',plugin_dir_url(__FILE__). 'js/conversation.js',[ 'jquery' ] );


        wp_localize_script( 'conversationScript', 'conversationScript', [
          'ajaxurl' => admin_url( 'admin-ajax.php' )
          ]
          );
        wp_localize_script( 'messageScript', 'messageScript', [
                'ajaxurl' => admin_url( 'admin-ajax.php' )
            ]
        );


        global $wpdb;
        $tablename =  $wpdb->prefix . 'virtual_bot';
        $query = $wpdb->prepare("SELECT * FROM $tablename LIMIT 100");
        $bots = $wpdb->get_results($query);
    
    
        $contents = array();

        foreach($bots as $bot){
          $arr=array("id"=>esc_attr( $bot->id ),"name"=>esc_attr($bot->title),"content"=>json_decode( $bot->content ,true ), "theme"=> esc_attr( $bot->theme), "avatar"=>esc_attr( $bot->avatar),"position"=>esc_attr( $bot->position));
          array_push($contents,$arr);
        }
        
        wp_localize_script('adminEditScript','allcontent',$contents);





        


    }
    function Bots()
    {
      // short code functionality

      global $wpdb;
      $tablename =  $wpdb->prefix . 'virtual_bot';
      $this->charset = $wpdb->get_charset_collate();

      $query = $wpdb->prepare("SELECT * FROM $tablename LIMIT 100");
      $bots = $wpdb->get_results($query);




    

      foreach($bots as $bot){


      $st = $bot->shortcode;

        add_shortcode($st, function($atts=[],$content= null,$tag = ''){


          global $wpdb;
          $tablename =  $wpdb->prefix . 'virtual_bot';
          $query = $wpdb->prepare("SELECT * FROM $tablename LIMIT 100");
          $bots = $wpdb->get_results($query);
          $bot_id =  str_replace('wp_virtual-bot-',"",$tag);


          wp_enqueue_style('botCss',plugin_dir_url(__FILE__). 'css/bot.css', array(), '1.0.0', 'all' );
          wp_enqueue_script('botEngineScript',plugin_dir_url(__FILE__). 'js/bot/botEngine.js',array());
          wp_enqueue_script('engineScript',plugin_dir_url(__FILE__). 'js/bot/scriptEngine.js',array());
          wp_enqueue_script('botIndexScript',plugin_dir_url(__FILE__). 'js/bot/index.js', [ 'jquery' ] );


        

        

              wp_localize_script( 'botIndexScript', 'botIndexScript', [
                      'ajaxurl' => admin_url( 'admin-ajax.php' )
                  ]
              );

          $contents = array();

          foreach($bots as $bot){
            if($bot->id == $bot_id){
                  array_push($contents,esc_attr($bot->title));
                  array_push($contents,json_decode(  $bot->content ,true ));
                  array_push($contents,esc_attr($bot->avatar));
                  array_push($contents,esc_attr($bot->theme));
                  array_push($contents,esc_attr($bot->position));
                  array_push($contents,esc_attr($bot->id));
            }
          }

        wp_localize_script('botIndexScript','botContent',$contents);
          

    


        });


      }



    }
  
   
}



$chatbot = new VirtualChatBot();
