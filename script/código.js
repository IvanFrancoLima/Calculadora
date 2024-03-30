//Variáveis Globais
let vet = []
let operação = 'nada'
let exibir = window.document.querySelector('#números')

//Números da cálculadora
function numero1(){
    exibir.innerHTML='1'
    vet.push(1)
}

function numero2(){
    exibir.innerHTML='2'
    vet.push(2)
}

function numero3(){
    exibir.innerHTML='3'
    vet.push(3)
}

function numero4(){
    exibir.innerHTML='4'
    vet.push(4)
}

function numero5(){
    exibir.innerHTML='5'
    vet.push(5)
}

function numero6(){
    exibir.innerHTML='6'
    vet.push(6)
}

function numero7(){
    exibir.innerHTML='7'
    vet.push(7)
}

function numero8(){
    exibir.innerHTML='8'
    vet.push(8)
}

function numero9(){
    exibir.innerHTML='9'
    vet.push(9)
}

function numero0(){
    exibir.innerHTML='0'
    vet.push(0)
}
// // // // // // // // //

//Operações

function soma(){
     operação = 'soma'
}

function limpar(){
    exibir.innerHTML = ''
    vet = []
}

// // // // // // // // //

//Exibir resultados

function result(){
    if(operação == 'soma'){
        let resultado = vet[0] + vet[1]
        vet = []
        vet.push(resultado)

        exibir.innerHTML=`${resultado}`
    }
}