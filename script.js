function calculateAge() {
    const birthdateInput = document.getElementById('date').value;
    const nameInput = document.getElementById('name').value;
    const cekInput = document.getElementById('cek').value;
    document.getElementById('result').innerText = '';
    document.querySelector('.loading-bar').style.display = 'block';
    
    setTimeout(() => {
        
        if (!birthdateInput) {
            document.getElementById('result').innerText = "Silakan masukkan tanggal lahir.";
            return;
        }
        if (!nameInput) {
            document.getElementById('result').innerText = "Silakan masukkan Nama kamu.";
            return;
        }
        
        const birthdate = new Date(birthdateInput);
        const today = new Date();
        
        let ageYears = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        let ageMonths = monthDiff;
        let ageDays = today.getDate() - birthdate.getDate();
        
        // Jika belum ulang tahun tahun ini
        if (monthDiff < 0 || (monthDiff === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12; // Tambah 12 bulan jika tahun belum
        }
        
        // Jika hari negatif, kurangi satu bulan dan hitung hari yang benar
        if (ageDays < 0) {
            ageMonths--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            ageDays += lastMonth.getDate(); // Ambil jumlah hari bulan sebelumnya
        }
        
        // Menampilkan hasil
        document.getElementById('result').innerText = ` Hallo ${nameInput}, ${cekInput} Kamu sudah ${ageYears} tahun, ${ageMonths} bulan, dan ${ageDays} hari.`;
        document.querySelector('.loading-bar').style.display = 'none';
    }, 2500);
    

    
}
