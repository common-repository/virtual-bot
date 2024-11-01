<?php 
  function dashboardVirtualBot()
  {
    global $wpdb;
    $tablename =  $wpdb->prefix . 'virtual_bot';
    $pageNumber = 1;
    $limit = 9;



    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')    
    {
      $url = "https://";   
    }
    else {
      $url = "http://";   
    }
    // Append the host(domain name, ip) to the URL.   
    $url.= $_SERVER['HTTP_HOST'];   

    // Append the requested resource location to the URL   
    $url.= $_SERVER['REQUEST_URI'];   
    
    
    $allc =  menu_page_url('chatbot',false);
    $current = str_replace($allc,'',$url);
    $final = str_replace('&','',$current);

    if(intval($final) < 1) $pageNumber = 1;
    else $pageNumber = intval($final);
    

    $offset = ($limit * $pageNumber) - $limit;
    $query = $wpdb->prepare("SELECT * FROM $tablename ORDER BY id DESC LIMIT ".$limit." OFFSET ".$offset);
    $bots = $wpdb->get_results($query);



 

      ?>
       <div class="bot-dashboard-menu">
            <div class="bot-logo"></div>

            <div class="bot-inner-menu">
                <a href="<?php echo menu_page_url('chatbot-add-new',false); ?>" class="bot-button">New Bot +</a>
                <!-- <a href="" type class="bot-button">Settings</a> -->
            </div>
       </div>

       <p class="curent"><?php  ?> </p>
 

        <div class="bot-dashboard-page-all">
           <?php 
                    
              foreach($bots as $bot){
                  ?>
                  <div class="bot-dashboard-one-bot">

                    <div class="bot-dashboard-one-bot-row">
                      <span style="background-image:url(<?php echo $bot->avatar; ?>);background-color:<?php echo $bot->theme; ?>;"></span>
                      <p><?php echo esc_attr($bot->title) ?></p>
                       <div class="bot-dashboard-one-bot-row-inner">
                        <a href="<?php echo menu_page_url('chatbot-bot-conversation',false); ?>&<?php echo $bot->id ?>" class="bot-dashboard-one-bot-menu-icon bot-conversation-icon" ></a>
                        <a href="<?php echo menu_page_url('chatbot-edit-bot',false); ?>&<?php echo $bot->id ?>" class="bot-dashboard-one-bot-menu-icon bot-edit-icon" ></a>
                        <a  class="bot-dashboard-one-bot-menu-icon bot-delete-icon">
                          <form method="post">
                            <input type="text" value="<?php echo $bot->id ?>" id="bot-id" name="bot-id">
                            <input type="submit">
                          </form>
                        </a>

                       </div>
                    </div>

                    <div class="bot-dashboard-inner-row">
                      <div class="bot-dashboard-one-bot-row-shortcode-copy"></div>
                        <input class="bot-dashboard-one-bot-row-shortcode" value="[<?php echo esc_attr($bot->shortcode) ?>]">
                    </div>

                   

                  </div>

                

                  <?php
              }


              if(count($bots) == 0 ) {
                ?>
                <h3 style="width:100%;position:relative;text-align:center;">No bots found yet.</h3><br>
               <p style="width:100%;position:relative;margin:2% 0;text-align:center;">Check our quick tutorial on how to create bot</p><br>
               <iframe width="620" height="415" src="https://www.youtube.com/embed/5tMIRlN9AwU" title="YouTube video player" frameborder="0" style="position:relative;margin:0 auto;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <?php
                
              }
                
              else{

                if(intval($final) > 1) {


                  if(count($bots) < 9){

                        ?>

                        <div class="bot-dashboard-pagination">
                          <a class="bot-dashboard-prev" href="<?php echo $allc; ?>&<?php echo intval($final) -1 ?>"></a>
                          <p><?php echo intval($final); ?></p>
                          <a class="bot-dashboard-next" href=""></a>
                        </div>


                      <?php
                   

                  }
                  else{


                        ?>

                        <div class="bot-dashboard-pagination">
                          <a class="bot-dashboard-prev" href="<?php echo $allc; ?>&<?php echo intval($final) -1; ?>"></a>
                          <p><?php echo intval($final); ?></p>
                          <a class="bot-dashboard-next" href="<?php echo $allc; ?>&<?php echo intval($final) + 1; ?>"></a>
                        </div>
                      <?php

                  }

                }
                else{
                  if(intval($final) == 0) $final  = 1;

                  ?>
                  <div class="bot-dashboard-pagination">
                    <a class="bot-dashboard-prev"></a>
                    <p><?php echo intval($final); ?></p>
                    <a class="bot-dashboard-next" href="<?php echo $allc; ?>&<?php echo intval($final) + 1 ?>"></a>
                  </div>
                <?php

                }
              
              }
           ?>
          
              
        </div>

        <script>
          document.querySelectorAll('.bot-delete-icon').forEach(e=>{
              e.addEventListener('click',()=>{
                e.children[0].submit()
              })
          })

          document.querySelectorAll('.bot-dashboard-inner-row').forEach(e=>{
                e.children[0].addEventListener('click',()=>{
                      var copyText = e.children[1];

                      // Select the text field
                      copyText.select();
                      copyText.setSelectionRange(0, 99999); // For mobile devices

                      // Copy the text inside the text field
                      navigator.clipboard.writeText(copyText.value);
                })
          })
        </script>


      <?php    
      
  }