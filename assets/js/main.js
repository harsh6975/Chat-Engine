const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

socket.on("joinMessage", (joinMessage) => {
   outputMessage(joinMessage);
})

document.querySelector(".btn").addEventListener("click", (e)=>{
  e.preventDefault();
  let username = document.querySelector("#username");
  let userName = username.value;
  socket.emit("username", userName);
})

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}