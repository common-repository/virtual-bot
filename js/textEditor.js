


const emojis = [


    {
        type:'basic',
        arr:[ 
              '🙂','😀','😃','😄','😁','😅','😆','🤣','😂','🙃',	
              '😉','😊','😇','😎','🤓','🧐','🥳','🥰','😍','🤩',
              '😘','😗','😚','😙','🥲','😋','😛','😜','😝','🤑',
              '🤗','🤭','🤫','🤔','😐','🤐','🤨','😑','😶','😏',
              '😒','🙄','😬','😮‍💨','🤥','😪','😴','😌','😔','🤤',
              '😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵',
              '🤯','😕','😟','🙁','😮','😯','😲','😳','🥺','😧',
              '😨','😰','😥','😢','😭','😱','😖','😣','😞','😓',
              '😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀',
              '💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸',
              '😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊',
              '💋','💌','💘','💝','💖','💗','💓','💞','💕','💟',
              '💔','❤️‍🔥','❤️‍🩹','🧡','💛','💚','💙','💜','🤎','🖤',
              '🤍','💯','💢','💥','💫','💦','💨','🕳','💣','💬',
              '👁️‍🗨️','🗨','🗯','💭','💤',

        ]
    },
    {
        type:'ppl',
        arr:[
            '👋','🤚','🖐','✋','🖖','👌','🤌','🤏','🤞','🤟','🤘','🤙','👈','👉','👆',
            '👇','🖕','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','💅',
            '🤳','💪','🦾','🦵','🦿','🦶','👂','🦻','👃','🧠','👣','🫀','🫁','🦷','🦴',
            '👀','👁','👅','👄','🧑','👶','🧒','👦','👧','👱','👨','🧔','🧔‍♂‍','🧔‍♀','👨‍🦰',
            '👨‍🦱','👨‍🦳','👨‍🦲','👩','👩‍🦰','👩‍🦱','👩‍🦳','👩‍🦲','👱‍♀‍','👱‍♂‍','🧓','👴','👵','🙍','🙍‍♂‍',
            '🙍‍♀‍','🙎','🙎‍♂‍','🙎‍♀‍','🙅','🙅‍♂‍','🙅‍♀‍','🙆','🙆‍♂‍','🙆‍♀‍','💁','💁‍♂‍','💁‍♀‍','🙋','🙋‍♂‍',
            '🙋‍♀‍','🧏','🧏‍♂‍','🧏‍♀‍','🙇','🙇‍♂‍','🙇‍♀‍','🤦','🤦‍♂‍','🤦‍♀‍','🤷','🤷‍♂','🤷‍♀‍','🧑‍⚕‍','👨‍⚕‍',
            '👩‍⚕‍','🧑‍🎓','👨‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖‍','👨‍⚖‍','👩‍⚖‍','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳',	
            '🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻',
            '🧑‍🎤','👨‍🎤','👩‍🎤','🧑','👨‍🎨','👩‍🎨','🧑‍✈‍','👨‍✈‍','👩‍✈‍','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒',
            '👮','👮‍♂‍','👮‍♀‍','🕵','💂','💂‍♂‍','💂‍♀‍','🥷','👷','👷‍♂‍','👷‍♀‍','🤴','👸','👳','👳‍♂‍',
            '👳‍♀‍','👲','🧕','🤵','🤵‍♂','🤵‍♀‍','👰','👰‍♂','👰‍♀‍','🤰','🤱','🧑‍🍼','👩‍🍼','👨‍🍼','👼',
            '🎅','🤶','🧑‍🎄','🦸','🦸‍♂‍','🦸‍♀‍','🦹','🦹‍♂‍','🦹‍♀‍','🧙','🧙‍♂‍','🧙‍♀‍','🧚‍♀‍','🧛','🧛‍♂‍',
            '🧛‍♀‍','🧜','🧜‍♂‍','🧜‍♀‍','🧝','🧝‍♂‍','🧝‍♀‍','🧞','🧞‍♂‍','🧞‍♀‍','🧟','🧟‍♂‍','🧟‍♀‍','💆','💆‍♂‍',
            '💆‍♀‍','💇','💇‍♂‍','💇‍♀‍','🚶','🚶‍♂‍','🚶‍♀‍','🧍','🧍‍♂‍','🧍‍♀‍','🧎','🧎‍♂‍','🧎‍♀‍','🧑‍🦯','👨‍🦯',
            '👩‍🦯','🧑‍🦼','👨‍🦼','👩‍🦼','🧑‍🦽','👨‍🦽','👩‍🦽','🏃','🏃‍♂‍','🏃‍♀‍','💃','🕺','🕴','👯','👯‍♂‍',
            '👯‍♀‍','🧖','🧖‍♂‍','🧖‍♀‍','🧗', '🤺','🏇','⛷','🏂','🏌','🏄','🏄‍♂‍','🏄‍♀‍','🚣‍♂‍','🏊',
            '🏊‍♂‍','🏊‍♀','⛹','🏋','🚴','🚴‍♂‍','🚴‍♀‍','🚵','🚵‍♂‍','🚵‍♀‍','🤸','🤸‍♂‍','🤸‍♀‍','🤼‍♂‍','🤽',
            '🤽‍♂‍','🤽‍♀‍','🤾','🤾‍♂‍','🤾‍♀‍','🤹','🤹‍♂‍','🤹‍♀‍','🧘','🧘‍♂‍','🧘‍♀‍','🛀','🛌','👪','👨‍👩‍👦',
            '👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦',
            '👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🧑‍🤝‍🧑','👭','👫','👬','💏','👩‍❤‍💋‍👩',	
            '💑','🗣','👤','👥','🫂',



        ]
    },

    {

        type:'animals',
        arr:[

            '🐵','🐒','🦍','🦧','🐶','🐕','🦮','🐕‍🦺','🐩','🐺',
            '🦊','🦝','🐱','🐈','🐈‍⬛','🦁','🐯','🐅','🐆','🐴',
            '🐎','🦄',,'🦓','🦌','🦬','🐮','🐄'	,'🐂','🐃','🐷'
            ,'🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒',
            '🐘','🦣','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇',
            '🐿','🦫','🦔','🦇','🐻','🐻‍❄️','🐨','🐼','🦥','🦦',
            '🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥',
            '🐦','🐧','🕊','🦅','🦆','🦢','🦉','🦤','🪶','🦩',
            '🦜','🐸','🐊','🐢','🦎','🐍','🐲','🦕','🦖','🐳',
            '🐋','🐬','🦭','🐟','🐠','🐡','🦈','🐙','🐚','🐌',
            '🦋','🐛','🐜','🐝','🪲','🐞','🦗','🪳','🕷','🕸',
            '🦂','🦟','🪰','🪱','🦠',
            '💐','🌸','💮','🏵','🌹','🥀','🌺','🌻','🌼','🌷',
            '🌱','🪴','🌲','🌳','🌴','🌵','🌾','🌿','☘','🍀',
            '🍁','🍂','🍃',
        ]

    },


    {
        type:'food&drinks',
        arr:[
              '🍇','🍈','🍉','🍊','🍋','🍌'	,'🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🫐','🥝',
              '🍅','🫒','🥥','🥑','🍆','🥔','🥕','🌽','🌶','🫑','🥒','🥬','🥦','🧄','🧅','🍄',
              '🥜','🫑','🌰','🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓',
              '🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣',
              '🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤',
              '🍥','🥮',,'🍡','🥟','🥠','🥡','🦀','🦞','🦐','🦑','🦪','🍨','🍧','🍦','🍩','🍪',
              '🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮',,'🍯','🍼','🥛','🫖','🍵','🍶','🍾','🍷',
              '🍸','🍹','🍺','🍻','🥂','🥃','🥤','🧋','🧃','🧉','🧊','🥢','🍽','🍴','🥄','🔪',
              '🧋','🏺'
        ]
    },

    {
        type:'casual',
        arr:[
             '🚂','🚃','🚄','🚅','🚆','🚇','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍','🚎'	,'🚐','🚑','🚒',
              '🚓','🚔','🚕','🚖','🚗','🚘','🚙','🛻','🚚','🚛','🚜','🏎','🏍','🛵','🦽','🦼','🎯','🪀',
              '🪁','🎱','🔮','🪄','🧿','🪄','🎮','🕹','🎰','🎲','🧩','🧸','🪅','🪆','🪆','🎭','🖼','🎨',
              '🧵','🪡'	,'🧶','🪢','👓','🕶','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘',
              '🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍','🎒','🩴','👞','👟','🥾','🥿','👠','👡',
              '🩰','👢','👑','👒','🎩','🎓','🧢','🪖','💄','💍','💎','🔈','📢','📣','🔔','🔕','🎼','🎶',
              '🎙','🎤','🎧','🎷','🪗','🎸','🎹','🎺','🎻','🪕','🥁','🪘','📱','📟','📠','🔌','💿','📀',
              '🎥','📺','🎬','📷','📸','🔍','💡','🏮','📗','📘','📕','📔','📚','📒','📜','🗞','🔖','💰',
              '💴','💵','💶','💷','💸','💳','🧾','📩','📤','📥','📦','📫','🗳','📮','🖊','🖍','📝','💼',
              '📅','📆','📈','📉','📊','📌','📍','📎','🖇','🗑','🔒','🔑','🔨','⛏','🪓','🗡','🔫','🏹',
              '🔧','🪚','🔧','🪛','🧬','🧪','📡','🔭','💉','🩸','💊','🩹','🛏','🪑','🚽','🛁','🪒','🛒',
              '🚬','🪧','⛔','🚫','🚳','🚯','📵','🔞','🔱'
        ]
    },

    {
        type:'flags',
        arr:[
            '🏁','🚩','🎌','🏴','🏳','🏳️‍🌈','🏳️‍⚧️','🏴‍☠️','🇦🇨','🇦🇩','🇦🇪','🇦🇫','🇦🇬','🇦🇮','🇦🇱','🇦🇲','🇦🇴',
            '🇦🇶','🇦🇷','🇦🇸','🇦🇹','🇦🇺','🇦🇼','🇦🇽','🇦🇿','🇧🇦','🇧🇧','🇧🇩','🇧🇪','🇧🇫','🇧🇬','🇧🇭','🇧🇮','🇧🇯',
            '🇧🇱','🇧🇲','🇧🇳','🇧🇴','🇧🇶','🇧🇷','🇧🇸','🇧🇹','🇧🇻','🇧🇼','🇧🇾','🇧🇿'	,'🇨🇦','🇨🇨','🇨🇩','🇨🇫','🇨🇬',
            '🇨🇭','🇨🇮','🇨🇰','🇨🇱','🇨🇲','🇨🇳','🇨🇴','🇨🇵','🇨🇷','🇨🇺','🇨🇻','🇨🇼','🇨🇽','🇨🇾','🇩🇪','🇩🇬','🇩🇯',
            '🇩🇰','🇩🇲','🇩🇴','🇩🇿','🇪🇦','🇪🇨','🇪🇪','🇪🇬','🇪🇭','🇪🇷','🇪🇸','🇪🇹','🇪🇺','🇫🇮','🇫🇯','🇫🇰','🇫🇲',
            '🇫🇴','🇫🇷','🇬🇦','🇬🇧','🇬🇩','🇬🇪','🇬🇫','🇬🇬','🇬🇭','🇬🇮','🇬🇱','🇬🇲','🇬🇳','🇬🇵','🇬🇶','🇬🇷','🇬🇸',
            '🇬🇹','🇬🇺','🇬🇼','🇬🇾','🇭🇰','🇭🇲','🇭🇳','🇭🇷','🇭🇹','🇭🇺','🇮🇨','🇮🇩','🇮🇪','🇮🇱','🇮🇲','🇮🇳','🇮🇴',
            '🇮🇶','🇮🇷','🇮🇸','🇮🇹','🇯🇪','🇯🇲','🇯🇴','🇯🇵','🇰🇪','🇰🇬','🇰🇭','🇰🇭','🇰🇮','🇰🇲','🇰🇳','🇰🇵','🇰🇷',
            '🇰🇼','🇰🇾','🇰🇿','🇱🇦','🇱🇧','🇱🇨','🇱🇮','🇱🇰','🇱🇷','🇱🇸','🇱🇹','🇱🇻','🇱🇾','🇲🇦','🇲🇨','🇲🇩','🇲🇪',
            '🇲🇬','🇲🇭','🇲🇰','🇲🇱','🇲🇲','🇲🇳','🇲🇴','🇲🇵','🇲🇶','🇲🇷','🇲🇸','🇲🇹','🇲🇺','🇲🇻','🇲🇼','🇲🇽','🇲🇾',
            '🇲🇿','🇳🇦','🇳🇨','🇳🇪','🇳🇫','🇳🇬','🇳🇮','🇳🇱','🇳🇴','🇳🇵','🇳🇷','🇳🇺','🇳🇿','🇴🇲','🇵🇦','🇵🇪','🇵🇫',
            '🇵🇬','🇵🇭','🇵🇰','🇵🇱','🇵🇲','🇵🇳','🇵🇷','🇵🇸','🇵🇹','🇵🇼','🇵🇾','🇶🇦','🇷🇪','🇷🇸','🇷🇺','🇷🇼','🇸🇦',
            '🇸🇧','🇸🇨','🇸🇩','🇸🇪','🇸🇬','🇸🇭','🇸🇮','🇸🇯','🇸🇰','🇸🇱','🇸🇲','🇸🇳','🇸🇴','🇸🇷','🇸🇸','🇸🇹','🇸🇻',
            '🇸🇽','🇸🇾','🇸🇿','🇹🇦','🇹🇨','🇹🇩','🇹🇫','🇹🇬','🇹🇭','🇹🇯','🇹🇰','🇹🇱','🇹🇲','🇹🇳','🇹🇴','🇹🇷','🇹🇹',
            '🇹🇻','🇹🇼','🇹🇿','🇺🇦','🇺🇬','🇺🇲','🇺🇳','🇺🇸','🇺🇾','🇺🇿','🇻🇦','🇻🇨','🇻🇪','🇻🇬','🇻🇮','🇻🇮','🇻🇺',
            '🇼🇫','🇼🇸','🇽🇰','🇾🇪','🇾🇹','🇿🇦','🇿🇲','🇿🇼','🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿'
        ]
    }

]

