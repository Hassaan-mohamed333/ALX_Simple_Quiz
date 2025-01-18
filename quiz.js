// تعريف الدالة checkAnswer
function checkAnswer() {
    // تعريف الإجابة الصحيحة
    const correctAnswer = "4";

    // استرجاع الإجابة المختارة من قبل المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // التحقق من وجود إجابة مختارة
    if (userAnswer === undefined) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        document.getElementById("feedback").style.color = "red";
        return;
    }

    // مقارنة الإجابة المختارة بالإجابة الصحيحة
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

// إضافة مستمع حدث إلى زر "Submit Answer"
document.getElementById("submit-answer").addEventListener("click", checkAnswer);