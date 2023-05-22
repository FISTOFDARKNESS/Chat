// Função para enviar uma mensagem
function sendMessage() {
    var messageInput = document.getElementById('chat-input');
    var message = messageInput.value.trim();

    if (message !== '') {
        var messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        
        var nickElement = document.createElement('span');
        nickElement.classList.add('message-nick');
        nickElement.innerText = getLoggedInUserNick(); // Função para obter o Nick (nome) do usuário registrado
        
        var textElement = document.createElement('span');
        textElement.innerText = message;
        
        messageElement.appendChild(nickElement);
        messageElement.appendChild(textElement);
        
        document.getElementById('chat-messages').appendChild(messageElement);

        messageInput.value = '';
    }
}

// Evento de clique no botão de enviar
document.getElementById('chat-send').addEventListener('click', sendMessage);

// Evento de pressionar a tecla Enter no campo de entrada
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Função para obter o Nick (nome) do usuário registrado
function getLoggedInUserNick() {
    // Lógica para obter o Nick do usuário registrado
    // Você pode buscar o Nick em um objeto, em um banco de dados ou de acordo com a lógica específica do seu sistema de registro
    // Neste exemplo, retornamos um valor fixo apenas para demonstração
    return "John Doe";
}
