// Inject V3 Assistant chat button
const chatBtn = document.createElement('div');
chatBtn.innerHTML = '💬';
chatBtn.style = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  font-size: 22px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 9999;
`;
document.body.appendChild(chatBtn);

// Chatbox HTML
const chatBox = document.createElement('div');
chatBox.style = `
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  font-family: Arial, sans-serif;
  display: none;
  z-index: 9999;
`;

chatBox.innerHTML = `
  <div style="background: #007bff; color: white; padding: 10px 16px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
    🤖 V3 Assistant
  </div>
  <div style="padding: 16px; font-size: 14px;">
    <p>Hi, I'm <strong>V3 Assistant</strong> 👋<br>How can I help you today?</p>
    <button onclick="v3Reply(1)" style="margin: 4px 0; width: 100%; background:#f1f1f1; border:none; padding:8px; border-radius:6px;">🔍 View Services</button>
    <button onclick="v3Reply(2)" style="margin: 4px 0; width: 100%; background:#f1f1f1; border:none; padding:8px; border-radius:6px;">📞 Contact Info</button>
    <button onclick="v3Reply(3)" style="margin: 4px 0; width: 100%; background:#f1f1f1; border:none; padding:8px; border-radius:6px;">👤 Talk to Human</button>
  </div>
`;
document.body.appendChild(chatBox);

// Toggle chat
chatBtn.addEventListener('click', () => {
  chatBox.style.display = (chatBox.style.display === 'none') ? 'block' : 'none';
});

// Chat reply logic
window.v3Reply = function (option) {
  switch(option) {
    case 1:
      alert("🔹 You can check our services at:\nhttps://v3software.com/services.html");
      break;
    case 2:
      alert("📨 Email us at info@v3software.com\n📞 +91-XXXXXXXXXX");
      break;
    case 3:
      loadTawk();
      chatBox.style.display = 'none';
      break;
  }
}

// Tawk.to loader
function loadTawk() {
  if (window.Tawk_API) {
    Tawk_API.maximize();
    return;
  }
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/687b207214ecf21919c827d8/1j0gfdg2v';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  })();
}

