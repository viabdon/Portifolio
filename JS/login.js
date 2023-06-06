const botaoCadastrar = document.getElementById('cadastrar');
const botaoLogar = document.getElementById('entrar');
let ADMs = ['pablo23070029@aluno.cesupa.br', 'qwertyuiop'];
let senhaADMs = ['23070029', 'qwertyuiop'];
let users = [];
let senhaUsers = [];
const token = 'é_adm';

function cadastrarUsuarios () {
    users.push(document.getElementById('emailCadastro').value);
    senhaUsers.push(document.getElementById('senhaCadastro').value);
    document.getElementsByTagName('input')[2].value = null;
    document.getElementsByTagName('input')[3].value = null;
}

function fazerLogin () {
    if (users.includes(document.getElementById('emailLogin').value) && senhaUsers.includes(document.getElementById('senhaLogin').value)) {
        window.open('../HTML/pag_principal.html', '_blank');
    } else if (ADMs.includes(document.getElementById('emailLogin').value) && senhaADMs.includes(document.getElementById('senhaLogin').value)) {
        localStorage.setItem('token', token);
        window.open('../HTML/pag_principal.html', '_blank');
    } else {
        window.alert('Não foi encontrado um usuário com este nome e senha, por favor tente novamente.');
        document.getElementsByTagName('input')[0].value = null;
        document.getElementsByTagName('input')[1].value = null;
    }
}

botaoCadastrar.addEventListener('click', () => {
    cadastrarUsuarios();
});

botaoLogar.addEventListener('click', () => {
    fazerLogin();
});