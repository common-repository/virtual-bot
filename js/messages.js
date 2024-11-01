
let urlCheckout = '';
let prodcuts = '';
let cart = '';
(function ( $ ) {
    $( document ).ready( function () {
        let data_pro = {
            action: 'get_products'
        };


        if(document.body.contains(document.querySelector('.bot-question-disabled'))) return;

        $.post( messageScript.ajaxurl, data_pro, function () {
        } ).done( function ( response ) {
            prodcuts = response
            // console.log(response)
        } ).fail( function ( response ) {
            prodcuts = 'failed'
        } );

        let data_cart = {
            action: 'get_cart_items'
        };

        $.post( messageScript.ajaxurl, data_cart, function () {
        } ).done( function ( response ) {
            cart = response
            // console.log(response)
        } ).fail( function ( response ) {
            cart = 'failed'
        } );

        let data_checkouturl = {
            action: 'get_checkouturl'
        };

        $.post( messageScript.ajaxurl, data_checkouturl, function () {
        } ).done( function ( response ) {
            urlCheckout = response
            // console.log(response)
        } ).fail( function ( response ) {
            urlCheckout = 'failed'
        } );



    } );




  

})( jQuery );




class Messages {
    constructor(holder)
    {
        this.holder = holder
        this.all = []
        this.allhtml = []

        this.symb ="%*"
      
        
    }
    
