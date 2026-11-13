/*
Сделать калькулятор – функция calculator с 3 параметрами(a,b,operator)
operator +-* / – сделать действия на каждый оператор
Сделать проверку что параметры только числа
return каждого рез-та
если b = 0, то выводить ошибку на ноль делить нельзя
Ошибка: неизвестный оператор
*/

function calculator (a, b, operator){
    if (typeof(a) === 'number' && typeof(b) === 'number'){        
        if (operator === '+'){
            return a + b;
        }
        else if (operator === '-'){
            return a - b;
        }
        else if (operator === '*'){
            return a * b;
        }
        else if (operator === '/'){
            if (b === 0){
                return "You can not devide by zero";
            }
            else {
                return a / b;
            }
        }                
        else {
            return 'unknown operator';
        }
    }
    
    else {
        return "It's not a number";
    }

}


console.log(calculator(6, 2,'+'))



