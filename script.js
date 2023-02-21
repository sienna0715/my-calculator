const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = document.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const display = document.querySelector('.calculator__display'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

function calculate(n1, operator, n2) {
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  let result = 0;
  
  // *****n1, n2은 문자열이기 때문에 숫자형으로 변환***
  if (operator === "+") {
    result = Number(n1) + Number(n2); 
  }
  else if (operator === "-") {
    result = Number(n1) - Number(n2);
  }
  else if (operator === "*") {
    result = Number(n1) * Number(n2);
  }
  else if (operator === "/") {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}


buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') { //클릭된 HTML 엘리먼트의 클래스 네임이 'number'라면
      // 화면에 0이라면 입력해줘 '또는' (4) 방금 누른 키가 연산자이면, 이제 내가 누를 새로운 숫자를 화면에 입력해줘!
      if (display.textContent === '0' || previousKey === 'operator') {
        display.textContent = buttonContent; // 내가 누른 값으로 변경해줘!
      } else {
        display.textContent = display.textContent + buttonContent; 
        // 현재 내용(display.textContent)에, 내가 지금 누른 것(buttonContent)을, 누적(+)시킵니다. (숫자를 여러번 입력하기 위해)
      }
      // 위 코드가 실행이 되고, 방금 누른 키가 어떤 종류인지 기억해야 함!
      previousKey = 'number'; // 방금 전에 누른 키를 의미함 (저장), 'number' 대신 'action' 가능
    }
    if (action === 'operator') {
      // (1) 내가 연산자를 누르는 순간, 지금 화면에 보이는(display.textContent) 첫 번째 숫자를 기억해줘!!!(저장)
      firstNum = display.textContent; 
      console.log(firstNum);
      console.log(buttonContent);
      // (2) 화면에 보여지지는 않지만, 저장은 되게 만들어야 함! (어떤 데이터를 저장하기 위해서는 변수에 할당하면 된다.)
      operatorForAdvanced = buttonContent; 
      // console.log(operatorForAdvanced);
      // (3) 방금 누른 키가 연산자(종류)였다는 것을 기억해줘야 함
      previousKey = 'operator'; // previousKey : (숫자, 연산자, enter 상관없이!) 방금 전에 누른 키를 의미함 (저장) 
    }
    if (action === 'clear') { // AC(초기화) 버튼을 누를 때
      // 다시 초기화(처음 상태) 해주면 된다!
      firstNum = undefined; 
      operatorForAdvanced = undefined;
      previousNum = undefined;
      display.textContent = '0';
      previousKey = 'clear';
      console.clear();
    }
    if (action === 'calculate') { // Enter(계산) 버튼을 누를 때
      previousNum = display.textContent; // 두번째 숫자는 현재 보여지고 있기 때문에
      display.textContent = calculate(firstNum, operatorForAdvanced, previousNum); 
      console.log(previousNum);
    }
  }
});
