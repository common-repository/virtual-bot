class chatBotRange {
    constructor(div,max,min)
    {

        this.div = div
        this.max = max
        this.min = min
        this.value = this.min


        this.label = document.createElement('p')
        this.label.textContent  = this.value
        this.label.className = 'chatbot-range-label'

        this.input = document.createElement('input')
        this.input.type = 'range'
        this.input.max = this.max
        this.input.min = this.min

        this.inputHolder = document.createElement('div')
        this.inputHolder.className = 'chatbot-range-holder'
        this.inputBG = document.createElement('div')
        this.inputBG.className = 'chatbot-range-bg'

        this.inputHolder.appendChild(this.input)
        this.inputHolder.appendChild(this.inputBG)

        this.div.appendChild(this.label)
        this.div.appendChild(this.inputHolder)

        this.input.addEventListener('input',()=>{

            this.value = this.input.value
            this.label.textContent = this.value

            this.inputBG.style.left= -(100 - ((this.value/this.max) * 100)) +'%'
        })

    }
}
class chatBotCheckBox{
    constructor(div,options)
    {

        this.div = div
        this.options = options

       
        this.all = []



        this.options.forEach(option=>{

            let opt = document.createElement('div')
            opt.className = 'chatbot-options-option'
            let span = document.createElement('span')
            let optionLabel = document.createElement('p')
            optionLabel.textContent = option

            opt.appendChild(span)
            opt.appendChild(optionLabel)

            let clicked = false
            opt.addEventListener('click',()=>{
                if(clicked === false)
                {
                    clicked = true
                    span.style.background = '#000'
                    this.all.push(option)
                }
                else {
                    clicked = false
                    span.style.background = 'transparent'
                    let index = this.all.indexOf(option)
                    this.all.splice(index,1)
                }
            })
 

            this.div.appendChild(opt)
        })

    }
    getValue()
    {
        return this.all.join(',')
    }
}




class chatBot {
    constructor(direction)
    {
        this.isMobile = window.matchMedia('(max-width: 767px)');

        this.direction = direction

        this.scriptEngine = null


        this.sign = 'created by Pixliy'
        this.signHTML = document.createElement('span')
        this.signHTML.textContent =this.sign
        this.signHTML.style.cssText = 'display:block;color:#000;opacity:1;background:transparent;background-color:transparent;background-image:none;user-select:none;    position: absolute;width: 100%;text-align: center;bottom: .5%;z-index: 100000000;font-size: .7em;'

        this.initBot()
        this.setStyles()


        // this.openChat()


        this.chat = []
        this.validation = ''

        this.settings = {
            avatarURI:'',
            theme:'#e7a31a',
            id:'',
            title:''
        }


        this.symb ="%*"



     


        // this.botPhoneMessage('visible','<h4>hello world.. </h4>  <img src="https://media.giphy.com/media/P0PLKW4rIqCVxa5LJy/giphy.gif" style="width:245px;height:280px;">  ')

      
        
    }
    setSettings()
    {
        if(this.settings.avatarURI !== '') 
        {
            this.chatBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'
        }
        this.chatBubble.style.backgroundColor =  this.settings.theme
    }




    // bot messages
    //1. regular
    botRegularMessage(on,text,baropen)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'  
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:4% 0;margin-bottom:5.5%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(baropen === true)
            {
                this.chatDiv.style.height = '89%'
                this.chatInputDiv.style.height = '11%'
                this.chatInputDiv.style.visibility = 'visible'
            }
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(document.body.contains(document.querySelector('.chatbot-worng-msg'))) this.chatInputDiv.removeChild( document.querySelector('.chatbot-worng-msg') )


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text



        let message = {
            type:'regular',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //2. answers
    botAnswerMessage(on,text,answers,jump,jumps)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgAnswerBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')
        

       
        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgAnswerBubble.style.cssText = 'width:100%;height:auto;'
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           

        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

           let id =  this.chat.indexOf(message)
           this.chat[id].done = true

        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)


