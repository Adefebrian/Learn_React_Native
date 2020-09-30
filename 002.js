
function DescendingTen(num) {
    if (num != null) {
        var febrian = "";
        for (var x = 0; x < 10; x++) {
            febrian += String(num) + " ";
            num--;
        }
        return febrian;
    } else {
        return -1;
    }
}
function AscendingTen(num) {
    if (num != null) {
        var brian = "";
        for (var w = 0; w < 10; w++) {
            brian += String(num) + " ";
            num++;
        }
        return brian;
    } else {
        return -1;
    }
}
function ConditionalAscDesc(reference, check) {
    if (reference != null && check != null) {
        if (check % 2 == 1) {
            var ade = "";
            for (var x = 0; x < 10; x++) {
                ade += String(reference) + " ";
                reference++;
            }
            return ade;
        } else {
            var ade = "";
            for (var a = 0; a < 10; a++) {
                ade += String(reference) + " ";
                reference--;
            }
            return ade;
        }
    } else {
        return -1;
    }
}
function ularTangga() {
    var result = "";
    var i = 10;
    for (var x = 100; x > 0; x -= 10) {
        if (x == 0) {
            result += ConditionalAscDesc(1, i);
            result += "\n";
        } else {
            result += ConditionalAscDesc(x, i);
            result += "\n";
        }
        i--;
    }

    return result;
}
console.log("");
console.log("============ QUIZ 002 - A ============");
console.log("");
console.log(DescendingTen(100));
console.log(DescendingTen(10));
console.log(DescendingTen());
console.log();
console.log("");
console.log("============ QUIZ 002 - B ============");
console.log("");
console.log(AscendingTen(11));
console.log(AscendingTen(21));
console.log(AscendingTen());
console.log("");
console.log("============ QUIZ 002 - C ============");
console.log("");
console.log(ConditionalAscDesc(20, 8));
console.log(ConditionalAscDesc(81, 1));
console.log(ConditionalAscDesc(31));
console.log(ConditionalAscDesc());
console.log("");
console.log("============ QUIZ 002 - D============");
console.log("");
console.log(ularTangga());
