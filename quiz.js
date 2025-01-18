document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-answer");
    const feedbackElement = document.getElementById("feedback");

    submitButton.addEventListener("click", function () {
        const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

        if (!selectedAnswer) {
            feedbackElement.textContent = "Please select an answer!";
            feedbackElement.style.color = "red";
            return;
        }

        if (selectedAnswer.value === "4") {
            feedbackElement.textContent = "Correct! 2 + 2 is indeed 4.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Incorrect. The correct answer is 4.";
            feedbackElement.style.color = "red";
        }
    });
});
