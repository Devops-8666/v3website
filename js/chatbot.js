// Inject Tawk.to Script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/687b207214ecf21919c827d8/1j0gfdg2v';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// Create and inject the floating button
const chatButton = document.createElement("button");
chatButton.innerHTML = `<span style="margin-right: 5px;">💬</span> V3 Assistant`;
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.right = "20px";
chatButton.style.zIndex = "9999";
chatButton.style.backgroundColor = "#007bff";
chatButton.style.color = "white";
chatButton.style.border = "none";
chatButton.style.borderRadius = "50px";
chatButton.style.padding = "12px 18px";
chatButton.style.fontSize = "16px";
chatButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
chatButton.style.cursor = "pointer";
chatButton.style.display = "flex";
chatButton.style.alignItems = "center";
chatButton.style.transition = "all 0.3s ease-in-out";
chatButton.addEventListener("click", toggleChatBox);
document.body.appendChild(chatButton);

// Create the chat box
const chatBox = document.createElement("div");
chatBox.style.position = "fixed";
chatBox.style.bottom = "80px";
chatBox.style.right = "20px";
chatBox.style.width = "320px";
chatBox.style.maxHeight = "400px";
chatBox.style.backgroundColor = "#fff";
chatBox.style.border = "1px solid #ccc";
chatBox.style.borderRadius = "10px";
chatBox.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
chatBox.style.padding = "15px";
chatBox.style.zIndex = "9999";
chatBox.style.display = "none";
chatBox.style.flexDirection = "column";
chatBox.style.overflow = "auto";
chatBox.style.fontFamily = "Arial, sans-serif";

chatBox.innerHTML = `
  <h5 style="margin: 0 0 10px; font-weight: bold;">Hi, I'm V3 Assistant 👋</h5>
  <p style="margin-bottom: 10px;">How can I help you today?</p>
  <ol style="margin-left: 15px;">
  <li><a href="services.html" target="_blank" style="text-decoration: none;">🔍 View Services</a></li>
  <li><a href="contact.html" target="_blank" style="text-decoration: none;">📇 Contact Info</a></li>
  <li><a href="#" onclick="if (typeof Tawk_API !== 'undefined') Tawk_API.maximize(); return false;" style="text-decoration: none;">💬 Talk to Human</a></li>
  </ol>
  <input id="userInput" type="text" placeholder="Type 1, 2 or 3..." style="width: 100%; padding: 6px; margin-top: 10px; border-radius: 5px; border: 1px solid #ccc;" />
  <button onclick="handleUserInput()" style="margin-top: 10px; padding: 6px 10px; background-color: #007bff; color: white; border: none; border-radius: 5px;">Send</button>
  <div id="chatResponse" style="margin-top: 10px;"></div>
`;
document.body.appendChild(chatBox);

// Toggle the visibility of the chat box
function toggleChatBox() {
  chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
}

// Handle user input
function handleUserInput() {
  const input = document.getElementById("userInput").value.trim();
  const responseBox = document.getElementById("chatResponse");

  if (input === "1") {
    responseBox.innerHTML = "🔍 Visit our <a href='services.html' target='_blank'>Services Page</a> to know more.";
  } else if (input === "2") {
    responseBox.innerHTML = "📧 You can email us at <a href='mailto:vinay.kumar@v3software.com'>vinay.kumar@v3software.com</a>";
  } else if (input === "3") {
    responseBox.innerHTML = "👨‍💬 Connecting you to a live agent...";
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.maximize();
    } else {
      responseBox.innerHTML += "<br><em>(Live chat is still loading... please try again in a moment)</em>";
    }
  } else {
    responseBox.innerHTML = "❗ Please enter 1, 2, or 3.";
  }

  document.getElementById("userInput").value = "";
}
