var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random()) * 9;
var result = num1 * num2;
var div = document.createElement('div');
div.innerHTML = num1 + " X " + num2 + " = ?";
document.body.append(div);
var form = document.createElement('form');
var input = document.createElement('input');
var button = document.createElement('button');
button.innerHTML = '버튼임니다';
document.body.append(form);
form.appendChild(input);
form.appendChild(button);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var resultDiv = document.createElement('div');
    if (parseInt(input.value) === result) {
        resultDiv.innerHTML = "성공";
    }
    else {
        resultDiv.innerHTML = "실패";
    }
    document.body.append(resultDiv);
    setTimeout(function () {
        resultDiv.remove();
    }, 2000);
    input.value = "";
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random()) * 9;
    result = num1 * num2;
    div.innerHTML = num1 + " X " + num2 + " = ?";
});
