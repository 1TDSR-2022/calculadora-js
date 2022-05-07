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
//const btn1 = document.querySelector('#numero1Id');


//Atrelar ao evento click o método que será executado
//btn1.addEventListener('click', function(event){
//    //Recuperando o valor do input
//    const elementoResultado = document.querySelector('#frmCalc input');
//    //Adicionando o valor do botão ao input
//    elementoResultado.value = '1';
//});
//
////Botão2 adiciona um valor ao input
//const btn2 = document.querySelector('#numero2Id');
//
//btn2.addEventListener('click', function(event){
//    Recuperando o valor do input
//    const elementoResultado = document.querySelector('#frmCalc input');
//    
//    const operacao = document.querySelector('#operacoesId');
//    if(operacao.value == 'soma'){
//        elementoResultado.value = '2 + ' + elementoResultado.value
//    }else if(operacao.value == 'subtracao'){
//        elementoResultado.value =  '2 - ' + elementoResultado.value
//    }else if(operacao.value == 'multiplicacao'){
//        elementoResultado.value =  '2 x ' + elementoResultado.value
//    }else if(operacao.value == 'divisao'){
//        elementoResultado.value = '2 / ' + elementoResultado.value
//    }
//    
//});

// Recuperrar elementos do DOM usando querySelector
// addEventListener aguarda o evento que foi passado como parametro ocorrer com o  elemento para executar as instruções no corpo de sua função anõnima

//document.querySelector('#numero1ID').addEventListener('click', function(){
//    minhaFuncao("EventListener")
//})

// Function em javascript é uma função  que pode ser  chamada de várias formas
// Functions são escritas entre parenteses e são globais ou locais, o mais comum é global
//function minhaFuncao(){
//    console.log("Execute minha função");
//}

//Passando parâmetro para a função
//function minhaFuncao(origem){
//    console.log("Execute minha função: " +  origem);
//}

//#numeroId1 ---> Este é o elemento responsavel pelo bloco de instrução
document.querySelector('#numero1Id').addEventListener('click', function(){
    //Recuperar o valor do input button1 e colocar no visor
    //const visor = document.querySelector('#visorId');
    //if(visor.value == '0'){
    //    visor.value = '1';
    //}else{
    //    visor.value += this.value;
    //}
    colocarNoVisor(this.value);
})

document.querySelector('#numero2Id').addEventListener('click', function(){
    //Recuperar o valor do input button2 e colocar no visor
//    const visor = document.querySelector('#visorId');
//    if(visor.value == '0'){
//        visor.value = '2';
//    }else{
//        visor.value += this.value;
//    }
colocarNoVisor(this.value);
})

document.querySelector('#btnSomaId').addEventListener('click', function(){
    colocarNoVisor(this.value);
})

//Criar um função para colocar o valor no visor
function colocarNoVisor(valor){
    //Vamos pasar o value dos inputs button1 e button2 para o visor
    const visor = document.querySelector('#visorId')
    if(visor.value == '0'){
        visor.value = valor;
    }
    else{
        visor.value += valor;
    }
}

function colocarOperador(valor){
    const visor = document.querySelector('#visorId');
    if(valor != visor.value.charAt(visor.value.length - 1)){
        visor.value += valor;
    }
}