var nama = "Jack";
var peran = "Penyihir";

if (nama === "" && peran !== "") {
  console.log('Nama harus diisi!');
} else if (nama !== "" && peran === "Kesatria") {
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo Kesatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama !== "" && peran === "Tabib") {
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama !== "" && peran === "Penyihir") {
  console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log('Halo' + nama + ', pilih peranmu dalam game ini!');
}
