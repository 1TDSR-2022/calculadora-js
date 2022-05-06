//Diferença entre o getElementById e querySelector
//getElementById retorna um elemento do DOM
//querySelector retorna um elemento do DOM que correponde ao seleto CSS

//Recuperando elementos do DOM com getElementById
//const elementoForm = document.getElementById('frmCalc');
//elementoForm.method = 'POST';

//Recuperando elementos do DOM com querySelector
//const elementoForm = document.querySelector('#frmCalc');
//console.log(elementoForm.method);
//const elementoResultado = document.querySelector('#frmCalc input');
//console.log(elementoResultado.value);

//Botao1 adicionando um valor ao input
const btn1 = document.querySelector('#numero1Id');

//Atrelando o evento click metado que sera executado
btn1.addEventListener('click', function(){
    //Recuperando o valor do input
    const elementoResultado = document.querySelector('#frmCalc input');
    //Adicionando o valor do botão ao input
    elementoResultado.value += '1';
});
