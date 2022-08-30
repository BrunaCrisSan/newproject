//1-Acessar a janela navegador(browser)
//2-Pegar HTML todo
//3-Pegar o btnRight
//4-Saber que está clicando botão

//Repete comandos novamente

//5-Acessar a janela navegador(browser)
//6-Pegar HTML todo
//7-Pegar o elements do (btnRight)/(btnLeft)
//8-Mover elements para direita (right)/(left)

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function(){
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
btnLeft.addEventListener('click', function(){
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});
