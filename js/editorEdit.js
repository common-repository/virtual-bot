// let t=  allcontent[3].replace(/\\/g, "");
// console.log(t)


function init_editor_edit()
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
 
            c.settings.theme = document.querySelector('#bot-edit-theme').value
            c.setSettings()

            let arr = []
            arr = msgs.all
            sc = new scriptBot(c,arr)
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

    let id = document.location.href.replaceAll(document.querySelector('#bot-current-url').textContent+'&','')
    let bot = allcontent.map(o=>o.id).indexOf(id)

    document.querySelector('#bot-edit-id').value = id
    

    // set edit pro

    document.querySelector('#projectName').value = allcontent[bot].name
    document.querySelector('#bot-edit-name').value =allcontent[bot].name
    document.querySelector('#bot-edit-avatar').value = allcontent[bot].avatar
    document.querySelector('#bot-edit-theme').value = allcontent[bot].theme

    
    c.settings.theme = document.querySelector('#bot-edit-theme').value
    c.settings.avatarURI = allcontent[bot].avatar
    c.setSettings()

  
    document.querySelectorAll('.select-bot-position-box').forEach(b=>{b.style.backgroundColor = 'transparent'})

    document.querySelectorAll('.select-bot-position-box').forEach(d=>{
        document.querySelector('#bot-edit-pos').value = allcontent[bot].position
        if(allcontent[bot].position === d.getAttribute('data-pos') ) d.style.backgroundColor = '#F39136'
        // allcontent[bot].position
    })



    let botMessages = allcontent[bot].content.replaceAll(/\\/g, "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll('%*',"'")

    if(allcontent[bot].content === '') return;






    let msg = JSON.parse(botMessages)



    let msgs = new Messages(messagesHolder)


    msg.forEach(m=>{
        if(m.from === 'bot')
        {
            
            if(m.type === 'regular')
            {
                if(m.reply === false) msgs.addText_Message(m.text)
                else if(m.reply === true) msgs.addText_Question(m.text)
            }
            else if(m.type ==='rating') msgs.addRating_Question(m.text,m.ratings)
            else if(m.type ==='range') msgs.addRange_Question(m.text,m.max,m.min)
            else if(m.type ==='answer') msgs.addOptions_Question(m.text,m.answers)
            else if(m.type ==='cart') msgs.addCart_Message(m.text)
            else if(m.type ==='products') msgs.addProducts_Message(m.text,m.ids)
            else if(m.type ==='products-poll') msgs.addProductsPoll_Question(m.text,m.ids)
            else if(m.type ==='options') msgs.addCheckbox_Question(m.text,m.options)
            else if(m.type ==='email') msgs.addEmail_Question(m.text)
            else if(m.type ==='phone')  msgs.addPhone_Question(m.text)
            else if(m.type ==='number') msgs.addNumber_Question(m.text)
            else if(m.type === 'link') msgs.addLinks_Message(m.text,m.links)
            else if(m.type === 'thankyou') msgs.addThankyou_Message(m.text)


        }
    })


    c.settings.theme =document.querySelector('#bot-color-theme').value
    c.setSettings()
    

    // msgs.all =  allcontent[bot].content

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
        document.querySelector('#bot-edit-content').value = JSON.stringify(msgs.all).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    })

    // name
    document.querySelector('#projectName').addEventListener('input',()=>{
        document.querySelector('#bot-edit-name').value = document.querySelector('#projectName').value
        
    })

    // color
    document.querySelector('#bot-color-theme').addEventListener('input',()=>{
        document.querySelector('#bot-edit-theme').value = document.querySelector('#bot-color-theme').value
        c.settings.theme =document.querySelector('#bot-color-theme').value
        c.setSettings()
    })
    document.querySelectorAll('.box-editor-color-r').forEach(element => {
        element.addEventListener('click',()=>{
            document.querySelector('#bot-edit-theme').value = window.getComputedStyle(element).backgroundColor
            c.settings.theme =window.getComputedStyle(element).backgroundColor
            c.setSettings()
        })
    });

      // pos
      document.querySelectorAll('.select-bot-position-box').forEach(s=>{
         
        s.addEventListener('click',()=>{
         document.querySelector('#bot-edit-pos').value =  s.getAttribute('data-pos')
         document.querySelectorAll('.select-bot-position-box').forEach(d=>{ d.style.backgroundColor = 'transparent' })
         s.style.backgroundColor = '#f39136'
        })
 
     })

    // img

    document.querySelectorAll('.avatar-box-d').forEach(b=>{
        b.addEventListener('click',()=>{
            document.querySelectorAll('.avatar-box-d').forEach(box=>box.style.backgroundColor = '#F39136')
            b.style.backgroundColor = 'rgb(220, 217, 217)'
            document.querySelector('#bot-edit-avatar').value = b.children[0].src
            c.settings.avatarURI = b.children[0].src
            c.setSettings()
        })
    })



}





window.addEventListener('DOMContentLoaded',()=>{
    if(document.body.contains(document.querySelector('#bot-dashboard-page-editor-edit'))){
        init_editor_edit()
    }
})

