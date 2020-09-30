console.log("============================ PEKAN 2 - OBJECT ============================");
console.log("");
console.log("============== SOAL NO 1 ==============");
console.log("");

function arrayToObject(arr) {

    now = new Date();
    var tahun = now.getFullYear();
    for (var i = 0; i < arr.length; i++) {
        data = {};
        data.firstName = arr[i][0];
        data.lastName = arr[i][1];
        data.gender = arr[i][2];
        umur = tahun - arr[i][3];
        if (umur > 0) {
            data.age = umur;
        } else {
            data.age = "Invalid Birth Year";
        }
        console.log(arr[i][0], arr[i][1], ":", data);
    }
}
var people = [
    ["Bruce", "Banner", "male", 1975],
    ["Natasha", "Romanoff", "female"]
];
arrayToObject(people);
var people2 = [
    ["Tony", "Stark", "male", 1980],
    ["Pepper", "Pots", "female", 2023]
];
arrayToObject(people2);
arrayToObject([]);
console.log("");
console.log("============== SOAL NO 2 ==============");
console.log("");

function shoppingTime(memberId = "", money = 0) {
    if (memberId.length == 0) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        changeMoney = money;
        daftar = [];
        if (changeMoney >= 1500000) {
            daftar.push("Sepatu Stacattu");
            changeMoney -= 1500000;
        }
        if (changeMoney >= 500000) {
            daftar.push("Baju Zoro");
            changeMoney -= 500000;
        }
        if (changeMoney >= 250000) {
            daftar.push("Baju H&N");
            changeMoney -= 250000;
        }
        if (changeMoney >= 175000) {
            daftar.push("Sweater Uniklooh");
            changeMoney -= 175000;
        }
        if (changeMoney >= 50000) {
            daftar.push("Casing Handphone");
            changeMoney -= 50000;
        }
        tagihan = {
            memberId: memberId,
            money: money,
            listPurchased: daftar,
            changeMoney: changeMoney
        };
        return tagihan;
    }
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
console.log("");
console.log("============== SOAL NO 3 ==============");
console.log("");

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    hasil = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var transport = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        };
        for (var j = 0; j < 6; j++) {
            if (rute[j] == transport.naikDari) {
                var awal = j;
            }
            if (rute[j] == transport.tujuan) {
                var akhir = j;
            }
        }
        transport.bayar = (akhir - awal) * 2000;
        hasil.push(transport);
    }
    return hasil;
}
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));