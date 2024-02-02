document.getElementById('calculatebtn').addEventListener('click', function(){

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    var result = num1+num2;

    document.getElementById('result').innerText = 'Result: ' + result;
});

document.getElementById('textOuput').addEventListener('click', function(){

    var data = document.getElementById('textip').value;

    document.getElementById('textop').innerHTML = 'Ouput: ' + data;
} )