const gifs = [
    'https://media.giphy.com/media/MDmgeTntLeGe68QzIG/giphy.gif',
    'https://media.giphy.com/media/Tk8FFxJrEZHt8JK3lQ/giphy.gif',
    'https://media.giphy.com/media/dCdTUwSva7GOzPAcf3/giphy.gif',
    'https://media.giphy.com/media/P6XpZATMQRATmHSWv5/giphy.gif',
    'https://media.giphy.com/media/xYGnFm4mVcMxYIVq3v/giphy.gif',
    'https://media.giphy.com/media/l4pTb7e732SolscAE/giphy.gif',
    'https://media.giphy.com/media/1oo46tcuSmcfzIibWZ/giphy.gif',
    'https://media.giphy.com/media/lSPlEENLTonvclZP44/giphy.gif',
    'https://media.giphy.com/media/ui4VjMUBGXhwgdwUnK/giphy.gif',
    'https://media.giphy.com/media/jVbSMVDoO0c6oQl3at/giphy.gif',
    'https://media.giphy.com/media/GWGZQiSNsycAWqldB3/giphy.gif',
    'https://media.giphy.com/media/wdMteFyxljGxsotBvj/giphy-downsized-large.gif',
    'https://media.giphy.com/media/ZOhf9xI22s4NLeIbjL/giphy-downsized-large.gif',
    'https://media.giphy.com/media/H7T8UdGOvOQiDf9QXj/giphy.gif',
    'https://media.giphy.com/media/Yw6q7onmI8Xsps85eX/giphy.gif',
    'https://media.giphy.com/media/47GTKznyEywUBLgR0x/giphy.gif',
    'https://media.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif',
    'https://media.giphy.com/media/SwpfkMlXB3FoTbrrF4/giphy.gif',
    'https://media.giphy.com/media/igFPpuVhit5j3cmJJI/giphy.gif',
    'https://media.giphy.com/media/fipN1GOuDK8txSqay3/giphy.gif',
    'https://media.giphy.com/media/PQ0VI3S5vqL5pwQQJX/giphy.gif',
    'https://media.giphy.com/media/l3vR8xgaVJIDE8ec0/giphy.gif',
    'https://media.giphy.com/media/Nf28lgbd20309PafQM/giphy.gif',
    'https://media.giphy.com/media/l2FCtA8fTKxHnswzG0/giphy.gif',
    'https://media.giphy.com/media/hfbSh9YCzDtMQ/giphy.gif',
    'https://media.giphy.com/media/nx8GZtGrDYQBa/giphy.gif',
    'https://media.giphy.com/media/uXVEhtcVDD7q0/giphy.gif',
    'https://media.giphy.com/media/iHzQWxb3KV6LAcnkJ3/giphy.gif',
    'https://media.giphy.com/media/5nzbSBgzjS7hC/giphy.gif',
    'https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif',
    'https://media.giphy.com/media/3o8doT9BL7dgtolp7O/giphy.gif',
    'https://media.giphy.com/media/fBEDuhnVCiP16/giphy.gif',
    'https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif',
    'https://media.giphy.com/media/KHEfRIuqUuIyIPA9l1/giphy.gif',
    'https://media.giphy.com/media/YSvdLT5U2vugYuALVF/giphy.gif',
    'https://media.giphy.com/media/hVTouq08miyVo1a21m/giphy.gif',
    'https://media.giphy.com/media/f7HN9OpT3DP02rpJDk/giphy.gif',
  
]


