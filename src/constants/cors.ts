const cors_allowed_domain = [

    /* "https://app.cartwire.co",
    "https://stage.app.cartwire.co", */
    // /^(https:\/\/([^\.]*\.)?cartwire\.co)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cartwire[\.]com)$/i,
    "https://localhost",
    
    
    /^(https:\/\/([^\.]*\.)?unileversolutions\.com)$/i,
    /^(https:\/\/([^\.]*\.)?netlify\.app)$/i,
    /^(https:\/\/([^\.]*\.)?adobeaemcloud\.com)$/i,

    /^(https:\/\/([^\.]*\.)?seventhgeneration\.com)$/i,
    /^(https:\/\/([^\.]*\.)?benjerry\.com)$/i,
    /^(https:\/\/([^\.]*\.)?clearhaircare\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?clearhaircare\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?clearhaircare\.jp)$/i,
    /^(https:\/\/([^\.]*\.)?dove\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.in)$/i,
    /^(https:\/\/([^\.]*\.)?neutral\.dk)$/i,
    /^(https:\/\/([^\.]*\.)?recepedia\.com)$/i,
    /^(https:\/\/([^\.]*\.)?ahcbeauty\.com)$/i,
    /^(https:\/\/([^\.]*\.)?maille\.com)$/i,
    /^(https:\/\/([^\.]*\.)?ahcbeauty\.com)$/i,

    /^(https:\/\/([^\.]*\.)?acnesquad\.com)$/i,
    /^(https:\/\/([^\.]*\.)?aim\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?ala\.com.ar)$/i,
    /^(https:\/\/([^\.]*\.)?albertobalsam\.com)$/i,
    /^(https:\/\/([^\.]*\.)?algida\.com.tr)$/i,
    /^(https:\/\/([^\.]*\.)?algida\.hu)$/i,
    /^(https:\/\/([^\.]*\.)?algida\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?allthingshair\.com)$/i,
    /^(https:\/\/([^\.]*\.)?andrelon\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?aromatelrindemas\.com)$/i,
    /^(https:\/\/([^\.]*\.)?axe\.at)$/i,
    /^(https:\/\/([^\.]*\.)?axe\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?axe\.com)$/i,
    /^(https:\/\/([^\.]*\.)?axe\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?baba\.hu)$/i,
    /^(https:\/\/([^\.]*\.)?bailan\.com.tw)$/i,
    /^(https:\/\/([^\.]*\.)?b-better\.today)$/i,
    /^(https:\/\/([^\.]*\.)?beautyhub\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?beautyhub\.th)$/i,
    /^(https:\/\/([^\.]*\.)?bebeautiful\.in)$/i,
    /^(https:\/\/([^\.]*\.)?bedheadrockaholic\.com)$/i,
    /^(https:\/\/([^\.]*\.)?benjerry\.co.kr)$/i,
    /^(https:\/\/([^\.]*\.)?benjerry\.de)$/i,
    /^(https:\/\/([^\.]*\.)?benjerry\.fr)$/i,
    /^(https:\/\/([^\.]*\.)?benjerry\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?benjerry\.se)$/i,
    /^(https:\/\/([^\.]*\.)?bigmilk\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?biotex\.dk)$/i,
    /^(https:\/\/([^\.]*\.)?blueband\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?brand\.com)$/i,
    /^(https:\/\/([^\.]*\.)?brand\.com)$/i,
    /^(https:\/\/([^\.]*\.)?breeze.co\.th)$/i,
    /^(https:\/\/([^\.]*\.)?breeze\.com.my)$/i,
    /^(https:\/\/([^\.]*\.)?breeze.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?breeze\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?breyers\.com)$/i,
    /^(https:\/\/([^\.]*\.)?breyers\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?bushells\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?calve\.com.tr)$/i,
    /^(https:\/\/([^\.]*\.)?calve\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?calve\.pt)$/i,
    /^(https:\/\/([^\.]*\.)?camay\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?cantikcitra\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?chile\.com)$/i,
    /^(https:\/\/([^\.]*\.)?chistaya-linia\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?cif.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?cif.com\.pt)$/i,
    /^(https:\/\/([^\.]*\.)?cif\.com.tr)$/i,
    /^(https:\/\/([^\.]*\.)?cif\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?cifchile\.cl)$/i,
    /^(https:\/\/([^\.]*\.)?cifclean\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?cifcream\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?citrathailand\.com)$/i,
    /^(https:\/\/([^\.]*\.)?cleanipedia\.com)$/i,
    /^(https:\/\/([^\.]*\.)?clear\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?clear\.com)$/i,
    /^(https:\/\/([^\.]*\.)?clear\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?clearad\.com.cn)$/i,
    /^(https:\/\/([^\.]*\.)?cleareffect\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?clearhaircare\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?clearhaircare\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?clearhaircare\.jp)$/i,
    /^(https:\/\/([^\.]*\.)?clearparis\.in)$/i,
    /^(https:\/\/([^\.]*\.)?clearparis\.my)$/i,
    /^(https:\/\/([^\.]*\.)?clearparis\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?clearparis\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?clinicplus\.in)$/i,
    /^(https:\/\/([^\.]*\.)?closeup\.com)$/i,
    /^(https:\/\/([^\.]*\.)?close-up\.com)$/i,
    /^(https:\/\/([^\.]*\.)?closeup\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?coccolino\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?colmans\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?comfort.co\.th)$/i,
    /^(https:\/\/([^\.]*\.)?comfort.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?comfort.com\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?comfort\.in)$/i,
    /^(https:\/\/([^\.]*\.)?comfortarabia\.com)$/i,
    /^(https:\/\/([^\.]*\.)?comfortworld\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?comfortworld.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?conimex\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?continental\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?continentalfoods\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?coral\.de)$/i,
    /^(https:\/\/([^\.]*\.)?creamsilk.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?cremissimo\.de)$/i,
    /^(https:\/\/([^\.]*\.)?cremogema\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?dawn\.com)$/i,
    /^(https:\/\/([^\.]*\.)?degree\.com)$/i,
    /^(https:\/\/([^\.]*\.)?deja\.com.ec)$/i,
    /^(https:\/\/([^\.]*\.)?dermalogica\.in)$/i,
    /^(https:\/\/([^\.]*\.)?devegetarischeslager\.be)$/i,
    /^(https:\/\/([^\.]*\.)?devegetarischeslager\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?domestos\.com)$/i,
    /^(https:\/\/([^\.]*\.)?domestos\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?domestos\.de)$/i,
    /^(https:\/\/([^\.]*\.)?domestos\.ua)$/i,
    /^(https:\/\/([^\.]*\.)?dove\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?dove\.com)$/i,
    /^(https:\/\/([^\.]*\.)?duschdas\.de)$/i,
    /^(https:\/\/([^\.]*\.)?egoparahombres\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?elidor\.com.tr)$/i,
    /^(https:\/\/([^\.]*\.)?eskinol.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?facebook\.com)$/i,
    /^(https:\/\/([^\.]*\.)?fairandlovely\.com.bd)$/i,
    /^(https:\/\/([^\.]*\.)?fairandlovely\.in)$/i,
    /^(https:\/\/([^\.]*\.)?findyourhappyplace\.in)$/i,
    /^(https:\/\/([^\.]*\.)?floraproactiv\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?floraproactiv\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?fluocaril\.com)$/i,
    /^(https:\/\/([^\.]*\.)?fluocaril\.es)$/i,
    /^(https:\/\/([^\.]*\.)?folicure\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?forcavitamina\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?frigo\.es)$/i,
    /^(https:\/\/([^\.]*\.)?gb\.se)$/i,
    /^(https:\/\/([^\.]*\.)?gcp\.com)$/i,
    /^(https:\/\/([^\.]*\.)?gelartier\.com)$/i,
    /^(https:\/\/([^\.]*\.)?glowandlovely\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?goodhumor\.com)$/i,
    /^(https:\/\/([^\.]*\.)?gromgelato\.com)$/i,
    /^(https:\/\/([^\.]*\.)?gustuldeacasa\.ro)$/i,
    /^(https:\/\/([^\.]*\.)?hairfashion\.me)$/i,
    /^(https:\/\/([^\.]*\.)?hairmeetwardrobe\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?hairmeetwardrobe\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?hairmeetwardrobe.in m.hairmeetwardrobe\.in)$/i,
    /^(https:\/\/([^\.]*\.)?hbicecream\.ie)$/i,
    /^(https:\/\/([^\.]*\.)?heladosholanda\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?heladospinguino\.com.ec)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.com)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.com.tr)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.cz)$/i,
    /^(https:\/\/([^\.]*\.)?hellmanns\.no)$/i,
    /^(https:\/\/([^\.]*\.)?herkessofraya\.com)$/i,
    /^(https:\/\/([^\.]*\.)?hertog\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?horlicks\.com.my)$/i,
    /^(https:\/\/([^\.]*\.)?houseoflux.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?impulsefragrances\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?impulsefragrances\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?indulekha.co\.in)$/i,
    /^(https:\/\/([^\.]*\.)?ingman\.com)$/i,
    /^(https:\/\/([^\.]*\.)?ingman\.fi)$/i,
    /^(https:\/\/([^\.]*\.)?intibiome\.com)$/i,
    /^(https:\/\/([^\.]*\.)?iubesteinghetata\.ro)$/i,
    /^(https:\/\/([^\.]*\.)?jawaranyapedas\.com)$/i,
    /^(https:\/\/([^\.]*\.)?kissan\.in)$/i,
    /^(https:\/\/([^\.]*\.)?klinex\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.be)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.cn)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.com)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.com)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.com)$/i,
    /^(https:\/\/([^\.]*\.)?knorr.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.hk)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.in)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.no)$/i,
    /^(https:\/\/([^\.]*\.)?knorr\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?knorrox\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?lakmeindia\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lebouchervegetarien\.be)$/i,
    /^(https:\/\/([^\.]*\.)?lesnoybalzam\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?leverdirect\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.cn)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.de)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.in)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.my)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoy\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?lifebuoyarabia\.com)$/i,
    /^(https:\/\/([^\.]*\.)?linic\.pt)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.cn)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.com.pe)$/i,
    /^(https:\/\/([^\.]*\.)?lipton.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.pk)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.se)$/i,
    /^(https:\/\/([^\.]*\.)?lipton\.ua)$/i,
    /^(https:\/\/([^\.]*\.)?liptoncoldbrew\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?liptonicetea\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lovebeautyandplanet\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lovebeautyandplanet.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?lovebeautyandplanet\.in)$/i,
    /^(https:\/\/([^\.]*\.)?lusso\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?lux\.cn)$/i,
    /^(https:\/\/([^\.]*\.)?lux\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lynxexpression\.com)$/i,
    /^(https:\/\/([^\.]*\.)?lynxformen\.com)$/i,
    /^(https:\/\/([^\.]*\.)?maeterra\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?magnaticecream\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?magnum\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?magnumicecream\.com)$/i,
    /^(https:\/\/([^\.]*\.)?maizena\.cl)$/i,
    /^(https:\/\/([^\.]*\.)?maizena\.com)$/i,
    /^(https:\/\/([^\.]*\.)?maizena.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?maizena\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?maizena\.es)$/i,
    /^(https:\/\/([^\.]*\.)?margarinaprimavera\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?marmite\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?mbww\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?mentadent\.it)$/i,
    /^(https:\/\/([^\.]*\.)?michiru\.com)$/i,
    /^(https:\/\/([^\.]*\.)?mimosin\.es)$/i,
    /^(https:\/\/([^\.]*\.)?missionsignal\.fr)$/i,
    /^(https:\/\/([^\.]*\.)?missionsignal\.fr)$/i,
    /^(https:\/\/([^\.]*\.)?molto\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?mondamin\.de)$/i,
    /^(https:\/\/([^\.]*\.)?myblackpearl\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?nameera\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?neutral\.dk)$/i,
    /^(https:\/\/([^\.]*\.)?neutral\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?Neutral\.no)$/i,
    /^(https:\/\/([^\.]*\.)?neutral\.se)$/i,
    /^(https:\/\/([^\.]*\.)?neutralsensitiveskin.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?nexxus\.com)$/i,
    /^(https:\/\/([^\.]*\.)?nicebynature\.com)$/i,
    /^(https:\/\/([^\.]*\.)?ola\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?ola\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?olly\.com)$/i,
    /^(https:\/\/([^\.]*\.)?olly.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?omo\.ch)$/i,
    /^(https:\/\/([^\.]*\.)?omo\.com)$/i,
    /^(https:\/\/([^\.]*\.)?omolavanderia\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?parogencyl\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pears\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pepsodent\.cl)$/i,
    /^(https:\/\/([^\.]*\.)?pepsodent\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pepsodent\.fi)$/i,
    /^(https:\/\/([^\.]*\.)?pepsodent\.in)$/i,
    /^(https:\/\/([^\.]*\.)?pepsodent\.se)$/i,
    /^(https:\/\/([^\.]*\.)?persil\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pfanni\.de)$/i,
    /^(https:\/\/([^\.]*\.)?pgtips\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?plant-line\.ro)$/i,
    /^(https:\/\/([^\.]*\.)?ponds\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?ponds\.com)$/i,
    /^(https:\/\/([^\.]*\.)?ponds.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?potnoodle\.com)$/i,
    /^(https:\/\/([^\.]*\.)?prodent\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?proderm\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?przepisy\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?psvietnam\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?pukka\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pukkaherbs\.com)$/i,
    /^(https:\/\/([^\.]*\.)?puredermshampoo\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pureleafprofessional\.com)$/i,
    /^(https:\/\/([^\.]*\.)?pureline\.com)$/i,
    /^(https:\/\/([^\.]*\.)?radox\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?radox\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?radox\.cz)$/i,
    /^(https:\/\/([^\.]*\.)?rajah\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?realhellmanns\.dk)$/i,
    /^(https:\/\/([^\.]*\.)?recipedia.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?redrose\.com)$/i,
    /^(https:\/\/([^\.]*\.)?rexona\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?rexona\.com)$/i,
    /^(https:\/\/([^\.]*\.)?rexona\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?rinso\.com)$/i,
    /^(https:\/\/([^\.]*\.)?robijn\.be)$/i,
    /^(https:\/\/([^\.]*\.)?robijndoetdewas\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?rossmann\.de)$/i,
    /^(https:\/\/([^\.]*\.)?royco\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?salada\.com)$/i,
    /^(https:\/\/([^\.]*\.)?savilemexico\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?savodobazenu\.cz)$/i,
    /^(https:\/\/([^\.]*\.)?schmidts\.com)$/i,
    /^(https:\/\/([^\.]*\.)?secretosdecocina\.com)$/i,
    /^(https:\/\/([^\.]*\.)?seda\.com.br)$/i,
    /^(https:\/\/([^\.]*\.)?sedal\.cl)$/i,
    /^(https:\/\/([^\.]*\.)?sedal\.com)$/i,
    /^(https:\/\/([^\.]*\.)?sedal.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?sedal\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?sedal\.com.pe)$/i,
    /^(https:\/\/([^\.]*\.)?sedal\.es)$/i,
    /^(https:\/\/([^\.]*\.)?selectaphilippines\.com)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgen\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.ae)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.ca)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.cl)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.cz)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.de)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.dk)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.fi)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.hu)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration.in\.th)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?seventhgeneration\.tw)$/i,
    /^(https:\/\/([^\.]*\.)?sharehappy\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?sheamoisture\.com)$/i,
    /^(https:\/\/([^\.]*\.)?shields\.com)$/i,
    /^(https:\/\/([^\.]*\.)?signal\.be)$/i,
    /^(https:\/\/([^\.]*\.)?signal\.com.eg)$/i,
    /^(https:\/\/([^\.]*\.)?signal\.sa)$/i,
    /^(https:\/\/([^\.]*\.)?signalchile\.com)$/i,
    /^(https:\/\/([^\.]*\.)?signalmaghreb\.com)$/i,
    /^(https:\/\/([^\.]*\.)?signalturkiye\.com)$/i,
    /^(https:\/\/([^\.]*\.)?signalweb\.cz)$/i,
    /^(https:\/\/([^\.]*\.)?signalweb\.hu)$/i,
    /^(https:\/\/([^\.]*\.)?signal-zahnpflege\.de)$/i,
    /^(https:\/\/([^\.]*\.)?silkyhands\.ru)$/i,
    /^(https:\/\/([^\.]*\.)?simple\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?simpleskincare\.com)$/i,
    /^(https:\/\/([^\.]*\.)?simpleskincare\.in)$/i,
    /^(https:\/\/([^\.]*\.)?sirkensingtons\.com)$/i,
    /^(https:\/\/([^\.]*\.)?skinmatters.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?skip\.com)$/i,
    /^(https:\/\/([^\.]*\.)?skip.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?skip\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?snuggle\.com.tw)$/i,
    /^(https:\/\/([^\.]*\.)?stives\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?stives\.com)$/i,
    /^(https:\/\/([^\.]*\.)?stives.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?stives\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?stives\.com.my)$/i,
    /^(https:\/\/([^\.]*\.)?stives.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?stives.com\.sg)$/i,
    /^(https:\/\/([^\.]*\.)?stivesbeauty\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?streetsicecream\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?streetsicecream\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?suave.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?sunlight\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?sunlight.com\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.co.id)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.com)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.com.my)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk.com\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.in)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.it)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilk\.pk)$/i,
    /^(https:\/\/([^\.]*\.)?sunsilkthailand\.com)$/i,
    /^(https:\/\/([^\.]*\.)?suredeodorant\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?Surf\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?surfdoprania\.pl)$/i,
    /^(https:\/\/([^\.]*\.)?surfexcel\.in)$/i,
    /^(https:\/\/([^\.]*\.)?swedishglace\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?tanyapepsodent\.com)$/i,
    /^(https:\/\/([^\.]*\.)?tazo\.com)$/i,
    /^(https:\/\/([^\.]*\.)?theaxeeffect.co\.in)$/i,
    /^(https:\/\/([^\.]*\.)?thevegetarianbutcher\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?thevegetarianbutcher\.de)$/i,
    /^(https:\/\/([^\.]*\.)?thevegetarianbutcher\.es)$/i,
    /^(https:\/\/([^\.]*\.)?thevegetarianbutcher\.pt)$/i,
    /^(https:\/\/([^\.]*\.)?timotei\.com)$/i,
    /^(https:\/\/([^\.]*\.)?toniandguy.com\.ph)$/i,
    /^(https:\/\/([^\.]*\.)?toniandguy-products\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?toniandguy-products\.com)$/i,
    /^(https:\/\/([^\.]*\.)?toniandguy-products\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?tresemme\.com)$/i,
    /^(https:\/\/([^\.]*\.)?unileverfoodsolutions\.gr)$/i,
    /^(https:\/\/([^\.]*\.)?unox\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?upro\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.cn)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.com)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.com.uy)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.in)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?vaseline\.se)$/i,
    /^(https:\/\/([^\.]*\.)?vaselinearabia\.com)$/i,
    /^(https:\/\/([^\.]*\.)?vasenol\.com)$/i,
    /^(https:\/\/([^\.]*\.)?via\.se)$/i,
    /^(https:\/\/([^\.]*\.)?vim\.com)$/i,
    /^(https:\/\/([^\.]*\.)?vim.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?vimvietnam\.vn)$/i,
    /^(https:\/\/([^\.]*\.)?viss\.de)$/i,
    /^(https:\/\/([^\.]*\.)?vivere.com\.ar)$/i,
    /^(https:\/\/([^\.]*\.)?vo5\.co.nz)$/i,
    /^(https:\/\/([^\.]*\.)?vo5\.co.uk)$/i,
    /^(https:\/\/([^\.]*\.)?vo5\.com.au)$/i,
    /^(https:\/\/([^\.]*\.)?vwash\.in)$/i,
    /^(https:\/\/([^\.]*\.)?walls\.com.my)$/i,
    /^(https:\/\/([^\.]*\.)?wallsicecream\.com)$/i,
    /^(https:\/\/([^\.]*\.)?wallsthailand\.com)$/i,
    /^(https:\/\/([^\.]*\.)?whatsfordinner\.co.za)$/i,
    /^(https:\/\/([^\.]*\.)?williams\.es)$/i,
    /^(https:\/\/([^\.]*\.)?yumos\.com)$/i,
    /^(https:\/\/([^\.]*\.)?zendium\.cl)$/i,
    /^(https:\/\/([^\.]*\.)?zendium\.dk)$/i,
    /^(https:\/\/([^\.]*\.)?zendium\.nl)$/i,
    /^(https:\/\/([^\.]*\.)?zest\.com.mx)$/i,
    /^(https:\/\/([^\.]*\.)?zwitsal\.be)$/i,
    /^(https:\/\/([^\.]*\.)?zwitsal\.nl)$/i,
]

export default cors_allowed_domain;
