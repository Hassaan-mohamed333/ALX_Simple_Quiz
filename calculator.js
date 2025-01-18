// تعريف الدوال الحسابية
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}

// استرجاع القيم من حقول الإدخال
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    console.log("Number 1:", number1, "Number 2:", number2); // التحقق من القيم
    return { number1, number2 };
}

// عرض النتيجة
function displayResult(result) {
    console.log("Result:", result); // التحقق من النتيجة
    document.getElementById('calculation-result').textContent = result;
}

// إضافة مستمعات الأحداث للأزرار
document.getElementById('add').addEventListener('click', function() {
    console.log("Add button clicked!"); // التحقق من النقر
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    console.log("Subtract button clicked!"); // التحقق من النقر
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    console.log("Multiply button clicked!"); // التحقق من النقر
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    console.log("Divide button clicked!"); // التحقق من النقر
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    displayResult(result);
});