var sum = 0;

while (true) {
    
    var number = prompt('Введите число:', '');
   
    if (!number && number == null) {
        break;
    };

    if (isNaN(number) || !parseInt(number)) {
        number = null;
    } else {
        sum = sum + +number;
    };

};

alert(sum);
