
var btnPpal = document.getElementById('btn-ppal-chatbot');
var btnWhat = document.getElementById('btn-wsp-chatbot');
var btnChat = document.getElementById('btn-chat-chatbot');
btnPpal.addEventListener('change', cambioEstadoCheckPpal);
btnWhat.addEventListener('change', cambioEstadoCheckWhat);
btnChat.addEventListener('change', cambioEstadoCheckChat);

function cambioEstadoCheckPpal() {
    if (this.checked) {
        console.log("Se presionó el check");
        document.getElementById("btn-wsp-chatbot").checked = false;
        document.getElementById("btn-chat-chatbot").checked = false;
    }
}
function cambioEstadoCheckWhat() {
    if (this.checked) {
        document.getElementById("btn-chat-chatbot").checked = false;
    }
}
function cambioEstadoCheckChat() {
    if (this.checked) {
        document.getElementById("btn-wsp-chatbot").checked = false;
    }
}