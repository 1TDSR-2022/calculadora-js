
//Diferença entre getElementById e querySelector
//getElementById retorna um elemento do DOM
//querySelector retorna um elemento do DOM que corresponde ao seletor CSS

//Recuperando elementos do DOM com getelementById
//const elementoForm = document.getElementById('frmCalc');
//elementoForm.method = 'POST';

//Recuperando elementos do DOM com querySelector
//const elementoForm = document.querySelector('#frmCalc');
//console.log(elementoForm.method);
//Recuperando elementos do DOM com querySelector
//const elementoResultado = document.querySelector('#frmCalc input');
//console.log(elementoResultado.value);
 
//Botão1 adiciona um valor ao input
const btn1 = document.querySelector('#numero1Id');


//Atrelar ao evento click o método que será executado
btn1.addEventListener('click', function(event){
    //Recuperando o valor do input
    const elementoResultado = document.querySelector('#frmCalc input');
    //Adicionando o valor do botão ao input
    elementoResultado.value = '1';
});

//Botão2 adiciona um valor ao input
const btn2 = document.querySelector('#numero2Id');

btn2.addEventListener('click', function(event){
    //Recuperando o valor do input
    const elementoResultado = document.querySelector('#frmCalc input');
    
    const operacao = document.querySelector('#operacoesId');
    if(operacao.value == 'soma'){
        elementoResultado.value = '2 + ' + elementoResultado.value
    }else if(operacao.value == 'subtracao'){
        elementoResultado.value =  '2 - ' + elementoResultado.value
    }else if(operacao.value == 'multiplicacao'){
        elementoResultado.value =  '2 x ' + elementoResultado.value
    }else if(operacao.value == 'divisao'){
        elementoResultado.value = '2 / ' + elementoResultado.value
    }
    
});   
