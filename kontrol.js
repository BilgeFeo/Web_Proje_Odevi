function kontrolEt() {
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    var eposta = document.getElementById("eposta").value;
    var mesaj = document.getElementById("mesaj").value;
    var cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    var okul = document.getElementById("okul").value;
    var onay = document.getElementById("onay").checked;

    // Tüm alanların dolu olup olmadığını kontrol et
    if (isim === "" || soyisim === "" || eposta === "" || mesaj === "" || !cinsiyet || okul === "" || !onay) {
        alert("Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.");
        return false;
    }

    // E-posta adresinin uygunluğunu kontrol et
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(eposta)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return false;
    }

    return true;
}