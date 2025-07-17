// Floating chatbot toggle button
const chatbotBtn = document.createElement('button');
chatbotBtn.innerText = '💬 Chat';
chatbotBtn.style.position = 'fixed';
chatbotBtn.style.bottom = '20px';
chatbotBtn.style.right = '20px';
chatbotBtn.style.zIndex = '9999';
chatbotBtn.style.padding = '10px 15px';
chatbotBtn.style.backgroundColor = '#007bff';
chatbotBtn.style.color = '#fff';
chatbotBtn.style.border = 'none';
chatbotBtn.style.borderRadius = '5px';
chatbotBtn.style.cursor = 'pointer';
document.body.appendChild(chatbotBtn);

// Floating iframe box
const chatbotBox = document.createElement('div');
chatbotBox.style.display = 'none';
chatbotBox.style.position = 'fixed';
chatbotBox.style.bottom = '70px';
chatbotBox.style.right = '20px';
chatbotBox.style.width = '350px';
chatbotBox.style.height = '430px';
chatbotBox.style.zIndex = '9999';
chatbotBox.innerHTML = `
  <iframe
    allow=\"microphone;\"
    width=\"350\"
    height=\"430\"
    src=\"https://bot.dialogflow.com/1ee6f73b-63b1-4beb-92eb-c3484835aed8\">
  </iframe>
`;
document.body.appendChild(chatbotBox);

// Toggle visibility on click
chatbotBtn.onclick = () => {
  chatbotBox.style.display = chatbotBox.style.display === 'none' ? 'block' : 'none';
};

