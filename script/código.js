//Variáveis Globais
let vet = []
let backup = []
let operação = 'nada'
let exibir = window.document.querySelector('#números')

//Números da cálculadora
function numero1(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 1
    backup.push(exibir.innerHTML)
}

function numero2(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 2
    backup.push(exibir.innerHTML)
}

function numero3(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 3
    backup.push(exibir.innerHTML)
}

function numero4(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 4
    backup.push(exibir.innerHTML)
}

function numero5(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 5
    backup.push(exibir.innerHTML)
}

function numero6(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 6
    backup.push(exibir.innerHTML)
}

function numero7(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 7
    backup.push(exibir.innerHTML)
}

function numero8(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 8
    backup.push(exibir.innerHTML)
}

function numero9(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 9
    backup.push(exibir.innerHTML)
}

function numero0(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 0
    backup.push(exibir.innerHTML)
}
// // // // // // // // //

//Operações

function soma(){
    operação = 'soma' //Tipo de operação
    vet[0] = Number(exibir.innerHTML)
    exibir.innerHTML=`${vet[0]}`
    backup = []
}

// // // // // // // // //

function subtração(){
    operação = 'subtração' //Tipo de operação
    vet[0] = Number(exibir.innerHTML)
    exibir.innerHTML=`${vet[0]}`
    backup = []
}

// // // // // // // // //

function divisão(){
    operação = 'divisão' //Tipo de operação
    vet[0] = Number(exibir.innerHTML)
    exibir.innerHTML=`${vet[0]}`
    backup = []
}

// // // // // // // // //

function multiplicação(){
    operação = 'multiplicação' //Tipo de operação
    vet[0] = Number(exibir.innerHTML)
    exibir.innerHTML=`${vet[0]}`
    backup = []
}

// // // // // // // // //

function limpar(){
    exibir.innerHTML = ''
    vet = []
    backup = []
}

// // // // // // // // //

function apagar(){
    backup.pop(); // Remove o último intem inserido no vetor
    exibir.innerHTML = ''
    for(let cont = 0; cont < backup.length; cont++){
        exibir.innerHTML += backup[cont].toString() 
    }
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

    }else if(operação == 'subtração'){

        vet[1] = Number(exibir.innerHTML)
        let resultado = vet[0] - vet[1]
        vet = []

        vet.push(resultado)
        exibir.innerHTML = resultado

    }else if(operação == 'divisão'){

        vet[1] = Number(exibir.innerHTML)
        let resultado = vet[0] / vet[1]
        vet[0]

        vet.push(resultado)
        exibir.innerHTML = `${resultado}`

    }else if(operação == 'multiplicação'){

        vet[1] = Number(exibir.innerHTML)
        let resultado = vet[0] * vet[1]
        vet[0]

        vet.push(resultado)
        exibir.innerHTML = `${resultado}`

    }
}