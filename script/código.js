//Variáveis Globais
let vet = []
let backup = []
let operação = 'nada'
let exibir = window.document.querySelector('#números')
let sombra = window.document.querySelector('#sombra')
let quadrado = window.document.createElement('sup')


//Números da cálculadora
function numero1(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 1
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero2(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 2
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero3(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 3
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero4(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 4
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero5(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 5
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero6(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 6
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero7(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 7
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero8(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 8
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero9(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 9
    backup.push(exibir.innerHTML)
}
// // // // // // // // //
function numero0(){
    if(exibir.innerHTML==vet[0]){
        exibir.innerHTML = ''
        backup = []
    }

    exibir.innerHTML+= 0
    backup.push(exibir.innerHTML)
}
// // // // // // // // //

function vírgula(){
    if(exibir.innerHTML == ''){
        exibir.innerHTML= `0,`
    }else{
        exibir.innerHTML+= `,`
    }
}

// // // // // // // // //

//Operações

function soma(){
    operação = 'soma' //Tipo de operação
    vet[0] = Number(exibir.innerHTML.replace(',','.'))
    exibir.innerHTML=`${vet[0]}`
    backup = []
    sombra.innerHTML=`${vet[0]}+`
}

// // // // // // // // //

function subtração(){
    operação = 'subtração' //Tipo de operação
    vet[0] = Number(exibir.innerHTML.replace(',','.'))
    exibir.innerHTML=`${vet[0]}`
    backup = []
    sombra.innerHTML=`${vet[0]}-`
}

// // // // // // // // //

function divisão(){
    operação = 'divisão' //Tipo de operação
    vet[0] = Number(exibir.innerHTML.replace(',','.'))
    exibir.innerHTML=`${vet[0]}`
    backup = []
    sombra.innerHTML=`${vet[0]}/`
}

// // // // // // // // //

function multiplicação(){
    operação = 'multiplicação' //Tipo de operação
    vet[0] = Number(exibir.innerHTML.replace(',','.'))
    exibir.innerHTML=`${vet[0]}`
    backup = []
    sombra.innerHTML=`${vet[0]}*`
}

// // // // // // // // //

function potência(){
    operação = 'potência'
    vet[0] = Number(exibir.innerHTML.replace(',','.'))
    exibir.innerHTML=`${vet[0]}`
    backup = []
    sombra.innerHTML=`${vet[0]}`

    sombra.appendChild(quadrado)
    quadrado.innerHTML='X'
}

function limpar(){
    exibir.innerHTML = ''
    vet = []
    backup = []
    sombra.innerHTML=``
}

// // // // // // // // //

function apagar(){
    backup.pop(); // Remove o último item inserido no vetor
    exibir.innerHTML = ''
    sombra.innerHTML = ''
    for(let cont = 0; cont < backup.length; cont++){
        exibir.innerHTML += backup[cont].toString() 
    }
}

// // // // // // // // //

//Exibir resultados

function result(){
    if(operação == 'soma'){

        //Vetor recebendo o segundo valor da operação
        vet[1] = Number(exibir.innerHTML.replace(',','.'))
        let resultado = vet[0] + vet[1]

        //Mensagem com o resultado da operação
        sombra.innerHTML=`${vet[0]}+${vet[1]}=`

        //Preparando o vetor para mais operações
        vet = []       
        vet.push(resultado)
        exibir.innerHTML=`${resultado}`

    }else if(operação == 'subtração'){

        //Vetor recebendo o segundo valor da operação
        vet[1] = Number(exibir.innerHTML.replace(',','.'))
        let resultado = vet[0] - vet[1]

        //Mensagem com o resultado da operação
        sombra.innerHTML=`${vet[0]}-${vet[1]}=`

        //Preparando o vetor para mais operações
        vet = []
        vet.push(resultado)
        exibir.innerHTML = resultado

    }else if(operação == 'divisão'){

        //Vetor recebendo o segundo valor da operação
        vet[1] = Number(exibir.innerHTML.replace(',','.'))
        let resultado = vet[0] / vet[1]

        //Mensagem com o resultado da operação
        sombra.innerHTML=`${vet[0]}/${vet[1]}=`

        //Preparando o vetor para mais operações
        vet = []
        vet.push(resultado)
        exibir.innerHTML = `${resultado}`

    }else if(operação == 'multiplicação'){

        //Vetor recebendo o segundo valor da operação
        vet[1] = Number(exibir.innerHTML.replace(',','.'))
        let resultado = vet[0] * vet[1]

        //Mensagem com o resultado da operação
        sombra.innerHTML=`${vet[0]}*${vet[1]}=`

        //Preparando o vetor para mais operações
        vet = []
        vet.push(resultado)
        exibir.innerHTML = `${resultado}`

    }else if(operação == 'potência'){

        //Vetor recebendo o segundo valor da operação
        vet[1] = Number(exibir.innerHTML.replace(',','.'))
        let resultado = vet[0]

        //Cálculo da potência
        for(let cont = 1;cont<vet[1];cont++){
            resultado*= vet[0]
        }
        
        //Mensagem acima do resultado
        sombra.innerHTML=`${vet[0]}`
        sombra.appendChild(quadrado)
        quadrado.innerHTML=`${vet[1]}`


        //Preparando o vetor para mais operações
        vet = []
        vet.push(resultado)
        exibir.innerHTML = `${resultado}`

    }
}