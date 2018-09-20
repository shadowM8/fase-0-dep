/**

Buatlah sebuah ALGORITMA/PSEUDOCODE untuk kasus berikut:

Seorang anak memiliki uang sejumlah Rp.X (jumlah uang fleksibel)
Dia akan mengunjungi sebuah toko mainan dan akan membeli mainan yang diinginkannya.
Anak ini hanya akan membeli satu mainan saja dan akan membeli harga mainan paling mahal dari uang yang dimilikinya.

Berikut beberapa mainan dan harga yang ada pada daftar anak tersebut:
 - Rubik 3x3 => Rp35.000
 - Tamiya Mini 4wd => Rp185.000
 - Robot Star Wars => Rp350.000

Tampilkan mainan apa yang bisa dibeli oleh anak tersebut dan berapa jumlah kembaliannya.
Jika uang anak tidak mencukupi satupun dari permainan tersebut, maka tampilkan "Nabung lagi ya, dek!"

**/

// YOUR ALGORITMA OR PSEUDOCODE HERE

STORE "uangAnak" without any value
STORE "hargaRubik" with 35000 value
STORE "hargaTamiya" with 185000 value
STORE "hargaRobot" with 350000 value

IF "uangAnak" equal to or more than "hargaRobot" value
	DISPLAY "Beli Robot Star Wars"
ELSE IF "uangAnak" value equal to "hargaTamiya" or less than "hargaRobot" value
	DISPLAY "Beli Tamiya mini 4wd"
ELSE IF "uangAnak" value equal to "hargaRubik" or less than "hargaTamiya" value
	DISPLAY "Beli Rubik 3x3"
ELSE
	DISPLAY "Nabung lagi ya, dek!"

