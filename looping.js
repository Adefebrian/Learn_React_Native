console.log("========================== 1. Looping While ==========================");
console.log("");
console.log("+++++++++ Looping Pertama +++++++++");
console.log("");
//Looping increment
var loop = 2;
while (loop < 22) {
  console.log(loop + " - I Love Coding");
  loop += 2;
}
console.log("");
console.log("+++++++++ Looping Kedua +++++++++");
console.log("");
//Looping decrement
var loop = 20;
while (loop > 0) {
  console.log(loop + " - I Will Become a Mobile Developer");
  loop -= 2;
}
console.log("");
console.log("========================== 2. Looping For ==========================");
console.log("");
var code = 1 //ini variable startnya

for (var code = 1; code < 20; code++) //ini untuk loopingnya 

  if (code % 2 === 0) {
    console.log(code + " - Berkuaitas"); //ini untuk looping genap 
  } else {
    if (code % 1 == 0) {
      console.log(code + " - Santai"); //ini untuk looping ganjil
    }
    if (code % 3 == 0 && code % 1 == 0) {
      console.log(code + " - I love coding"); //ini untuk looping kelipatan 3
    }
  }
  console.log("");
  console.log("========================== 3. Persegi Panjang ==========================" );
  console.log("");
  var baris = "";
  for(var i = 0; i < 4; i++){
   for(var a = 0; a < 9; a++){
    baris += (a % 9) == (i % 4) ? "" : "#";
   }
   baris += "\n";
  }
  console.log(baris);
  console.log("========================== 4. Tangga ==========================" );
  console.log("");
  for (var i=0; i < 7; i++) {
    console.log("#".repeat(i+1))
  }
  console.log("");
  console.log("========================== 5. Papan Catur ==========================" );
  console.log("");
  var catur = "";
for(var i = 0; i < 8; i++){
 for(var a = 0; a < 8; a++){
  catur += (a % 2) == (i % 2) ? " " : "#";
 }
 catur += "\n";
}
console.log(catur);