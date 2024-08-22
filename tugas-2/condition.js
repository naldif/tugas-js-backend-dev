const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Program untuk menentukan apakah angka genap atau ganjil
rl.question('Masukkan sebuah angka: ', (number) => {
    number = parseInt(number);
    if (isNaN(number)) {
        console.log('Input bukan angka.');
    } else if (number % 2 === 0) {
        console.log(`Angka ${number} adalah genap.`);
    } else {
        console.log(`Angka ${number} adalah ganjil.`);
    }

    // Program untuk mencetak nama hari berdasarkan nomor hari
    rl.question('Masukkan nomor hari (1-7): ', (dayNumber) => {
        switch (parseInt(dayNumber)) {
            case 1:
                console.log('Hari ini adalah Senin.');
                break;
            case 2:
                console.log('Hari ini adalah Selasa.');
                break;
            case 3:
                console.log('Hari ini adalah Rabu.');
                break;
            case 4:
                console.log('Hari ini adalah Kamis.');
                break;
            case 5:
                console.log('Hari ini adalah Jumat.');
                break;
            case 6:
                console.log('Hari ini adalah Sabtu.');
                break;
            case 7:
                console.log('Hari ini adalah Minggu.');
                break;
            default:
                console.log('Nomor hari tidak valid. Masukkan nomor antara 1 hingga 7.');
        }

        rl.close();
    });
});
