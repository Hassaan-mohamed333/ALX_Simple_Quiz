const fs = require('fs');
const path = require('path');

// المسار إلى ملف quiz.js
const quizFilePath = path.join(__dirname, 'quiz.js');

// دالة للتحقق من وجود العناصر المطلوبة
function checkForCorrectAnswer(filePath) {
    try {
        // قراءة محتوى الملف
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // التحقق من وجود المتغير correctAnswer والقيمة 4
        const hasCorrectAnswer = /correctAnswer\s*=\s*4/.test(fileContent);

        return hasCorrectAnswer ? 1 : 0; // إرجاع 1 إذا كانت العناصر موجودة، وإلا 0
    } catch (error) {
        console.error('Error reading the file:', error);
        return 0; // في حالة حدوث خطأ، نعتبر أن العناصر غير موجودة
    }
}

// حساب الدرجة
const score = checkForCorrectAnswer(quizFilePath);
console.log(`النتيجة: ${score}`);