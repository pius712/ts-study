const { body } = document;

let candidateArr: number[];
let arr: number[];

function chooseNum() {
  candidateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr = [];
  for (let i = 0; i < 3; i++) {
    // console.log(Math.floor(Math.random() * candidateArr.length));

    const chosen = candidateArr.splice(Math.floor(Math.random() * candidateArr.length), 1)[0];
    // console.log(chosen);
    arr.push(chosen);
  }
}

chooseNum();
console.log(arr);

const result = document.createElement('div')
const form = document.createElement('form');
const input = document.createElement('input');
const btn = document.createElement('button');

body.append(result);
body.append(form);
form.appendChild(input);
form.appendChild(btn);

btn.textContent = '입력'

let wrongCnt = 0;
form.addEventListener('submit', (e) => {

  e.preventDefault();

  let inputNumber = input.value;
  console.log('inputNumber', inputNumber);
  console.log(arr.join(''));
  if (inputNumber === arr.join('')) {


    result.textContent = '홈런';
    input.value = '';
    input.focus();
    chooseNum();
    wrongCnt = 0;
    setTimeout(() => {
      result.textContent = '';
    }, 2000);
  } else {
    const inputNumberArr = inputNumber.split('');
    let strike = 0;
    let ball = 0;
    wrongCnt++;
    if (wrongCnt > 10) {
      result.textContent = `정답은 ${inputNumber}입니다.`
      input.textContent = '';
      input.focus();
      chooseNum();
      wrongCnt = 0;
    } else {
      for (let i = 0; i < 3; i++) {
        if (Number(inputNumberArr[i]) === arr[i]) {
          strike++;
        } else if (arr.indexOf(Number(inputNumberArr[i])) > -1) {
          ball++;
        }

      }
    }
    result.textContent = `strike: ${strike}, ball: ${ball}`
  }
})
