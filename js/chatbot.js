// V3 Assistant Chatbot - chatbot.js

// Create Floating Button
const chatButton = document.createElement("div");
chatButton.id = "chat-button";
chatButton.innerText = "V3 Assistant 💬";
chatButton.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 14px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 9999;
  font-family: Arial, sans-serif;
`;
chatButton.onclick = toggleV3Assistant;
document.body.appendChild(chatButton);

// Create Chat Window
const chatWindow = document.createElement("div");
chatWindow.id = "v3-assistant";
chatWindow.style.cssText = `
  display: none;
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 320px;
  height: 450px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  z-index: 9998;
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

chatWindow.innerHTML = `
  <div style="background: #007bff; color: #fff; padding: 12px 16px;">
    <strong>V3 Assistant 🤖</strong>
    <span onclick="document.getElementById('v3-assistant').style.display='none'" style="float:right; cursor:pointer;">×</span>
  </div>
  <div id="chat-content" style="padding: 15px; height: calc(100% - 110px); overflow-y: auto;">
    <p>Hello! I'm <strong>V3 Assistant</strong> 👋<br>How can I help you today?</p>
  </div>
  <div style="padding: 10px; border-top: 1px solid #eee;">
    <input type="text" id="userInput" placeholder="Type your message..." style="width: 72%; padding: 8px; border: 1px solid #ccc; border-radius: 6px;">
    <button id="sendBtn" style="padding: 8px 10px; background: #007bff; color: white; border: none; border-radius: 6px;">Send</button>
  </div>
`;

document.body.appendChild(chatWindow);

// Toggle Chat Window
function toggleV3Assistant() {
  const box = document.getElementById("v3-assistant");
  box.style.display = (box.style.display === "none" || !box.style.display) ? "block" : "none";
}

// Handle Message Sending
function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat-content");

  if (input.value.trim() !== "") {
    const userMsg = document.createElement("p");
    userMsg.innerHTML = `<strong>You:</strong> ${input.value}`;
    chat.appendChild(userMsg);

    const botReply = document.createElement("p");
    botReply.innerHTML = `<strong>V3 Assistant:</strong> Thank you! We’ll get back to you soon.`;
    chat.appendChild(botReply);

    chat.scrollTop = chat.scrollHeight;
    input.value = "";
  }
}

// Attach event listener
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sendBtn").onclick = sendMessage;
});