    addText_Message(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/message.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Text Message'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

      

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = theTextEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            
            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)

            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'regular',
            text:'Lorem ipsum dor amit',
            reply:false,
        }

      
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }


        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText

        }

        this.all.push(data)
        this.allhtml.push(htmlData)
    }
    addText_Question(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/text.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Text Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
          
            this.all[index].text = theTextEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent


        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'regular',
            text:'Lorem ipsum dor amit',
            reply:true,
        }

      
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addRating_Question(t,rats)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/ratings.png)'

        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Rating Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
    
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)



        let rating1Div = document.createElement('div')
        rating1Div.className = 'bot-rating-div'
        let rating1Input = document.createElement('input')
        rating1Input.type ='text'
        rating1Input.value = 'awful'
        rating1Input.addEventListener('input',()=>{
            data.ratings[0] = rating1Input.value 
        })
        let rating1Label = document.createElement('p')
        rating1Label.textContent = 'Rating - 1/5'
        rating1Div.appendChild(rating1Label)
        rating1Div.appendChild(rating1Input)
        editDivContent.appendChild(rating1Div)

        let rating2Div = document.createElement('div')
        rating2Div.className = 'bot-rating-div'
        let rating2Input = document.createElement('input')
        rating2Input.addEventListener('input',()=>{
            data.ratings[1] = rating2Input.value 
        })
        rating2Input.type ='text'
        rating2Input.value = 'bad'
        let rating2Label = document.createElement('p')
        rating2Label.textContent = 'Rating - 2/5'
        rating2Div.appendChild(rating2Label)
        rating2Div.appendChild(rating2Input)
        editDivContent.appendChild(rating2Div)

        let rating3Div = document.createElement('div')
        rating3Div.className = 'bot-rating-div'
        let rating3Input = document.createElement('input')
        rating3Input.type ='text'
        rating3Input.value = 'fine'
        rating3Input.addEventListener('input',()=>{
            data.ratings[2] = rating3Input.value 
        })
        let rating3Label = document.createElement('p')
        rating3Label.textContent = 'Rating - 3/5'
        rating3Div.appendChild(rating3Label)
        rating3Div.appendChild(rating3Input)
        editDivContent.appendChild(rating3Div)

        let rating4Div = document.createElement('div')
        rating4Div.className = 'bot-rating-div'
        let rating4Input = document.createElement('input')
        rating4Input.type ='text'
        rating4Input.value = 'good'
        rating4Input.addEventListener('input',()=>{
            data.ratings[3] = rating4Input.value 
        })
        let rating4Label = document.createElement('p')
        rating4Label.textContent = 'Rating - 4/5'
        rating4Div.appendChild(rating4Label)
        rating4Div.appendChild(rating4Input)
        editDivContent.appendChild(rating4Div)

        let rating5Div = document.createElement('div')
        rating5Div.className = 'bot-rating-div'
        let rating5Input = document.createElement('input')
        rating5Input.type ='text'
        rating5Input.value = 'excllent'
        rating5Input.addEventListener('input',()=>{
            data.ratings[4] = rating5Input.value 
        })
        let rating5Label = document.createElement('p')
        rating5Label.textContent = 'Rating - 5/5'
        rating5Div.appendChild(rating5Label)
        rating5Div.appendChild(rating5Input)
        editDivContent.appendChild(rating5Div)




        editDiv.appendChild(editDivContent)


       



        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            this.all[index].text = theTextEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      


       // data
        let data = {
            from:'bot',
            type:'rating',
            text:'Lorem ipsum dor amit',
            ratings:['awful','bad','fine','good','excllent'],
            reply:true,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(rats)
        {
            data.ratings = rats
            rating1Input.value = rats[0]
            rating2Input.value = rats[1]
            rating3Input.value = rats[2]
            rating4Input.value = rats[3]
            rating5Input.value = rats[4]

        }


        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addEmail_Question(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/email.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Email Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'email',
            text:'Lorem ipsum dor amit',
            reply:true,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addPhone_Question(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/phone.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Phone Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)

            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'phone',
            text:'Lorem ipsum dor amit',
            reply:true,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addNumber_Question(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/number.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Number Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
      
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'number',
            text:'Lorem ipsum dor amit',
            reply:true,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:false})

        this.allhtml.push(htmlData)
    }
    addRange_Question(t,max,min)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/range.png)'

        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Range Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
    
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)



        let maxDiv = document.createElement('div')
        maxDiv.className = 'bot-rating-div'
        let maxInput = document.createElement('input')
        maxInput.type ='number'
        maxInput.value =100
        maxInput.addEventListener('input',()=>{
            data.max = parseFloat(maxInput.value )
        })
        let maxLabel = document.createElement('p')
        maxLabel.textContent = 'Max'
        maxDiv.appendChild(maxLabel)
        maxDiv.appendChild(maxInput)
        editDivContent.appendChild(maxDiv)

        let minDiv = document.createElement('div')
        minDiv.className = 'bot-rating-div'
        let minInput = document.createElement('input')
        minInput.addEventListener('input',()=>{
            data.min = parseFloat(minInput.value )
        })
        minInput.type ='number'
        minInput.value = 0
        let minLabel = document.createElement('p')
        minLabel.textContent = 'Min'
        minDiv.appendChild(minLabel)
        minDiv.appendChild(minInput)
        editDivContent.appendChild(minDiv)


      




        editDiv.appendChild(editDivContent)





        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'range',
            text:'Lorem ipsum dor amit',
            max:100,
            min:0,
            reply:true,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(max) {
            maxInput.value = max
            data.max = max
        }
        if(min) {
            minInput.value = min
            data.min = min
        }
        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addOptions_Question(t,opts)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/options.png)'

        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Options Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
    
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)



      
        let addOptionDiv = document.createElement('div')
        addOptionDiv.className = 'bot-option-div'
    
        let addOptionLabel = document.createElement('p')
        addOptionLabel.style.cssText= 'font-size:1.25em;color:#fff;background:#F39136;padding:10px 50px;border-radius:5px;'
        addOptionLabel.textContent = '+'
        addOptionDiv.appendChild(addOptionLabel)
        editDivContent.appendChild(addOptionDiv)

        addOptionLabel.addEventListener('click',()=>{ addOption() })


        let answersHTML = []

        function addOption(n)
        {

            let addNewDiv = document.createElement('div')
            addNewDiv.className = 'bot-option-div'
            let addNewInput = document.createElement('input')
            addNewInput.type ='type'
            addNewInput.value ='option '+ data.answers.length
            if(n) addNewInput.value = n
        
            let addNewLabel = document.createElement('p')
            addNewLabel.textContent = 'Option ' + data.answers.length
           
            editDivContent.appendChild(addNewDiv)

            let addNewDelete = document.createElement('p')
            addNewDelete.textContent = '×'
            addNewDelete.style.cssText = 'display:flex;align-items:center;justify-content:center;width:17.5px;height:17.5px;border-radius:100%;background:red;color:#fff;user-select:none;cursor:pointer;'
            
            addNewDiv.appendChild(addNewDelete)
            addNewDiv.appendChild(addNewLabel)
            addNewDiv.appendChild(addNewInput)

            addNewDelete.addEventListener('click',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                answersHTML.splice(i,1)
                data.answers.splice(i,1)
                editDivContent.removeChild(addNewDiv)

                answersHTML.forEach((e,ind)=>{
                    e.label.textContent = 'option '+ind
                })

            })

            addNewInput.addEventListener('input',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                data.answers[i] =  addNewInput.value
            })
            

            answersHTML.push({input:addNewInput,label:addNewLabel,div:addNewDiv})
            if(n) data.answers.push(n)
            else data.answers.push('option -'+ data.answers.length)

            answersHTML.forEach((e,ind)=>{
                e.label.textContent = 'option '+ind
            })
        }


        setTimeout(() => {
            if(!opts) addOption()
        }, 10);

      



        editDiv.appendChild(editDivContent)





        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'answer',
            answers:[],
            text:'Lorem ipsum dor amit',
            reply:true,
        }


      
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(opts){
            opts.forEach(o=>{
                addOption(o)
            })
        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addCheckbox_Question(t,checks)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/checkbox.png)'

        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Checkbox Question'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
    
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)



      
        let addOptionDiv = document.createElement('div')
        addOptionDiv.className = 'bot-option-div'
    
        let addOptionLabel = document.createElement('p')
        addOptionLabel.style.cssText= 'font-size:1.25em;color:#fff;background:#F39136;padding:10px 50px;border-radius:5px;'
        addOptionLabel.textContent = '+'
        addOptionDiv.appendChild(addOptionLabel)
        editDivContent.appendChild(addOptionDiv)

        addOptionLabel.addEventListener('click',()=>{ addOption() })


        let answersHTML = []

        function addOption(n)
        {

            let addNewDiv = document.createElement('div')
            addNewDiv.className = 'bot-option-div'
            let addNewInput = document.createElement('input')
            addNewInput.type ='type'
            addNewInput.value ='option '+ data.options.length
            if(n) addNewInput.value  = n
        
            let addNewLabel = document.createElement('p')
            addNewLabel.textContent = 'Option ' + data.options.length
           
            editDivContent.appendChild(addNewDiv)

            let addNewDelete = document.createElement('p')
            addNewDelete.textContent = '×'
            addNewDelete.style.cssText = 'display:flex;align-items:center;justify-content:center;width:17.5px;height:17.5px;border-radius:100%;background:red;color:#fff;user-select:none;cursor:pointer;'
            
            addNewDiv.appendChild(addNewDelete)
            addNewDiv.appendChild(addNewLabel)
            addNewDiv.appendChild(addNewInput)

            addNewDelete.addEventListener('click',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                answersHTML.splice(i,1)
                data.options.splice(i,1)
                editDivContent.removeChild(addNewDiv)

                answersHTML.forEach((e,ind)=>{
                    e.label.textContent = 'option '+ind
                })

            })

            addNewInput.addEventListener('input',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                data.options[i] =  addNewInput.value
            })
            

            answersHTML.push({input:addNewInput,label:addNewLabel,div:addNewDiv})
            if(n) data.options.push(n)
            else data.options.push('option -'+ data.options.length)

            answersHTML.forEach((e,ind)=>{
                e.label.textContent = 'option '+ind
            })
        }


        setTimeout(() => {
           if(!checks) addOption()
        }, 10);

      



        editDiv.appendChild(editDivContent)


     


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(this.allhtml[index].replayDiv)) this.holder.removeChild(this.allhtml[index].replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'options',
            options:[],
            text:'Lorem ipsum dor amit',
            reply:true,
        }
      
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(checks)
        {
            checks.forEach(c=>{
                addOption(c)
            })
        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
            replayDiv:replayDiv

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})

        this.allhtml.push(htmlData)
    }
    addLinks_Message(t,links)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/link.png)'

        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Links Messsage'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
    
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)



      
        let addOptionDiv = document.createElement('div')
        addOptionDiv.className = 'bot-option-div'
    
        let addOptionLabel = document.createElement('p')
        addOptionLabel.style.cssText= 'font-size:1.25em;color:#fff;background:#F39136;padding:10px 50px;border-radius:5px;'
        addOptionLabel.textContent = '+'
        addOptionDiv.appendChild(addOptionLabel)
        editDivContent.appendChild(addOptionDiv)

        addOptionLabel.addEventListener('click',()=>{ addOption() })


        let answersHTML = []

        function addOption(n)
        {

            let addNewDiv = document.createElement('div')
            addNewDiv.className = 'bot-link-div'
            let labelInput = document.createElement('input')
            labelInput.type ='text'
            labelInput.value = 'google'
            if(n) labelInput.value = n.title
    
        
            let addNewLabel = document.createElement('p')
            addNewLabel.textContent = 'Label'

            let linkLabel = document.createElement('p')
            linkLabel.textContent = 'Href'
            let linkInput = document.createElement('input')
            linkInput.type ='text'
            linkInput.value = 'https://www.google.com'
            if(n) linkInput.value = n.href

            editDivContent.appendChild(addNewDiv)

            let addNewDelete = document.createElement('p')
            addNewDelete.textContent = '×'
            addNewDelete.style.cssText = 'display:flex;align-items:center;justify-content:center;width:17.5px;height:17.5px;border-radius:100%;background:red;color:#fff;user-select:none;cursor:pointer;'
            
            addNewDiv.appendChild(addNewDelete)
            addNewDiv.appendChild(addNewLabel)
            addNewDiv.appendChild(labelInput)
            addNewDiv.appendChild(linkLabel)
            addNewDiv.appendChild(linkInput)

            addNewDelete.addEventListener('click',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                answersHTML.splice(i,1)
                data.links.splice(i,1)
                editDivContent.removeChild(addNewDiv)

              

            })

            labelInput.addEventListener('input',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                data.links[i].title =  labelInput.value
            })
            linkInput.addEventListener('input',()=>{
                let i = answersHTML.map(o=>o.div).indexOf(addNewDiv)
                data.links[i].href =  linkInput.value
            })
            

            answersHTML.push({input:labelInput,label:addNewLabel,div:addNewDiv,inputHref:linkInput})
            if(n) data.links.push({href:n.href,title:n.title})
            else data.links.push({href:"https://www.google.com",title:'google'})


            answersHTML.forEach((e,ind)=>{
                e.label.textContent = 'option '+ind
            })
        }


        setTimeout(() => {
           if(!links) addOption()
        }, 10);

      



        editDiv.appendChild(editDivContent)

        


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            replayDiv.style.opacity = 0

            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)

            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'link',
            links:[],
            text:'Lorem ipsum dor amit',
            reply:false,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(links)
        {
            links.forEach(l=>{

                addOption(l)
            })
        }
        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText,
        }

        this.all.push(data)

        this.allhtml.push(htmlData)
    }
    addCart_Message(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/cart.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Text Message'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
          
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            
            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)

            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'cart',
            text:'Lorem ipsum dor amit',
            reply:false,
        }
    
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText

        }

        this.all.push(data)
        this.allhtml.push(htmlData)
    }
    addProducts_Message(t,ids)
    {
        
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/products.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Products Message'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)

        let editDivContentProductsTitle = document.createElement('h4')
        editDivContentProductsTitle.textContent = 'Select Products'
        editDivContentProductsTitle.className = 'editor-bot-edit-div-content-title-sm'
        editDivContent.appendChild(editDivContentProductsTitle)

        let editDivContentRowProducts = document.createElement('div')
        editDivContentRowProducts.className = 'editor-bot-edit-div-products-row'

       

          
      let int =   setInterval(() => {

        if(Array.isArray(prodcuts.data))
        {
            prodcuts.data.forEach(pro=>{
                let proDiv = document.createElement('div')
                proDiv.className = 'editor-bot-product-box'
                proDiv.setAttribute('data-pro-id',pro.id)

                let proTitle = document.createElement('p')
                proTitle.textContent = pro.title
                let proIMG = document.createElement('img')
                proIMG.src = pro.img_url
                proDiv.appendChild(proIMG)
                proDiv.appendChild(proTitle)


               if(ids)
               {
                ids.forEach(i=>{
                    if(pro.id === i) proDiv.style.backgroundColor = '#b2b1b1'
                })
               }


                let selected = false

                proDiv.addEventListener('click',()=>{
                    if(selected === false)
                    {
                        selected = true
                        data.ids.push(pro.id)
                        proDiv.style.backgroundColor = '#b2b1b1'
                    }
                    else{
                        selected = false
                        let indexed = data.ids.indexOf(pro.id)
                        data.ids.splice(indexed,1)
                        proDiv.style.backgroundColor = 'transparent'

                    }
                })

                editDivContentRowProducts.appendChild(proDiv)
            })

            clearInterval(int)

        }
        else if(prodcuts === 'failed') {
            clearInterval(int)
            return;
        }
      
       
        
      }, 100);



        editDivContent.appendChild(editDivContentRowProducts)



        editDiv.appendChild(editDivContent)
       
        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
          
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            
            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)

            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'products',
            text:'Lorem ipsum dor amit',
            ids:[],
            reply:false,
        }
     
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(ids)
        {

           data.ids = ids

        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText

        }

        this.all.push(data)
        this.allhtml.push(htmlData)
    }
    addProductsPoll_Question(t,ids)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/poll.png)'


        let replayDiv = document.createElement('div')
        replayDiv.className = 'editor-bot-message-replay-div'
        replayDiv.textContent = 'User reply'

        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)
        this.holder.appendChild(replayDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Products Poll Message'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)

        let editDivContentProductsTitle = document.createElement('h4')
        editDivContentProductsTitle.textContent = 'Select Products'
        editDivContentProductsTitle.className = 'editor-bot-edit-div-content-title-sm'
        editDivContent.appendChild(editDivContentProductsTitle)

        let editDivContentRowProducts = document.createElement('div')
        editDivContentRowProducts.className = 'editor-bot-edit-div-products-row'

      
       
        let ind = setInterval(() => {
            
            if(Array.isArray(prodcuts.data))
            {
                clearInterval(ind)

    
                prodcuts.data.forEach(pro=>{
                    let proDiv = document.createElement('div')
                    proDiv.className = 'editor-bot-product-box'
                    proDiv.setAttribute('data-pro-id',pro.id)
    
                    let proTitle = document.createElement('p')
                    proTitle.textContent = pro.title
                    let proIMG = document.createElement('img')
                    proIMG.src = pro.img_url
                    proDiv.appendChild(proIMG)
                    proDiv.appendChild(proTitle)
    
    
                    if(ids)
                    {
                     ids.forEach(i=>{
                         if(pro.id === i) proDiv.style.backgroundColor = '#b2b1b1'
                     })
                    }
                    let selected = false

    
                    proDiv.addEventListener('click',()=>{
                        if(selected === false)
                        {
                            selected = true
                            data.ids.push(pro.id)
                            proDiv.style.backgroundColor = '#b2b1b1'
                        }
                        else{
                            selected = false
                            let indexed = data.ids.indexOf(pro.id)
                            data.ids.splice(indexed,1)
                            proDiv.style.backgroundColor = 'transparent'
    
                        }
                    })


                    if(ids) 
                    {
                        let indx = ids.indexOf(pro.id)
                        if(indx >-1) {
                            selected = true
                            proDiv.style.backgroundColor = '#b2b1b1'

                            
                        }
                    }
    
                    editDivContentRowProducts.appendChild(proDiv)
                })
            }
            else if(prodcuts === 'failed')
            {
                clearInterval(ind)
            }
        }, 100);
       



        editDivContent.appendChild(editDivContentRowProducts)



        editDiv.appendChild(editDivContent)
       
        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            
            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)
            if(document.body.contains(replayDiv)) replayDiv.parentNode.removeChild(replayDiv)

            this.all.splice(index+1,1)
            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'products-poll',
            text:'Lorem ipsum dor amit',
            ids:[],
            reply:false,
        }
    
        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }
        if(ids)
        {

           data.ids = ids

        }

        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText

        }

        this.all.push(data)
        this.all.push({from:'user',auto:true})
        this.allhtml.push(htmlData)
    }
    addThankyou_Message(t)
    {
        

        // message div
        let messageDiv = document.createElement('div')
        messageDiv.className = 'editor-bot-message-div'

        let messageIcon = document.createElement('div')
        messageIcon.className = 'editor-bot-message-icon'
        messageIcon.style.backgroundImage = 'url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/thankyou.png)'


        let messageShortText = document.createElement('p')
        messageShortText.textContent = 'Lorem ipsum dor amit'

        let messageMenu = document.createElement('div')
        messageMenu.className = 'editor-bot-message-menu'

        let messageMenuEdit = document.createElement('div')
        let messageMenuDelete = document.createElement('div')
        messageMenuEdit.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/edit.png);'
        messageMenuDelete.style.cssText = 'cursor:pointer;width:22.5px;height:22.5px;background-size:contain;background-repeat:no-repeat;background-image:url('+document.querySelector('#plugin_url_bot').textContent+'/imgs/delete.png);'


        messageMenu.appendChild(messageMenuEdit)
        messageMenu.appendChild(messageMenuDelete)

        messageDiv.appendChild(messageIcon)
        messageDiv.appendChild(messageShortText)
        messageDiv.appendChild(messageMenu)
        this.holder.appendChild(messageDiv)


        // edit div

        let editDiv = document.createElement('div')
        editDiv.className = 'editor-bot-edit-div'
        let editDivContent = document.createElement('div')
        editDivContent.className ='editor-bot-edit-div-content'


        let editDivContentClose = document.createElement('p')
        editDivContentClose.textContent = '×'
        editDivContentClose.className = 'editor-bot-edit-div-content-close'
        let editDivContentTitle = document.createElement('h4')
        editDivContentTitle.textContent = 'Thankyou Message'
        editDivContentTitle.className = 'editor-bot-edit-div-content-title'
        let editDivContentMessageDiv = document.createElement('div')
        editDivContentMessageDiv.className = 'editor-bot-edit-div-content-message-div'

        let theTextEditor = new TextEditor(editDivContentMessageDiv)
        theTextEditor.init()

        editDivContent.appendChild(editDivContentClose)
        editDivContent.appendChild(editDivContentTitle)
        editDivContent.appendChild(editDivContentMessageDiv)


        editDiv.appendChild(editDivContent)


        // events 
        // open edit div
        messageMenuEdit.addEventListener('click',()=>{
             document.body.appendChild(editDiv)
            
             setTimeout(() => {
                editDivContent.style.right = '0%'
             }, 1);

        })

        // close edit div
        editDivContentClose.addEventListener('click',()=>{
            editDivContent.style.right = '-45%'
            setTimeout(() => {
                document.body.removeChild(editDiv)
            }, 400);

            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)
            data.text = this.allhtml[index].textEditor.editorContent.innerHTML.replaceAll('"',this.symb).replaceAll("'",this.symb)
            this.allhtml[index].messageLabel.textContent = theTextEditor.editorContent.textContent

        })

        // delete message 
        messageMenuDelete.addEventListener('click',()=>{

            messageDiv.style.opacity = 0
            
            setTimeout(() => {
            let index = this.allhtml.map(o=>o.messageDiv).indexOf(messageDiv)

            if(document.body.contains(this.allhtml[index].editDiv)) document.body.removeChild(this.allhtml[index].editDiv)
            if(document.body.contains(this.allhtml[index].messageDiv)) this.holder.removeChild(this.allhtml[index].messageDiv)

            this.all.splice(index,1)
            this.allhtml.splice(index,1)
            }, 250);

        })

      






       // data
        let data = {
            from:'bot',
            type:'thankyou',
            text:'Lorem ipsum dor amit',
            reply:false,
        }

        if(t)
        {
            data.text = t
            theTextEditor.editorContent.innerHTML = t
            messageShortText.textContent = theTextEditor.editorContent.textContent
        }


        let htmlData = {
            textEditor:theTextEditor,
            editDiv:editDiv,
            messageDiv:messageDiv,
            messageLabel:messageShortText

        }

        this.all.push(data)
        this.allhtml.push(htmlData)
    }


}