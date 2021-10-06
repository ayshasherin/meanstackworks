// // array of objects aan ee program
// var countries= [
//     {
//     "name": {
//     "common": "Ecuador",
//     "official": "Republic of Ecuador",
//     "nativeName": {
//     "spa": {
//     "official": "República del Ecuador",
//     "common": "Ecuador"
//     }
//     }
//     },
//     "tld": [
//     ".ec"
//     ],
//     "cca2": "EC",
//     "ccn3": "218",
//     "cca3": "ECU",
//     "cioc": "ECU",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//     "USD": {
//     "name": "United States dollar",
//     "symbol": "$"
//     }
//     },
//     "idd": {
//     "root": "+5",
//     "suffixes": [
//     "93"
//     ]
//     },
//     "capital": [
//     "Quito"
//     ],
//     "altSpellings": [
//     "EC",
//     "Republic of Ecuador",
//     "República del Ecuador"
//     ],
//     "region": "Americas",
//     "subregion": "South America",
//     "languages": {
//     "spa": "Spanish"
//     },
//     "translations": {
//     "ces": {
//     "official": "Ekvádorská republika",
//     "common": "Ekvádor"
//     },
//     "cym": {
//     "official": "Gweriniaeth Ecwador",
//     "common": "Ecwador"
//     },
//     "deu": {
//     "official": "Republik Ecuador",
//     "common": "Ecuador"
//     },
//     "est": {
//     "official": "Ecuadori Vabariik",
//     "common": "Ecuador"
//     },
//     "fin": {
//     "official": "Ecuadorin tasavalta",
//     "common": "Ecuador"
//     },
//     "fra": {
//     "official": "République de l'Équateur",
//     "common": "Équateur"
//     },
//     "hrv": {
//     "official": "Republika Ekvador",
//     "common": "Ekvador"
//     },
//     "hun": {
//     "official": "Ecuadori Köztársaság",
//     "common": "Ecuador"
//     },
//     "ita": {
//     "official": "Repubblica dell'Ecuador",
//     "common": "Ecuador"
//     },
//     "jpn": {
//     "official": "エクアドル共和国",
//     "common": "エクアドル"
//     },
//     "kor": {
//     "official": "에콰도르 공화국",
//     "common": "에콰도르"
//     },
//     "nld": {
//     "official": "Republiek Ecuador",
//     "common": "Ecuador"
//     },
//     "per": {
//     "official": "جمهوری اکوادور",
//     "common": "اکوادور"
//     },
//     "pol": {
//     "official": "Ekwador",
//     "common": "Ekwador"
//     },
//     "por": {
//     "official": "República do Equador",
//     "common": "Equador"
//     },
//     "rus": {
//     "official": "Республика Эквадор",
//     "common": "Эквадор"
//     },
//     "slk": {
//     "official": "Ekvádorská republika",
//     "common": "Ekvádor"
//     },
//     "spa": {
//     "official": "República del Ecuador",
//     "common": "Ecuador"
//     },
//     "swe": {
//     "official": "Republiken Ecuador",
//     "common": "Ecuador"
//     },
//     "urd": {
//     "official": "جمہوریہ ایکوڈور",
//     "common": "ایکواڈور"
//     },
//     "zho": {
//     "official": "厄瓜多尔共和国",
//     "common": "厄瓜多尔"
//     }
//     },
//     "latlng": [
//     -2,
//     -77.5
//     ],
//     "landlocked": false,
//     "borders": [
//     "COL",
//     "PER"
//     ],
//     "area": 276841,
//     "demonyms": {
//     "eng": {
//     "f": "Ecuadorean",
//     "m": "Ecuadorean"
//     },
//     "fra": {
//     "f": "Équatorienne",
//     "m": "Équatorien"
//     }
//     },
//     "flag": "🇪🇨",
//     "maps": {
//     "googleMaps": "https://goo.gl/maps/TbX8hUW4gcbRPZiK7",
//     "openStreetMaps": "https://www.openstreetmap.org/relation/108089"
//     },
//     "population": 17643060,
//     "flags": {
//     "svg": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
//     "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png"
//     }
//     },




// data ne transfer ie: from client to server cheyyaanaayittulla oru format aan JSON(javascript object notation) 
                                         //[there is also xml,GSON,Yamal]
// array,object data ne store cheyyaanaayittullathaan



// // country name 
// console.log(countries[0].name["common"]);
// var countr=countries.map(country=>country.name["common"])
// console.log(countr);


// // currencies and symbol
// console.log(countries[0].currencies["USD"].symbol);
// var symbol=countries.map(country=>country.currencies["USD"].symbol)
// console.log(symbol);



// // print population
// console.log(countries[0].population);
// var popu=countries.map(country=>country.population)
// console.log(popu);



var countries=[
    {"name":"Korea (Republic of)","topLevelDomain":[".kr"],"alpha2Code":"KR","alpha3Code":"KOR","callingCodes":["82"],"capital":"Seoul","altSpellings":["KR","Republic of Korea"],"subregion":"Eastern Asia","region":"Asia","population":51780579,"latlng":[37.0,127.5],"demonym":"South Korean","area":100210.0,"gini":31.3,"timezones":["UTC+09:00"],"borders":["PRK"],"nativeName":"대한민국","numericCode":"410","flags":{"svg":"https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg","png":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg.png"},"currencies":[{"code":"KRW","name":"South Korean won","symbol":"₩"}],"languages":[{"iso639_1":"ko","iso639_2":"kor","name":"Korean","nativeName":"한국어"}],"translations":{"br":"Coreia do Sul","pt":"Coreia do Sul","nl":"Zuid-Korea","hr":"Južna Koreja","fa":"کره شمالی","de":"Südkorea","es":"Corea del Sur","fr":"Corée du Sud","ja":"大韓民国","it":"Corea del Sud","hu":"Díl-Korea"},"flag":"https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg","cioc":"KOR","independent":true}]
       
    //,"currencies":[{"code":"KRW","name":"South Korean won","symbol":"₩"}],
    //country name
    console.log(countries[0].name);

    //capital
    console.log(countries[0].capital);

    //population
    console.log(countries[0].population);

    //lat long
    console.log(countries[0].latlng);

    //currencies
    console.log(countries[0].currencies[0].symbol);
   
    var symbol=countries.map(country=>[country.currencies[0].name,country.currencies[0].code])
    console.log(symbol);






