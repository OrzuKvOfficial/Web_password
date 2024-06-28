var wrongAttempts = 0;
var blockedUntil = 0;

function checkPassword() {
    if (blockedUntil > Date.now()) {
        var remainingTime = Math.ceil((blockedUntil - Date.now()) / 1000);
        alert('Kirish uchun hozircha bloklangan. Keyingi urinishga qolgan vaqt: ' + remainingTime + ' sekund');
        return;
    }
    
    var password = document.getElementById('password').value;
    if (password === 'Orzu') { 
        window.location.href = 'site.html'; 
    } else {
        document.getElementById('error-message').style.display = 'block';
        wrongAttempts++;
        if (wrongAttempts >= 3) {
            blockedUntil = Date.now() + 5000;
            setTimeout(function() {
                wrongAttempts = 0;
            }, 5000);
        }
    }
}
