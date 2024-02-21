function checkPassword() {
    var password = document.getElementById('password').value;
    // Bu erda siz kerakli parolni tekshirish shartlarini yozishingiz mumkin
    if (password === 'Orzu') { // sizning_parolingiz o'rniga o'zingizning kerakli parolingizni yozing
      window.location.href = 'site.html'; // Agar parol to'g'ri bo'lsa, foydalanuvchi sahifaga o'tkaziladi
    } else {
      document.getElementById('error-message').classList.remove('d-none'); // Agar parol noto'g'ri bo'lsa, xabar ko'rsatiladi
    }
  }