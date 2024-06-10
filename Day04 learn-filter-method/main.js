/**
 * Vòng lặp - loop
1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

 */

// 1.for - Lặp với điều kiện đúng //
// chạy từ 1 đến 1000
for (var i = 1; i <= 1000; i++) {
    console.log(i);
} 
// Ví dụ //
// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length
// Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
// Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

function getRandNumbers(min, max, length){
    var arr = [] // [] có nghĩa là lưu trữ nhiều giá trị của 1 biến duy nhất
    for (let i = 0; i < length; i++) {
        arr[i] = Math.random() * (max - min) + min;
    }
    return arr
}
//ví dụ//
// Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
// function getTotal(arr) {
  
// }
// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

//kết quả //
function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(getTotal([1, 2, 3])); // Output: 6
console.log(getTotal([4, 5, -3])); // Output: 6
console.log(getTotal([4, 5, 3, 5])); // Output: 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// For loop //
// Ứng dụng vòng lặp for để lấy được phần tử của 1 mảng //

var myArray = [
    'JavaScript',
    'PHP',
    'Java',
    'Dart'
];
console.log(myArray[0])                     //Thì lấy vị trí thằng javascript thì có mỗi thằng JS

//Cách chạy ra phần tử //
//Lưu ý : Length là một thuộc tính để xác định số lượng phần tử và thuộc tính này rất quan trọng trong việc code //
var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++){
    console.log(i)                          //chạy từ 0 đến 3//
    console.log(myArray[i]);                // Lấy ra được phần tử của mảng như javascript ,php ,.... //
}
// Ví dụ //
// Cho trước mảng orders là danh sách chứa các khóa học
// các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
// Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// // Expected results:
// getTotal(orders) // Output: 8700000
//Kết quả//

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        total += orders[i].price
    }
    return total
}
console.log(getTotal(orders));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// For/in loop : là một câu lệnh lặp dùng để lặp qua các thuộc tính liệt kê được của một đối tượng. //
// ví dụ //
var myInfor = {
    name : 'Tan Dang',
    age : 20,
    address: 'Đà Nẵng, Việt Nam'
};

for (var key in myInfor){  // nó lấy key là dạng chuỗi ở trong myInfor, ví dụ : var key in myinfor => name,age,address//
    console.log(key)
}

for (var key in myInfor){
    console.log(myInfor[key]) // Thằng này nó lấy object của thằng trong thằng key,
                              // Thằng key sẽ bao gồm name, age, address thì nó sẽ thành 'Tan Dang',20, 'Đà Nẵng, Việt Nam// 
}

//array/
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]
for (var key in languages)
    console.log(key)

// Ví dụ //
// Để vượt qua thử thách này, trước tiên, hãy quan sát code cho trước và kết quả mong đợi (bên code editor).
// Hãy hoàn thành hàm sao cho kết quả được như kết quả mong đợi.

// function run(object) {

// }

// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//Kết quả//
function run(object) {
        var array = []
        for(var key in object) {
            array.push("Thuộc tính" + " " + key + " " + "có giá trị" + " " + object(key))
        }
        return array;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// For/of - loop : Nó được sử dụng để lặp qua các giá trị của các đối tượng có thể lặp lại //
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

for (var value of languages) { 
    console.log(value)              // thằng value chạy ra thì nó lấy luôn giá trị trong của mảng //
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// While - loop :  có chức năng lặp lại một khối mã cho đến khi một điều kiện nhất định trở thành sai.  //
// ví dụ để chạy while từ 1 đến 999 //
var i = 0;

while (i<1000) {
    i++;
    console(i);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// do/while loop //
// Ví dụ : dãi số tăng dần từ 1 đến 10 //

var i = 0;

do{
    i ++;
    console.log(i);
}while(i < 10);         //Kiểm tra điều kiện //

// Ví dụ về số lần nạp thẻ //

var i = 0;
var isSuccess = false;

do{
    i ++;
    console.log('Nạp thẻ lần ' + i);

    //Thành Công//
    if(true) {
        isSuccess = true
    }
}while(!isSuccess && i < 3);  
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Break & Continue in Loop //

//Break : thoát khỏi vòng lặp //
for (var i = 0; i < 10; i++){
    console.log(i);

    if(i >= 5){
        break;
    }
}
// Contunue:

for (var i = 0; i < 10; i++){
    
    if(i%2 !== 0){          //nếu số dư là số lẻ thì loại bỏ //
        continue;           // tiếp tục bỏ qua số lẻ và tiếp tục nhận các số chẵn //
    }

    console.log(i);

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vòng lặp lồng nhau - Nested loop //

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];
for (var i = 0; i < myArray.length;i++) {
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Loop...//
//in ra 100 về 1 //
for (var i = 100; i>0;i--){
    console.log(i);
}
// in ra các giá trị 0,5,10,15 //
for (var i = 0; i < 100; i += 5) {
    console.log(i);
}





