const fs = require('fs');
const path = require('path');

// المسار إلى ملف quiz.js
const quizFilePath = path.join(__dirname, 'quiz.js');

// دالة للتحقق من وجود دالة checkAnswer
function checkForCheckAnswerFunction(filePath) {
    try {
        // قراءة محتوى الملف
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // التحقق من وجود الدالة باستخدام تعبير منتظم
        const hasCheckAnswer = /function\s+checkAnswer\s*\(/.test(fileContent);

        return hasCheckAnswer ? 1 : 0; // إرجاع 1 إذا كانت الدالة موجودة، وإلا 0
    } catch (error) {
        console.error('Error reading the file:', error);
        return 0; // في حالة حدوث خطأ، نعتبر أن الدالة غير موجودة
    }
}

// حساب الدرجة
const score = checkForCheckAnswerFunction(quizFilePath);
console.log(`النتيجة: ${score}`);