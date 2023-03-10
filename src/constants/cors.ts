
    /* "https://app.cartwire.co",
    "https://stage.app.cartwire.co", */
    // /^(https:\/\/([^\.]*\.)?cartwire\.co)$/9i,

const cors_allowed_domain = [
    /^(https?:\/\/([a-z0-9]+[\.])*cartwire[\.]co)$/i,
    "https://localhost",
    
    /^(https?:\/\/([a-z0-9]+[\.])*unileversolutions\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*netlify\.app)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*adobeaemcloud\.com)$/i,

    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*benjerry\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearhaircare\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearhaircare\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearhaircare\.jp)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*dove\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*neutral\.dk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*recepedia\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ahcbeauty\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maille\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ahcbeauty\.com)$/i,

    /^(https?:\/\/([a-z0-9]+[\.])*acnesquad\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*aim\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ala\.com.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*albertobalsam\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*algida\.com.tr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*algida\.hu)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*algida\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*allthingshair\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*andrelon\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*aromatelrindemas\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*axe\.at)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*axe\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*axe\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*axe\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*baba\.hu)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*bailan\.com.tw)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*b-better\.today)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*beautyhub\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*beautyhub\.th)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*bebeautiful\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*bedheadrockaholic\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*benjerry\.co.kr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*benjerry\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*benjerry\.fr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*benjerry\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*benjerry\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*bigmilk\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*biotex\.dk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*blueband\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*brand\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*brand\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*breeze.co\.th)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*breeze\.com.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*breeze.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*breeze\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*breyers\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*breyers\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*bushells\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*calve\.com.tr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*calve\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*calve\.pt)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*camay\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cantikcitra\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*chile\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*chistaya-linia\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cif.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cif.com\.pt)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cif\.com.tr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cif\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cifchile\.cl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cifclean\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cifcream\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*citrathailand\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cleanipedia\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clear\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clear\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clear\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearad\.com.cn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cleareffect\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearhaircare\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearhaircare\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearhaircare\.jp)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearparis\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearparis\.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearparis\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clearparis\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*clinicplus\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*closeup\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*close-up\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*closeup\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*coccolino\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*colmans\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfort.co\.th)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfort.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfort.com\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfort\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfortarabia\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfortworld\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*comfortworld.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*conimex\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*continental\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*continentalfoods\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*coral\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*creamsilk.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cremissimo\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*cremogema\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*dawn\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*degree\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*deja\.com.ec)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*dermalogica\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*devegetarischeslager\.be)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*devegetarischeslager\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*domestos\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*domestos\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*domestos\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*domestos\.ua)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*dove\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*dove\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*duschdas\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*egoparahombres\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*elidor\.com.tr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*eskinol.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*facebook\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*fairandlovely\.com.bd)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*fairandlovely\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*findyourhappyplace\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*floraproactiv\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*floraproactiv\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*fluocaril\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*fluocaril\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*folicure\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*forcavitamina\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*frigo\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*gb\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*gcp\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*gelartier\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*glowandlovely\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*goodhumor\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*gromgelato\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*gustuldeacasa\.ro)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hairfashion\.me)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hairmeetwardrobe\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hairmeetwardrobe\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hairmeetwardrobe.in m.hairmeetwardrobe\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hbicecream\.ie)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*heladosholanda\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*heladospinguino\.com.ec)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.com.tr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.cz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hellmanns\.no)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*herkessofraya\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*hertog\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*horlicks\.com.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*houseoflux.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*impulsefragrances\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*impulsefragrances\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*indulekha.co\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ingman\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ingman\.fi)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*intibiome\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*iubesteinghetata\.ro)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*jawaranyapedas\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*kissan\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*klinex\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.be)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.cn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.hk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.no)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorr\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*knorrox\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lakmeindia\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lebouchervegetarien\.be)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lesnoybalzam\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*leverdirect\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.cn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoy\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lifebuoyarabia\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*linic\.pt)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.cn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.com.pe)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.pk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lipton\.ua)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*liptoncoldbrew\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*liptonicetea\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lovebeautyandplanet\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lovebeautyandplanet.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lovebeautyandplanet\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lusso\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lux\.cn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lux\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lynxexpression\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*lynxformen\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maeterra\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*magnaticecream\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*magnum\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*magnumicecream\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maizena\.cl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maizena\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maizena.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maizena\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*maizena\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*margarinaprimavera\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*marmite\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*mbww\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*mentadent\.it)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*michiru\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*mimosin\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*missionsignal\.fr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*missionsignal\.fr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*molto\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*mondamin\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*myblackpearl\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*nameera\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*neutral\.dk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*neutral\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*Neutral\.no)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*neutral\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*neutralsensitiveskin.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*nexxus\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*nicebynature\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ola\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ola\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*olly\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*olly.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*omo\.ch)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*omo\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*omolavanderia\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*parogencyl\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pears\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pepsodent\.cl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pepsodent\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pepsodent\.fi)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pepsodent\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pepsodent\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*persil\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pfanni\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pgtips\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*plant-line\.ro)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ponds\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ponds\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*ponds.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*potnoodle\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*prodent\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*proderm\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*przepisy\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*psvietnam\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pukka\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pukkaherbs\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*puredermshampoo\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pureleafprofessional\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*pureline\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*radox\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*radox\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*radox\.cz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*rajah\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*realhellmanns\.dk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*recipedia.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*redrose\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*rexona\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*rexona\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*rexona\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*rinso\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*robijn\.be)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*robijndoetdewas\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*rossmann\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*royco\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*salada\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*savilemexico\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*savodobazenu\.cz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*schmidts\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*secretosdecocina\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seda\.com.br)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sedal\.cl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sedal\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sedal.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sedal\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sedal\.com.pe)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sedal\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*selectaphilippines\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgen\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.ae)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.ca)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.cl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.cz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.dk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.fi)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.hu)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration.in\.th)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*seventhgeneration\.tw)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sharehappy\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sheamoisture\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*shields\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signal\.be)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signal\.com.eg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signal\.sa)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signalchile\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signalmaghreb\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signalturkiye\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signalweb\.cz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signalweb\.hu)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*signal-zahnpflege\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*silkyhands\.ru)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*simple\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*simpleskincare\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*simpleskincare\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sirkensingtons\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*skinmatters.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*skip\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*skip.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*skip\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*snuggle\.com.tw)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives\.com.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stives.com\.sg)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*stivesbeauty\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*streetsicecream\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*streetsicecream\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*suave.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunlight\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunlight.com\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.co.id)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.com.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk.com\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.it)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilk\.pk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*sunsilkthailand\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*suredeodorant\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*Surf\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*surfdoprania\.pl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*surfexcel\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*swedishglace\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*tanyapepsodent\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*tazo\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*theaxeeffect.co\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*thevegetarianbutcher\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*thevegetarianbutcher\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*thevegetarianbutcher\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*thevegetarianbutcher\.pt)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*timotei\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*toniandguy.com\.ph)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*toniandguy-products\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*toniandguy-products\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*toniandguy-products\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*tresemme\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*unileverfoodsolutions\.gr)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*unox\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*upro\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.cn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.com.uy)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaseline\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vaselinearabia\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vasenol\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*via\.se)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vim\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vim.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vimvietnam\.vn)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*viss\.de)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vivere.com\.ar)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vo5\.co.nz)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vo5\.co.uk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vo5\.com.au)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*vwash\.in)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*walls\.com.my)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*wallsicecream\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*wallsthailand\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*whatsfordinner\.co.za)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*williams\.es)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*yumos\.com)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*zendium\.cl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*zendium\.dk)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*zendium\.nl)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*zest\.com.mx)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*zwitsal\.be)$/i,
    /^(https?:\/\/([a-z0-9]+[\.])*zwitsal\.nl)$/i,
]

export default cors_allowed_domain;
