var body = document.body;
var candidateArr;
var arr;
function chooseNum() {
    candidateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr = [];
    for (var i = 0; i < 3; i++) {
        // console.log(Math.floor(Math.random() * candidateArr.length));
        var chosen = candidateArr.splice(Math.floor(Math.random() * candidateArr.length), 1)[0];
        // console.log(chosen);
        arr.push(chosen);
    }
}
chooseNum();
console.log(arr);
var result = document.createElement('div');
var form = document.createElement('form');
var input = document.createElement('input');
var btn = document.createElement('button');
body.append(result);
body.append(form);
form.appendChild(input);
form.appendChild(btn);
btn.textContent = '입력';
var wrongCnt = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputNumber = input.value;
    console.log('inputNumber', inputNumber);
    console.log(arr.join(''));
    if (inputNumber === arr.join('')) {
        result.textContent = '홈런';
        input.value = '';
        input.focus();
        chooseNum();
        wrongCnt = 0;
        setTimeout(function () {
            result.textContent = '';
        }, 2000);
    }
    else {
        var inputNumberArr = inputNumber.split('');
        var strike = 0;
        var ball = 0;
        wrongCnt++;
        if (wrongCnt > 10) {
            result.textContent = "\uC815\uB2F5\uC740 " + inputNumber + "\uC785\uB2C8\uB2E4.";
            input.textContent = '';
            input.focus();
            chooseNum();
            wrongCnt = 0;
        }
        else {
            for (var i = 0; i < 3; i++) {
                if (Number(inputNumberArr[i]) === arr[i]) {
                    strike++;
                }
                else if (arr.indexOf(Number(inputNumberArr[i])) > -1) {
                    ball++;
                }
            }
        }
        result.textContent = "strike: " + strike + ", ball: " + ball;
    }
});
