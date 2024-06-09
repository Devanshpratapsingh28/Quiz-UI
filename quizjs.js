const quizData = [
    {
        Question: "Who holds the record for the highest individual score in a single Test innings by an Indian cricketer?",
        a: "Sachin Tendulkar",
        b: "Virat Kohli",
        c: "VVS Laxman",
        d: "Virender Sehwag",
        correct: "d",
    },
    {
        Question: "The first non-Congress Prime Minister of India to serve three consecutive terms is?",
        a: "Morarji Desai",
        b: "Jawaharlal Nehru",
        c: "Narendra Modi",
        d: "Atal Bihari Vajpayee",
        correct: "c",
    },
    {
        Question: "Which Indian state is known for the 'Black Pagoda'?",
        a: "Tamil Nadu",
        b: "Karnataka",
        c: "Odisha",
        d: "West Bengal",
        correct: "c",
    },
    {
        Question: "What does the abbreviation 'CPU' stand for in computer terminology?",
        a: "Central Process Unit",
        b: "Central Processing Unit",
        c: "Computer Personal Unit",
        d: "Central Processor Unit",
        correct: "b",
    },
    {
        Question: "Which sector contributes the most to the Indian GDP?",
        a: "Agriculture",
        b: "Industry",
        c: "Services",
        d: "Manufacturing",
        correct: "c",
    },
    {
        Question: "Which of the following is a common algorithm used for classification tasks in data science?",
        a: "K-Means",
        b: "Linear Regression",
        c: "Decision Tree",
        d: "Principal Component Analysis",
        correct: "c",
    }
];

let index = 0;
let correctcount = 0;
let incorrectcount = 0;
let total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
let submitbutton = document.querySelector("#submit");

const loadQuestion = () => {
    if (total === index) {
        return quizEnd();
    }
    reset();
    const currentque = quizData[index];
    questionBox.innerHTML = `${index + 1}. ${currentque.Question}`;
    allInputs[0].nextElementSibling.innerText = currentque.a;
    allInputs[1].nextElementSibling.innerText = currentque.b;
    allInputs[2].nextElementSibling.innerText = currentque.c;
    allInputs[3].nextElementSibling.innerText = currentque.d;
};



const reset = () => {
    allInputs.forEach(
        (inputval) => {
            inputval.checked = false;
        }
    );
};

submitbutton.addEventListener("click", () => {
    const currentque = quizData[index];
    const ans = getAnswer();
    if (ans === undefined) {
        alert("Please select an answer before proceeding.");
        return;
    }
    if (ans === currentque.correct) {
        correctcount++;
    } else {
        incorrectcount++;
    }
    index++;
    loadQuestion();
});

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputval) => {
            if (inputval.checked) {
                ans = inputval.value;
            }
        }
    );
    return ans;
};

const quizEnd = () => {
    let selectbox=document.getElementsByClassName("container")[0];
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col" style="height: auto;">
            <h3 class="col1"> Quiz attempted succesfully, you've scored ${correctcount} out of ${total} </h3>
        </div>
    `
};
loadQuestion(index);