(function ( $ ) {
    $( document ).ready( function () {


      

                $('#virtual_conv_form').submit(function (event) {
                    event.preventDefault();
                    // conversation = $('#virtual_bot_conversation_form #virtual-bot-conversation').val(); 
                  
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: conversationScript.ajaxurl,
                            data: {
                                'action': 'read_conversation',
                                'conv-id':document.querySelector('#conv-id').value,
                                'conv-read':document.querySelector('#conv-read').value,

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



                $('#virtual_conv_form_d').submit(function (event) {
                    event.preventDefault();
                    // conversation = $('#virtual_bot_conversation_form #virtual-bot-conversation').val(); 
                  
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: conversationScript.ajaxurl,
                            data: {
                                'action': 'delete_conversation',
                                'conv-ids':document.querySelector('#conv-id-to-delete').value,
                            },
                            success: function (data) { //alert(data.message);
                                if (data.log== true) {
                                    document.location.reload()
                                }
                                else {
                                    }
                            }
                        });
                    
                    }); 


                    

            

    } );




  

})( jQuery );




function displayMessage(msg,type)
{
    let divHolder = document.querySelector('#bot-dashboard-conversations-page')

    let message = document.createElement('div')
    message.className = 'bot-dashboard-message-warn bot-'+type
    message.textContent = msg

    divHolder.appendChild(message)

}


function createConversations(arr)
{

    if(arr[0].length > 9)
    {
        let proMessage  = document.createElement('div')
        proMessage.className = 'virtual-bot-pro-message'
        let proTitleMessage = document.createElement('p')
        proTitleMessage.textContent = 'You reach your limit of conversations, please consider buying VirtualBot Pro version to support us and to get unlimited conversations'

        let proLink = document.createElement('a')
        proLink.target = '_blank'
        proLink.href = 'https://www.pixliy.com/virtual-bot'
        proLink.textContent = 'Pro version'

        proMessage.appendChild(proTitleMessage)
        proMessage.appendChild(proLink)

        document.querySelector('.dashboard-conversation-row').appendChild(proMessage)
    }

    let allClicked =false
    let allDeletes = []
    document.querySelector('#bot-table-select-all').addEventListener('click',()=>{

        if(allClicked === false)
        {
            allClicked = true
            document.querySelectorAll('.bot-table-select').forEach(e=>{
                let sp = document.createElement('span')
                if(e.children.length < 1) e.appendChild(sp)

                if(e.getAttribute('data-id-select') !== null) {
                    allDeletes.push(e.getAttribute('data-id-select'))
                }
            })
        }
        else
        {
            allClicked = false
            document.querySelectorAll('.bot-table-select').forEach(e=>{
                if(e.children.length > 0) e.removeChild(e.children[0])
            })
            allDeletes = []
        }

        document.querySelector('#conv-id-to-delete').value = JSON.stringify(allDeletes.join(','))

    })


    document.querySelector('.dashboard-conversation-row-avatar-icon').style.backgroundImage = 'url('+arr[1][0].avatar+')'
    document.querySelector('.dashboard-conversation-row-avatar-icon').style.backgroundColor = arr[1][0].theme
    document.querySelector('.dashboard-conversation-row-avatar-label').textContent = arr[1][0].title

    document.querySelector('.dashboard-bot-table-row-f').style.visibility = 'visible'
    document.querySelector('.bot-dashboard-conversations-pagination').style.visibility = 'visible'
    

    let divHolder = document.querySelector('#bot-dashboard-conversations-page')
    arr[0].forEach((a,i)=>{
        let tableRow = document.createElement('div')
        tableRow.className = 'dashboard-bot-table-row'


        let d = a.date.split(' ')

        let tableSelect = document.createElement('div')
        tableSelect.className = 'bot-table-select'
        let tableSelectSpan = document.createElement('span')

        tableSelect.addEventListener('click',()=>{

            if(tableSelect.children.length < 1)
            {
                tableSelect.appendChild(tableSelectSpan)
                
                allDeletes.push(tableSelect.getAttribute('data-id-select'))

            }
            else {
                tableSelect.removeChild(tableSelect.children[0])
                let index = allDeletes.indexOf(tableSelect.getAttribute('data-id-select'))
                allDeletes.splice(index,1)
            }
            document.querySelector('#conv-id-to-delete').value = JSON.stringify(allDeletes.join(','))

        })
       

        let tableRowID = document.createElement('p')
        let tableRowDate = document.createElement('p')
        let tableRowHour = document.createElement('p')
        let tableRowRead = document.createElement('p')
        let tableRowView= document.createElement('p')
        let tableRowDelete = document.createElement('div')
        tableRowDelete.className = 'bot-chat-conversation-div-delete'
        tableSelect.setAttribute('data-id-select',a.id)



        let conversationDiv = document.createElement('div')
        conversationDiv.className = 'bot-chat-conversation-div'
        let conversationDivContent = document.createElement('div')
        conversationDivContent.className = 'bot-chat-conversation-div-content'
        conversationDiv.appendChild(conversationDivContent)

        let conversationBubble = document.createElement('div')
        conversationBubble.className = 'bot-chat-conversation-div-content-bubble'


        let messages = JSON.parse( a.content.replaceAll(/\\/g, "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll('\&quot;','"').replaceAll('&#039;','"').replaceAll('%*',"'") )
        

        function createBotMessage(m){

            let botMessageDiv = document.createElement('div')
            botMessageDiv.className = 'bot-conversation-bot-div'
            let botMessage = document.createElement('div')
            botMessage.className = 'bot-conversation-bot-bubble'
            botMessage.innerHTML = m.content

            let botAvatar = document.createElement('p')
            botAvatar.className =  'bot-conversation-bot-bubble-avatar'
            botAvatar.style.visibility = m.avatar
            botAvatar.style.backgroundImage = 'url('+arr[1][0].avatar+')'
            botAvatar.style.backgroundColor = arr[1][0].theme

            botMessageDiv.appendChild(botAvatar)
            botMessageDiv.appendChild(botMessage)

            conversationBubble.appendChild(botMessageDiv)

           
        }
        function createUserMessage(m){

            let botMessageDiv = document.createElement('div')
            botMessageDiv.className = 'bot-conversation-user-div'
            let botMessage = document.createElement('div')
            botMessage.className = 'bot-conversation-user-bubble'
            botMessage.innerHTML = m.content

         

            botMessageDiv.appendChild(botMessage)

            conversationBubble.appendChild(botMessageDiv)
        }


        messages.forEach(m=>{
            if(m.from === 'bot') createBotMessage(m)
            else if(m.from === 'user') createUserMessage(m)
        })

        conversationDivContent.appendChild(conversationBubble)


        let conversationDivClose = document.createElement('div')
        conversationDivClose.className = 'bot-chat-conversation-div-close'
        conversationDivClose.textContent = '×'

        conversationDivContent.appendChild(conversationDivClose)


        tableRowView.addEventListener('click',()=>{
            if(a.bot_read !== 'true')
            {
                document.querySelector('#conv-id').value  =  a.id
                document.querySelector('#conv-read').value  =  true
                document.querySelector('#virtual_conv_form').children[2].click()
                tableRowRead.textContent = 'Read'
            }

            document.body.appendChild(conversationDiv)
            setTimeout(() => {
                conversationDivContent.style.right = '0%'
            }, 1);

        })

        conversationDivClose.addEventListener('click',()=>{
            conversationDivContent.style.right = '-70%'
            setTimeout(() => {
                document.body.removeChild(conversationDiv)
            }, 400);
        })

        tableRowDelete.addEventListener('click',()=>{
            document.querySelector('#conv-id-to-delete').value = a.id
            document.querySelector('#virtual_conv_form_d').children[1].click()

        })

        tableRowID.textContent = a.id
        tableRowDate.textContent = d[0]
        tableRowHour.textContent = d[1]
        if(a.bot_read === 'true') tableRowRead.textContent = 'Read'
        else tableRowRead.textContent = 'Unread'
        tableRowView.textContent = 'View'


        tableRow.appendChild(tableSelect)
        tableRow.appendChild(tableRowID)
        tableRow.appendChild(tableRowDate)
        tableRow.appendChild(tableRowHour)
        tableRow.appendChild(tableRowRead)
        tableRow.appendChild(tableRowView)
        tableRow.appendChild(tableRowDelete)


        divHolder.appendChild(tableRow)
        
    })
}





window.addEventListener('DOMContentLoaded',()=>{
    initConver()
})



function initConver()
{
    let pageN = 1
    let nextP = 2
    let prevP = 1
    if(!document.body.contains( document.querySelector('.dashboard-current-url-conversation') )) return;

    // console.log('wow')

    (function ( $ ) {
        $( document ).ready( function () {

            let url = document.location.href.replace(document.querySelector('.dashboard-current-url-conversation').textContent+'&','')
         
            if(url.includes('page='))
            {

                pageN = url.split('?')[1].replaceAll('page=','')
                url = url.split('?')[0]

                nextP = parseInt(pageN) +1
                if(pageN < 2)prevP = 1
                else prevP = parseInt(pageN) -1


          

            }
            
            let data_pro = {
                action: 'get_conversation',
                id:url,
                page:pageN,
            };
    
            $.post( conversationScript.ajaxurl, data_pro, function () {
            } ).done( function ( response ) {
                

                let loader = document.querySelector('#conversation-loading-bar')
                loader.parentNode.removeChild(loader)

                
                let allConv = response.data
               
                if(allConv[0].length < 1) displayMessage('You dont have conversations in this bot yet.','warn' )
                else
                {
                     createConversations(allConv)



                }
                if(allConv[0].length >8 )    document.querySelector('.bot-dashboard-conversations-pagination').children[2].href =  document.querySelector('.dashboard-current-url-conversation').textContent+'&'+url+'?page='+nextP
                document.querySelector('.bot-dashboard-conversations-pagination').children[0].href =  document.querySelector('.dashboard-current-url-conversation').textContent+'&'+url+'?page='+prevP
                document.querySelector('.bot-dashboard-conversations-pagination').children[1].textContent =  pageN

                 


            } ).fail( function ( response ) {
                   displayMessage('Something went worng, please try to load other bot.','error' )
            } );
    
        } );
    
    
    })( jQuery );

    
}



