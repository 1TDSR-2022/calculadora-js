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
//const btn1 = document.querySelector('#numero1Id')
//atrelar ao evento click o metodo que será execultado
//btn1.addEventListener('click', function(evento){
 //   const elementoResulado = document.querySelector('#frmCalc input')
//elementoResulado.valeu = '+1';
//})
//const numero2 = document.querySelector('#numero2Id')
//document.querySelector('#numero1Id').addEventListener('click', function(){
 //   minhaFuncao("EventListener")
//})
//Passando parâmetros para a função
//function minhafuncao(origem){
 //   console.log("Executando minha função: " + origem);
//}

document.querySelector('#numero1Id').addEventListener('click', function(){
    const visor = document.querySelector('#visorId')
    if(visor.value == '0'){
        visor.value = '1';
    }else{
        visor.value += document.querySelector('#numero1Id').value;
    }
    
    document.querySelector('#visorId').valeu = document.querySelector('#numero1Id').value;
})

document.querySelector('#numero2Id').addEventListener('click', function(){
    //Recuperar o valor do input button2 e colocar no visor
    const visor = document.querySelector('#visorId');
    if(visor.value == '0'){
        visor.value = '2';
    }
    else{
        visor.value += this.value
    }
})

function colocarNoVisor(valor){
    const visor = document.querySelector('#visorId');
    if(visor.value == '0'){
        visor.value = valor;
    }else {
        visor.value+=valor
    }
}

document.querySelector('#btnSomaId').addEventListener('click', function(){
    colocarOperador(this.value);
})
function colocarOperador(valor){
    const visor = document.querySelector('#visorId')
    if(valor != visor.value.charAt(visor.value.length -1)){
        visor.value += valor;
    }
}