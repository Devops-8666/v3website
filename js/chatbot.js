<!-- chatbot.js -->
<script type="text/javascript">
// Create the floating button
const chatButton = document.createElement("div");
chatButton.id = "v3-chat-button";
chatButton.innerHTML = `V3 Assistant 💬`;
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.right = "20px";
chatButton.style.backgroundColor = "#007bff";
chatButton.style.color = "white";
chatButton.style.borderRadius = "50px";
chatButton.style.padding = "10px 16px";
chatButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
chatButton.style.cursor = "pointer";
chatButton.style.fontWeight = "bold";
chatButton.style.fontFamily = "Arial, sans-serif";
chatButton.style.zIndex = "9999";
document.body.appendChild(chatButton);

// Create the chatbox container
const chatBox = document.createElement("div");
chatBox.id = "v3-chatbox";
chatBox.style.position = "fixed";
chatBox.style.bottom = "80px";
chatBox.style.right = "20px";
chatBox.style.width = "300px";
chatBox.style.maxHeight = "400px";
chatBox.style.backgroundColor = "white";
chatBox.style.border = "1px solid #ccc";
chatBox.style.borderRadius = "10px";
chatBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
chatBox.style.display = "none";
chatBox.style.flexDirection = "column";
chatBox.style.overflow = "hidden";
chatBox.style.zIndex = "9999";
document.body.appendChild(chatBox);

// Populate chat content
chatBox.innerHTML = `
  <div style="background-color: #007bff; color: white; padding: 10px; font-weight: bold;">
    👋 Hi, I'm V3 Assistant
  </div>
  <div style="padding: 10px; font-family: Arial; font-size: 14px;">
    How can I help you today?<br><br>
    1. View Services<br>
    2. Contact Info<br>
    3. Talk to Human<br><br>
    <input type="text" id="v3-user-input" placeholder="Type 1, 2 or 3..." style="width: 90%; padding: 5px; border: 1px solid #ccc; border-radius: 5px;"><br><br>
    <button id="v3-submit-btn" style="background-color: #007bff; color: white; padding: 6px 12px; border: none; border-radius: 5px;">Submit</button>
  </div>
`;

// Toggle chatbox visibility
chatButton.addEventListener("click", () => {
  chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
});

// Handle input
document.getElementById("v3-submit-btn").addEventListener("click", () => {
  const input = document.getElementById("v3-user-input").value.trim();

  if (input === "1") {
    alert("📄 Our services include Web Development, Cloud Solutions, and IT Consulting.");
  } else if (input === "2") {
    alert("📧 Email: vinay.kumar@v3software.com\n📞 Phone: +91-XXXX-XXXXXX");
  } else if (input === "3") {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.maximize(); // Show Tawk.to live chat
    } else {
      alert("Live chat is loading. Please wait a moment...");
    }
  } else {
    alert("Please enter 1, 2 or 3.");
  }

  document.getElementById("v3-user-input").value = "";
});
</script>

<!-- Start of Tawk.to Script -->
<script type="text/javascript">
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/687b207214ecf21919c827d8/1j0gfdg2v';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
</script>
<!-- End of Tawk.to Script -->

