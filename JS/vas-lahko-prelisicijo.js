
document.addEventListener('DOMContentLoaded', function() {
    // Data
    const data = [
        {
            id: 1, //popolnoma enako, ker je samo temperatura že v id 13
            versionFalse: {
                description: "Grafikon predstavlja podatke o povprečni letni temperaturi zraka na 2 m. Podatki so izmerjeni na postaji Bežigrad.",
                image_question: "images/Data errors/Cherry picking/temp_narobe.png",
                image_answer: "images/Data errors/Cherry picking/temp_prav.png",
                options: ["Napačna korelacija", "Selektivna izbira", "Manjkajoči podatki", "Obrnjena os", "Grafikon je pravilen"],
                correctAnswer: "Selektivna izbira",
                explanation: "Nepravilen grafikon uporablja selektivno izbrane podatke za prikaz napačnega trenda. Na X-osi lahko vidimo, da za vsako leto prikazuje povprečno temperaturo drugega meseca.",
                sourceURL: "https://meteo.arso.gov.si/met/sl/archive/",
                sourceName: "ARSO",
            },
            versionTrue: {
                description: "Grafikon predstavlja podatke o povprečni letni temperaturi zraka na 2 m. Podatki so izmerjeni na postaji Bežigrad.",
                image_question: "images/Data errors/Cherry picking/temp_narobe.png",
                image_answer: "images/Data errors/Cherry picking/temp_prav.png",
                options: ["Napačna korelacija", "Selektivna izbira", "Manjkajoči podatki", "Obrnjena os", "Grafikon je pravilen"],
                correctAnswer: "Selektivna izbira",
                explanation: "Nepravilen grafikon uporablja selektivno izbrane podatke za prikaz napačnega trenda. Na X-osi lahko vidimo, da za vsako leto prikazuje povprečno temperaturo drugega meseca.",
                sourceURL: "https://meteo.arso.gov.si/met/sl/archive/",
                sourceName: "ARSO",
            }
        },
        {
            id: 2,
            versionFalse: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Data errors/Cherry picking/inflacija_narobe.png",
                image_answer: "images/Data errors/Cherry picking/inflacija_prav.png",
                options: ["Odrezana os", "Neenakomernost", "Uporaba opomb", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Selektivna izbira",
                explanation: "Nepravilen grafikon uporablja selektivno izbrane podatke za prikaz strmejšega trenda. Na grafikonu je prikazanih zelo malo podatkovnih točk, kar opozarja na možnost manipulacije.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Data errors/Cherry picking/inflacija_prav.png",
                image_answer: null,
                options: ["Selektivna izbira", "Odrezana os", "Neenakomernost", "Uporaba opomb", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Prikazuje mesečno inflacijo od leta 2004, ko je Slovenija uvedla Euro.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            }
        },
        {
            id: 3, //popolnoma enako, ker je samo pravilna verzija
            versionFalse: {
                description: "Grafikon prikazuje letno spremembo HICP (harmonizirani indeksi cen življenjskih potrebščin) v letu 2023.",
                image_question: "images/Data errors/Arbitrary threshold/HICP_dober_graf.png",
                image_answer: null,
                options: ["Dvojna os", "Manjkajoči podatki", "Izbira poljubnega praga", "Uporaba opomb", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Na grafikonu je označeno povprečna sprememba HICP, ki bralcu pomaga podatke posameznih držav umestiti v kontekst.",
                sourceURL: "https://ec.europa.eu/eurostat/databrowser/view/tec00118/default/bar?lang=en",
                sourceName: "EuroStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje letno spremembo HICP (harmonizirani indeksi cen življenjskih potrebščin) v letu 2023.",
                image_question: "images/Data errors/Arbitrary threshold/HICP_dober_graf.png",
                image_answer: null,
                options: ["Nezanesljivi podatki", "Neenakomernost", "Zmešnjava barv", "Zanemarjanje podrobnosti", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Na grafikonu je označeno povprečna sprememba HICP, ki bralcu pomaga podatke posameznih držav umestiti v kontekst.",
                sourceURL: "https://ec.europa.eu/eurostat/databrowser/view/tec00118/default/bar?lang=en",
                sourceName: "EuroStat",
            }
        },
        {
            id: 4,
            versionFalse: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Data errors/Arbitrary threshold/inflacija_narobe.png",
                image_answer: "images/Data errors/Arbitrary threshold/inflacija_prav.png",
                options: ["Izbira poljubnega praga", "Zmešnjava barv", "Uporaba opomb", "Nezanesljivi podatki", "Grafikon je pravilen"],
                correctAnswer: "Izbira poljubnega praga",
                explanation: "Na nepravilnem grafikonu je napačen prag, ki označuje ciljno inflacijo 6%. Po podatkih ECB je ciljna inflacija 2%. To vrsto manipulacije lahko opazimo le, če vemo, kakšni so resnični podatki.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Data errors/Arbitrary threshold/inflacija_prav.png",
                image_answer: null,
                options: ["Lažna korelacija", "Selektivna izbira", "Zmešnjava barv", "Izbira poljubnega praga", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Prag na grafikonu pravilno označuje ciljno inflacijo 2%, kar je resnična ciljna inflacija po podatkih ECB.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            }
        },
        {
            id: 5, //isti grafikon, različna odgovora, enkrat dvojna os, enkrat lažna korelacija
            versionFalse: {
                description: "Grafikon prikazuje korelacijo med popularnostjo imena Elsa in številom iskalnih poizvedb za Malaysia Airlines.",
                image_question: "images/Data errors/False linkage/Elsa_MA.png",
                image_answer: null,
                options: ["Neenakomernost", "Vizualna iluzija", "Lažna korelacija", "Manjkajoči podatki", "Grafikon je pravilen"],
                correctAnswer: "Lažna korelacija",
                explanation: "Nepravilen grafikon prikazuje lažno korelacijo z uporabo dvojne osi in selektivne izbire. Avtor Tyler Vigen je na povezavo naletel, ko je primerjal ogromne količine podatkov. Lažna korelacija obstaja zaradi dveh nepovezanih dogodkov: leta 2014 je izginilo letalo MH370 družbe Malaysia Airlines in konec leta 2013 je izšel film Ledeno kraljestvo.",
                sourceURL: "https://www.tylervigen.com/spurious/correlation/6968_popularity-of-the-first-name-elsa_correlates-with_google-searches-for-malaysia-airlines",
                sourceName: "Tyler Vigen",
            },
            versionTrue: {
                description: "Grafikon prikazuje korelacijo med popularnostjo imena Elsa in številom iskalnih poizvedb za Malaysia Airlines.",
                image_question: "images/Data errors/False linkage/Elsa_MA.png",
                image_answer: null,
                options: ["Dvojna os", "Vizualna iluzija", "Obrnjena os", "Manjkajoči podatki", "Grafikon je pravilen"],
                correctAnswer: "Dvojna os",
                explanation: "Nepravilen grafikon prikazuje lažno korelacijo. Avtor Tyler Vigen je na povezavo naletel, ko je primerjal ogromne količine podatkov. Lažna korelacija je možna zaradi uporabe dvojne osi in selektivne izbire podatkov.",
                sourceURL: "https://www.tylervigen.com/spurious/correlation/6968_popularity-of-the-first-name-elsa_correlates-with_google-searches-for-malaysia-airlines",
                sourceName: "Tyler Vigen",
            },
        },
        {
            id: 6,
            versionFalse: {
                description: "Grafikon prikazuje povprečno število doseženih točk na končnem izpitu čez leta.",
                image_question: "images/Data errors/Statistical nuance/točke_narobe.png",
                image_answer: "images/Data errors/Statistical nuance/točke_prav.png",
                options: ["Neenakomernost", "Dvojna os", "Izbira poljubnega praga", "Zanemarjanje podrobnosti", "Grafikon je pravilen"],
                correctAnswer: "Zanemarjanje podrobnosti",
                explanation: "Nepravilen grafikon prikazuje povprečne točke in ne upošteva, da se je po letu 2018 spremenil način ocenjevanja, saj se je število možnih točk iz 20 zmanjšalo na 10. Na napako nas opozori strm padec povprečnega števila točk leta 2019.",
                sourceURL: "",
                sourceName: "Izmišljeni podatki",
            },
            versionTrue: {
                description: "Grafikon prikazuje povprečno število doseženih točk na končnem izpitu čez leta.",
                image_question: "images/Data errors/Statistical nuance/točke_prav.png",
                image_answer: null,
                options: ["Zanemarjanje podrobnosti", "Moč besed", "Vizualna iluzija", "Obrnjena os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij, saj za prikaz povprečnih doseženih točk uporablja odstotke namesto dejanskih točk. Ta pristop omogoča primerjavo rezultatov ne glede na spremembe v številu maksimalnih možnih točk.",
                sourceURL: "",
                sourceName: "Izmišljeni podatki",
            }
        },
        {
            id: 7,
            versionFalse: {
                description: "Grafikon prikazuje korelacijo med višino in telesno težo.",
                image_question: "images/Design violation/Truncated axis/HxW_narobe.png",
                image_answer: "images/Design violation/Truncated axis/HxW_prav.png",
                options: ["Lažna korelacija", "Zmešnjava barv", "Odrezana os", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Odrezana os",
                explanation: "Nepravilen grafikon nejasno prikazuje podatke. " +
                "Os je potrebno odsekati, da lahko razumemo predstavljeno informacijo na grafikonu.",
                sourceURL: "https://www.kaggle.com/datasets/burnoutminer/heights-and-weights-dataset",
                sourceName: "Kaggle",
            },
            versionTrue: {
                description: "Grafikon prikazuje korelacijo med višino in telesno težo.",
                image_question: "images/Design violation/Truncated axis/HxW_prav.png",
                image_answer: null,
                options: ["Obrnjena os", "Odrezana os", "Manjkajoči podatki", "Izbira poljubnega praga", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Kljub temu, da grafikon uporablja odrezano os, je pravilen." +
                "Cilj grafikonov je jasno podajanje informacij in v tem primeru to pomeni uporabo odrezane osi.",
                sourceURL: "https://www.kaggle.com/datasets/burnoutminer/heights-and-weights-dataset",
                sourceName: "Kaggle",
            }
        },
        {
            id: 8,
            versionFalse: {
                description: "Grafikon prikazuje primerjavo doseženih glasov med gibanjem Svoboda in SDS na državnih volitvah 2022.",
                image_question: "images/Design violation/Truncated axis/majhnaY_narobe.png",
                image_answer: "images/Design violation/Truncated axis/majhnaY_prav.png",
                options: ["Odrezana os", "Vizualna iluzija", "Moč besed", "Neenakomernost", "Grafikon je pravilen"],
                correctAnswer: "Odrezana os",
                explanation: "Nepravilen grafikon z uporabo odrezane osi poudarja razliko med doseženimi glasovi strank. Navpična os se začne pri 20% namesto pri 0. Ko uporabimo os, ki se začne pri 0, je razlika veliko manjša.",
                sourceURL: "https://www.dvk-rs.si/arhivi/dz2022/#/rezultati",
                sourceName: "Državna volilna komisija",
            },
            versionTrue: {
                description: "Grafikon prikazuje primerjavo doseženih glasov med gibanjem Svoboda in SDS na državnih volitvah 2022.",
                image_question: "images/Design violation/Truncated axis/majhnaY_prav.png",
                image_answer: null,
                options: ["Vizualna iluzija", "Izbira poljubnega praga", "Manjkajoči podatki", "Odrezana os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Os se začne pri 0 in prikaže resnično razliko med doseženimi glasovi.",
                sourceURL: "https://www.dvk-rs.si/arhivi/dz2022/#/rezultati",
                sourceName: "Državna volilna komisija",
            }
        },

        {
            id: 9, //popolnoma enako, prav samo inflacija
            versionFalse: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Design violation/Visual illusion/velikaY_narobe.png",
                image_answer: "images/Design violation/Visual illusion/velikaY_prav.png",
                options: ["Nezanesljivi podatki", "Vizualna iluzija", "Odrezana os", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Vizualna iluzija",
                explanation: "Nepravilen grafikon z uporabo velikega merila na Y osi prikrije manjše razlike med točkami. Z uporabo velikega razpona vrednosti na Y-osi spremeni razmerje med osema.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Design violation/Visual illusion/velikaY_narobe.png",
                image_answer: "images/Design violation/Visual illusion/velikaY_prav.png",
                options: ["Nezanesljivi podatki", "Vizualna iluzija", "Odrezana os", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Vizualna iluzija",
                explanation: "Nepravilen grafikon z uporabo velikega merila na Y osi prikrije manjše razlike med točkami. Z uporabo velikega razpona vrednosti na Y-osi spremeni razmerje med osema.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            }
        },
        {
            id: 10,
            versionFalse: {
                description: "Grafikon prikazuje tržni delež operacijskih sistemov na vseh napravh decembra leta 2023.",
                image_question: "images/Design violation/Visual illusion/3D_narobe.png",
                image_answer: "images/Design violation/Visual illusion/3D_prav.png",
                options: ["Zmešnjava barv", "Moč besed", "Odrezana os", "Vizualna iluzija", "Grafikon je pravilen"],
                correctAnswer: "Vizualna iluzija",
                explanation: "Nepravilen grafikon uporablja 3D obliko tortnega grafikona. S spremembo perspektive zakrije realne razlike med posameznimi deli grafikona in poda napačne podatke.",
                sourceURL: "https://gs.statcounter.com/os-market-share",
                sourceName: "Statcounter",
            },
            versionTrue: {
                description: "Grafikon prikazuje tržni delež operacijskih sistemov na vseh napravh decembra leta 2023.",
                image_question: "images/Design violation/Visual illusion/3D_prav.png",
                image_answer: null,
                options: ["Vizualna iluzija", "Neenakomernost", "Zmešnjava barv", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Podatki so prikazani z 2D tortnim grafikonom. Različne operacijske sisteme predstavljajo različne barve, tako da je grafikon razumljiv.",
                sourceURL: "https://gs.statcounter.com/os-market-share",
                sourceName: "Statcounter",
            }
        }, 
        {
            id: 11, //isti grafikon, odgovora drugačna, enkrat dvojna os, enkrat lažna korelacija
            versionFalse: {
                description: "Grafikon prikazuje korelacijo med številom obiskovalcev muzejev v Sloveniji in številom ropov v Kaliforniji.",
                image_question: "images/Data errors/False linkage/muzej_ropi.png",
                image_answer: null,
                options: ["Moč besed", "Vizualna iluzija", "Zmešnjava barv", "Dvojna os", "Grafikon je pravilen"],
                correctAnswer: "Dvojna os",
                explanation: "Nepravilen grafikon z uporabo odrezane dvojne osi prikazuje lažno korelacijo. Korelacijo smo našli z vnosom podatkov o številu obiskovalcev in primerjavo z ogromno bazo podatkov.",
                sourceURL: "https://tylervigen.com/spurious/custom_correlation/830_visitors-to-museums-in-slovenia_correlates-with_robberies-in-california",
                sourceName: "Tyler Vigen",
            },
            versionTrue: {
                description: "Grafikon prikazuje korelacijo med številom obiskovalcev muzejev v Sloveniji in številom ropov v Kaliforniji.",
                image_question: "images/Data errors/False linkage/muzej_ropi.png",
                image_answer: null,
                options: ["Manjkajoči podatki", "Lažna korelacija", "Zmešnjava barv", "Neenakomernost", "Grafikon je pravilen"],
                correctAnswer: "Lažna korelacija",
                explanation: "Nepravilen grafikon z uporabo odrezane dvojne osi prikazuje lažno korelacijo. Korelacijo smo našli z vnosom podatkov o številu obiskovalcev in primerjavo z ogromno bazo podatkov.",
                sourceURL: "https://tylervigen.com/spurious/custom_correlation/830_visitors-to-museums-in-slovenia_correlates-with_robberies-in-california",
                sourceName: "Tyler Vigen",
            }
        }, 
        {
            id: 12,
            versionFalse: {
                description: "Grafikon prikazuje stopnjo brezposelnosti v Sloveniji.",
                image_question: "images/Design violation/Inverted axis/invertY_narobe.png",
                image_answer: "images/Design violation/Inverted axis/invertY_prav.png",
                options: ["Selektivna izbira", "Odrezana os", "Obrnjena os", "Neenakomernost", "Grafikon je pravilen"],
                correctAnswer: "Obrnjena os",
                explanation: "Nepravilen grafikon ima obrnjeno navpično os, saj se začne pri 12%. S tem obrne sporočilo grafikona.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/0762003S.px ",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje stopnjo brezposelnosti v Sloveniji.",
                image_question: "images/Design violation/Inverted axis/invertY_prav.png",
                image_answer: null,
                options: ["Obrnjena os", "Neenakomernost", "Izbira poljubnega praga", "Odrezana os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Osi nista odrezani ali obrnjeni, informacija je razumljivo podana.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/0762003S.px ",
                sourceName: "SiStat",
            }
        }, 
        {
            id: 13,
            versionFalse: {
                description: "Grafikon predstavlja podatke o povprečni letni temperaturi zraka na 2 m. Podatki so izmerjeni na postaji Bežigrad.",
                image_question: "images/Design violation/Inverted axis/temp_inverted.png",
                image_answer: "images/Design violation/Inverted axis/temp_inverted_prav.png",
                options: ["Obrnjena os", "Uporaba opomb", "Nezanesljivi podatki", "Vizualna iluzija", "Grafikon je pravilen"],
                correctAnswer: "Obrnjena os",
                explanation: "Nepravilen grafikon ima obrnjeno vodoravno os, saj se začne z letom 2023 in konča pri letu 1984. S tem obrne trend povprečne temperature.",
                sourceURL: "https://meteo.arso.gov.si/met/sl/archive/",
                sourceName: "ARSO",
            },
            versionTrue: {
                description: "Grafikon predstavlja podatke o povprečni letni temperaturi zraka na 2 m. Podatki so izmerjeni na postaji Bežigrad.",
                image_question: "images/Design violation/Inverted axis/temp_inverted_prav.png",
                image_answer: null,
                options: ["Vizualna iluzija", "Manjkajoči podatki", "Moč besed", "Obrnjena os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Nazorno prikaže naraščajoči trend povprečne letne temperature.",
                sourceURL: "https://meteo.arso.gov.si/met/sl/archive/",
                sourceName: "ARSO",
            }
        }, 
        {
            id: 14,
            versionFalse: {
                description: "Grafikon prikazuje povprečno neto plačo leta 2023 po občinah.",
                image_question: "images/Design violation/Inconsistency/binns.png",
                image_answer: "images/Design violation/Inconsistency/prav.png",
                options: ["Nezanesljivi podatki", "Vizualna iluzija", "Lažna korelacija", "Neenakomernost", "Grafikon je pravilen"],
                correctAnswer: "Neenakomernost",
                explanation: "Nepravilen grafikon z zemljevidom uporablja neenakomerne skupine in s tem skrije podrobnosti. Svetlo zelena kategorija zajema vse vrednosti med 1200€ in 1550€, kar je veliko večji razpon od ostalih kategorij.",
                sourceURL: "https://gis.stat.si ",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje povprečno neto plačo leta 2023 po občinah.",
                image_question: "images/Design violation/Inconsistency/prav.png",
                image_answer: null,
                options: ["Neenakomernost", "Manjkajoči podatki", "Vizualna iluzija", "Izbira poljubnega praga", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Zajema 5 kategorij, ki obsegajo primerljivo število vrednosti. Najnižje vrednosti so rdeče barve, najvišje pa zelene.",
                sourceURL: "https://gis.stat.si ",
                sourceName: "SiStat",
            }
        }, 
        {
            id: 15,
            versionFalse: {
                description: "Grafikon prikazuje število prenočitev tujih in domačih turistov v Sloveniji.",
                image_question: "images/Design violation/Inconsistency/prenocisca_narobe.png",
                image_answer: "images/Design violation/Inconsistency/prenocisca_prav.png",
                options: ["Moč besed", "Odrezana os", "Neenakomernost", "Zanemarjanje podrobnosti", "Grafikon je pravilen"],
                correctAnswer: "Neenakomernost",
                explanation: "Nepravilen grafikon prikazuje podatke z neenakomernimi skupinami. Skupine zajemajo skupne podatke razpona več let, zato jih ne moremo primerjati.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/2164430S.px/",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje število prenočitev tujih in domačih turistov v Sloveniji.",
                image_question: "images/Design violation/Inconsistency/prenocisca_prav.png",
                image_answer: null,
                options: ["Zanemarjanje podrobnosti", "Neenakomernost", "Uporaba opomb", "Odrezana os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Število prenočišč v vseh namestitvah prikazuje po letih, zato je grafikon pregleden.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/2164430S.px/",
                sourceName: "SiStat",
            }
        }, 
        {
            id: 16, //dve različni verziji, pravilna verzija je v id 14
            versionFalse: {
                description: "Grafikon prikazuje povprečno neto plačo leta 2023 po občinah.",
                image_question: "images/Design violation/Color mess/mix.png",
                image_answer: "images/Design violation/Inconsistency/prav.png",
                options: ["Dvojna os", "Zmešnjava barv", "Vizualna iluzija", "Zanemarjanje podrobnosti", "Grafikon je pravilen"],
                correctAnswer: "Zmešnjava barv",
                explanation: "Nepravilen grafikon uporablja različne barve, ki ne tvorijo gradienta. To pomeni, da težje opazimo spremembo med sosednjima kategorijama, kar naredi grafikon manj pregleden.",
                sourceURL: "https://gis.stat.si ",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje povprečno neto plačo leta 2023 po občinah.",
                image_question: "images/Design violation/Color mess/red.png",
                image_answer: "images/Design violation/Inconsistency/prav.png",
                options: ["Zmešnjava barv", "Neenakomernost", "Vizualna iluzija", "Lažna korelacija", "Grafikon je pravilen"],
                correctAnswer: "Zmešnjava barv",
                explanation: "Nepravilen grafikon ignorira pričakovanje bralca, ki pozitivno vrednost povezuje z zeleno barvo in negativno z rdečo. Večina oseb povezuje višjo neto plačo s pozitivnimi občutki.",
                sourceURL: "https://gis.stat.si ",
                sourceName: "SiStat",
            }
        }, 
        {
            id: 17, //popolnoma enako, ker true v id 10
            versionFalse: {
                description: "Grafikon prikazuje tržni delež operacijskih sistemov na vseh napravah decembra leta 2023.",
                image_question: "images/Design violation/Color mess/tortni_narobe.png",
                image_answer: "images/Design violation/Color mess/tortni_prav.png",
                options: ["Manjkajoči podatki", "Selektivna izbira", "Zmešnjava barv", "Vizualna iluzija", "Grafikon je pravilen"],
                correctAnswer: "Zmešnjava barv",
                explanation: "Nepravilen grafikon za prikaz podatkov uporablja zelo podobne barvne odtenke. S tem postane manj pregleden in težko razumljiv.",
                sourceURL: "https://gs.statcounter.com/os-market-share",
                sourceName: "Statcounter",
            },
            versionTrue: {
                description: "Grafikon prikazuje tržni delež operacijskih sistemov na vseh napravah decembra leta 2023.",
                image_question: "images/Design violation/Color mess/tortni_narobe.png",
                image_answer: "images/Design violation/Color mess/tortni_prav.png",
                options: ["Manjkajoči podatki", "Selektivna izbira", "Zmešnjava barv", "Vizualna iluzija", "Grafikon je pravilen"],
                correctAnswer: "Zmešnjava barv",
                explanation: "Nepravilen grafikon za prikaz podatkov uporablja zelo podobne barvne odtenke. S tem postane manj pregleden in težko razumljiv.",
                sourceURL: "https://gs.statcounter.com/os-market-share",
                sourceName: "Statcounter",
            }
        }, 
        {
            id: 18,
            versionFalse: {
                description: "Grafikon prikazuje število obiskovalcev muzejev v Sloveniji.",
                image_question: "images/Design violation/Missing data/brez_naslova_narobe.png",
                image_answer: "images/Design violation/Missing data/brez_naslova_prav.png",
                options: ["Neenakomernost", "Lažna korelacija", "Odrezana os", "Manjkajoči podatki", "Grafikon je pravilen"],
                correctAnswer: "Manjkajoči podatki",
                explanation: "Nepravilen grafikon ne vsebuje naslova grafikona in osi. Brez razlage bralec ne more ugotoviti, kaj grafikon prikazuje.",
                sourceURL: "https://tylervigen.com/spurious/custom_correlation/830_visitors-to-museums-in-slovenia_correlates-with_robberies-in-california",
                sourceName: "Tyler Vigen",
            },
            versionTrue: {
                description: "Grafikon prikazuje število obiskovalcev muzejev v Sloveniji.",
                image_question: "images/Design violation/Missing data/brez_naslova_prav.png",
                image_answer: null,
                options: ["Dvojna os", "Manjkajoči podatki", "Lažna korelacija", "Vizualna iluzija", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Uporablja primerno merilo za prikazane podatke in vsebuje vse potrebne elemente grafikona.",
                sourceURL: "https://tylervigen.com/spurious/custom_correlation/830_visitors-to-museums-in-slovenia_correlates-with_robberies-in-california",
                sourceName: "Tyler Vigen",
            }
        }, 
        {
            id: 19,
            versionFalse: {
                description: "Grafikon prikazuje število pridobljenih mandatov strank na državnih volitvah 2022.",
                image_question: "images/Design violation/Missing data/volitve_narobe.png",
                image_answer: "images/Design violation/Missing data/volitve_prav.png",
                options: ["Manjkajoči podatki", "Zmešnjava barv", "Zanemarjanje podrobnosti", "Izbira poljubnega praga", "Grafikon je pravilen"],
                correctAnswer: "Manjkajoči podatki",
                explanation: "Nepravilen grafikon ne vsebuje legende. Bralec ne more razbrati števila dobljenih mandatov posameznih strank.",
                sourceURL: "https://www.dvk-rs.si/arhivi/dz2022/#/rezultati",
                sourceName: "Državna volilna komisija",
            },
            versionTrue: {
                description: "Grafikon prikazuje število pridobljenih mandatov strank na državnih volitvah 2022.",
                image_question: "images/Design violation/Missing data/volitve_prav.png",
                image_answer: null,
                options: ["Manjkajoči podatki", "Lažna korelacija", "Zanemarjanje podrobnosti", "Zmešnjava barv", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Vsebuje vse potrebne elemente grafikona in število mandatov prikazuje z uporabo odstotkov.",
                sourceURL: "https://www.dvk-rs.si/arhivi/dz2022/#/rezultati",
                sourceName: "Državna volilna komisija",
            }
        }, 
    ];


// 34 različnih vprašanj

//variables
var numElements = 6; 
let score = 0;
let currentQuestionIndex = 0;

// Select elements to populate
//QUESTION
const questionBlock = document.getElementById('question');
const questionImage = document.getElementById('question-image');
const questionDescription = document.getElementById('question-description');
const buttons = [
    document.getElementById('btn-1'),
    document.getElementById('btn-2'),
    document.getElementById('btn-3'),
    document.getElementById('btn-4'),
    document.getElementById('btn-5')
];

//SOURCE
const source1 = document.getElementById('source1');
const source2 = document.getElementById('source2');

//ANSWER
const answerBlock = document.getElementById('answer');
const result1 = document.getElementById('result-1');
const selectedOption = document.getElementById('selected-option');
const correctOption = document.getElementById('correct-option');
const result2 = document.getElementById('result-2');
const selectedOption2 = document.getElementById('selected-option-2');
const correctOption2 = document.getElementById('correct-option-2');
const answerDescription = document.getElementById('answer-description');
const leftTitle = document.getElementById('left-title');
const leftImage = document.getElementById('left-graph');
const rightTitle = document.getElementById('right-title');
const rightImage = document.getElementById('right-graph');
const goButton = document.getElementById('btn-go');

//PROGRESS BAR
const progressBarElements = [
    document.getElementById('bar-1'),
    document.getElementById('bar-2'),
    document.getElementById('bar-3'),
    document.getElementById('bar-4'),
    document.getElementById('bar-5'),
    document.getElementById('bar-6')
];

//SCORE
const scoreBlock = document.getElementById('score');
const scoreResult = document.getElementById('score-result');
const againButton = document.getElementById('btn-again');
const sglButton = document.getElementById('btn-SGL');
const scoreDisplayElements = [
    document.getElementById('scoreDisplay-1'),
    document.getElementById('scoreDisplay-2'),
    document.getElementById('scoreDisplay-3'),
    document.getElementById('scoreDisplay-4'),
    document.getElementById('scoreDisplay-5'),
    document.getElementById('scoreDisplay-6')
];



//---------------------------------------------------------------------------------------------
//Choose random questions



function getRandomQuestions(data){
    // Shuffle array
    const shuffled = data.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements
    let selected = shuffled.slice(0, numElements);
    console.log(selected);
    // Randomly choose true or false version of the question
    return selected.map(obj => Math.random() >= 0.65 ? obj.versionTrue : obj.versionFalse);
}

// Get 6 random questions
const selectedQuestions = getRandomQuestions(data);
let currentQuestion = selectedQuestions[currentQuestionIndex];
console.log(selectedQuestions);






//---------------------------------------------------------------------------------------------

//Show score block
function showScore() {
    // Populate score
    scoreResult.textContent = score;

    selectedQuestions.forEach((question, index) => {
        scoreDisplayElements[index].textContent = question.correctAnswer;
        scoreDisplayElements[index].style.backgroundColor = progressBarElements[index].style.backgroundColor;
    });

    // Hide answer block and show score block
    scoreBlock.style.display = 'block';
    questionBlock.style.display = 'none';
    answerBlock.style.display = 'none';

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    againButton.onclick = function() {
        window.location.reload();
    };
}

//Show answer to question and populate it
function showAnswer(selectedOptionText) {
    //count score, color progressBar
    if (selectedOptionText === currentQuestion.correctAnswer) {
        score++;
        progressBarElements[currentQuestionIndex].style.backgroundColor = 'var(--color-green)';
    } else {
        progressBarElements[currentQuestionIndex].style.backgroundColor = 'var(--color-red)';
    }

    // Populate answer block
    selectedOption.textContent = selectedOptionText;
    correctOption.textContent = currentQuestion.correctAnswer;
    selectedOption2.textContent = selectedOptionText;
    correctOption2.textContent = currentQuestion.correctAnswer;
    answerDescription.textContent = currentQuestion.explanation;

    // Left side of quiz
    if (currentQuestion.correctAnswer === "Grafikon je pravilen") { 
        leftTitle.textContent = "PRAVILEN GRAFIKON";
    } else {
        leftTitle.textContent = "NEPRAVILEN GRAFIKON";
    }
    leftImage.src = currentQuestion.image_question;

    
    if (currentQuestion.sourceURL) {
        source2.href = currentQuestion.sourceURL;
        source2.textContent = currentQuestion.sourceName;
    } else {
        source2.removeAttribute('href');
        source2.textContent = currentQuestion.sourceName;
    }


    // Right side of quiz
    if (currentQuestion.image_answer !== null) {
        rightTitle.style.display = 'block';
        rightImage.style.display = 'block';
        rightImage.src = currentQuestion.image_answer;

        result1.style.display = 'block';
        result2.style.display = 'none';
    } else {
        rightTitle.style.display = 'none';
        rightImage.style.display = 'none';

        result1.style.display = 'none';
        result2.style.display = 'block';
    }

    // Hide question block and show answer block
    answerBlock.style.display = 'block';
    questionBlock.style.display = 'none';

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    //Nadaljuj button pressed
    goButton.onclick = function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            currentQuestion = selectedQuestions[currentQuestionIndex];
            showQuestion(currentQuestion);
        } else { 
            //If end of quiz
            showScore();
        }
    };
}

//Show question block and populate
function showQuestion() {
    questionImage.src = currentQuestion.image_question;
    questionDescription.textContent = currentQuestion.description;


    if (currentQuestion.sourceURL) {
        source1.href = currentQuestion.sourceURL;
        source1.textContent = currentQuestion.sourceName;
    } else {
        source1.removeAttribute('href');
        source1.textContent = currentQuestion.sourceName;
    }

    // Populate the buttons with the options
    currentQuestion.options.forEach((option, index) => {
        if (buttons[index]) {
            buttons[index].textContent = option;
            buttons[index].onclick = function() {
                showAnswer(option);
            };
        }
    });

    answerBlock.style.display = 'none';
    questionBlock.style.display = 'block';

    // Scroll to the top of the page
    window.scrollTo(0, 0);
}

showQuestion();

});