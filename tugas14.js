function tugas14(){
  var angkaSesuaiTugas = 37;
  var tanggalLahirSaya = 12;
  hasil = pembagian(angkaSesuaiTugas, tanggalLahirSaya);
  console.log("Hasil Pembagian : ", hasil);
  console.log("Berikut adalah hasil pembulatan : ");
  console.log(Math.ceil(hasil));
  console.log(Math.floor(hasil));
  console.log(Math.round(hasil));
}

function pembagian (x,y){
  return x/y;
}

tugas14();
