//Diferença entre getElementById e querySelector
//getElementById retorna um elemento do DOM
//querySelector retorna um elemento do DOM que corresponde ao seletor CSS
//const elementForm = document.getElementById('frmCalc');
//elementForm.method = 'POST'
//const elementForm = document.querySelector('#frmCalc')
//console.log(elementForm.method)
//const elementoResulado = document.querySelector('#frmCalc input')
//console.log(elementoResulado.valeu)

//button1 adicionando um valor ao input
const btn1 = document.querySelector('#numero1Id')
//atrelar ao evento click o metodo que será execultado
btn1.addEventListener('click', function(evento){
    const elementoResulado = document.querySelector('#frmCalc input')
elementoResulado.valeu = '+1';
})
const numero2 = document.querySelector('#numero2Id')