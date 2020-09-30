var readBooks = require('./callback.js');
var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
];
var time = 10000;
readBooks(time, books[0], function (sisaWaktu) {
    readBooks(sisaWaktu, books[1], function (sisaWaktu) {
        readBooks(sisaWaktu, books[2], function (sisaWaktu) {});
    });
});