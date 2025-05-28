
    document.getElementById("contact-left").addEventListener('submit', function(event) {
        let password = document.getElementById("password").value;
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
        } else {
            alert("Message sent!");
        }
    });
    window.onload = function() {
    let canvas = document.getElementById("canvas");
    if (canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillRect(20, 20, 100, 100);
        ctx.font = "16px Arial";
    }
}
//dynamic SVG
document.addEventListener("DOMContentLoaded", function() {
    let svgContainer = document.getElementById("svg-container");
        svgContainer.innerHTML = `
            <svg width="80" height="70">
                <rect width="300" height="100" fill="white"/>
                <text x="60" y="50" fill="yellow" font-size="15">learn more</text>
            </svg>
        `;
    });
document.getElementById('contact-left').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});
