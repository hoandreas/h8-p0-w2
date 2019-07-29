var tanggal = 40;
var bulan = 2;
var tahun = 2010;

if ((tanggal > 0 && tanggal <= 31) && (bulan > 0 && bulan <= 12) && (tahun >= 1990 && tahun <= 2200)) {
    switch (bulan) {
        case 1 :
            bulan = 'Januari';
            break;
        case 2 :
            if (tanggal <= 29){
                bulan = 'Februari';
            } else {
                tanggal = '';
                bulan = 'Invalid date';
                tahun = '';
            }
            break;
        case 3 :
            bulan = 'Maret';
            break;
        case 4 :
            bulan = 'April';
            break;
        case 5 :
            bulan = 'Mei';
            break;
        case 6 :
            bulan = 'Juni';
            break;
        case 7 :
            bulan = 'Juli';
            break;
        case 8 :
            bulan = 'Agustus';
            break; 
        case 9 :
            bulan = 'September';
            break;
        case 10 :
            bulan = 'Oktober';
            break;
        case 11 :
            bulan = 'November';
            break;
        case 12 :
            bulam = 'Desember';
            break;                                                        
    }
    console.log(tanggal + ' ' + bulan + ' ' + tahun);
} else {
    console.log('Invalid date format');
}