        // answers
        answers.forEach(answer=>{
            let answerDiv = document.createElement('div')
            answerDiv.className = 'bot-answer-div chatbot-options-option'
            let answerText = document.createElement('p')
            let answerSpan = document.createElement('span')

     
            answerText.textContent = answer
            answerDiv.appendChild(answerSpan)
            answerDiv.appendChild(answerText)

            answerDiv.addEventListener('mouseover',()=>{ answerSpan.style.background = '#3c398c' })
            answerDiv.addEventListener('mouseleave',()=>{ answerSpan.style.background = 'transparent'  })
            answerDiv.addEventListener('click',()=>{ 
              
               
                 
                if(jump)
                {

                    let index = jumps.map(o=>o.name).indexOf(answer)

                    this.userRegularMessage(answer,jumps[index].id)
                    msgAnswerBubble.textContent = ''

                }
                else {
                    this.userRegularMessage(answer)
                    msgAnswerBubble.textContent = ''
                }
                 
            
             })


            msgAnswerBubble.appendChild(answerDiv)


        })

        msgBubble.appendChild(msgAnswerBubble)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text

        let message = {
            type:'answer',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on,
            done:false
        }

        this.chat.push(message)
        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //3. links
    botLinksMessage(on,text,links,baropen)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLinkBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')
        

       
        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgLinkBubble.style.cssText = 'width:100%;height:auto;'
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           

        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(baropen === true)
            {
                this.chatDiv.style.height = '89%'
                this.chatInputDiv.style.height = '11%'
                this.chatInputDiv.style.visibility = 'visible'
                this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            }

            if(document.body.contains(document.querySelector('.chatbot-worng-msg'))) this.chatInputDiv.removeChild( document.querySelector('.chatbot-worng-msg') )



