var tanggal = 5;
var bulan = 5;
var tahun = 2012;

if ((tanggal > 0 && tanggal <= 31) && (bulan > 0 && bulan < 13) && (tahun >= 1990 && tahun <= 2200)) {
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
            if (tanggal <= 30){
                bulan = 'April';
            } else {
                tanggal = '';
                bulan = 'Invalid date';
                tahun = '';                
            }
            break;
        case 5 :
            bulan = 'Mei';
            break;
        case 6 :
            if (tanggal <= 30){
                bulan = 'Juni';
            } else {
                tanggal = '';
                bulan = 'Invalid date';
                tahun = '';
            }
            break;
        case 7 :
            bulan = 'Juli';
            break;
        case 8 :
            bulan = 'Agustus';
            break; 
        case 9 :
            if (tanggal <= 30){
                bulan = 'September';
            } else {
                tanggal = '';
                bulan = 'Invalid date';
                tahun = '';
            }
            break;
        case 10 :
            bulan = 'Oktober';
            break;
        case 11 :
            if (tanggal <= 30){
                bulan = 'November';
            } else {
                tanggal = '';
                bulan = 'Invalid date';
                tahun = '';
            }
            break;
        case 12 :
            bulan = 'Desember';
            break;
        default:
            console.log('Invalid date format');
            break;
    }
    console.log(tanggal + ' ' + bulan + ' ' + tahun);
} else {
    console.log('Invalid date format');
}