function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();
  if (userText === "") return;

  chatBox.innerHTML += `<div class='user-msg'>You: ${userText}</div>`;

  const botReply = getBotReply(userText.toLowerCase());
  chatBox.innerHTML += `<div class='bot-msg'>Bot: ${botReply}</div>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! Welcome to V3 Software Consultancy Services Pvt Ltd. How can I help you?";
  }

  if (message.includes("services")) {
    return "We offer services in OpenShift, Kubernetes, CI/CD, Git, Docker, Cloud Migrations, and DevOps Automation.";
  }

  if (message.includes("contact") || message.includes("email") || message.includes("phone")) {
    return "You can reach us at contact@v3software.com or call us at +91-99999-99999.";
  }

  if (message.includes("location") || message.includes("address")) {
    return "We're based in India and provide services globally including Singapore and the US.";
  }

  if (message.includes("timing") || message.includes("hours") || message.includes("available")) {
    return "Our working hours are 9:00 AM to 7:00 PM IST, Monday to Saturday.";
  }

  if (message.includes("about")) {
    return "V3 Software is a growing IT company specializing in DevOps, cloud infrastructure, and open-source technologies.";
  }

  if (message.includes("tech stack") || message.includes("technologies")) {
    return "We work with Docker, OpenShift, Kubernetes, Jenkins, Git, Flask, MongoDB, and cloud services like AWS & Render.";
  }

  return "I'm sorry, I didn't understand that. Please ask about our services, contact info, or company details.";
}

