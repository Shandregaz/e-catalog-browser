// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi ini akan berjalan setelah seluruh dokumen HTML selesai dimuat dan diproses.

    console.log("E-Catalog script loaded successfully!");

    // Karena HTML saat ini menggunakan tag <a> standar untuk navigasi ke halaman produk yang berbeda,
    // tidak ada JavaScript khusus yang diperlukan untuk fungsionalitas navigasi utama
    // yang ditunjukkan dalam HTML yang disediakan (index.html mengarah ke product_xyz.html).

    // Anda dapat menambahkan fungsionalitas JavaScript lainnya di sini jika diperlukan, misalnya:
    // - Elemen interaktif (misalnya, carousel gambar di halaman detail produk)
    // - Validasi formulir (jika Anda menambahkan formulir)
    // - Memuat konten secara dinamis (jika Anda memutuskan untuk beralih ke model Single Page Application)
    // - dll.

    // Contoh (tidak aktif): Jika Anda ingin menambahkan event listener ke semua tombol "Lihat Detail"
    // untuk alasan tertentu (misalnya, pelacakan klik, atau animasi kecil sebelum navigasi):
    /*
    const detailButtons = document.querySelectorAll('.product-card .btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // event.preventDefault(); // Hapus komentar ini jika Anda ingin menghentikan navigasi default
            console.log('Pengguna mengklik untuk melihat detail untuk: ' + this.href);
            // Tambahkan logika pra-navigasi di sini
            // Jika event.preventDefault() digunakan, Anda perlu menavigasi secara manual:
            // window.location.href = this.href;
        });
    });
    */

    // Contoh lain: Menambahkan kelas 'active' ke link navigasi di header jika ada
    // (Ini lebih relevan jika Anda memiliki menu navigasi yang sama di semua halaman)
    /*
    const currentPath = window.location.pathname.split("/").pop(); // Mendapatkan nama file halaman saat ini
    if (currentPath) {
        const navLinks = document.querySelectorAll('header nav a'); // Asumsikan ada <nav> di <header>
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
    */
});