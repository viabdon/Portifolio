const botaoConhecimentos = document.getElementById('botaoConhecimentos');
const secaoConhecimentos = document.getElementsByClassName('container3')[0];
const listaDeProjetos = document.getElementById('listaDeProjetos');
const botaoPessoal = document.getElementById('botaoPessoal');
const conteudoPessoal = document.getElementsByClassName('container4')[0];
const input = document.getElementsByTagName('input');
const arrayInputs = [...input];
const botaoADD1 = document.getElementById('botaoAdicionar1');
const botaoADD2 = document.getElementById('botaoAdicionar2');
const botaoADD3 = document.getElementById('botaoAdicionar3');
const botoesApagar = document.getElementsByClassName('apagar');
const arrayBotoesApagar = [...botoesApagar];
const funcoesADM = document.getElementsByClassName('criarConteudo');
const arrayADM = [...funcoesADM];

function criarConteudo (indexInput1, indexInput2, indexFuncoesADM) {
  if (indexInput1 === 4 && indexInput2 === 5) { // Os Indexes 4 e 5 são da lista de projetos, a qual tem elementos diferentes do restante do que os outros inputs criam, por isso o if.
    let divProjeto = document.createElement('div');
    let novoProjeto = document.createElement('li');
    let linkDoProjeto = document.createElement('a');
    let apagar = document.createElement('button');
    apagar.textContent = 'Apagar';
    apagar.className = 'apagar'
    novoProjeto.textContent = arrayInputs[indexInput1].value;
    linkDoProjeto.href = arrayInputs[indexInput2].value;
    divProjeto.appendChild(linkDoProjeto);
    divProjeto.appendChild(apagar);
    linkDoProjeto.appendChild(novoProjeto); 
    listaDeProjetos.insertBefore(divProjeto, funcoesADM[indexFuncoesADM]);
    apagar.addEventListener('click', () => { // Um evento é criado para cada botão novo (para cada projeto novo)
      let divPai = apagar.parentNode;
      divPai.remove();
    });

  } else {
    let novoConteudo = document.createElement('div');
    let titulo = document.createElement('p');
    let imagem = document.createElement('img');
    let apagar = document.createElement('button');
    let divBotao = document.createElement('div');
    apagar.textContent = 'Apagar';
    apagar.className = 'apagar';
    titulo.textContent = arrayInputs[indexInput1].value;
    imagem.src = arrayInputs[indexInput2].value;
    imagem.className = 'icones'
    novoConteudo.className = 'conteudo';
    novoConteudo.appendChild(titulo);
    novoConteudo.appendChild(imagem);
    divBotao.appendChild(apagar);
    novoConteudo.appendChild(divBotao);
    secaoConhecimentos.insertBefore(novoConteudo, funcoesADM[indexFuncoesADM]);
    apagar.addEventListener('click', () => {
      let divAvo = apagar.parentNode.parentNode;
      divAvo.remove();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {

  const token = localStorage.getItem('token');

  if (!token) {
    arrayADM.forEach((element) => {
      element.style.display = 'none';
    });
    arrayBotoesApagar.forEach((element) => {
      element.style.display = 'none';
    });
  }

  if (token) {
    localStorage.removeItem('token');
  }
});

botaoConhecimentos.addEventListener('click', () => {
    if (secaoConhecimentos.style.display !== 'flex') {
        secaoConhecimentos.style.display = 'flex';
      } else {
        secaoConhecimentos.style.display = 'none';
      }
});

botaoPessoal.addEventListener('click', () => {
  if (conteudoPessoal.style.display !== 'flex') {
      conteudoPessoal.style.display = 'flex';
    } else {
      conteudoPessoal.style.display = 'none';
    }
});

botaoADD1.addEventListener('click', () => {
  criarConteudo(0, 1, 0);
});

botaoADD2.addEventListener('click', () => {
  criarConteudo(2, 3, 1);
});

botaoADD3.addEventListener('click', () => {
  criarConteudo(4, 5, 2);
});