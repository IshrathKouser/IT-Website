document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    if (!chatbotContainer) {
        console.error("Element with id 'chatbot-container' not found.");
        return;
    }

    chatbotContainer.innerHTML = `
        <div id="chatbox">
            <p>👋 Hello! Ask me anything about our IT services.</p>
        </div>
        <input type="text" id="chat-input" placeholder="Type a message...">
    `;

    document.getElementById("chat-input").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            let userMessage = e.target.value;
            e.target.value = "";

            let response = getChatbotResponse(userMessage);
            document.getElementById("chatbox").innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
            setTimeout(() => {
                document.getElementById("chatbox").innerHTML += `<p><strong>Assistant:</strong> ${response}</p>`;
            }, 1000);
        }
    });

    function getChatbotResponse(message) {
        const responses = {
            "hi": "Hello! How can I assist you?",
            "hello": "Hello! How can I assist you?",
            "what services do you offer": "We provide web development, AI, and cloud solutions.",
            "services": "We provide web development, AI, and cloud solutions.",
            "how can I contact you": "You can contact us via email at support@techhub.com",
            "contact": "You can contact us via email at support@techhub.com",
            "bye": "Goodbye! Have a great day!",
            "tell me about your company": "We are a leading IT solutions company with over 10 years of experience.",
            "about": "We are a leading IT solutions company with over 10 years of experience.",
        };

        let lowerMessage = message.toLowerCase();
        return responses[lowerMessage] || "I'm not sure. Can you rephrase?";
    }
});
