document.addEventListener('DOMContentLoaded', function() {
    // Your JSON data
    const data = [
        {
            "id": 1,
            "description": "Opis grafa. (Kaj predstavlja, iz kje so podatki) Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image_question": "images/Reasoning errors/Cherry picking/inflacija_narobe.png",
            "options": ["Selektivna izbira", "Napačna korelacija", "Manjkajoči podatki", "Obrnjena os", "Grafikon je pravilen"],
            "correctAnswer": "Selektivna izbira",
            "image_answer": "images/Reasoning errors/Cherry picking/inflacija_prav.png",
            "explanation": "Razlaga napake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "id": 2,
            "description": "Opis grafa. (Kaj predstavlja, iz kje so podatki) Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image_question": "images/Design violation/Inverted axis/invertY_narobe.png",
            "options": ["Napačna korelacija", "Manjkajoči podatki", "Obrnjena os", "Selektivna izbira", "Grafikon je pravilen"],
            "correctAnswer": "Obrnjena os",
            "image_answer": "images/Design violation/Inverted axis/invertY_prav.png",
            "explanation": "Razlaga napake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "id": 3,
            "description": "Opis grafa. (Kaj predstavlja, iz kje so podatki) Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image_question": "images/Context errors/Missing data/brez_naslova_prav.png",
            "options": ["Manjkajoči podatki","Selektivna izbira", "Napačna korelacija", "Obrnjena os", "Grafikon je pravilen"],
            "correctAnswer": "Grafikon je pravilen",
            "image_answer": null,
            "explanation": "Razlaga napake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ];


//variables
var numEements = 2; 
var score = 0; 

// Function to get two random questions from the data
function getTwoRandomQuestions(data) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numEements);
}

// Select elements to populate

//Progress bar
const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');

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

//ANSWER
const answerBlock = document.getElementById('answer');
const selectedOption = document.getElementById('selected-option');
const correctOption = document.getElementById('correct-option');
const answerDescription = document.getElementById('answer-description');
const leftTitle = document.getElementById('left-title');
const leftImage = document.getElementById('left-graph');
const rightTitle = document.getElementById('right-title');
const rightImage = document.getElementById('right-graph');
const goButton = document.getElementById('btn-go');

//SCORE
const scoreBlock = document.getElementById('score');
const scoreResult = document.getElementById('score-result');
const scoreDisplay1 = document.getElementById('scoreDisplay-1');
const scoreDisplay2 = document.getElementById('scoreDisplay-2');
const againButton = document.getElementById('btn-again');
const sglButton = document.getElementById('btn-SGL');

// Get two random questions
const [firstQuestion, secondQuestion] = getTwoRandomQuestions(data);
let currentQuestion = firstQuestion;


function showScore() {
    questionBlock.style.display = 'none';
    answerBlock.style.display = 'none';
    scoreBlock.style.display = 'block';

    scoreResult.textContent = score;

    console.log(bar1.style.backgroundColor);
    scoreDisplay1.textContent = firstQuestion.correctAnswer;
    scoreDisplay2.textContent = secondQuestion.correctAnswer;

    scoreDisplay1.style.backgroundColor = bar1.style.backgroundColor;
    scoreDisplay2.style.backgroundColor = bar2.style.backgroundColor;

    againButton.onclick = function() {
        window.location.reload();
    }
}

function showAnswer(selectedOptionText) {
    if (currentQuestion === firstQuestion) {
        // Check if the selected option is correct
        //console.log("--------------------------------------------------");
        //console.log(selectedOptionText);
        //console.log(currentQuestion.correctAnswer);
        if (selectedOptionText === currentQuestion.correctAnswer) {
            score++;
            bar1.style.backgroundColor = 'var(--color-4)'; 
        } else {
            bar1.style.backgroundColor = 'var(--color-1)'; 

        }

        // Hide question block and show answer block
        questionBlock.style.display = 'none';
        answerBlock.style.display = 'block';

        // Populate answer block 
        
        selectedOption.textContent = selectedOptionText;
        correctOption.textContent = currentQuestion.correctAnswer;
        answerDescription.textContent = currentQuestion.explanation;

        //Left side of quiz
        if(currentQuestion.correctAnswer === "Grafikon je pravilen"){ 
            leftTitle.textContent = "PRAVILEN GRAFIKON";
        } else {
            leftTitle.textContent = "NEPRAVILEN GRAFIKON";
        }
        leftImage.src = currentQuestion.image_question;

        //Right side of quiz
        if(currentQuestion.image_answer !== null){
            rightTitle.style.display = 'block';
            rightImage.style.display = 'block';
            rightImage.src = currentQuestion.image_answer;
        } else {
            rightTitle.style.display = 'none';
            rightImage.style.display = 'none';
        }

        goButton.onclick = function() {
            //showAnswer(option)
            answerBlock.style.display = 'none';
            questionBlock.style.display = 'block';
            currentQuestion = secondQuestion;
            populateQuestion(secondQuestion);
        }
    }


    if (currentQuestion === secondQuestion) {
        console.log("Second")

        if (selectedOptionText === currentQuestion.correctAnswer) {
            score++;
            bar2.style.backgroundColor = 'var(--color-4)'; 
        } else {
            bar2.style.backgroundColor = 'var(--color-1)'; 

        }

        // Hide question block and show answer block
        questionBlock.style.display = 'none';
        answerBlock.style.display = 'block';

        // Populate answer block 
        
        selectedOption.textContent = selectedOptionText;
        correctOption.textContent = currentQuestion.correctAnswer;
        answerDescription.textContent = currentQuestion.explanation;

        //Left side of quiz
        if(currentQuestion.correctAnswer === "Grafikon je pravilen"){ 
            leftTitle.textContent = "PRAVILEN GRAFIKON";
        } else {
            leftTitle.textContent = "NEPRAVILEN GRAFIKON";
        }
        leftImage.src = currentQuestion.image_question;

        //Right side of quiz
        if(currentQuestion.image_answer !== null){
            rightTitle.style.display = 'block';
            rightImage.style.display = 'block';
            rightImage.src = currentQuestion.image_answer;
        } else {
            rightTitle.style.display = 'none';
            rightImage.style.display = 'none';
        }

        goButton.onclick = function() {
            //showAnswer(option)
            showScore();
        }
    }


}

// Function to populate the elements with the question data
function populateQuestion(question) {
    questionImage.src = question.image_question;
    questionDescription.textContent = question.description;

    // Populate the buttons with the options
    question.options.forEach((option, index) => {
        if (buttons[index]) {
            buttons[index].textContent = option;
            buttons[index].onclick = function() {
                showAnswer(option)
            };
        }
    });
}

// Populate the first question
populateQuestion(firstQuestion);
});