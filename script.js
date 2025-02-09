// Show Chatbot
const chatbotBtn = document.getElementById("chatbot-btn");
if (chatbotBtn) {
    chatbotBtn.addEventListener("click", function () {
        let chatbot = document.getElementById("chatbot-container");
        if (chatbot) {
            chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
        }
    });
}

// Scroll Animations
document.addEventListener("scroll", function () {
    document.querySelectorAll(".fade-in").forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("visible");
        }
    });
});
