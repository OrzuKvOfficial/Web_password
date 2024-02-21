var wrongAttempts = 0;
var blockedUntil = 0;

function checkPassword() {
    if (blockedUntil > Date.now()) { // Agar bloklangan muddat tugagan bo'lsa
        var remainingTime = Math.ceil((blockedUntil - Date.now()) / 1000); // Qolgan vaqtni hisoblash (sekund)
        alert('Kirish uchun hozircha bloklangan. Keyingi urinishga qolgan vaqt: ' + remainingTime + ' sekund');
        return;
    }
    
    var password = document.getElementById('password').value;
    if (password === 'Orzu') { 
        window.location.href = 'site.html'; 
    } else {
        document.getElementById('error-message').style.display = 'block';
        wrongAttempts++;
        if (wrongAttempts >= 3) { // Agar 3 marta yoki undan ko'p urinish bo'lsa
            blockedUntil = Date.now() + 5000; // 5 sekund mobaynida bloklangan
            setTimeout(function() { // 5 daqiya o'tgachdan so'ng
                wrongAttempts = 0; // Urinishlar sonini nolga o'zgartirish
            }, 5000); // 5 sekund (5000 milliseconds)
        }
    }
}
