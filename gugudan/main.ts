let num1: number = Math.ceil(Math.random() * 9);
let num2: number = Math.ceil(Math.random()) * 9;
let result = num1 * num2;

const div = document.createElement('div');
div.innerHTML = `${num1} X ${num2} = ?`
document.body.append(div);

const form = document.createElement('form');

const input = document.createElement('input');

const button = document.createElement('button');
button.innerHTML = '버튼임니다'

document.body.append(form);
form.appendChild(input);
form.appendChild(button);

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const resultDiv = document.createElement('div');
  if (parseInt(input.value) === result) {
    resultDiv.innerHTML = "성공";
  } else {
    resultDiv.innerHTML = "실패"
  }
  document.body.append(resultDiv);
  setTimeout(() => {
    resultDiv.remove();
  }, 2000);
  input.value = ""
  num1 = Math.ceil(Math.random() * 9);
  num2 = Math.ceil(Math.random()) * 9;
  result = num1 * num2;
  div.innerHTML = `${num1} X ${num2} = ?`
})