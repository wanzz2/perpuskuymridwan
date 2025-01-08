document.addEventListener("DOMContentLoaded", () => {
    // Animasi buku saat muncul di viewport
    const bookCards = document.querySelectorAll(".book-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 }
    );

    bookCards.forEach((card) => {
        observer.observe(card);
    });

    // Fungsi pencarian sederhana
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        bookCards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() === "") {
            bookCards.forEach((card) => (card.style.display = "block"));
        }
    });
});

//transaksi
// Animasi untuk scroll ke bagian tertentu
document.addEventListener("DOMContentLoaded", () => {
    // Efek tombol submit dengan notifikasi
    const transaksiForm = document.getElementById("transaksiForm");
    transaksiForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Mencegah reload halaman

        const namaBuku = document.getElementById("namaBuku").value;
        const jumlah = document.getElementById("jumlah").value;
        const kategori = document.getElementById("kategori").value;

        if (namaBuku && jumlah && kategori) {
            alert(`Transaksi Berhasil!\n\nNama Buku: ${namaBuku}\nJumlah: ${jumlah}\nKategori: ${kategori}`);
            transaksiForm.reset(); // Mengosongkan formulir
        } else {
            alert("Harap isi semua kolom sebelum menyimpan transaksi!");
        }
    });

    // Animasi hover pada link daftar
    const linkDaftar = document.querySelector(".link-daftar");
    linkDaftar.addEventListener("mouseover", () => {
        linkDaftar.style.textShadow = "0 0 10px rgba(0, 123, 255, 0.8)";
    });

    linkDaftar.addEventListener("mouseout", () => {
        linkDaftar.style.textShadow = "none";
    });
});

//profil


