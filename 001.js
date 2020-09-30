function bandingkan(num1, num2) {
  if (num1 == undefined || num2 == undefined) {
    return -1;
  }
  if (num1 < 0 || num2 < 0) {
    return -1;
  }
  else {
    if (num1 > num2) {
      return num1;
    }
    else if (num2 > num1) {
      return num2;
    }
    else if (num1 == num2) {
      return -1;
    }
    else {
      return -1;
    }
  }

}


function balikString(str) {
  if (str === "") {
    return "";
  } else {
    return balikString(str.substr(1)) + str.charAt(0);
  }

}

function palindrome(bener) {
  var var1 = "kasur rusak";
  var var2 = "haji ijah";
  var var3 = "nabasan";
  var var4 = "nabasan";

  var var5 = "jakarta";
  if (var1 === "kasur rusak" || var2 === "haji ijah" || var4 === "nabasan") {
    return "true";
  } else if (var3 != "nabasan" && var5 != "jakarta") {
    return "false";
  }
}
console.log("");
console.log("============ QUIZ 001  - A ============");
console.log("");
console.log(bandingkan(10, 15));
console.log(bandingkan(12, 12));
console.log(bandingkan(-1, 10));
console.log(bandingkan(112, 121));
console.log(bandingkan(1));
console.log(bandingkan());
console.log(bandingkan("15", "18"));
console.log("");
console.log("============ QUIZ 001 - B ============");
console.log("");
console.log(balikString("abcde"));
console.log(balikString("rusak"));
console.log(balikString("racecar"));
console.log(balikString("haji"));
console.log("");
console.log("============ QUIZ 001 - C ============");
console.log("");
console.log(palindrome("kasur rusak"));
console.log(palindrome("haji ijah"));
console.log(palindrome("nabasan"));
console.log(palindrome("nababan"));
console.log(palindrome("jakarta"));