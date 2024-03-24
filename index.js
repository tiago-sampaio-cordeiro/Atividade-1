document.getElementById('calculateBtn').addEventListener('click', function() {
    let result = calculateSum();
    mostrarResultado(result);
});

//Utilizando a soma de Gauss//

function calculateSum() {
    let n = 100;
    let firstNumber = 1;
    let lastNumber = 100;
    let sumFirst_Last = (firstNumber + lastNumber) / 2;
    let result = n * sumFirst_Last;
    return result;

}

function mostrarResultado(resultado) {
    document.getElementById('result').innerHTML = "A soma dos números de 1 a 100 é: " + resultado;
}
