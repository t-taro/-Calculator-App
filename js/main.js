'use strict'

{
  const btn = document.querySelectorAll('.container > div');
  let inputValue = '';
  let beforePlusValue = 0;
  let beforeMinusValue = 0;
  let beforeMultiplyValue = 0;
  let beforeDivideValue = 0;
  let result = 0;

  function pressClearBtn(){
    result = 0;
    inputValue = '';
    beforePlusValue = 0;
    beforeMinusValue = 0;
    beforeMultiplyValue = 0;
    beforeDivideValue = 0;
    btn[10].textContent = '0';
  };

  function plusCalc() {
    if (inputValue === '' && result === 0){
      return;
    } else if (inputValue === '' && result !== 0) {
      beforePlusValue = result;
      return;
    } else if (inputValue !== 0 && result === 0) {
      beforePlusValue = parseFloat(inputValue,10);
      result = beforePlusValue;
      inputValue = '';
    } else if (inputValue !== 0 && result !== 0) {
      beforePlusValue = parseFloat(inputValue,10);
      result += beforePlusValue;
      btn[10].textContent = result;
      inputValue = '';
    };
  };

  function minusCalc() {
    if (inputValue === '' && result === 0) {
      return;
    } else if (inputValue === '' && result !== 0) {
      beforeMinusValue = result;
      return;
    } else if (inputValue !== 0 && result === 0) {
      beforeMinusValue = parseFloat(inputValue, 10);
      result = beforeMinusValue;
      inputValue = '';
    } else if (inputValue !== 0 && result !== 0) {
      beforeMinusValue = parseFloat(inputValue, 10);
      result -= beforeMinusValue;
      btn[10].textContent = result;
      inputValue = '';
    };
  };

  function multiplyCalc() {
    if (inputValue === '' && result === 0) {
      return;
    } else if (inputValue === '' && result !== 0) {
      beforeMultiplyValue = result;
      return;
    } else if (inputValue !== 0 && result === 0) {
      beforeMultiplyValue = parseFloat(inputValue, 10);
      result = beforeMultiplyValue;
      inputValue = '';
    } else if (inputValue !== 0 && result !== 0) {
      beforeMultiplyValue = parseFloat(inputValue, 10);
      result = result * beforeMultiplyValue;
      btn[10].textContent = result;
      inputValue = '';
    };
  };

  function divideCalc() {
    if (inputValue === '' && result === 0) {
      return;
    } else if (inputValue === '' && result !== 0) {
      beforeDivideValue = result;
      return;
    } else if (inputValue !== 0 && result === 0) {
      beforeDivideValue = parseFloat(inputValue, 10);
      result = beforeDivideValue;
      inputValue = '';
    } else if (inputValue !== 0 && result !== 0) {
      beforeDivideValue = parseFloat(inputValue, 10);
      result = result / beforeDivideValue;
      btn[10].textContent = result;
      inputValue = '';
    };
  };

  btn.forEach((item) => {
    item.addEventListener('mousedown', e => {
      e.target.classList.add('pressed');
    });
  
    item.addEventListener('mouseup', e => {
      e.target.classList.remove('pressed');
    });
  });


  document.addEventListener('click', e => {

    // if (btn[10].textContent.length >20){
    //   return;
    // }

    switch(e.target.textContent){


      case `0`:
        if (btn[10].textContent.length < 14) {
          if (btn[10].textContent === '0'){
            inputValue = '0';
            btn[10].textContent = inputValue;
          }else{
            inputValue += '0';
            btn[10].textContent = inputValue;
          };
        } else if (btn[10].textContent.length === 14 && inputValue === '') {
          inputValue += '0';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== '') {
          btn[10].textContent = inputValue;
        } else {
          return;
        };
        break;
      case `1`:
        if (btn[10].textContent.length < 14) {
            inputValue += '1';
            btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '1';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        // console.log(btn[10].textContent.length);
        break;
      case `2`:
        if (btn[10].textContent.length < 14) {
          inputValue += '2';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '2';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `3`:
        if (btn[10].textContent.length < 14) {
          inputValue += '3';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '3';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `4`:
        if (btn[10].textContent.length < 14) {
          inputValue += '4';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '4';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `5`:
        if (btn[10].textContent.length < 14) {
          inputValue += '5';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '5';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `6`:
        if (btn[10].textContent.length < 14) {
          inputValue += '6';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '6';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `7`:
        if (btn[10].textContent.length < 14) {
          inputValue += '7';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '7';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `8`:
        if (btn[10].textContent.length < 14) {
          inputValue += '8';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '8';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
      case `9`:
        if (btn[10].textContent.length < 14) {
          inputValue += '9';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue === ''){
          inputValue += '9';
          btn[10].textContent = inputValue;
        } else if (btn[10].textContent.length === 14 && inputValue !== ''){
          btn[10].textContent = inputValue;
        }else{
          return;
        };
        break;
        
      case `.`:
        if (inputValue !== ''){
          if (btn[10].textContent.length < 14) {
            inputValue += '.';
            btn[10].textContent = inputValue;
          } else if (btn[10].textContent.length === 14 && inputValue === '') {
            inputValue += '.';
            btn[10].textContent = inputValue;
          } else if (btn[10].textContent.length === 14 && inputValue !== '') {
            btn[10].textContent = inputValue;
          } else {
            return;
          };
        }else{
          return;
        };
        break;

      case `-`:
        if (beforePlusValue !== 0){
          plusCalc();
          beforePlusValue = 0;
          beforeMinusValue = parseFloat(btn[10].textContent);
        } else if (beforeMultiplyValue !== 0) {
          multiplyCalc();
          beforeMultiplyValue = 0;
          beforeMinusValue = parseFloat(btn[10].textContent);
        } else if (beforeDivideValue !== 0) {
          divideCalc();
          beforeDivideValue = 0;
          beforeMinusValue = parseFloat(btn[10].textContent);
        } else{
          minusCalc();
        };
        break;

      case `+`:
        if (beforeMinusValue !== 0) {
          minusCalc();
          beforeMinusValue = 0;
          beforePlusValue = parseFloat(btn[10].textContent);
        } else if (beforeMultiplyValue !== 0) {
          multiplyCalc();
          beforeMultiplyValue = 0;
          beforePlusValue = parseFloat(btn[10].textContent);
        } else if (beforeDivideValue !== 0) {
          divideCalc();
          beforeDivideValue = 0;
          beforePlusValue = parseFloat(btn[10].textContent);
        }else{
          // console.log(btn[10].textContent);
          plusCalc();
          // console.log(btn[10].textContent);
        };
        break;

      case '*':
        if (beforeMinusValue !== 0) {
          minusCalc();
          beforeMinusValue = 0;
          beforeMultiplyValue = parseFloat(btn[10].textContent);
        } else if (beforePlusValue !== 0) {
          plusCalc();
          beforePlusValue = 0;
          beforeMultiplyValue = parseFloat(btn[10].textContent);
        } else if (beforeDivideValue !== 0) {
          divideCalc();
          beforeDivideValue = 0;
          beforeMultiplyValue = parseFloat(btn[10].textContent);
        }else {
          multiplyCalc();
        };
        break;

      case '/':
        if (beforeMinusValue !== 0) {
          minusCalc();
          beforeMinusValue = 0;
          beforeDivideValue = parseFloat(btn[10].textContent);
        } else if (beforePlusValue !== 0) {
          plusCalc();
          beforePlusValue = 0;
          beforeDivideValue = parseFloat(btn[10].textContent);
        } else if (beforeMultiplyValue !== 0) {
          multiplyCalc();
          beforeMultiplyValue = 0;
          beforeDivideValue = parseFloat(btn[10].textContent);
        }else {
          divideCalc();
        };
        break;

      
      case 'C':
        pressClearBtn();
        break;

      case '=':
        if (beforeMinusValue !== 0 && inputValue !== ''){
          minusCalc();
          beforeMinusValue = 0;
        } else if (beforePlusValue !== 0 && inputValue !== ''){
          plusCalc();
          beforePlusValue = 0;
        } else if (beforeMultiplyValue !== 0 && inputValue !== '') {
          multiplyCalc();
          beforeMultiplyValue = 0;
        } else if (beforeDivideValue !== 0 && inputValue !== '') {
          divideCalc();
          beforeDivideValue = 0;
        }else {
          return; 
        };
        
        break;
    };
  });

  // 検証用ボタンの動き
  // document.querySelector('button').addEventListener('click', () => {
  //   console.log(inputValue);
  //   console.log(parseFloat(inputValue,10));
  //   console.log(typeof parseFloat(inputValue,10));

  //   console.log(btn[10].textContent);
  //   console.log(typeof (btn[10].textContent));

  // });
  
}
