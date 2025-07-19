// Create chatbot button
const button = document.createElement('div');
button.innerText = '💬 V3 Assistant';
button.style = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 9999;
`;
document.body.appendChild(button);

// Show preconfigured chatbot options
button.onclick = () => {
  const userChoice = prompt(`Hi, I'm V3 Assistant 👋\n\nHow can I help you today?\n\n1. View Services\n2. Contact Info\n3. Talk to Human`);

  if (!userChoice) return;

  switch (userChoice.trim()) {
    case '1':
      alert("🔹 Visit our Services page for more info:\nhttps://v3software.com/services.html");
      break;
    case '2':
      alert("📞 Contact us at:\ninfo@v3software.com\n+91-XXXXXXXXXX");
      break;
    case '3':
      loadTawk(); // Escalate to live agent
      break;
    default:
      alert("Please choose 1, 2 or 3.");
  }
};

// Dynamically load Tawk.to widget
function loadTawk() {
  if (window.Tawk_API) {
    Tawk_API.maximize(); // Show if already loaded
    return;
  }

  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  (function(){
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/687b207214ecf21919c827d8/1j0gfdg2v'; // Use your Tawk.to script
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1, s0);
  })();
}

