const io = require('socket.io-client');

// URL de tu servidor Socket.IO (asegúrate de que coincida con la configuración en tu servidor)
const serverURL = 'http://192.168.30.152:3000'; // Cambia el puerto si es necesario

// Conecta al servidor Socket.IO
const socket = io(serverURL);

// Maneja eventos del cliente
socket.on('connect', () => {
  console.log('Conectado al servidor de Socket.IO');
  // Envía un mensaje al servidor
  socket.emit('message', 'Ok ya voy.');
});

socket.on('message', (data) => {
  console.log('Mensaje del servidor:', data.message);
  // Cierra la conexión después de recibir el mensaje del servidor
  // socket.close();
});
