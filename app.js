let calculation = '';

function updateCalculation(userValue){
    if(userValue == '1'){
        calculation += '1';
        showValues();
    }else if(userValue == '2'){
        calculation += '2';
        showValues();
    }else if(userValue == '3'){
        calculation += '3';
        showValues();
    }else if(userValue == '+'){
        calculation += '+';
        showValues();
    }else if(userValue == '4'){
        calculation += '4';
        showValues();
    }else if(userValue == '5'){
        calculation += '5';
        showValues();
    }else if(userValue == '6'){
        calculation += '6';
        showValues();
    }else if(userValue == '-'){
        calculation += '-';
        showValues();
    }else if(userValue == '7'){
        calculation += '7';
        showValues();
    }else if(userValue == '8'){
        calculation += '8';
        showValues();
    }else if(userValue == '9'){
        calculation += '9';
        showValues();
    }else if(userValue == '*'){
        calculation += '*';
        showValues();
    }else if(userValue == '0'){
        calculation += '0';
        showValues();
    }else if(userValue == '.'){
        calculation += '.';
        showValues();
    }else if(userValue == '/'){
        calculation += '/';
        showValues();
    }else if(userValue == '='){
        calculation = eval(calculation);
        showValues();
    }else if(userValue === 'clear'){
        calculation = '';
        showValues();
    }
    else if(userValue === '%'){
        calculation += '%';
        showValues();
    }
}

function showValues(){
    document.querySelector('.result').innerHTML = calculation;
}