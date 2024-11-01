<?php 

function editorConversation()
{
    ?>
      <div class="bot-dashboard-menu">
      <div class="bot-logo"></div>

            <div class="bot-inner-menu">
                <a href="<?php echo menu_page_url('chatbot',false); ?>" class="bot-button">Back</a>
            </div>

       </div>

       <div class="dashboard-conversation-row">
            <div class="dashboard-conversation-row-avatar-icon"></div>
            <p class="dashboard-conversation-row-avatar-label"></p>
       </div>
       <p class="dashboard-current-url-conversation"><?php echo menu_page_url('chatbot-bot-conversation',false); ?></p>

       <div class="bot-dashboard-conversations-page" id="bot-dashboard-conversations-page">

           <div class="loading-bar" id="conversation-loading-bar"><span></span></div>
           <div class="dashboard-bot-table-row-f"><div class="bot-table-select" id="bot-table-select-all"></div><p>ID</p><p>Date</p><p>Hour</p><p>Un/read</p><p></p></div>
        
       </div>

       <div class="bot-dashboard-conversations-pagination">
        <a class="bot-dashboard-prev"></a>
        <p>1</p>
        <a class="bot-dashboard-next"></a>
       </div>

       <form method="post" id="virtual_conv_form" class="bot-off-form">
          <input type="text" id="conv-id" name="conv-id">
          <input type="text" id="conv-read" name="conv-read">
          <input type="submit">

       </form>

       <form method="post" id="virtual_conv_form_d" class="bot-off-form">
          <input type="text" id="conv-id-to-delete" name="conv-id-to-delete">
          <input type="submit">
       </form>


    <?php
}