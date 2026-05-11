// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o formulário pelo seu ID
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function(event) {
        // Previne que a página recarregue ao tentar enviar o formulário
        event.preventDefault();

        // Recolhe os valores e remove espaços em branco nas extremidades
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação 1: Verifica se todos os campos estão preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Por favor, preencha todos os campos obrigatórios.");
            return; // Interrompe a execução
        }

        // Validação 2: Verifica se o e-mail possui um formato válido com RegEx
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Erro: Por favor, insira um endereço de e-mail válido.");
            return; 
        }

        // Simulação de sucesso no envio do formulário
        alert("Mensagem enviada com sucesso! Agradeço o seu contacto.");

        // Limpa os campos do formulário após a validação bem-sucedida
        form.reset();
    });
});