class scriptBot {
    constructor(bot,script)
    {
        this.bot = bot
        this.script = script

        this.runScript()



    }
    runScript()
    {

          setInterval(() => {

            this.bot.signHTML.textContent =  'created by Pixliy'
            this.bot.signHTML.style.cssText ='display:block;color:#000;opacity:1;background:transparent;background-color:transparent;background-image:none;user-select:none;    position: absolute;width: 100%;text-align: center;bottom: .5%;z-index: 100000000;font-size: .7em;'
            if(!document.body.contains(this.bot.signHTML)) this.bot.chatHolder.appendChild(this.bot.signHTML)

                this.script.forEach( (sc,i) => {
                    

                    if(this.bot.chat.length === i)
                    {
                       if(sc.from === 'bot' ) this.processMsg(sc,i)

                    }

                 
    
                });


          }, 10);
    }
    processMsg(sc,i)
    {
        if(sc.type === 'regular') 
        {
            if(sc.reply === true)
            {

                if(i === 0)
                {
                    this.bot.botRegularMessage('visible',sc.text,true)
                    if( this.bot.chat[i]) return;
                }
                else {
                    
                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }

                    if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                    {
                       
                        this.bot.botRegularMessage('visible',text,true)
                        
                    }
                }

            }
            else
            {
              
                if(i === 0)
                {
                    this.bot.botRegularMessage('visible',sc.text)
                    if( this.bot.chat[i]) return;
                }
                else {
                    let text = sc.text 

                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }

                    if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                    {
                        this.bot.botRegularMessage('visible',text)
                        
                    }
                }
             
            }
        }
        else if(sc.type === 'rating')
        {

            if(i === 0)
            {
                this.bot.botRatingMessage('visible',sc.text,sc.ratings)
                if( this.bot.chat[i]) return;
            }
            else {

                let text = sc.text 
                if(sc.text.includes('@'))
                {
                    let str = sc.text.substring(0, sc.text.indexOf('#'));
                    let strarr = str.split('@')
                    let id = strarr[strarr.length -1]
                    let id_index = ''

                    this.bot.chat.forEach((s,index)=>{
                        if(s.content === id) id_index = index
                    })

                    let variab  = this.bot.chat[id_index + 1].content 

                    text = text.replace('@'+id+'#',variab)
                }

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {
                       
                      if(this.script[i-1].reply === false) this.bot.botRatingMessage('hidden',text,sc.ratings)
                      else this.bot.botRatingMessage('visible',text,sc.ratings)
                }
            }
            
        }
        else if(sc.type === 'answer')
        {
            if(i === 0)
            {
                this.bot.botAnswerMessage('visible',sc.text,sc.answers)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }

                    let jump  = sc.jump || false
                    let jumps  = sc.jumps || null

                    if(this.script[i-1].reply === false) this.bot.botAnswerMessage('hidden',text,sc.answers,jump,jumps)
                    else this.bot.botAnswerMessage('visible',text,sc.answers,jump,jumps)


                    
                }
            }
        }
        else if(sc.type === 'link')
        {

            if(sc.reply === true)
            {

                if(i === 0)
                {
                    this.bot.botLinksMessage('visible',sc.text,sc.links,true)
                    if( this.bot.chat[i]) return;
                }
                else {

                    if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                    {

                        let text = sc.text 
                        if(sc.text.includes('@'))
                        {
                            let str = sc.text.substring(0, sc.text.indexOf('#'));
                            let strarr = str.split('@')
                            let id = strarr[strarr.length -1]
                            let id_index = ''

                            this.bot.chat.forEach((s,index)=>{
                                if(s.content === id) id_index = index
                            })

                            let variab  = this.bot.chat[id_index + 1].content 

                            text = text.replace('@'+id+'#',variab)
                        }
                    
                        if(this.script[i-1].reply === false) this.bot.botLinksMessage('hidden',text,sc.links,true)
                        else this.bot.botLinksMessage('visible',text,sc.links,true)
                    }
                }

            }
            else {

                    if(i === 0)
                    {
                        this.bot.botLinksMessage('visible',sc.text,sc.links)
                        if( this.bot.chat[i]) return;
                    }
                    else {

                        if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                        {

                            let text = sc.text 
                            if(sc.text.includes('@'))
                            {
                                let str = sc.text.substring(0, sc.text.indexOf('#'));
                                let strarr = str.split('@')
                                let id = strarr[strarr.length -1]
                                let id_index = ''

                                this.bot.chat.forEach((s,index)=>{
                                    if(s.content === id) id_index = index
                                })

                                let variab  = this.bot.chat[id_index + 1].content 

                                text = text.replace('@'+id+'#',variab)
                            }
                        
                            if(this.script[i-1].reply === false) this.bot.botLinksMessage('hidden',text,sc.links)
                            else this.bot.botLinksMessage('visible',text,sc.links)
                        }
                    }
            }
        }
        else if(sc.type === 'range')
        {

            if(i === 0)
            {
                this.bot.botRangeMessage('visible',sc.text,sc.max,sc.min)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }
                   
                      if(this.script[i-1].reply === false) this.bot.botRangeMessage('hidden',text,sc.max,sc.min)
                      else this.bot.botRangeMessage('visible',text,sc.max,sc.min)
                }
            }

        }
        else if(sc.type === 'options')
        {

            if(i === 0)
            {
                this.bot.botCheckboxMessage('visible',sc.text,sc.options)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }
                   
                      if(this.script[i-1].reply === false) this.bot.botCheckboxMessage('hidden',text,sc.options)
                      else this.bot.botCheckboxMessage('visible',text,sc.options)
                }
            }

        }
        else if(sc.type === 'email')
        {

            if(i === 0)
            {
                this.bot.botEmailMessage('visible',sc.text)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replaceAll('@'+id+'#',variab)
                    }
                   
                      if(this.script[i-1].reply === false)  this.bot.botEmailMessage('hidden',text)
                      else  this.bot.botEmailMessage('visible',text)
                }
            }

        }
        else if(sc.type === 'phone')
        {

            if(i === 0)
            {
                this.bot.botPhoneMessage('visible',sc.text)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }
                   
                      if(this.script[i-1].reply === false)  this.bot.botPhoneMessage('hidden',text)
                      else  this.bot.botPhoneMessage('visible',text)
                }
            }

        }
        else if(sc.type === 'number')
        {

            if(i === 0)
            {
                this.bot.botNumberMessage('visible',sc.text)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }
                   
                      if(this.script[i-1].reply === false)  this.bot.botNumberMessage('hidden',text)
                      else  this.bot.botNumberMessage('visible',text)
                }
            }

        }
        else if(sc.type === 'products')
        {
            if(i === 0)
            {
                this.bot.botProductsMessage('visible',sc.text,sc.ids)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }

                    let jump  = sc.jump || false
                    let jumps  = sc.jumps || null

                    if(this.script[i-1].reply === false) this.bot.botProductsMessage('hidden',text,sc.ids)
                    else this.bot.botProductsMessage('visible',text,sc.ids)


                    
                }
            }
        }
        else if(sc.type === 'products-poll')
        {
            if(i === 0)
            {
                this.bot.botProductsPollQuestion('visible',sc.text,sc.ids)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }

                    let jump  = sc.jump || false
                    let jumps  = sc.jumps || null

                    if(this.script[i-1].reply === false) this.bot.botProductsPollQuestion('hidden',text,sc.ids)
                    else this.bot.botProductsPollQuestion('visible',text,sc.ids)


                    
                }
            }
        }
        else if(sc.type === 'cart')
        {
            if(i === 0)
            {
                this.bot.botCartMessage('visible',sc.text)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replace('@'+id+'#',variab)
                    }

                    let jump  = sc.jump || false
                    let jumps  = sc.jumps || null

                    if(this.script[i-1].reply === false) this.bot.botCartMessage('hidden',text)
                    else this.bot.botCartMessage('visible',text)


                    
                }
            }
        }
        else if(sc.type === 'thankyou')
        {

            if(i === 0)
            {
                this.bot.botThankyouMessage('visible',sc.text)
                if( this.bot.chat[i]) return;
            }
            else {

                if(this.bot.chat[i-1].done === true || this.bot.chat[i-1].from === 'user') 
                {

                    let text = sc.text 
                    if(sc.text.includes('@'))
                    {
                        let str = sc.text.substring(0, sc.text.indexOf('#'));
                        let strarr = str.split('@')
                        let id = strarr[strarr.length -1]
                        let id_index = ''

                        this.bot.chat.forEach((s,index)=>{
                            if(s.content === id) id_index = index
                        })

                        let variab  = this.bot.chat[id_index + 1].content 

                        text = text.replaceAll('@'+id+'#',variab)

                    }
                   
                      if(this.script[i-1].reply === false)  this.bot.botThankyouMessage('hidden',text)
                      else  this.bot.botThankyouMessage('visible',text)
                }
            }

        }

    }
    jumpTo(id)
    {


        this.script.forEach((s,i)=>{
            if(s.from === 'bot' && i < id)
            {
                s.pass = true

               if(this.bot.chat[i] === undefined) this.bot.chat.push({from:'bot',text:'none'})

            }
            else if(s.from ==='user' && i < id)
            {
                if(this.bot.chat[i] === undefined) this.bot.chat.push({from:'user',text:'none'})

            }
        })

    }
}