// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
  } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking. How about you?";
  } else if (input.includes("what is your name")) {
      output = "My name is Sajid Mehmood, I'm a chatbot.";
  } else if (input.includes("what can you do")) {
      output = "I can chat with you, answer some simple questions, tell jokes, and even give you some fun facts!";
  } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
  } else if (input.includes("tell me a fun fact")) {
      output = "Did you know that octopuses have three hearts? Two pump blood to the gills, while the third pumps it to the rest of the body.";
  } else if (input.includes("what is the weather")) {
      output = "I'm not connected to a weather service, but I hope it's nice wherever you are!";
  } else if (input.includes("what is your favorite color")) {
      output = "I don't have a favorite color, but I think all colors are beautiful in their own way!";
  } else if (input.includes("who created you")) {
      output = "I was created by a developer named Sajid Mehmood.";
  } else if (input.includes("what is the meaning of life")) {
      output = "That's a deep question! Some say it's 42, others say it's about finding happiness and purpose.";
  } else if (input.includes("do you like music")) {
      output = "I don't have ears, but I think music is a wonderful way to express emotions!";
  } else if (input.includes("what is your favorite movie")) {
      output = "I don't watch movies, but I've heard great things about 'The Matrix'!";
  } else if (input.includes("how old are you")) {
      output = "I'm just a program, so I don't have an age. But I was created recently!";
  } else if (input.includes("can you help me")) {
      output = "Of course! I'll do my best to assist you. What do you need help with?";
  } else if (input.includes("thank you") || input.includes("thanks")) {
      output = "You're welcome! Let me know if there's anything else I can do for you.";
  } else if (input.includes("goodbye") || input.includes("bye")) {
      output = "Goodbye! Have a great day!";
  } else {
      output = "Sorry, I don't understand that. Please try something else.";
  }

  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  let chat = document.getElementById("chat");
  let typingIndicator = document.createElement("div");
  typingIndicator.classList.add("typing");
  typingIndicator.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
  `;
  chat.appendChild(typingIndicator);
  chat.scrollTop = chat.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
  let chat = document.getElementById("chat");
  let typingIndicator = chat.querySelector(".typing");
  if (typingIndicator) {
      chat.removeChild(typingIndicator);
  }
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value.trim();
  if (input) {
      displayUserMessage(input);
      document.getElementById("input").value = "";
      showTypingIndicator();
      setTimeout(function () {
          hideTypingIndicator();
          let output = chatbot(input);
          displayBotMessage(output);
      }, 1000);
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
      sendMessage();
  }
});

// Focus the input field after sending a message
document.getElementById("input").focus();