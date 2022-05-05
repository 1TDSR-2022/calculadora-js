//Diferença entre getElementById e querySelector
//getElementById retorna um elemento do DOM
//querySelector retorna um elemento do DOM que corresponde ao seletor CSS

//Recuperando elementos do DOM com getelementById
//const elementoForm = document.getElementById('frmCalc');
//elementoForm.method = 'POST';

// const elementoForm = document.querySelector('#frmCalc');
// console.log(elementoForm.method);
// const elementoResultado = document.querySelector('#frmCalc input');
// console.log(elementoResultado.value);

//Criando a constante numero1
const numero1=document.querySelector('#numero1Id');
//Criando o evento
numero1.addEventListener('click',function(evento){
    const elementoResultado = document.querySelector('#frmCalc input');
    elementoResultado.value += '1';
})
const numero2=document.querySelector('#numero2Id');