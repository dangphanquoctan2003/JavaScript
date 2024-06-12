//Đệ quy//

function deQuy () {
    deQuy(); 
}
deQuy();
// Ví dụ countdown //
function countDown(num) {  //Sau đó thằng num là bằng 3 chạy lần thứ 2 //
    if(num > 0 ) {         // Sau đó chạy thằng thứ 3 lớn hơn 0, thỏa mãn điều kiện lần 3 //
        console.log(num);  // Sau nó console.log ra số 3 //
        return countDown(num - 1);  //Và nó sẽ return lại chính nó và lấy num - 1 có nghĩa là 3-1 và nó sẽ gọi lại chính nó và 2 cũng thỏa mãn điều kiện lần 5 //
    }
        return num;        // nó sẽ k return thằng này đc nữa lần 4 //
}
countDown(10); // nó chạy thằng này đầu tiên //

//Ví dụ tính giai thừa //

function giaiThua(num) {  // thứ 2 : nó truyền thằng num = 6 //
    if(num > 0) {         // Thứ 3 : nó xét thằng num = 6 > 0, thỏa mãn điều kiện if //
        return num * giaiThua(num - 1); //Thì suy ra nó trả về thằng 6 * giai thừa (3-1) và nó cứ lặp lại đến khi nào điều kiên if k thỏa mãn đc nữa //
    }   
    return 1;
}
giaiThua(6);  // đầu tiên nó truyền cái number = 6//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Một số phương thức về Array
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
 */

var cousre = [
    {
        id: 1,
        name:'Javascript',
        coin: 250
    },
    {
        id: 2,
        name:'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name:'ruby',
        coin: 0
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    }
];

// forEach : Duyệt qua từng phần tử của mảng //
cousre.forEach(function(cousre){                  //Call back : gọi lại //
    console.log(cousre);                // in ra từng phần tử của mảng //
    console.log(index, cousre);         // indẽ chỉ duyệt qua từng phần tử của mảng //
});     

// every : kiểm tra tất cả các phần tử cùng 1 mảng phải thỏa mãn một điều kiện gì đó //
// avery : kiểm tra điều kiện nếu các phần tử coin = 0 thì đúng, còn sai 1 thằng thì coi như sai và trả về false // 
var isFree = cousre.every(function(cousre, index) {

    return cousre.coin === 0;

});
console.log(isFree)

// some : Kiểm tra tất cả các phần tử nếu sai thì kiểm tra tiếp thì kiểm tra tiếp, miễn có một phần tử đúng duy nhất là coi như true //
var isFree = cousre.some(function(cousre, index) {

    return cousre.coin === 0;

});
console.log(isFree)

// find : tìm kiếm các phần từ mình cần tìm và nếu có thì nó sẽ đưa ra giá trị đó, còn k thì thôi
// Chỉ luôn luôn lấy giá trị duy nhất và trả về mặc dù có phần tử trùng hợp hay k thì nó vẫn lấy giá trị đầu tiên//
var isFree = cousre.find(function(cousre, index) {

    return cousre.name === 'Ruby' //Ruby là thứ mình cần tìm và thằng find sẽ tìm nếu có, nếu k thì sẽ undèined //

});
console.log(cousre)

// filter : Trả về tất cả phần tử mà thỏa mãn cũng tương đương như tk find //
var listCourse = listCourse.filter(function(cousre, index) {

    return cousre.name === 'Ruby'; //Trả về tất cả phần tử trùng hợp tên thì nó sẽ lấy hết k như thằng find //

});
console.log(listCourse)
// Ví dụ //
// Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số 
// (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
// Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
// Gợi ý: Sử dụng phương thức filter.
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// Kết quả //
const sport = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(sports){
    var favorite = sports.filter(sports=> sports.like > 5)
    return favorite;
}



// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// Map : Khi mà muốn chỉnh sửa hoặc thay đổi array,element //

var cousre = [
    {
        id: 1,
        name:'Javascript',
        coin: 250
    },
    {
        id: 2,
        name:'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name:'ruby',
        coin: 0
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    }
];

function cousreHandler(cousre) {
    console.log(cousre);
    return {
        id:cousre.id,
        name: `khoa hoc: ${cousre.name}`,
        coin: cousre.coin,
        coinText: `Gia: ${cousre.coin}`,
        index:index,
        originArray: cousre,
    }
} 

var newCourses = cousre.map(cousreHandler);
console.log(newCourses);

// reduce: trả về tổng kết quả số coin hoặc phần từ khác//
var cousres = [
    {
        id: 1,
        name:'Javascript',
        coin: 250
    },
    {
        id: 2,
        name:'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name:'ruby',
        coin: 0
    },
    {
        id: 4,
        name:'PHP',
        coin: 400
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 500
    }
];

//     //Biến lưu trữ //
// var totalCoin = 0;

//     // Lặp qua các phần tử 
// for(var cousre of cousre) {

//     //Thực hiện việc lưu trữ //
//     totalCoin += cousre.coin;
// }
// console.log(totalCoin);


var i = 0;

function coinHandler(accumlator, currentValue, currentIndex, originArray){
    i++
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumlator
    });
}
var totalCoin = cousre.reduce(coinHandler, 0);

//Ví dụ //
// Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
// Hãy tạo hàm getTotalGold có 1 tham số là mảng. 
// Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.
// Trong thực tế đoàn thể thao Việt Nam có được 205 huy chương vàng nhưng list ra thì dài quá nên mình chỉ list ra một vài cái tượng trưng thôi nhé.


// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]



// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

//Kết quả//


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(arr){
var sum = 0
arr.reduce(function(bien, curval){
return sum = bien+curval.gold
},0)
return sum
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





























