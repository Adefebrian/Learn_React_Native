//Soal 1 If Else
var nama = "junaedi";
var peran = "";

if (nama == " " || peran == " " ) {
    console.log("Nama Harus Diisi!");
} else if ( nama == "jhon" || peran == " ") {
    console.log("Halo jhon, Pilih peranmu untuk memulai game!")
} else if ( nama == "jane" || peran == "penyihir") {
    console.log("Selamat datang di Dunia Warewolf, jane")
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf")
}else if ( nama == "jenita" || peran == "guard") {
    console.log("Selamat datang di Dunia Warewolf, Jenita")
    console.log("Halo Guard Jenita, kamu akan membantu temanmu dari serangan werewolf")
} else if ( nama == "junaedi" || peran == "warewolf") {
    console.log ("Selamat datang di Dunia Werewolf, Junaedi")
    console.log ("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" )
}

//Soal 2 Switch

var tanggal = 9;
var bulan = 12;
var tahun = 2002;
switch(bulan) {
  case 1:   { console.log(tanggal,'Januari',tahun); break; }
  case 2:   { console.log(tanggal,'Februari',tahun); break; }
  case 3:   { console.log(tanggal,'Maret',tahun); break; }
  case 4:   { console.log(tanggal,'April',tahun); break; }
  case 5:   { console.log(tanggal,'Mei',tahun); break; }
  case 6:   { console.log(tanggal,'Juni',tahun); break; }
  case 7:   { console.log(tanggal,'Juli',tahun); break; }
  case 8:   { console.log(tanggal,'Agustus',tahun); break; }
  case 9:   { console.log(tanggal,'September',tahun); break; }
  case 10:   { console.log(tangga,'Oktober',tahun); break; }
  case 11:   { console.log(tanggal,'November',tahun); break; }
  default:  { console.log(tanggal,'Desember',tahun); }
}