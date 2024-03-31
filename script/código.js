//Variáveis Globais
let vet = []
let operação = 'nada'
let exibir = window.document.querySelector('#números')

//Números da cálculadora
function numero1(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 1
}

function numero2(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 2
}

function numero3(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 3
}

function numero4(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 4
}

function numero5(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 5
}

function numero6(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 6
}

function numero7(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 7
}

function numero8(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 8
}

function numero9(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 9
}

function numero0(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
    }

    exibir.innerHTML+= 0
}
// // // // // // // // //

//Operações

function soma(){
    operação = 'soma' //Tipo de operação
    vet[0] = Number(exibir.innerHTML)
    exibir.innerHTML=`${vet[0]}`
}

function limpar(){
    exibir.innerHTML = ''
    vet = []
}

// // // // // // // // //

//Exibir resultados

function result(){
    if(operação == 'soma'){ 
        vet[1] = Number(exibir.innerHTML)
        let resultado = vet[0] + vet[1]
        vet = []
        
        vet.push(resultado)
        exibir.innerHTML=`${resultado}`
    }
}