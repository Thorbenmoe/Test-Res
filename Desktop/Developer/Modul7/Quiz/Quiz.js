let questions = [{
        "question": "Wer haftet in einer Kommanditgesellschaft?",
        "answer_1": "Der Komplementär",
        "answer_2": "Der Kommandist",
        "answer_3": "Der Kommunist",
        "answer_4": "Jeder",
        "right_answer": 1
    },
    {
        "question": "Was wird für die Gründung einer KG benötigt?",
        "answer_1": "Nur einen Kommandist und einen Komplementär",
        "answer_2": "Einen Kommandist und 20.000€ Eigenkapital",
        "answer_3": "Mindestens 2 Gesellschafter, darunter einen Kommandisten und einen Komplementär",
        "answer_4": "Ein Komplementär kann die KG schon alleine gründen",
        "right_answer": 3
    },
    {
        "question": "Wie hoch muss das Eigenkapital für die Gründung einer KG sein?",
        "answer_1": "Ein Eigenkapital ist nicht vorgeschrieben",
        "answer_2": "25.000€",
        "answer_3": "Der Kommandist und der Komplementär teilen sich zwingend die Kapitaleinlage",
        "answer_4": "15.000€, wobei mindestens 10.000€ vom Komplementär kommen müssen",
        "right_answer": 1
    },
    {
        "question": "Wer hat die Vollmacht?",
        "answer_1": "Der Komplementär",
        "answer_2": "Der Kommandist",
        "answer_3": "beide",
        "answer_4": "Der Kommandist,falls der Komplementär ausfällt",
        "right_answer": 1
    },
    {
        "question": "Was ist kein Auflösungsgrund?",
        "answer_1": "Eröffnung des Insolvenzverfahrens",
        "answer_2": "Auflösungsbeschluss der Gesellschafter",
        "answer_3": "Auflösung durch gerichtliche Entscheidung infolge einer Auflösungsklage",
        "answer_4": "Die in der Satzung angegebene Zeitspanne bis zur geplanten Auflösung läuft ab.",
        "right_answer": 4
    },

];



let currentQuestion = 0;
let quest_now = 1;
let right_all = 5;
let right_answerd = 0;

function init() {

    document.getElementById('question-length').innerHTML = `${questions.length}`;
    document.getElementById('question-now').innerHTML = `${quest_now}`;
    document.getElementById('right_all').innerHTML = `${right_all}`;
    document.getElementById('right_answerd').innerHTML = `${right_answerd}`;
    showQuestoins();
}

function showQuestoins() {
    let question = questions[currentQuestion];
    if (currentQuestion >= questions.length) {
        quest_now = 5;
        document.getElementById('endscreen').style = '';
        document.getElementById('questionbody').style = 'display:none';
    } else {

        document.getElementById('questtext').innerHTML = question["question"];
        document.getElementById('answer_1').innerHTML = question["answer_1"];
        document.getElementById('answer_2').innerHTML = question["answer_2"];
        document.getElementById('answer_3').innerHTML = question["answer_3"];
        document.getElementById('answer_4').innerHTML = question["answer_4"];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber', selectedQuestionNumber);
    console.log('current questoin is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        right_answerd++;
        console.log('Richtig!');
        document.getElementById(selection).parentNode.classList.add('bg-success');


    } else {
        console.log('Falsch!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    quest_now++;
    currentQuestion++;
    document.getElementById('next-btn').disabled = true;
    reset_answer();
    showQuestoins();
    init();
}

function reset_answer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}