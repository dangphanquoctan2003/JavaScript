// CallBack //
//Là hàm (function) được truyền qua đối số
//Khi gọi 1 hàm khác//
//1. Là hàm //
//2. Được truyền qua đối số //

function myFunction(param){
    console.log(param);
}
myFunction(123);
// Ví dụ //
//Ở bài học này, các bạn hãy sử dụng kiến thức về callback vừa học ở bài trước để hoàn thành function sumCb và tạo thêm các function subCb, multiCb và divCb.
// function sumCb(a, b) {
    
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

// Kết quả //
let sumCb = function (a, b) {
    return a + b;
}

let subCb = function (a, b) {
    return a - b;
}

let multiCb = function (a, b) {
    return a * b;
}

let divCb = function (a, b) {
    return a / b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
caculate(1, 2, sumCb) // Output: 3
caculate(1, 2, subCb) // Output: -1
caculate(1, 2, multiCb) // Output: 2
caculate(3, 1, divCb) // Output: 3

// CALLBACK PHẦN 2//

Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;
    for(var i = 0; i < arrayLength; ++i) {
        var results = callback(this[i], i);
        output.push(results);
    }
    return output;
}

var courses = [
    'JavaScript',
    'Ruby',
    'PHP'
];

var htmls = courses.map2(function(courses){
    return `<h2>${courses}</h2>`;
});

console.log(htmls.join(''));

// Ví dụ //
//Ở bài trước chúng ta đã được học cách tạo phương thức map2 hoạt động giống với phương thức map của Array.
// Bây giờ, các bạn hãy tạo ra phương thức myMap hoạt động tương tự phương thức map2 và map nhé.

// Array.prototype.myMap = function(cb) {
    
// }

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// kết quả //
Array.prototype.myMap = function(cb) {
    var bon = [];
    for(var i = 0;i<this.length;++i) {
        var ne = cb(this[i],i)
        trung.push(ne)

    }
    return(bon);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
