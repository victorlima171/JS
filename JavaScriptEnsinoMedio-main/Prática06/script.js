const botaoSim = document.getElementById('sim')
const botaosim = document.getElementById('nao')
const botaoim = document.getElementById('mensagem')

// Quando clicar em "sim"
botaoSim.addEventListener('click', () => {
    mensagem.textContent = "Aaaawn Obrigado! Você fez a escolha certa"
});

// Quando tentar clicar em "Não"
botaoNao.addEventListener('mouseover', () => {
    // Gera posições aleatórias dentro da janela
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`
})