            let id =  this.chat.indexOf(message)
            this.chat[id].done = true

        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)


        // links
        links.forEach(link=>{
            let linkDiv = document.createElement('a')
            linkDiv.href = link.href
            linkDiv.textContent = link.title
            linkDiv.target = '_blank'

            linkDiv.style.cssText = 'position:relative;text-decoration:none;user-select:none;width:max-content;margin: 4.5% 0px;background: rgb(0, 0, 0);color:#fff;padding: 0px 25px;height: 35px;border-radius: 50px;display: flex;align-items: center;justify-content:flex-start;border: 1px solid #000;'

            msgLinkBubble.appendChild(linkDiv)


        })

        msgBubble.appendChild(msgLinkBubble)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text

        let message = {
            type:'link',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on,
            links:links,
            done:false
        }

        this.chat.push(message)
        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //4. rating
    botRatingMessage(on,text,ratings)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgRating = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgRating.style.cssText = 'width:200px;height:40px;display:flex;align-items:center;justify-content:space-evenly;'
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'        
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           

        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            let id =  this.chat.indexOf(message)
            this.chat[id].done = true
        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgBubble.appendChild(msgRating)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)


        // ratings
        ratings.forEach((r,i)=>{
            let ratingDiv = document.createElement('div')
            let ratingIcon = document.createElement('div')
           
            ratingDiv.style.cssText = 'transition:.25s linear;border-radius:100%;width:29.5px;height:29.5px;display:flex;flex-wrap:wrap;justify-content:center;'
            ratingIcon.style.cssText = 'width:29.5px;height:29.5px;background-size:cover;background-repeat:no-repeat;'
            ratingIcon.className = 'rating-icon-'+i

            ratingDiv.appendChild(ratingIcon)

            ratingDiv.addEventListener('mouseover',()=>{
                ratingDiv.style.backgroundColor = '#778aea'
            })
            ratingDiv.addEventListener('mouseleave',()=>{
                ratingDiv.style.backgroundColor = 'transparent'
            })

            ratingDiv.addEventListener('click',()=>{
                this.userRegularMessage(r)
                msgBubble.removeChild(msgRating)

            })


            msgRating.appendChild(ratingDiv)
        })


        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text

        let message = {
            type:'rating',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on,
            done:false
        }

        this.chat.push(message)
        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //5. range
    botRangeMessage(on,text,max,min)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgRating = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('div')
        let msgDate = new Date()
        // styles
        msgRating.style.cssText = 'width:100%;height:40px;display:flex;align-items:center;justify-content:space-evenly;'
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'        
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           

        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
            this.validation = ''

            let id =  this.chat.indexOf(message)
            this.chat[id].done = true
        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)


        // range

        let rangeHolder = document.createElement('div')
        let confirmRangeB = document.createElement('div')
        confirmRangeB.textContent = 'Confirm'
        rangeHolder.style.cssText = 'width:190px;position:relative;margin:0 auto;'
        confirmRangeB.style.cssText = 'border-radius:15px;position:relative;margin:5% auto;width:100px;height:32px;background:#000;color:white;user-select:none;display:flex;align-items:center;justify-content:center;'
        let range = new chatBotRange(rangeHolder,max,min)
        rangeHolder.appendChild(confirmRangeB)
        msgBubble.appendChild(rangeHolder)

        confirmRangeB.addEventListener('click',()=>{
            msgBubble.removeChild(rangeHolder)
            this.userRegularMessage(range.value)
        })
        


        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text

        let message = {
            type:'rating',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on,
            done:false
        }

        this.chat.push(message)
        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //6. email
    botEmailMessage(on,text)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'    
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
    
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            // open bar
            this.validation = 'email'
            this.chatDiv.style.height = '89%'
            this.chatInputDiv.style.height = '11%'
            this.chatInputDiv.style.visibility = 'visible'
          
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text



        let message = {
            type:'regular',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //7. phone
    botPhoneMessage(on,text)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'        
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           

        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            // open bar
            this.validation = 'phone'
            this.chatDiv.style.height = '89%'
            this.chatInputDiv.style.height = '11%'
            this.chatInputDiv.style.visibility = 'visible'
          
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text



        let message = {
            type:'regular',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //8. number
    botNumberMessage(on,text)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'       
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
 
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            // open bar
            this.validation = 'number'
            this.chatDiv.style.height = '89%'
            this.chatInputDiv.style.height = '11%'
            this.chatInputDiv.style.visibility = 'visible'
          
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text



        let message = {
            type:'regular',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    //9. checkbox
    botCheckboxMessage(on,text,options)
      {
          this.validation = ''
  
          let msgDiv = document.createElement('div')
          let avatarBubble = document.createElement('div')
          let msgBubble = document.createElement('div')
          let msgRating = document.createElement('div')
          let msgLoadBubble = document.createElement('div')
          let loadBubble = document.createElement('div')
          let loadBubble1 = document.createElement('div')
          let loadBubble2 = document.createElement('div')
  
          let msgText = document.createElement('div')
          let msgDate = new Date()
          // styles
          msgRating.style.cssText = 'width:100%;height:40px;display:flex;align-items:center;justify-content:space-evenly;'
          msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
          avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
          avatarBubble.className = 'bot-avatar-bubble'  
          if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
        
          msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
          msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
          loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
          loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
          loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
          // load animation
          loadBubble.style.background = '#000'
          setTimeout(() => {
              loadBubble.style.background = '#b7b4ae'
              loadBubble1.style.background = '#000'
          }, 250);
          setTimeout(() => {
              loadBubble1.style.background = '#b7b4ae'
              loadBubble2.style.background = '#000'
          }, 500);
          setTimeout(() => {
              loadBubble2.style.background = '#b7b4ae'
              loadBubble.style.background = '#000'
          }, 750);
          setTimeout(() => {
              loadBubble.style.background = '#b7b4ae'
              loadBubble1.style.background = '#000'
          }, 1000);
          setTimeout(() => {
              loadBubble1.style.background = '#b7b4ae'
              loadBubble2.style.background = '#000'
          }, 1250);
          setTimeout(() => {
              loadBubble2.style.background = '#b7b4ae'
              loadBubble.style.background = '#000'
          }, 1500);
          setTimeout(() => {
              loadBubble.style.background = '#b7b4ae'
              msgDiv.removeChild(msgLoadBubble)
              msgDiv.appendChild(msgBubble)
              this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
  
              let id =  this.chat.indexOf(message)
              this.chat[id].done = true
          }, 1750);
  
          msgLoadBubble.appendChild(loadBubble)
          msgLoadBubble.appendChild(loadBubble1)
          msgLoadBubble.appendChild(loadBubble2)
  
          msgBubble.appendChild(msgText)
          msgDiv.appendChild(avatarBubble)
          msgDiv.appendChild(msgLoadBubble)
  
  
          // checkbox
  
          let checkboxHolder = document.createElement('div')
          let confirmCheckboxB = document.createElement('div')
              confirmCheckboxB.textContent = 'Confirm'
              checkboxHolder.style.cssText = 'width:150px;position:relative;margin:0 auto;display:grid;justify-content:center;justify-items: center;'
              confirmCheckboxB.style.cssText = 'border-radius:15px;position:relative;margin:5% auto;width:100px;height:32px;background:#000;color:white;user-select:none;display:flex;align-items:center;justify-content:center;'
              let checkbox = new chatBotCheckBox(checkboxHolder,options)
              checkboxHolder.appendChild(confirmCheckboxB)
              msgBubble.appendChild(checkboxHolder)
  
            confirmCheckboxB.addEventListener('click',()=>{
                msgBubble.removeChild(checkboxHolder)
                this.userRegularMessage(checkbox.getValue())
            })
          
  
  
          this.chatDiv.appendChild(msgDiv)
  
  
  
          msgText.innerHTML = text
  
          let message = {
              type:'rating',
              from:'bot',
              content:text,
              date:msgDate,
              avatar:on,
              done:false
          }
  
          this.chat.push(message)
          
          this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
          setTimeout(() => {
              this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
          }, 10);
  
    }
    // 10. products
    botProductsMessage(on,text,ids)
    {

        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'  
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

          
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(document.body.contains(document.querySelector('.chatbot-worng-msg'))) this.chatInputDiv.removeChild( document.querySelector('.chatbot-worng-msg') )


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)



        this.chatDiv.appendChild(msgDiv)


        let productsDiv = document.createElement('div')
        productsDiv.className = 'bot-products-div'

        let check = setInterval(() => {
            if(prodcuts.success === true ) 
            {
                addProducts(this.settings.theme)
            
                clearInterval(check)
            }
            else if(prodcuts === 'failed') clearInterval(check)
        }, 100);

        function addProducts(color)
        {

            prodcuts.data.forEach(p=>{
                let index = ids.indexOf(p.id)
                if(index > -1)
                {
                    let singleProductDiv =  document.createElement('div')
                    singleProductDiv.className = 'bot-single-product-box'
                    let singleProductTitle =  document.createElement('p')
                    singleProductTitle.textContent = p.title
                    let singleProductPrice =  document.createElement('p')
                    singleProductPrice.textContent = p.price
                    singleProductPrice.className = 'bot-single-product-price'
                    let singleProductImage =  document.createElement('img')
                    singleProductImage.src = p.img_url
                    let singleProductBtc =  document.createElement('a')
                    singleProductBtc.href = p.url
                    singleProductBtc.target = '_blank'
                    
                    singleProductBtc.className = 'bot-single-product-btc'
                    singleProductBtc.style.backgroundColor = color
                    singleProductBtc.textContent = 'View'

                    singleProductDiv.appendChild(singleProductImage)
                    singleProductDiv.appendChild(singleProductTitle)
                    singleProductDiv.appendChild(singleProductPrice)
                    singleProductDiv.appendChild(singleProductBtc)


                    productsDiv.appendChild(singleProductDiv)


                }
            })
            
        }

        msgBubble.appendChild(productsDiv)



        msgText.innerHTML = text



        let message = {
            type:'products',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
    // 11. cart
    botCartMessage(on,text)
    {
        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'  
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(document.body.contains(document.querySelector('.chatbot-worng-msg'))) this.chatInputDiv.removeChild( document.querySelector('.chatbot-worng-msg') )


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)


        let cartDiv = document.createElement('div')
        cartDiv.className = 'bot-products-div'


        let cartInt = setInterval(() => {

            if(cart.success === true && urlCheckout.success === true && prodcuts.success  === true )
            {

               
                 createCart()
                 cartBtc.href = urlCheckout.data
                clearInterval(cartInt)
            }
            else if(cart === 'failed') clearInterval(cartInt)
            
        }, 100);


        function createCart(){
            for (const key in cart.data) {
                if (Object.hasOwnProperty.call(cart.data, key)) {
                    const element = cart.data[key];
                    
                    prodcuts.data.forEach(p=>{
                        if(p.id === element.product_id)
                        {

                            let cartProductDiv = document.createElement('div')

                            cartProductDiv.className = 'bot-cart-product-box'

                            let cartProductDivImage = document.createElement('img')
                            cartProductDivImage.src = p.img_url
                            let cartProductDivHalf =document.createElement('div')
                            cartProductDivHalf.className = 'bot-cart-product-box-half'
                            let cartProductDivTitle = document.createElement('p')
                            let cartProductDivQuantity = document.createElement('p')
                            cartProductDivTitle.textContent = p.title
                            cartProductDivQuantity.textContent ='Quantity : '+ element.quantity


                            cartProductDiv.appendChild(cartProductDivImage)
                            cartProductDiv.appendChild(cartProductDivHalf)
                            cartProductDivHalf.appendChild(cartProductDivTitle)
                            cartProductDivHalf.appendChild(cartProductDivQuantity)

                            cartContent.appendChild(cartProductDiv)
                            

                        }
                    })
                }
             }
        }

        let cartContent = document.createElement('div')
        cartContent.className = 'bot-cart-content'
        let cartBtc = document.createElement('a')
        cartBtc.target = '_blank'
        cartBtc.className = 'bot-cart-btc'
        cartBtc.textContent = 'Checkout'
        cartBtc.style.backgroundColor = this.settings.theme


        cartDiv.appendChild(cartContent)
        cartDiv.appendChild(cartBtc)

        msgBubble.appendChild(cartDiv)

        this.chatDiv.appendChild(msgDiv)



        msgText.innerHTML = text



        let message = {
            type:'cart',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
   // 12. products poll
    botProductsPollQuestion(on,text,ids)
    {

        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'  
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

          
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(document.body.contains(document.querySelector('.chatbot-worng-msg'))) this.chatInputDiv.removeChild( document.querySelector('.chatbot-worng-msg') )


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)



        this.chatDiv.appendChild(msgDiv)


        let productsDiv = document.createElement('div')
        productsDiv.className = 'bot-products-div'

        let check = setInterval(() => {
            if(prodcuts.success === true ) 
            {
                prodcuts.data.forEach(p=>{
                    let index = ids.indexOf(p.id)
                    if(index > -1)
                    {
                        let singleProductDiv =  document.createElement('div')
                        singleProductDiv.className = 'bot-single-product-box-select'
                        let singleProductTitle =  document.createElement('p')
                        singleProductTitle.textContent = p.title
                        let singleProductImage =  document.createElement('img')
                        singleProductImage.src = p.img_url
                  
    
    
                        singleProductDiv.addEventListener('click',()=>{
                            this.userRegularMessage(p.title)
    
                            msgBubble.removeChild(productsDiv)
    
                        })
                   
    
                        singleProductDiv.appendChild(singleProductImage)
                        singleProductDiv.appendChild(singleProductTitle)
    
                        productsDiv.appendChild(singleProductDiv)
    
    
                    }
                })
            
                clearInterval(check)
            }
            else if(prodcuts === 'failed') clearInterval(check)
        }, 100);

       

       
     

        msgBubble.appendChild(productsDiv)



        msgText.innerHTML = text



        let message = {
            type:'products-poll',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);

    }
  
    // 13. thankyou
    botThankyouMessage(on,text)
    {

        this.validation = ''

        let msgDiv = document.createElement('div')
        let avatarBubble = document.createElement('div')
        let msgBubble = document.createElement('div')
        let msgLoadBubble = document.createElement('div')
        let loadBubble = document.createElement('div')
        let loadBubble1 = document.createElement('div')
        let loadBubble2 = document.createElement('div')

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:0% 0;margin-top:.5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;'
        avatarBubble.style.cssText = `margin:0 2%;width:45px;height:45px;border-radius:100%;background-size:cover;background-repeat:no-repeat;visibility:${on};`
        avatarBubble.className = 'bot-avatar-bubble'  
        if(this.settings.avatarURI !== '') avatarBubble.style.backgroundImage = 'url('+this.settings.avatarURI+')'           
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:75%;margin:0% 0;margin-bottom:0%;height:auto;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        msgLoadBubble.style.cssText = 'align-items:center;justify-content:space-around;display:flex;position:relative;top:2.5px;width:60px;height:30px;padding:4px 10px;background:#e0dfde;border-radius:10px;'
        loadBubble.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble1.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        loadBubble2.style.cssText = 'transition:.25s linear;border-radius:100%;width:12.5px;height:12.5px;background:#b7b4ae;'
        // load animation
        loadBubble.style.background = '#000'
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 250);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 500);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 750);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            loadBubble1.style.background = '#000'
        }, 1000);
        setTimeout(() => {
            loadBubble1.style.background = '#b7b4ae'
            loadBubble2.style.background = '#000'
        }, 1250);
        setTimeout(() => {
            loadBubble2.style.background = '#b7b4ae'
            loadBubble.style.background = '#000'
        }, 1500);
        setTimeout(() => {
            loadBubble.style.background = '#b7b4ae'
            msgDiv.removeChild(msgLoadBubble)
            msgDiv.appendChild(msgBubble)
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

            if(document.body.contains(document.querySelector('.chatbot-worng-msg'))) this.chatInputDiv.removeChild( document.querySelector('.chatbot-worng-msg') )


            let id =  this.chat.indexOf(message)
            this.chat[id].done = true


        }, 1750);

        msgLoadBubble.appendChild(loadBubble)
        msgLoadBubble.appendChild(loadBubble1)
        msgLoadBubble.appendChild(loadBubble2)

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(avatarBubble)
        msgDiv.appendChild(msgLoadBubble)

        this.chatDiv.appendChild(msgDiv)



        // thankyou form

        let thankyouForm = document.createElement('form')
        thankyouForm.method = 'post'
        thankyouForm.id = 'virtual_bot_conversation_form'
        let thankyouInputTitle = document.createElement('input')
        thankyouInputTitle.type = 'text'
        thankyouInputTitle.id = 'virtual-bot-title'
        thankyouInputTitle.name = 'virtual-bot-title'
        let thankyouInputID = document.createElement('input')
        thankyouInputID.type = 'text'
        thankyouInputID.id = 'virtual-bot-id'
        thankyouInputID.name = 'virtual-bot-id'
        let thankyouInputConversation = document.createElement('input')
        thankyouInputConversation.type = 'text'
        thankyouInputConversation.id = 'virtual-bot-conversation'
        thankyouInputConversation.name = 'virtual-bot-conversation'
        let thankyouInputSubmit = document.createElement('input')
        thankyouInputSubmit.type = 'submit'

        thankyouInputID.value = this.settings.id
        thankyouInputTitle.value = this.settings.title
        thankyouInputConversation.value = JSON.stringify(this.chat).replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("'",this.symb)

        thankyouForm.style.display = 'none'


        thankyouForm.appendChild(thankyouInputTitle)
        thankyouForm.appendChild(thankyouInputID)
        thankyouForm.appendChild(thankyouInputConversation)
        thankyouForm.appendChild(thankyouInputSubmit)

        msgBubble.appendChild(thankyouForm)


        msgText.innerHTML = text



        let message = {
            type:'thankyou',
            from:'bot',
            content:text,
            date:msgDate,
            avatar:on
        }
        this.chat.push(message)

        
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);
        
    }
    








    // user messages
    userRegularMessage(text,id)
    {
        let msgDiv = document.createElement('div')
        let msgBubble = document.createElement('div')
       

        let msgText = document.createElement('p')
        let msgDate = new Date()
        // styles
        msgDiv.style.cssText = 'margin:2% 0;right:5%;margin-top:5%;width:100%;height:auto;position:relative;display:flex;flex-wrap:wrap;flex-direction:row-reverse;'
        msgBubble.style.cssText = 'overflow:hidden;width:auto;max-width:70%;height:auto;padding:4px 15px;background:#3c398c;color:#fff;border-radius:10px;min-width:20%;text-align: center;'
    
    
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;

        msgBubble.appendChild(msgText)
        msgDiv.appendChild(msgBubble)


       

        this.chatDiv.appendChild(msgDiv)

        msgText.textContent = text

        let message = {
            type:'regular',
            from:'user',
            content:text,
            date:msgDate,
        }

        this.chat.push(message)


        if(typeof id === 'number') this.scriptEngine.jumpTo(id)

    
        this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        setTimeout(() => {
            this.chatDiv.scrollTop = this.chatDiv.scrollHeight;
        }, 10);
    }




    initBot()
    {

        this.chatHolder = document.createElement('div')
        this.chatBubble = document.createElement('div')
        this.chatBubbleLive = document.createElement('div')
        this.chatBubble.appendChild(this.chatBubbleLive)


        this.chatHolder.appendChild(this.signHTML)

        this.chatHolderCloseB = document.createElement('div')
        this.chatHolderCloseB.textContent = '×'
        this.chatHolderClearB = document.createElement('div')
        this.chatHolderClearB.textContent = '⟳'


        this.chatDiv = document.createElement('div')
        this.chatInputDiv = document.createElement('div')
        this.chatInputDivUserInput = document.createElement('input')
        this.chatInputDivUserInput.type = 'text'
        this.chatInputDivUserSend = document.createElement('div')
        this.chatInputDivUserSend.textContent = '➤'

        this.chatInputDiv.appendChild(this.chatInputDivUserInput)
        this.chatInputDiv.appendChild(this.chatInputDivUserSend)



        this.chatHolder.appendChild(this.chatDiv)
        this.chatHolder.appendChild(this.chatInputDiv)



        this.chatHolder.appendChild(this.chatHolderCloseB)
        this.chatHolder.appendChild(this.chatHolderClearB)


        let chatBubbleClicked = false
        // dom events
        this.chatBubble.addEventListener('click',()=>{
            
            if(chatBubbleClicked === false)
            {
                chatBubbleClicked = true
                this.openChat()
                
            }
            else {
                chatBubbleClicked = false
                this.closeChat()
            }
        })

        this.chatHolderCloseB.addEventListener('click',()=>{
            this.closeChat()
            chatBubbleClicked = false
        })

        this.chatInputDivUserSend.addEventListener('click',()=>{
            this.validateUserInput()
        })

        document.addEventListener('keydown',(e)=>{
            if(e.key === 'Enter' || e.key === 'enter')
            {
                this.validateUserInput()
            }
        })

        // rest chat

        this.chatHolderClearB.addEventListener('click',()=>{

            this.chat = []
            this.chatDiv.textContent = ''
            this.chatInputDivUserInput.value = ''
            this.chatDiv.style.height = '98%'
            this.chatInputDiv.style.height = '0'
            this.chatInputDiv.style.visibility = 'hidden'
        })

        

        document.body.appendChild(this.chatBubble)

    }
    openChat()
    {
        if(!document.body.contains(this.chatHolder)) document.body.appendChild(this.chatHolder)
    }
    closeChat()
    {
        if(document.body.contains(this.chatHolder)) document.body.removeChild(this.chatHolder)
    }
    validateUserInput()
    {
        let message = document.createElement('div')
        message.className = 'chatbot-worng-msg'

        if(this.chatInputDivUserInput.value !== '')
        {
            if(this.validation == 'email') {
                const emailRegexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

                if(emailRegexExp.test(this.chatInputDivUserInput.value))
                {
                    if(document.body.contains(message)) this.chatInputDiv.removeChild(message)
                    this.userRegularMessage(this.chatInputDivUserInput.value)
                    this.chatInputDivUserInput.value = ''
                    this.chatDiv.style.height = '98%'
                    this.chatInputDiv.style.height = '0'
                    this.chatInputDiv.style.visibility = 'hidden'
                    if(document.body.contains(message)) this.chatInputDiv.removeChild(message)
                }
                else {
                    message.textContent = 'Please enter valid email address !'
                   if(!document.body.contains(message)) this.chatInputDiv.appendChild(message)
                }

            }
            else if(this.validation === 'phone')
            {
                const phoneRegexExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                if(phoneRegexExp.test(this.chatInputDivUserInput.value))
                {
                    if(document.body.contains(message)) this.chatInputDiv.removeChild(message)
                    this.userRegularMessage(this.chatInputDivUserInput.value)
                    this.chatInputDivUserInput.value = ''
                    this.chatDiv.style.height = '98%'
                    this.chatInputDiv.style.height = '0'
                    this.chatInputDiv.style.visibility = 'hidden'
                }
                else {
                    message.textContent = 'Please enter valid phone number !'
                   if(!document.body.contains(message)) this.chatInputDiv.appendChild(message)
                }
            }
            else if(this.validation === 'number')
            {
                
                
                if(!isNaN(parseFloat(this.chatInputDivUserInput.value)))
                {
                    if(document.body.contains(message)) this.chatInputDiv.removeChild(message)
                    this.userRegularMessage(this.chatInputDivUserInput.value)
                    this.chatInputDivUserInput.value = ''
                    this.chatDiv.style.height = '98%'
                    this.chatInputDiv.style.height = '0'
                    this.chatInputDiv.style.visibility = 'hidden'
                }
                else {
                    message.textContent = 'Please enter valid number !'
                   if(!document.body.contains(message)) this.chatInputDiv.appendChild(message)
                }
            }
            else {

                this.userRegularMessage(this.chatInputDivUserInput.value)
                this.chatInputDivUserInput.value = ''
                this.chatDiv.style.height = '98%'
                this.chatInputDiv.style.height = '0'
                this.chatInputDiv.style.visibility = 'hidden'
            }

        }
    }
    setStyles()
    {
        this.chatBubble.style.cssText = 
        `width:60px;height:60px;background-color:red;
        position:fixed;bottom:5%;${this.direction}:2.5%;
        border-radius:100%;
        background-size:contain;
        z-index:1000;
        cursor:pointer;
        `
        this.chatBubble.className = 'bot-chat-bubble'
        this.chatBubbleLive.style.cssText = 
        `
        width:14px;
        height:14px;
        border-radius:100%;
        ${this.direction}:5%;
        bottom:5%;
        background:#1eff74;
        position:fixed;
        z-index:1000;
        `

        if(this.isMobile.matches)
        {
            this.chatHolder.style.cssText =  
            `
            width:95%;
            right:2.5%;
            height:80vh;
            background:#fff;
            position:fixed;
            top:5vh;
            border-radius:5px;
            box-shadow:rgb(0 0 0 / 22.5%) 0px 0px 12px 0px;
            z-index:10000;
            font-size:1.1em;
             `
        }
        else
        {
            this.chatHolder.style.cssText =  
            `
            width:370px;
            ${this.direction}:2.5%;
            height:72.5vh;
            background:#fff;
            position:fixed;
            top:11vh;
            border-radius:5px;
            box-shadow:rgb(0 0 0 / 22.5%) 0px 0px 12px 0px;
            z-index:10000;
            font-size:1.1em;
             `

        }
        window.addEventListener('resize',()=>{
            if(this.isMobile.matches)
            {
                this.chatHolder.style.cssText =  
                `
                width:100%;
                height:72.5vh;
                background:#fff;
                position:fixed;
                top:11vh;
                border-radius:5px;
                box-shadow:rgb(0 0 0 / 22.5%) 0px 0px 12px 0px;
                z-index:10000;
                font-size:1.1em;
                `
            }
            else
            {
                this.chatHolder.style.cssText =  
                `
                width:370px;
                ${this.direction}:2.5%;
                height:72.5vh;
                background:#fff;
                position:fixed;
                top:11vh;
                border-radius:5px;
                box-shadow:rgb(0 0 0 / 22.5%) 0px 0px 12px 0px;
                z-index:10000;
                font-size:1.1em;
                `

            }
        })
     

         this.chatHolderCloseB.style.cssText = 
         `
         width:25px;
         height:25px;
         background:#fff;
         border-radius:100%;
         font-size:1.2em;
         display:flex;
         align-items:center;
         justify-content:center;
         position:absolute;
         right:10px;
         top:2%;
         cursor:pointer;
         `
         this.chatHolderClearB.style.cssText = 
         `
         width:25px;
         height:25px;
         background:#fff;
         border-radius:100%;
         font-size:1.45em;
         display:flex;
         align-items:center;
         justify-content:center;
         position:absolute;
         right:40px;
         top:2.1%;
         cursor:pointer;
         cursor:pointer;
         `
         this.chatDiv.style.cssText = `overflow-y:scroll;width:100%;position:absolute;height:98%;left:0;top:0;font-size:1.1em;`
         this.chatInputDiv.style.cssText = `    z-index: 1000000000;
         background: #fff;display:flex;align-items:center;visibility:hidden;width:100%;position:absolute;left:0;top:89%;border-top:1px solid #b2b1b0;height:0%;`


         this.chatInputDivUserInput.style.cssText = 'background-image:none;box-shadow:none;outline:none !important;margin-left:2.5%;width:82.5%;height:70%;position:relative;outline:none;background:transparent;border:none;top:7.5%;'
         this.chatInputDivUserSend.style.cssText = 'cursor:pointer;font-size:1.25em;width:15%;height:70%;display:flex;align-items:center;justify-content:center;'



         
    }
}