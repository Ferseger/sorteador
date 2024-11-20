document.querySelector('.botao-sortear').addEventListener('click', function() {
    const min = parseInt(document.querySelector('.input-min').value);
    const max = parseInt(document.querySelector('.input-max').value);
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Por favor, insira um intervalo válido!');
        return;
    }

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector('.resultado').textContent = resultado;
});

function limparCampos() {
    document.querySelector('.input-min').value = '';
    document.querySelector('.input-max').value = '';
    document.querySelector('.resultado').textContent = '--';
}
