
let urlCheckout = '';
let prodcuts = '';
let cart = '';
(function ( $ ) {
    $( document ).ready( function () {
        let data_pro = {
            action: 'get_products'
        };

        $.post( botIndexScript.ajaxurl, data_pro, function () {
        } ).done( function ( response ) {
            prodcuts = response
            // console.log(response)
        } ).fail( function ( response ) {
            prodcuts = 'failed'
        } );

        let data_cart = {
            action: 'get_cart_items'
        };

        $.post( botIndexScript.ajaxurl, data_cart, function () {
        } ).done( function ( response ) {
            cart = response
            // console.log(response)
        } ).fail( function ( response ) {
            cart = 'failed'
        } );

        let data_checkouturl = {
            action: 'get_checkouturl'
        };

        $.post( botIndexScript.ajaxurl, data_checkouturl, function () {
        } ).done( function ( response ) {
            urlCheckout = response
            // console.log(response)
        } ).fail( function ( response ) {
            urlCheckout = 'failed'
        } );


      



        let int = setInterval(() => {

            $.post( botIndexScript.ajaxurl, {action:'get_conversation_num'}, function () {
            } ).done( function ( response ) {
               if(response.data > 9) {
                clearInterval(int)
                return;
               }
                // console.log(response)
            } ).fail( function ( response ) {
              
            } );
          
            if(document.body.contains(document.querySelector('#virtual_bot_conversation_form'))) 
            {




                $('#virtual_bot_conversation_form').submit(function (event) {
                    event.preventDefault();
                    // conversation = $('#virtual_bot_conversation_form #virtual-bot-conversation').val(); 
                  
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: botIndexScript.ajaxurl,
                            data: {
                                'action': 'save_conversation',
                                'virtual-bot-id':document.querySelector('#virtual-bot-id').value,
                                'virtual-bot-title':document.querySelector('#virtual-bot-title').value,
                                'virtual-bot-conversation':document.querySelector('#virtual-bot-conversation').value,
                                'date':new Date(),
                            },
                            success: function (data) { //alert(data.message);
                                if (data.log== true) {
                                    // console.log(data)
                                
                                }
                                else {
                                    }
                            }
                        });
                    
                    }); 
    
                    clearInterval(int)

                    document.querySelector('#virtual_bot_conversation_form').children[3].click()



             
                

                  
              
            }

            
        }, 100);


    } );




  

})( jQuery );





let dir = 'right'
if(botContent[4] !== '') dir = botContent[4]

let c = new chatBot(dir)

c.settings.avatarURI = botContent[2]
c.settings.theme = botContent[3]
c.settings.id = botContent[5]
c.settings.title = botContent[0]

let start = false
c.chatBubble.addEventListener('click',()=>{
    if(start === false)
    {
        start = true
        c.chatHolderClearB.click()
    }

})


c.setSettings()




let script = botContent[1].replaceAll(/\\/g, "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll('%*',"'")

let _script = JSON.parse(script)




// let editor = new TextEditor(document.querySelector('.box'))
// editor.init()
// let slider = new chatBotCheckBox(document.querySelector('.box'),['woke 1','woke worst 2' ,'woke 3'])

let scrp = [
    {
        from:'bot',
        pass:false,
        type:'regular',
        text:"<p>hello i'm moody the bot</p>  <img src='https://media.giphy.com/media/YSvdLT5U2vugYuALVF/giphy.gif' style='width:245px;height:280px;'>",
        reply:true,
    },
    {
        from:'user',
        auto:false,
    },
    {
        from:'bot',
        pass:false,
        type:'regular',
        text:"<p>what is your name</p>  <img src='https://media.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif' style='width:245px;height:280px;'>",
        reply:true,
    },
    {
        from:'user',
        auto:false,
    },
    {
        from:'bot',
        type:'thankyou',
        text:'hello world !',
        reply:false
    }
   
]
let sc = new scriptBot(c,_script)

// c.scriptEngine = sc
