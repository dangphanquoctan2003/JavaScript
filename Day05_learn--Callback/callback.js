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

/**
    forEach, find, filter, some, every, reduce
 */
// forEach //
    Array.prototype.forEach2 = function(callback){
        for (var index in this) {
            console.log('index: ', index);
        }
    }
var courses = [
    'JavaScript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(courses, index, array){
    console.log(courses, index, array);
});
///////////////////////////////////////////////////

// Filter //

Array.prototype.filter2 = function(callback){
    for (var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}
var courses = [
    {
        name: 'JavaScript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

var filterCourses = courses.filter2(function(courses, index, array){
    return courses.coin > 700;
});

console.log(filterCourses);

// Ví dụ //
// Ở bài trước chúng ta đã được học cách tạo phương thức filter2 hoạt động giống với phương thức filter của Array.
// Bây giờ, các bạn hãy tạo ra phương thức myFilter hoạt động tương tự phương thức filter2 và filter nhé.
// Array.prototype.myFilter = function(cb) {
    
// }

// Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// })); Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: [1, 2, 3, 4]

// Kết quả //
Array.prototype.myFilter = function (callback, thisArgument) {
    let output = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback.call(thisArgument, this[index], index, this);
            if (result)
                output.push(this[index]);
        }
    }
    return output;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Some //

Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            if(callback(this[index], index, this)){
                return true;
            };
        }
    }
    return false;
}
var courses = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var result = courses.some2(function(courses, index, array){
    return courses.isFinish;
});
console.log(result); 
// Ví dụ //
// Ở bài trước chúng ta đã được học cách tạo phương thức some2 hoạt động giống với phương thức some của Array.
// Bây giờ, các bạn hãy tạo ra phương thức mySome hoạt động tương tự phương thức some2 và some nhé.

// Array.prototype.mySome = function(cb) {
    
// }

// Expected results:

// const numbers = [1, 3, 3, 5];

// console.log(numbers.mySome(function (number) {
//     return number % 2 === 0;
// })); Output: false

// console.log(numbers.mySome(function (number, index) {
//     return index % 2 === 0;
// })); Output: true

// console.log(numbers.mySome(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: true

// Kết quả // 

Array.prototype.mySome = function(cb) {
    var out = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index],index,this)) {
                out = true;
            }
        }
    }
    return out;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Every //

Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var result = courses.every2(function(courses, index, array){
    return courses.isFinish;
});
console.log(result); 

// Ví dụ //
// Ở bài trước chúng ta đã được học cách tạo phương thức every2 hoạt động giống với phương thức every của Array.
// Bây giờ, các bạn hãy tạo ra phương thức myEvery hoạt động tương tự phương thức every2 và every nhé.


// Array.prototype.myEvery = function(cb) {
    
// }
// Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true

// kết quả //
Array.prototype.myEvery = function(cb) {
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = cb(this[index],index,this)
            if (!result) {
                return false;
            }
        }
    }
    return true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
