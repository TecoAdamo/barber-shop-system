// VAR NOME - SENHA
var nomes = [];
var senhas = [];

// VAR AGENDAMENTO DO CORTE
var dt = [];
var hours = [];

// VAR REAGENDAMENTO DO CORTE
var reag = [];
var reagendamento = [];
var reagenhours = [];

// VAR CANCELAMENTO DO CORTE
var cancelamento = [];
var cancel = [];

// CONSULTAR AGENDAMENTO
var consultar = [];
var consul = [];

// FUNCTIONS
function solicitacao() {
    var escolha = prompt("Digite C - Cadastrar / L - Login:" )
    return escolha
}

function cadatrarUser() {
    nomes.push(prompt("Insira seu nome: "))
    senhas.push(prompt("Insira sua senha: "))
}

function logarUser(nome, senha) {
    var indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] == senha){
        return true;
    }else{
        return false;
    }
}

function solicitarOpcao() {
    var opcao = prompt("Insira 1 - agendar, 2 - reagendar, 3 - cancelar o corte ou 4 - consultar agendamento:  ")
    return opcao
}

function AgendarCorte(data, hr) {
    dt.push(prompt("Insira o dia e mês que deseja agendar o corte: "))
    hours.push(prompt("Qual horário? "))
}

function ReagendarCorte(reag) {
    reagendamento.push(prompt("Pra que data deseja reagendar? "))
    reagenhours.push(prompt("Qual horário? "))
}

function CancelarCorte(cancelamento) {
    cancel.push(prompt("Deseja mesmo cancelar? S - Sim / N - Não"))
}

function consultaAgendamento() {
    consul.push(prompt("Qual sua senha?"))
}

//                 //
var cont = true;

while (cont) {
    var opc = solicitacao()

    switch (opc) {

        case "C":
            cadatrarUser();
            break;

        case "L":
            var nome = prompt("Digite seu nome: ")
            var senha = prompt("Digite sua senha: ")
            var login = logarUser(nome, senha)
            if (login){
                console.log("Bem vindo", nome)
            }else{
                console.log("Usuário ou senha incorreto!")
            }
            default:
                cont = false
                break;
    }

}
var continuar = true;
while (continuar) {
    var opcao = solicitarOpcao()

    switch (opcao) {
        

        case "1":
            AgendarCorte();
            if (dt, hours){
            console.log("Seu corte foi agendado pro dia: ", dt, "as", hours, "Esperamos você", nome)
            alert("Corte agendado com sucesso!")
            }
            break;
        case "2":
            ReagendarCorte();
            if (reag){
            console.log("Seu corte foi reagendado para:", reagendamento, "as", reagenhours)
            alert("Obrigado pela preferência")
            }
            break;
        
        case "3":
            CancelarCorte();
            if (cancel == "S" ) {
                alert("Corte cancelado!")
            }
            break;
        case "4":
            consultaAgendamento();
            if (consul == senha){
            console.log("Seu corte esta agendado para a data:", dt, "as", hours) 
            }else if (consul != senha) {
                console.log("Senha incorreta!")
            }else if(reag){
            console.log("Seu corte esta agendado para:", reagendamento, "as", reagenhours)
            }
            break;
        default:
            continuar = false
            break;
    }
}