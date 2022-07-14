// inicializamos la conexion
const socket = io.connect();
const inputUser = document.querySelector('#miInput');
// recibo desde el servidor un mensaje
socket.on('mensaje', data => {
    console.log(data);
});

socket.on('contenido', data => {
    document.querySelector('#content').innerHTML = data
});


inputUser.addEventListener('change', (e)=>{
    socket.emit("change", e.target.value)
})
// TODO obtener el input y emitir el mensaje cuando ocurra el evento de input en el html