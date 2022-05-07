// // Diferença entre getElementeById e querySelector
// //getElementeById retona um elemento do DOM
// //querySelector retorna um elemento do DOM que corresponde ao seletor CSS

// //Recuperando elementos do DOM com getElementeById
// //const elementoForm = document.getElementById('frmCalc');
// //elementoForm.method = 'POST'

// //Recuperando elementos do DOM com querySelector
// //const elementoForm = document.querySelector('#frmCalc');
// //console.log(elementoForm.method);
// //Recuperando elementos do DOM com querySelector
// //const elementoResultado = document.querySelector('#frmCalc input');
// //console.log(elementoResultado.value);

// //Botão1 adiciona um valor ao input
// const btn1 = document.querySelector('#numero1Id');


// //Atrelar ao evento click o método que será executado
// btn1.addEventListener('click', function(event){
//     //Recuperando o valor do input
//     const elementoResultado = document.querySelector('#frmCalc input');
//     //Adicionando o valor do botão ao input
//     elementoResultado.value = '1';
// });

// //Botão2 adiciona um valor ao input
// const btn2 = document.querySelector('#numero2Id');

// btn2.addEventListener('click', function(event){
//     //Recuperando o valor do input
//     const elementoResultado = document.querySelector('#frmCalc input');
    
//     const operacao = document.querySelector('#operacoesId');
//     if(operacao.value == 'soma'){
//         elementoResultado.value = '2 + ' + elementoResultado.value
//     }else if(operacao.value == 'subtracao'){
//         elementoResultado.value =  '2 - ' + elementoResultado.value
//     }else if(operacao.value == 'multiplicacao'){
//         elementoResultado.value =  '2 x ' + elementoResultado.value
//     }else if(operacao.value == 'divisao'){
//         elementoResultado.value = '2 / ' + elementoResultado.value
//     }
    
// });   



//Function em JavaScript é uma função que pode ser chamada de várias formas
//Function são escritar entre parênteses e são globais ou locais, o mais comum é global.

// function minhaFuncao(origem){
    //     console.log('Executando minha função: ' + origem)
    // }
    
    
    
document.querySelector('#numero1Id').addEventListener('click', function(){
    colocarNoVisor(this.value);
})

document.querySelector('#numero2Id').addEventListener('click', function(){
    colocarNoVisor(this.value);
})

document.querySelector('#btnSomaId').addEventListener('click', function(){
    document.querySelector('#numero1Id').value += 1
})



//Criar uma função para colocar o valor no visor
function colocarNoVisor(valor){
    //Vamos passar o value dos inputs button1 e button2 para o visor
    const visor = document.querySelector('#visorId');
    if(visor.value == '0'){
        visor.value = valor;
    }else{
        visor.value += valor
    }
}

function colocarOperador(valor){
    const visor = document.querySelector('#visorId');
    if(valor != visor.valeu.charAt(visor.value.length - 1)){
        visor.value += valor;
    }
}