// let t=  allcontent[3].replace(/\\/g, "");
// console.log(t)


function init_editor()
{


        let c = new chatBot('right')
        c.chatBubble.style.display = 'none'
        let clicked = false
        let sc

        document.querySelector('#bot-button-preview').addEventListener('click',()=>{

            if(clicked === false)
            {
                clicked = true
                document.querySelector('#bot-button-preview').style.backgroundColor = '#CA6508'
                c.chatBubble.style.display = 'block'
                c.openChat()

                sc = new scriptBot(c,msgs.all)
                c.chatHolderClearB.click()
            }
            else
            {
                clicked = false
                document.querySelector('#bot-button-preview').style.backgroundColor = '#F39136'

                c.chatBubble.style.display = 'none'
                c.closeChat()
            }

        })
            // console.log(botContent)

            // c.settings.avatarURI = botContent[2]
            // c.settings.theme = botContent[3]
            // c.settings.id = botContent[5]
            // c.settings.title = botContent[0]

            // c.setSettings()


  
    let buttonTextMessage = document.querySelector('#message_text')
    let buttonTextQuestion = document.querySelector('#question_text')
    let buttonRatingQuestion = document.querySelector('#question_rating')
    let buttonRangeQuestion = document.querySelector('#question_range')
    let buttonOptionsQuestion = document.querySelector('#question_options')
    let buttonCheckboxQuestion = document.querySelector('#question_checkbox')
    let buttonLinksMessage = document.querySelector('#message_links')
    let buttonEmailQuestion = document.querySelector('#question_email')
    let buttonPhoneQuestion = document.querySelector('#question_phone')
    let buttonNumberQuestion = document.querySelector('#question_number')
    let buttonProductsPollQuestion = document.querySelector('#question_pollproducts')
    let buttonProductsMessage = document.querySelector('#message_products')
    let buttonCartMessage = document.querySelector('#message_cart')
    let buttonThankyouMessage = document.querySelector('#message_thankyou')

    // let buttonThankyouMessage = document.querySelector('#message_thankyou')

    let messagesHolder = document.querySelector('#bot-message-content')


    // // save new project
    // let buttonSaveNew = document.querySelector('#bot-save-new-button')
    // buttonSaveNew.addEventListener('click',()=>{
    //     document.querySelector('#bot-add-new-data-form').submit()
    // })






    let msgs = new Messages(messagesHolder)

    buttonTextMessage.addEventListener('click',()=>{  msgs.addText_Message() })
    buttonTextQuestion.addEventListener('click',()=>{  msgs.addText_Question() })
    buttonRatingQuestion.addEventListener('click',()=>{  msgs.addRating_Question() })
    buttonRangeQuestion.addEventListener('click',()=>{  msgs.addRange_Question() })
    buttonOptionsQuestion.addEventListener('click',()=>{  msgs.addOptions_Question() })
    buttonCheckboxQuestion.addEventListener('click',()=>{  msgs.addCheckbox_Question() })
    buttonLinksMessage.addEventListener('click',()=>{  msgs.addLinks_Message() })
    buttonEmailQuestion.addEventListener('click',()=>{  msgs.addEmail_Question() })
    buttonPhoneQuestion.addEventListener('click',()=>{  msgs.addPhone_Question() })
    buttonNumberQuestion.addEventListener('click',()=>{  msgs.addNumber_Question() })
    buttonProductsMessage.addEventListener('click',()=>{ 
        if(!buttonProductsMessage.className.includes('bot-question-disabled'))  msgs.addProducts_Message()
     })
    buttonCartMessage.addEventListener('click',()=>{  
        if(!buttonCartMessage.className.includes('bot-question-disabled')) msgs.addCart_Message()
    })
    buttonProductsPollQuestion.addEventListener('click',()=>{  
        if(!buttonProductsPollQuestion.className.includes('bot-question-disabled')) msgs.addProductsPoll_Question()
     })
    buttonThankyouMessage.addEventListener('click',()=>{ msgs.addThankyou_Message() })


    // script

    document.addEventListener('click',()=>{
        document.querySelector('#bot-new-content').value = JSON.stringify(msgs.all).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    })

    // name
    document.querySelector('#projectName').addEventListener('input',()=>{
        document.querySelector('#bot-new-name').value = document.querySelector('#projectName').value
    })

    // color
    document.querySelector('#bot-color-theme').addEventListener('input',()=>{
        document.querySelector('#bot-new-theme').value = document.querySelector('#bot-color-theme').value
        c.settings.theme = document.querySelector('#bot-color-theme').value
        c.setSettings()

    })
    document.querySelectorAll('.box-editor-color-r').forEach(element => {
        element.addEventListener('click',()=>{
            document.querySelector('#bot-new-theme').value = window.getComputedStyle(element).backgroundColor
            c.settings.theme = window.getComputedStyle(element).backgroundColor
            c.setSettings()
        })
    });

    // pos
    document.querySelectorAll('.select-bot-position-box').forEach(s=>{
         
       s.addEventListener('click',()=>{
        document.querySelector('#bot-new-pos').value =  s.getAttribute('data-pos')
        document.querySelectorAll('.select-bot-position-box').forEach(d=>{ d.style.backgroundColor = 'transparent' })
        s.style.backgroundColor = '#f39136'
       })

    })
   

    // img

    document.querySelectorAll('.avatar-box-d').forEach(b=>{
        b.addEventListener('click',()=>{
            document.querySelectorAll('.avatar-box-d').forEach(box=>box.style.backgroundColor = '#F39136')
            b.style.backgroundColor = 'rgb(220, 217, 217)'
            document.querySelector('#bot-new-avatar').value = b.children[0].src

            c.settings.avatarURI =  document.querySelector('#bot-new-avatar').value
            c.setSettings()
        })
    })



}





window.addEventListener('DOMContentLoaded',()=>{
    if(document.body.contains(document.querySelector('#bot-dashboard-page-editor'))){
        init_editor()
    }
})

