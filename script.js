// The button that start the function to check the answer
const checkAnswer = document.querySelector("#checkAnswer");
// The paragraph that shows the questions
const showQuestion = document.querySelector("#showQuestion");
// The input type text that the user uses to enter their answer
const answerInput = document.querySelector("#answerInput");
// The paragraph that shows the result
const showResult = document.querySelector("#showResult");
// The paragraph that show the numer of tries
const numberOfTries = document.querySelector("#numberOfTries");

// Sets the variables för witch index of the array of questions the user currently is on, the number of tries and right answers
let witchQuestion = 0, tries = 0, rightAnswers = 0;

// The array of objects with questions and their answers
const questions = [
    {
        question: "Vad är Sveriges huvudstad", 
        answer: "Stockholm"}, 
    {
        question: "Hur många månar har jorden", 
        answer: "1"}, 
    {
        question: "Vad är månen gjord av", 
        answer: "ost"}, 
    {
        question: "Är jorden rund", 
        answer: "ja"}
];

// When the page loads displays the first question
showQuestion.innerHTML = questions[witchQuestion].question + "?";
// When the page loads changes the maxLength of the input text field to match the max lenght of the first answer
answerInput.maxLength = questions[witchQuestion].answer.length;

// When the checkAnswer button is clicked this function checks if the answer is right
checkAnswer.addEventListener("click", () => {
    // If the userinputs answer converted to lowercase is equal to the answer in lowercase then proced
    if (answerInput.value.toLowerCase() == questions[witchQuestion].answer.toLowerCase()) {
        // If question counter is equal to the last index of the array (if the answer was correct was just checked) display the results and disable the button
        if (witchQuestion == questions.length -1) {
            rightAnswers++;
            tries++;
            showResult.innerHTML = "Rätt svar! Det var sista frågan!";
            numberOfTries.innerHTML = "Du fick " + rightAnswers + " rätt på " + tries + " försök!";
            checkAnswer.innerHTML = "Börja om";
            // Restes all the values so it begins from the start again
            checkAnswer.addEventListener("click", () => {
                witchQuestion = 0;
                tries = 0;
                rightAnswers = 0;
                answerInput.value = "";
                answerInput.placeholder = "Skriv ditt svar här!";
                answerInput.maxLength = questions[witchQuestion].answer.length;
                showQuestion.innerHTML = questions[witchQuestion].question;
                numberOfTries.innerHTML = "Antal försök: " + tries;
                showResult.innerHTML = "";
            });
        // If it is not the last answer proced with showing the nextquestion
        } else {
            witchQuestion++;
            showResult.innerHTML = "Rätt svar! Kan du även nästa fråga?";
            answerInput.value = "";
            answerInput.placeholder = "Skriv in ditt nästa svar!";
            showQuestion.innerHTML = questions[witchQuestion].question + "?";
            answerInput.maxLength = questions[witchQuestion].answer.length;
            rightAnswers++;
            tries++;
            numberOfTries.innerHTML = "Antal försök: " + tries;
        }
    // if it is not the right answer display wrong answer and increment the tries variable
    } else {
        showResult.innerHTML = "Fel svar :( Försök igen!";
        tries++;
        numberOfTries.innerHTML = "Antal försök: " + tries;
    }
}); 