document.addEventListener('DOMContentLoaded', function() { 
    // Data
    const data = [
        {
            id: "item1",
            image: "images/SGL/Item1.png",
            explanation: "Spodnji grafikon prikazuje odstotek ljudi, ki umrejo zaradi različnih vrst raka.",
            question: "Približno kolikšen odstotek ljudi, ki umrejo zaradi raka, umre zaradi raka B, raka C in raka D skupaj?",
        },
        {
            id: "item2",
            image: "images/SGL/Item2.png",
            explanation: "V reviji opazite dve reklami. Vsaka reklama promovira drugo zdravilo za zdravljene srčne bolezni. Obe reklami vključujeta grafikon, ki prikazuje učinkovitost zdravila v primerjavi s placebom.",
            question: "V primerjavi s placebom, katero zdravilo vodi do večjega upada odstotka bolnikov, ki umrejo?",
        },
        {
            id: "item3",
            image: "images/SGL/Item3.png",
            explanation: "Spodnji grafikon prikazuje število moških in žensk z boleznijo X. Na grafikonu je skupno 100 krogcev.",
            question: "Koliko več moških kot žensk je med 100 bolniki z boleznijo X?",
        },
        {
            id: "item4",
            image: "images/SGL/Item4.png",
            explanation: "V časopisu opazite dve reklami. Vsaka reklama promovira drugo zdravilo za kožno bolezen. Obe reklami vključujeta grafikon, ki prikazuje učinkovitost zdravljena skozi čas.",
            question: "Uporaba katerega zdravila vodi do večjega upada bolnih pacientov?",
        },
    ]      

//variables----------------------------------------------------------------------------
    let score = 0;

    //QUESTION 1
    const questionBlock1 = document.getElementById('question1');
    const input1 = document.getElementById('input-1');
    const btnGo1 = document.getElementById('btn-go-1');

    //QUESTION 2
    const questionBlock2 = document.getElementById('question2');
    const buttons2 = [
        document.getElementById('btn2-1'),
        document.getElementById('btn2-2'),
        document.getElementById('btn2-3'),
        document.getElementById('btn2-4'),
    ];

    //QUESTION 3
    const questionBlock3 = document.getElementById('question3');
    const input3 = document.getElementById('input-3');
    const btnGo3 = document.getElementById('btn-go-3');

    //QUESTION 4
    const questionBlock4 = document.getElementById('question4');
    const buttons4 = [
        document.getElementById('btn4-1'),
        document.getElementById('btn4-2'),
        document.getElementById('btn4-3'),
        document.getElementById('btn4-4'),
    ];

    //RESULTS
    const resultBlock = document.getElementById('result');
    const scoreREsult = document.getElementById('score-result');
    const buttonAgain = document.getElementById('btn-again');
    const scoreBetter = [
        document.getElementById('score-0'),
        document.getElementById('score-1'),
        document.getElementById('score-2'),
        document.getElementById('score-3'),
        document.getElementById('score-4'),
    ];
    const scoreExplain = [
        document.getElementById('result-0'),
        document.getElementById('result-1'),
        document.getElementById('result-2'),
        document.getElementById('result-3'),
        document.getElementById('result-4'),
    ];



//Functions ---------------------------------------------------------------------------------------------    
    function results() {
        questionBlock4.style.display = 'none';
        resultBlock.style.display = 'block';

        scoreREsult.textContent = score;
        scoreBetter[score].style.display = 'block';
        scoreExplain[score].style.display = 'block';

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        buttonAgain.onclick = function() {
            window.location.reload();
        };
    }

    function questionFour() {
        questionBlock3.style.display = 'none';
        questionBlock4.style.display = 'block';

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        buttons4.forEach(btn => {
            btn.addEventListener('click', event => {
                console.log(event.target.textContent);
                if (event.target.textContent === "Nemogoče je določiti") {
                    score++;
                }
                console.log(score);
                results()
           });
        });


    }

    function questionThree() {
        questionBlock2.style.display = 'none';
        questionBlock3.style.display = 'block';

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        btnGo3.onclick = function() {
            console.log(input3.value);
            if(input3.value){
                if (input3.value == 20) {
                    score++;
                }
                console.log(score);
                questionFour();
            }
        };

    }

    function questionTwo() {
        questionBlock1.style.display = 'none';
        questionBlock2.style.display = 'block';

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        buttons2.forEach(btn => {
            btn.addEventListener('click', event => {
                console.log(event.target.textContent);
                if (event.target.textContent === "Obe zdravili delujeta enako dobro") {
                    score++;
                }
                console.log(score);
                questionThree()
           });
        });

    }

    function questionOne() {
        btnGo1.onclick = function() {
            console.log(input1.value);
            if(input1.value){
                if (input1.value == 25 || input1.value == 24 || input1.value == 26) {
                    score++;
                }
                console.log(score);
                questionTwo();
            }
        };

    }

    questionOne();

});