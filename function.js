console.log("================================== FUNCTION - DAY 4 ==================================");
console.log("");
console.log("++++++++++++++++++++++++++++++++++++ SOAL PERTAMA ++++++++++++++++++++++++++++++++++++");
console.log("");

function teriak() {
    var sans = "Hallo Sansbers!";
    return sans;
}
console.log(teriak());

console.log("");
console.log("++++++++++++++++++++++++++++++++++++ SOAL KEDUA ++++++++++++++++++++++++++++++++++++");
console.log("");

function kalikan() { //atau bisa juga kalikan(num1,num2)
    return num1 * num2;
  }
  var num1 = 12;
  var num2 =4 ;
  var hasilKali = kalikan(num1, num2); // Atau bisa juga kalikan();
  console.log(hasilKali);

console.log("");
console.log("++++++++++++++++++++++++++++++++++++ SOAL KETIGA ++++++++++++++++++++++++++++++++++++");
console.log("");
function introduce (){
  return "Nama saya " + name + ", Umur Saya " + age + " tahun" + ", Alamat Saya di " + address + ", dan saya punya hobi yaitu " + hobby;
}
var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogyakarta'; 
var hobby = 'Gaming';

var perkenalan = introduce( name, age, address, hobby );
console.log(perkenalan);
