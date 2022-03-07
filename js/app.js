
var btnPpal = document.getElementById('btn-ppal');
var btnWhat = document.getElementById('btn-wsp');
var btnChat = document.getElementById('btn-chat');
btnPpal.addEventListener('change', cambioEstadoCheckPpal);
btnWhat.addEventListener('change', cambioEstadoCheckWhat);
btnChat.addEventListener('change', cambioEstadoCheckChat);

function cambioEstadoCheckPpal() {
    if (this.checked) {
        console.log("Se presionó el check");
        document.getElementById("btn-wsp").checked = false;
        document.getElementById("btn-chat").checked = false;
    }
}
function cambioEstadoCheckWhat() {
    if (this.checked) {
        document.getElementById("btn-chat").checked = false;
    }
}
function cambioEstadoCheckChat() {
    if (this.checked) {
        document.getElementById("btn-wsp").checked = false;
    }
}