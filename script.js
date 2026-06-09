const tombol = document.getElementById("tombol");
const hasil = document.getElementById("hasil");
const nama = document.getElementById("nama");

tombol.addEventListener("click", function() {
    hasil.innerHTML = "Halo " + nama.value + ", selamat datang di website saya!";
});

const warna = document.getElementById("warna");

warna.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

const hobi = document.getElementById("hobi");
const dataHobi = document.getElementById("dataHobi");

hobi.addEventListener("click", function() {
    dataHobi.innerHTML = "Hobi saya: Mendengarkan Musik, Menonton Film, dan Belajar Coding.";
});

const sembunyi = document.getElementById("sembunyi");

sembunyi.addEventListener("click", function() {
    dataHobi.innerHTML = "";
});