document.body.textContent = "Hello World";

const socket = new WebSocket("ws://localhost:8080");

// use socket.send("test") in the browser console to test,
// and see the result in the server console

socket.onopen = () => socket.send("test");
