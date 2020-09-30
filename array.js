console.log(
  "====================================# DAY 5 - ARRAY #===================================="
);
console.log("");

console.log(
  "====================================# SOAL 1 - Range #===================================="
);
console.log("");

function range(startNum, finishNum) {
  var result = [];
  if (startNum == undefined || finishNum == undefined) {
    return -1;
  }
  if (startNum > finishNum) {
    for (let index = startNum; index >= finishNum; index--) result.push(index);
  } else {
    for (let index = startNum; index <= finishNum; index++) result.push(index);
  }
  return result;
}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11, 18));
console.log(range(54, 50));
console.log(range(0));

console.log("");
console.log(
  "====================================# SOAL 2 Range With Step #===================================="
);
console.log("");

function rangeWithStep(mulai, akhir, step) {
  var isi1 = [];
  for (var i = mulai; i <= akhir; i += step) {
    isi1.push(i);
  }
  return isi1;
}
function rangeWithStep1(mulai1, mulai2, step) {
  var isi2 = [];
  for (var j = mulai1; j >= mulai2; j -= step) {
    isi2.push(j);
  }
  return isi2;
}
console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep1(5, 2, 1));
console.log(rangeWithStep1(29, 2, 4));
console.log("");
console.log(
  "====================================# SOAL 3 - Sum Of Range #===================================="
);
console.log("");
function sum(ichi, icha, step) {
  var result = 0;

  if (ichi == undefined) return 0;
  else if (icha == undefined) return ichi;
  else if (step == undefined) step = 1;

  if (ichi > icha) {
    for (let index = ichi; index >= icha; index -= step) {
      result += index;
    }
  } else {
    for (let index = ichi; index <= icha; index += step) {
      result += index;
    }
  }
  return result;
}
console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());
console.log("");
console.log(
  "====================================# SOAL 4 - Array Multidimensi #===================================="
);
console.log("");
var info = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling() {
  for (var i = 0; i < info.length; i++) {
    console.log("Nomor ID: " + info[i][0]);
    console.log("Nama Lengkap: " + info[i][1]);
    console.log("TTL: " + info[i][2]);
    console.log("Hobi: " + info[i][3]);
  }
}
dataHandling();
console.log("");
console.log(
  "====================================# SOAL 5 - Balik Kata #===================================="
);
console.log("");
function balikKata(str) {
  if (str === "") {
    return "";
  } else {
    return balikKata(str.substr(1)) + str.charAt(0);
  }
}
console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));
console.log("");
console.log(
    "====================================# SOAL 6 - Metode Array #===================================="
  );
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(data = []) {
    var firstName = data[1];
    data.splice(1, 1, `${firstName} Elsharawy`)
    data.splice(2, 1,`Provinsi ${data[2]}`)
    data.splice(4,1,"Pria", "SMA Internasional Metro");
    var birthdate = data[3].split("/");
    console.log(data);
    switch (Number(birthdate[1])) {
        case 01: console.log("Januari"); break;
        case 02: console.log("Februari"); break;
        case 03: console.log("Maret"); break;
        case 04: console.log("April"); break;
        case 05: console.log("Mei"); break;
        case 06: console.log("Juni"); break;
        case 07: console.log("Juli"); break;
        case 08: console.log("Agustus"); break;
        case 09: console.log("September"); break;
        case 10: console.log("Oktober"); break;
        case 11: console.log("November"); break;
        case 12: console.log("Desember"); break;
        default: break;
    }
    var reverseDate = [birthdate[2], birthdate[0], birthdate[1]];
    console.log(reverseDate);
    console.log(birthdate.join("-"));
    console.log(firstName);
}
dataHandling2(input);
