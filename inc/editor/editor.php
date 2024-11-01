<?php 


function editorVirtualBot()
{

    ?>

                   <div class="bot-dashboard-menu">
                   <div class="bot-logo"></div>
                            <div class="bot-inner-menu-expand">
                            <a class="bot-button" id="bot-button-preview">Preview</a>
                               
                                <form action="" class="bot-hidden" id="bot-add-new-data-form" method="post" enctype="multipart/form-data">
                                    <p style="visibility:hidden;position:absolute;" id="plugin_url_bot"><?php echo plugin_dir_url(__FILE__);?></p>
                                    <input type="hidden" id="bot-new-name" name="bot-new-name" >
                                    <input type="hidden" id="bot-new-content" name="bot-new-content" >
                                    <input type="hidden" id="bot-new-theme" name="bot-new-theme" >
                                    <input type="hidden" id="bot-new-avatar" name="bot-new-avatar" >
                                    <input type="hidden" id="bot-new-pos" name="bot-new-pos" >

                                    <input class="bot-button-sub" type="submit" name="bot-save" id="bot-save" value="save">
                                </form>
                                <a href="<?php echo menu_page_url('chatbot',false); ?>" type class="bot-button dark">Back</a>
                            </div>
                    </div>
            

                    <div class="bot-dashboard-page" id="bot-dashboard-page-editor">
                          
                         <div class="bot-30-col">
                            <div class="bot-55-h">
                                <div class="bot-question" id="question_text">
                                    <span></span>
                                    <p>Text Question</p>
                                </div>
                                <div class="bot-question" id="message_text">
                                    <span></span>
                                    <p>Text Message</p>
                                </div>
                                <div class="bot-question" id="question_range">
                                    <span></span>
                                    <p>Range Question</p>
                                </div>
                                <div class="bot-question" id="question_rating">
                                    <span></span>
                                    <p>Rating Question</p>
                                </div>
                                <div class="bot-question" id="question_options">
                                    <span></span>
                                    <p>Options Question</p>
                                </div>
                                <div class="bot-question" id="question_checkbox">
                                    <span></span>
                                    <p>Checkbox Question</p>
                                </div>
                                <div class="bot-question" id="message_links">
                                    <span></span>
                                    <p>Links Message</p>
                                </div>
                                <div class="bot-question" id="question_email">
                                    <span></span>
                                    <p>Email Question</p>
                                </div>
                                <div class="bot-question" id="question_phone">
                                    <span></span>
                                    <p>Phone Question</p>
                                </div>
                                <div class="bot-question" id="question_number">
                                    <span></span>
                                    <p>Number Question</p>
                                </div>
                                <?php 
                                  if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
                                   ?>
                                            <div class="bot-question" id="question_pollproducts">
                                                <span></span>
                                                <p>Products Poll Question</p>
                                            </div>
                                            <div class="bot-question" id="message_products">
                                                <span></span>
                                                <p>Products Message</p>
                                            </div>
                                            <div class="bot-question" id="message_cart">
                                                <span></span>
                                                <p>Cart Message</p>
                                            </div>
                                   <?php 

                                  }
                                  else{

                                    ?>
                                            <div class="bot-question bot-question-disabled" id="question_pollproducts">
                                                <span></span>
                                                <p>Products Poll Question</p>
                                            </div>
                                            <div class="bot-question bot-question-disabled" id="message_products">
                                                <span></span>
                                                <p>Products Message</p>
                                            </div>
                                            <div class="bot-question bot-question-disabled" id="message_cart">
                                                <span></span>
                                                <p>Cart Message</p>
                                            </div>
                                    <?php 

                                  }

                                ?>
                             
                                <div class="bot-question" id="message_thankyou">
                                    <span></span>
                                    <p>Thankyou Message</p>
                                </div>

                            </div>
                            <div class="bot-45-h">

                                <div class="bot-editor-row-settings">
                                    <p>Bot Name</p>
                                    <input type="text" id="projectName">
                                </div>

                                <div class="bot-editor-row-settings">
                                    <p>Bot Position</p>
                                    <div class="bot-editor-row-pos-div">
                                    <div class="select-bot-position-box" data-pos="left">
                                        <div class=" select-bot-position-box-left"></div>

                                        </div>
                                        <div class="select-bot-position-box" data-pos="right">
                                            <div class=" select-bot-position-box-right"></div>
                                        </div>
                                      

                                    </div>
                                </div>

                                <div class="bot-editor-row-settings">
                                    <p>Bot Theme</p>
                                    <div class="bot-editor-row-settings-div">
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <div class="box-editor-color box-editor-color-r"></div>
                                        <input type="color" class="box-editor-color" id="bot-color-theme">

                                    </div>
                                </div>

                                <div class="bot-editor-row-settings">
                                    <p>Bot Avatar</p>
                                    <div class="bot-editor-row-settings-div-avatars">

                                 

                                        <?php
                                        if(function_exists( 'wp_enqueue_media' )){
                                            wp_enqueue_media();
                                        }else{
                                            wp_enqueue_style('thickbox');
                                            wp_enqueue_script('media-upload');
                                            wp_enqueue_script('thickbox');
                                        }
                                        ?>

                                         <div class="bot-editor-row-div-avatar" id="bot-editor-row-div-avatar-upload">
                                                 <span>+</span>
                                        </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar1.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar2.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar3.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar4.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar5.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar6.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar7.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar8.png"> </div>
                                        <div class="bot-editor-row-div-avatar avatar-box-d"> <img src="<?php echo plugin_dir_url( __FILE__ ) ?>/avatars/avatar9.png"> </div>

                                        
                                        
                                     
                                    </div>
                                </div>

                              



                            </div>
                         </div>
                         <div class="bot-70-col" id="bot-message-content"></div>

                    </div>






                    <script>



                                            jQuery(document).ready(function($) {
                                                $('#bot-editor-row-div-avatar-upload').click(function(e) {
                                                    e.preventDefault();
                                        
                                                    var custom_uploader = wp.media({
                                                        title: 'Custom Image',
                                                        button: {
                                                            text: 'Upload Image'
                                                        },
                                                        multiple: false  // Set this to true to allow multiple files to be selected
                                                    })
                                                    .on('select', function() {
                                                        document.querySelector('#bot-new-avatar').value = attachment.url
                                        
                                                    })
                                                    .open();
                                                });
                                            });
                     


                    </script>

    <?php
}