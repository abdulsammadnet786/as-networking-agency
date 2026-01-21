// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbotBody = document.getElementById('chatbotBody');

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotToggle.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotToggle.style.display = 'flex';
});

// AI Responses
const aiResponses = [
    "We offer CCTV installation starting from PKR 15,000 for a basic 4-camera system.",
    "Our team can visit your location for a free site survey. Please share your address.",
    "We provide 24/7 support for network emergencies. Call 0313 1059992 anytime.",
    "Fiber optic installation typically takes 2-3 days depending on the site complexity.",
    "Yes, we offer maintenance contracts for all our installations with monthly checkups.",
    "You can email us at abdulsammadnet786@gmail.com for a detailed quotation.",
    "Our office is at Ibextower 5th floor, Sharah-e-Faisal, Karachi. Feel free to visit!",
    "We service both residential and commercial clients across Karachi."
];

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.innerHTML = `<p>${message}</p>`;
    chatbotBody.appendChild(userMsg);
    
    // Clear input
    userInput.value = '';
    
    // Scroll to bottom
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
    
    // Simulate AI thinking
    setTimeout(() => {
        // Random AI response
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerHTML = `<p>${randomResponse}</p>`;
        chatbotBody.appendChild(botMsg);
        
        // Scroll to bottom again
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }, 1000);
}

// Send button click
sendBtn.addEventListener('click', sendMessage);

// Enter key to send
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Form submission (demo)
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your inquiry has been sent. We will contact you within 24 hours.');
    this.reset();
});

// Auto-open chatbot after 10 seconds
setTimeout(() => {
    if (!chatbotContainer.style.display || chatbotContainer.style.display === 'none') {
        chatbotToggle.click();
    }
}, 10000);