class TextEditor {
    constructor(holder)
    {
        this.holder = holder


    }


    init()
    {

      
         this.editor = document.createElement('div')
         this.editorHeader = document.createElement('div')

         this.editorHeaderBold = document.createElement('button')
         this.editorHeaderBold.textContent = 'B'
         this.editorHeaderItalic = document.createElement('button')
         this.editorHeaderItalic.textContent = '/'
         this.editorHeaderUnderline = document.createElement('button')
         this.editorHeaderUnderline.textContent = 'U'
         this.editorHeaderColor = document.createElement('input')
         this.editorHeaderColor.type = 'color'
         this.editorHeaderEmoji = document.createElement('button')
         this.editorHeaderEmoji.textContent = '☺'
         this.editorHeaderGif = document.createElement('button')
         this.editorHeaderGif.textContent = 'gif'        
         this.editorHeaderImg = document.createElement('button')
         this.editorHeaderImg.textContent = 'img'       
        
        //  this.editorHeader.appendChild(this.editorHeaderEmoji)
         this.editorHeader.appendChild(this.editorHeaderBold)
         this.editorHeader.appendChild(this.editorHeaderItalic)
         this.editorHeader.appendChild(this.editorHeaderUnderline)
         this.editorHeader.appendChild(this.editorHeaderColor)
         this.editorHeader.appendChild(this.editorHeaderGif)
        //  this.editorHeader.appendChild(this.editorHeaderImg)


         this.editorContent = document.createElement('div')
         this.editorContent.setAttribute('contenteditable','')
         this.editorContent.className = 'text-editor-editor-content'
         this.editorContent.textContent = 'wow lorem ipsum that lorek/'




         this.editor.appendChild(this.editorHeader)
         this.editor.appendChild(this.editorContent)
         this.holder.appendChild(this.editor)



         // events
         this.boldEvent()
         this.italicEvent()
         this.underlineEvent()
         this.colorEvent()
        //  this.emojiEvent()
         this.gifEvent()
        //  this.imgEvent()




         this.setStyles()

    }
    boldEvent()
    {

        this.editorHeaderBold.addEventListener('click',()=>{
            var sel = window.getSelection();

            if(this.editorContent.innerHTML.indexOf('<b>'+sel+'</b>') === -1)
            {
                //Retrieve the selected text :
                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace(sel, '<b>'+sel+'</b>');
            }
            else{

                var text = this.editorContent.innerHTML;
              
                this.editorContent.innerHTML = text.replace('<b>'+sel+'</b>',sel);
            }

        })
    }
    italicEvent()
    {

        this.editorHeaderItalic.addEventListener('click',()=>{
            var sel = window.getSelection();

            if(this.editorContent.innerHTML.indexOf('<i>'+sel+'</i>') === -1)
            {
                //Retrieve the selected text :
                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace(sel, '<i>'+sel+'</i>');
            }
            else{

                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace('<i>'+sel+'</i>',sel);
            }
        

        })
    }
    underlineEvent()
    {
      

        this.editorHeaderUnderline.addEventListener('click',()=>{
            var sel = window.getSelection();

            if(this.editorContent.innerHTML.indexOf('<span style="text-decoration:underline;">'+sel+'</span>') === -1)
            {
                //Retrieve the selected text :
                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace(sel, '<span style="text-decoration:underline;">'+sel+'</span>');
            }
            else{

                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace('<span style="text-decoration:underline;">'+sel+'</span>',sel);
            }
        
        

        })
    }
    colorEvent()
    {

        this.editorHeaderColor.addEventListener('input',()=>{
            var sel = window.getSelection();

            if(this.editorContent.innerHTML.indexOf('<span style="color:'+this.editorHeaderColor.value+';">'+sel+'</span>') === -1)
            {
                //Retrieve the selected text :
                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace(sel, '<span style="color:'+this.editorHeaderColor.value+';">'+sel+'</span>');
            }
            else{

                var text = this.editorContent.innerHTML;
                this.editorContent.innerHTML = text.replace('<span style="color:'+this.editorHeaderColor.value+';">'+sel+'</span>',sel);
            }
        

        })
    }
    emojiEvent()
    {
        this.emojiDiv = document.createElement('div')
        this.emojiDivHeader = document.createElement('div')
        this.emojiDivContent = document.createElement('div')


        this.emojiDiv.style.cssText = 'overflow-y:scroll;z-index:100;border:1px solid #000;width:50%;height:auto;max-height:200px;position:absolute;top:8%;left:.15%;background:#fff;'
        this.emojiDivHeader.style.cssText = 'color:#ffff;font-size:.8em;align-items:center;justify-content:space-around;display:flex;background:gray;width:100%;height:22.5px;left:0%;top:0;border-bottom:1px solid #000;position:absolute;'
        this.emojiDivContent.style.cssText = 'position:relative;top:22.5px;width:100%;height:auto;min-height:400px;max-height:170px;left:0%;'



        emojis.forEach(emj => {
            let headerTitle = document.createElement('p')
            headerTitle.style.cursor = 'pointer'
            headerTitle.textContent = emj.type

            headerTitle.addEventListener('click',()=>{

                document.querySelectorAll('.text-editor-emoji-content-div').forEach(e=> e.style.display = 'none')
                contentDiv.style.display  = 'flex'
            })


            let contentDiv = document.createElement('div')
            contentDiv.className = 'text-editor-emoji-content-div'
            contentDiv.style.cssText = 'user-select:none;justify-content:space-around;display:flex;flex-wrap:wrap;width:100%;height:auto;position:absolute;min-height:150px;top:0;left:0;'

            emj.arr.forEach(emoji=>{
                let emo = document.createElement('p')
                emo.style.cssText = 'margin:0;width:12.5%;user-select:none;cursor:pointer;display:flex;align-items:center;justify-content:center;'
                emo.textContent = emoji

                contentDiv.appendChild(emo)

                // insert emoji event
                emo.addEventListener('click',()=>{
                    var sel, range;
                if (window.getSelection) {
                    sel = window.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) {
                        range = sel.getRangeAt(0);
                        range.deleteContents();

                        if( typeof range.endContainer.data === 'string' && typeof range.startContainer.data === "string" && this.editorContent.textContent.includes(range.startContainer.data))
                        {
                            range.insertNode( document.createTextNode(emoji) );
                        }
                        else if(range.endContainer.data === undefined)
                        {
                            range.insertNode( document.createTextNode(emoji) );

                        }
              
                    }
                } else if (document.selection && document.selection.createRange) {
                    document.selection.createRange().text = text;
                }
                    this.editor.removeChild(this.emojiDiv)

                    clicked = false
                })
                
            })

            this.emojiDivContent.appendChild(contentDiv)

            this.emojiDivHeader.appendChild(headerTitle)
        });

