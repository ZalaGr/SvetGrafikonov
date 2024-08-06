
document.addEventListener('DOMContentLoaded', function() {
    // Your JSON data
    const data = [
        {
            id: 1,
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
                description: "Grafikon predstavlja podatke o letni temperaturi zraka na 2 m. Podatki so izmerjeni na postaji Bežigrad.",
                image_question: "images/Data errors/Cherry picking/temp_prav.png",
                image_answer: null,
                options: ["Moč besed", "Selektivna izbira", "Manjkajoči podatki", "Vizualna iluzija", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Uporablja povprečno temperaturo celega leta.",
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
                explanation: "Nepravilen grafikon uporablja selektivno izbrane podatke za prikaz bolj strmega trenda. Namerno zanemari podatke, ki kažejo, da mesečna inflacija spet pada.",
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
            id: 3, //obe verziji enaki ker je samo pravilna verzija
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
                explanation: "Na nepravilnem grafikonu je napačen prag, ki označuje ciljno inflacijo 6 %. Po podatkih ECB je ciljna inflacija 2 %. To vrsto manipulacije lahko opazimo le, če vemo, kakšni so resnični podatki.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Data errors/Arbitrary threshold/inflacija_prav.png",
                image_answer: null,
                options: ["Lažna korelacija", "Selektivna izbira", "Zmešnjava barv", "Izbira poljubnega praga", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Prag na grafikonu pravilno označuje ciljno inflacijo 2 %, kar je resnična ciljna inflacija po podatkih ECB.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            }
        },
        {
            id: 5,
            versionFalse: {
                description: "Grafikon prikazuje korelacijo med popularnostjo imena Elsa in številom iskalnih poizvedb za Malaysia Airlines.",
                image_question: "images/Data errors/False linkage/Elsa_MA.png",
                image_answer: null,
                options: ["Neenakomernost", "Vizualna iluzija", "Lažna korelacija", "Manjkajoči podatki", "Grafikon je pravilen"],
                correctAnswer: "Lažna korelacija",
                explanation: "Nepravilen grafikon prikazuje lažno korelacijo z uporabo dvojne osi in selektivne izbire. Avtor Tyler Vigen je na povezavo naletel, ko je primerjal ogromne količine podatkov. Lažna korelacija obstaja zaradi dveh nepovezanih dogodkov: leta 2014 je izginilo letalo MH370 družbe Malaysia Airlines in konec leta 2013 prej je izšel film Ledeno kraljestvo.",
                sourceURL: "https://www.tylervigen.com/spurious/correlation/6968_popularity-of-the-first-name-elsa_correlates-with_google-searches-for-malaysia-airlines",
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
            id: 6,
            versionFalse: {
                description: "Grafikon prikazuje povprečno število doseženih točk na končnem izpitu skozi leta.",
                image_question: "images/Data errors/Statistical nuance/točke_narobe.png",
                image_answer: "images/Data errors/Statistical nuance/točke_prav.png",
                options: ["Neenakomernost", "Dvojna os", "Izbira poljubnega praga", "Zanemarjanje podrobnosti", "Grafikon je pravilen"],
                correctAnswer: "Zanemarjanje podrobnosti",
                explanation: "Nepravilen grafikon prikazuje povprečne točke in ne upošteva, da se je po letu 2018 spremenil način ocenjevanja, saj se je število možnih točk iz 20 zmanjšalo na 10.",
                sourceURL: "",
                sourceName: "Izmišljeni podatki",
            },
            versionTrue: {
                description: "Grafikon prikazuje povprečno število doseženih točk na končnem izpitu skozi leta.",
                image_question: "images/Data errors/Statistical nuance/točke_prav.png",
                image_answer: null,
                options: ["Zanemarjanje podrobnosti", "Moč besed", "Vizualna iluzija", "Obrnjena os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij, saj za prikaz povprečnih doseženih točk uporablja procente namesto dejanskih točk. Ta pristop omogoča primerjavo rezultatov ne glede na spremembe v številu maksimalnih možnih točk.",
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
                explanation: "Nepravilen grafikon nejasno prikazuje podatke. Os je treba odsekati, da lahko razumemo predstavljeno informacijo na grafikonu.",
                sourceURL: "https://www.kaggle.com/datasets/burnoutminer/heights-and-weights-dataset",
                sourceName: "Kaggle",
            },
            versionTrue: {
                description: "Grafikon prikazuje korelacijo med višino in telesno težo.",
                image_question: "images/Design violation/Truncated axis/HxW_prav.png",
                image_answer: null,
                options: ["Obrnjena os", "Odrezana os", "Manjkajoči podatki", "Izbira poljubnega praga", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Kljub temu, da grafikon uporablja odrezano os, je pravilen. Cilj grafikonov je jasno podajanje informacij in v tem primeru to pomeni uporabiti odrezano os.",
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
                explanation: "Nepravilen grafikon z uporabo odrezane osi poudarja razliko med doseženimi glasovi strank. Ko uporabimo os, ki se začne pri 0, je razlika veliko manjša.",
                sourceURL: "https://www.dvk-rs.si/arhivi/dz2022/#/rezultati",
                sourceName: "Državna volilna komisija",
            },
            versionTrue: {
                description: "Grafikon prikazuje primerjavo doseženih glasov med gibanjem Svoboda in SDS na državnih volitvah 2022.",
                image_question: "images/Design violation/Truncated axis/majhnaY_prav.png",
                image_answer: null,
                options: ["Vizualna iluzija", "Izbira poljubnega praga", "Manjkajoči podatki", "Odrezana os", "Grafikon je pravilen"],
                correctAnswer: "Grafikon je pravilen",
                explanation: "Grafikon je pravilen in ne vsebuje manipulacij. Os se začne pri 0 in porikaže resnično razliko med doseženimi glasovi.",
                sourceURL: "https://www.dvk-rs.si/arhivi/dz2022/#/rezultati",
                sourceName: "Državna volilna komisija",
            }
        },

        {
            id: 9, //oboje false ker drugače je samo inflacija
            versionFalse: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Design violation/Truncated axis/velikaY_narobe.png",
                image_answer: "images/Design violation/Truncated axis/velikaY_prav.png",
                options: ["Nezanesljivi podatki", "Vizualna iluzija", "Odrezana os", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Vizualna iluzija",
                explanation: "Nepravilen grafikon z uporabo velikega merila na Y osi prikrije manjše razlike med točkami. Z uporabo velikega razpona vrednosti na Y-osi spremeni razmerje med osema.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            },
            versionTrue: {
                description: "Grafikon prikazuje podatke o mesečni inflaciji v Sloveniji.",
                image_question: "images/Design violation/Truncated axis/velikaY_narobe.png",
                image_answer: "images/Design violation/Truncated axis/velikaY_prav.png",
                options: ["Nezanesljivi podatki", "Vizualna iluzija", "Odrezana os", "Selektivna izbira", "Grafikon je pravilen"],
                correctAnswer: "Vizualna iluzija",
                explanation: "Nepravilen grafikon z uporabo velikega merila na Y osi prikrije manjše razlike med točkami. Z uporabo velikega razpona vrednosti na Y-osi spremeni razmerje med osema.",
                sourceURL: "https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/H281S.px/",
                sourceName: "SiStat",
            }
        },

    ];


    /*
    {
        id: 10,
        versionFalse: {
            description: "",
            image_question: "",
            image_answer: "",
            options: ["", "", "", "", "Grafikon je pravilen"],
            correctAnswer: "",
            explanation: "",
            sourceURL: "",
            sourceName: "",
        },
        versionTrue: {
            description: "",
            image_question: "",
            image_answer: "",
            options: ["", "", "", "", "Grafikon je pravilen"],
            correctAnswer: "",
            explanation: "",
            sourceURL: "",
            sourceName: "",
        }
    }, 




    */


//variables
var numEements = 6; 
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
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, numEements);
    console.log(selected);
    //Randomly choose true or false version (malo večja možnost za false version)
    return selected.map(obj => Math.random() >= 0.6 ? obj.versionTrue : obj.versionFalse);
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