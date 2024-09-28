
const tituloPrincipal = document.getElementById("tituloPrincipal")
var nome = 'Marcy' /*prompt('Digite seu nome::')*/
var sobrenome = ('Wu')
tituloPrincipal.innerHTML = `Seja bem-vinda <br> ${nome}`

// const tituloPrincipal = document.querySelector('#tituloPrincipal')
// const divDOM = document.querySelectorAll('div.content')

// tituloPrincipal.innerText = 'texte'
// tituloPrincipal.textContent = 'texte'

// tituloPrincipal.innerHTML = 'texte <a href=""> a </ola>'

// divDOM[0].style.backgroundColor = "black"

/*for(let i of tituloPrincipal){
tituloPrincipal[i].textContent = 'texte'
}*/

function tabuada(){
    const valor = document.querySelector('#tabuada').value;
    const divResposta = document.querySelector('#respostaTabuada')
    
    divResposta.innerHTML = ''

    if(valor != ''){

    for(let i=1; i<=10; i++){

    divResposta.innerHTML += `${valor} x ${i} = ${valor*i} <br>`

        }
    }else{ 
        divResposta.textContent = 'Digite um valor, zé ruela!'
    }
}

// function soma(){
//     const valorA = document.querySelector('#valorA').value;
//     const valorB = document.querySelector('#valorB').value;
//     const resulSoma = document.querySelector('#respostaSoma')


// }

function alterarCor(){
    const cor = document.querySelector('#cor').value
    const body = document.querySelector('body')

    body.style.backgroundColor = `${cor}`


}

function mudarTema(){

const tema = document.querySelector('#tema').value;

const body = document.querySelector('body')
const container = document.querySelectorAll('.container')

if (tema == 'Claro'){
    body.style.backgroundColor = 'rgb(255, 0, 221)';

    for (let item of container){
        item.style.backgroundColor = '#ff0099';
        item.style.color = '#fd9cff';
    }
    
    
}else if(tema == 'Escuro'){
    body.style.backgroundColor = 'rgb(158, 3, 137)'

    for (let item of container){
        item.style.backgroundColor = '#97134B';
        item.style.color = '#fd9cff';
    }
}else{
}

}

function alterarImg(){

    const img = document.querySelector('img');
    const largura = document.querySelector('#larguraImg').value;
    const altura = document.querySelector('#alturaImg').value;
    const radio = document.querySelector('#radioImg').value;

    img.style.width = `${largura}px`;
    img.style.height = `${altura}px`;
    img.style.borderRadius = `${radio}px`;

}

const botaoUm = document.querySelector('#umClick')
const botaoDois = document.querySelector('#doisClick')

botaoUm.addEventListener('click', ()=> alert('funfou'))
botaoDois.addEventListener('dblclick', ()=> alert('Dois cliques funfou'))


const divArea = document.querySelector('#areaRestrita')

function areaRestrita(){

    const body = document.querySelector('body')

divArea.firstElementChild.style.display = 'inline-block';
body.style.backgroundImage = "url('../midia/img/siren.gif')"
}

divArea.addEventListener('mouseover', areaRestrita)

function areaRestritaSaida(){

    const body = document.querySelector('body')

    divArea.firstElementChild.style.display = 'none';
    body.style.backgroundImage = ""
}

divArea.addEventListener('mouseleave', areaRestritaSaida)

// const botao = document.querySelector('#botao')
// botao.addEventListener('click', alterarImg)


const texto = document.querySelector('#texto')


texto.addEventListener('input', ()=> {
    
    const textoResposta = document.querySelector('#resposta');

    textoResposta.textContent = texto.value;
}
);