        this.emojiDiv.appendChild(this.emojiDivHeader)
        this.emojiDiv.appendChild(this.emojiDivContent)

        let clicked = false
        this.editorHeaderEmoji.addEventListener('click',()=>{
            if(clicked === false)
            {
                clicked = true
                this.editor.appendChild(this.emojiDiv)
            }
            else
            {
                clicked = false
                this.editor.removeChild(this.emojiDiv)
            }
        })
    }
    gifEvent()
    {
        this.gifDiv = document.createElement('div')
        this.gifDivContent = document.createElement('div')


        gifs.forEach(gif=>{
            let img = new Image()
            img.src  = gif
            img.addEventListener('load',()=>{
                let _gif = document.createElement('img')
                _gif.style.cssText = 'width:30%;height:100px;object-fit:contain;'
                _gif.src = img.src

                _gif.addEventListener('click',()=>{
                                  var sel, range;
                        if (window.getSelection) {
                            sel = window.getSelection();
                            if (sel.getRangeAt && sel.rangeCount) {
                                range = sel.getRangeAt(0);
                                range.deleteContents();

                                if( typeof range.endContainer.data === 'string' && typeof range.startContainer.data === "string" && this.editorContent.textContent.includes(range.startContainer.data))
                                {
                                    let img = document.createElement('img')
                                    img.width = '250'
                                    img.height = '205'
                                    img.src = _gif.src
                                    range.insertNode( img );
                                }
                                else if(range.endContainer.data === undefined)
                                {
                                    let img = document.createElement('img')
                                    img.width = '250'
                                    img.height = '205'
                                    img.src = _gif.src
                                    range.insertNode( img );

                                }
                    
                            }
                        } else if (document.selection && document.selection.createRange) {
                            document.selection.createRange().text = text;
                        }
                        clicked = false
                        this.editor.removeChild(this.gifDiv)
                })

                this.gifDivContent.appendChild(_gif)
            })
        })


    
        this.gifDiv.appendChild(this.gifDivContent)

        let clicked = false
        this.editorHeaderGif.addEventListener('click',()=>{
            if(clicked === false)
            {
                clicked = true
                this.editor.appendChild(this.gifDiv)
            }
            else
            {
                clicked = false
                this.editor.removeChild(this.gifDiv)
            }
        })
    }
    imgEvent()
    {

        this.imgDiv = document.createElement('div')
        this.imgDivContent = document.createElement('div')
        this.imgDiv.appendChild(this.imgDivContent)

        this.imgLabel = document.createElement('p')
        this.imgLabel.textContent = 'Image URL'

        this.imgInput = document.createElement('input')
        this.imgInput.type = 'text'
        this.imgInput.style.userSelect = 'none'

        this.imgSave = document.createElement('div')
        this.imgSave.textContent = 'save'


        this.imgInput.addEventListener('change',()=>{
           
                var sel, range;
                if (window.getSelection) {
                    sel = window.getSelection();
                    if (sel.getRangeAt && sel.rangeCount) {
                        range = sel.getRangeAt(0);
                        range.deleteContents();

                        if( typeof range.endContainer.data === 'string' && typeof range.startContainer.data === "string" && this.editorContent.textContent.includes(range.startContainer.data))
                        {
                            let img = document.createElement('img')
                            img.width = '250'
                            img.height = '205'
                            img.src = this.imgInput.value
                            range.insertNode( img );
                        }
                        else if(range.endContainer.data === undefined)
                        {
                            let img = document.createElement('img')
                            img.width = '250'
                            img.height = '205'
                            img.src = this.imgInput.value
                            range.insertNode( img );

                        }
            
                    }
                } else if (document.selection && document.selection.createRange) {
                    document.selection.createRange().text = text;
                }
                clicked = false
                this.editor.removeChild(this.imgDiv)
            
        })

        this.imgDivContent.appendChild(this.imgLabel)
        this.imgDivContent.appendChild(this.imgInput)
        this.imgDivContent.appendChild(this.imgSave)

        let clicked = false
        this.editorHeaderImg.addEventListener('click',()=>{
            if(clicked === false)
            {
                clicked = true
                this.editor.appendChild(this.imgDiv)
            }
            else
            {
                clicked = false
                this.editor.removeChild(this.imgDiv)
            }
        })
    }
    setStyles()
    {

        this.editor.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;background:pink;border:1.15px solid #302f2e;border-radius:10px;overflow:hidden;'
        this.editorHeader.style.cssText = 'height:7.5%;width:100%;left:0;top:0;border-bottom:1.15px solid #000;background:#fff;position:absolute;display:flex;align-items:center;'
        this.editorContent.style.cssText = 'overflow-y:scroll;outline:none;height:92.3%;width:100%;left:0;top:7.7%;background:#fff;position:absolute;'


        this.editorHeaderItalic.style.cssText = 'font-style:italic;width:22px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'
        this.editorHeaderBold.style.cssText = 'width:22px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'
        this.editorHeaderColor.style.cssText = 'width:22px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'
        this.editorHeaderUnderline.style.cssText = 'width:22px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'
        this.editorHeaderEmoji.style.cssText = 'font-size:1.25em;display:flex;align-items:flex-end;justify-content:center;width:22px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'

        this.editorHeaderGif.style.cssText = 'font-size:.75em;display:flex;align-items:center;justify-content:center;width:27.5px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'
        this.editorHeaderImg.style.cssText = 'font-size:.75em;display:flex;align-items:center;justify-content:center;width:27.5px;background:transparent;border-radius:100%;box-shadow:none;border:none;height:22px;margin:0 1%'





        this.gifDiv.style.cssText = 'z-index:100;border:1px solid #000;width:65%;height:auto;max-height:400px;position:absolute;top:8%;left:.15%;background:#fff;'
        this.gifDivContent.style.cssText = 'overflow-y:scroll;position:relative;width:100%;height:auto;min-height:200px;max-height:220px;left:0%;top:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around;'

        // this.imgDiv.style.cssText = 'z-index:100;border:1px solid #000;width:50%;height:auto;max-height:50px;position:absolute;top:8%;left:.15%;background:#fff;'
        // this.imgDivContent.style.cssText = 'overflow-y:scroll;position:relative;width:100%;height:auto;min-height:60px;max-height:60px;left:0%;top:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around;'

    }
}
