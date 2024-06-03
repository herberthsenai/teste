const body = document.body;
const button = document.getElementById('trocarFundo');

button.addEventListener('click', function() {
    // Verifica qual é o plano de fundo atual e alterna para o próximo
    if (body.style.backgroundImage.includes('background1.jpg')) {
        body.style.backgroundImage = "url('background2.jpg')";
    } else {
        body.style.backgroundImage = "url('background1.jpg')";
    }
});