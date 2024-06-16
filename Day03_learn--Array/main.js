/*
1. Tạo mảng
- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type?
2. Truy xuất mảng
- Độ dài mảng
- Lấy phần tử theo index
*/
// 1. Tạo mảng //
//cách tạo : 1 mảng gồm nhiều tên // Cách 1 :
var languages = [
    'JavaScript', //1 phần từ của mảng //
    'PHP',        //1 phần từ của mảng //
    'Ruby',       //1 phần từ của mảng //
]
console.log(languages)

//cách tạo : 1 mảng gồm nhiều tên // Cách 2 :

var languages = new Array[
    'JavaScript', //1 phần từ của mảng //
    'PHP',        //1 phần từ của mảng //
    'Ruby',       //1 phần từ của mảng //

];
console.log(languages)

// Kiểm tra data type : typeoff//

var languages = [
    'JavaScript', //1 phần từ của mảng //
    'PHP',        //1 phần từ của mảng //
    'Ruby',       //1 phần từ của mảng //
]
console.log(typeof languages)  //typeof//

//2. Truy xuất mảng//

// ĐỘ dài của mảng : length //
var languages = [
    'JavaScript', 
    'PHP',        
    'Ruby',       
]
console.log(languages.length)

// Lấy phần tử theo index : lấy giá tri theo index //
var languages = [
    'JavaScript', // vị trí 0 //
    'PHP',        // vị trí 1 //
    'Ruby',       //vị trí 2 //
]
console.log(languages [0]) // nếu 0 thì lấy vị trí của JavaScript //

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Làm việc với Array
1. To String
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
 */
 
// To String : là mỗi phần tử cách nhau thì sẽ có 1 dấu phẩy , vd : JavaScript, PHP, Ruby //
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
]
console.log(languages.toString())

// Join : xóa bỏ khoảng cách và đè liền với nhau vd : JavaScriptPHPRuby //
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
]
console.log(languages.join(''))  // có thể dùng các dấu kí tự -,: vào trong '' để cách hàng

// Pop : Xóa phần tử cuối mảng và trả lại chính phần tử mà nó xóa //

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
]
console.log(languages.pop()) // Xóa phần từ cuối mảng và trả về phần tử đã xóa vd : JavaScript, PHP và mất Ruby //
console.log(languages.pop()) // Xóa phần từ cuối mảng và trả về phần tử đã xóa vd : JavaScript, và mất PHP và Ruby //

// push : thêm phần tử ở cuối mảng, thêm 1 hoặc nhiều //

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
]
console.log(languages.push('Dart', 'Java')) // push thêm dart và java //
console.log(languages)

// Shift : Xóa phần tử đầu mảng và trả lại chính phần tử mà nó xóa //

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
]
console.log(languages.shift())  // Xóa phần tử đầu tiên là JavaScript //
console.log(languages.shift())  // Xóa phần tử thiếp theo là PHP //

console.log(languages)

// Unshift : Thêm 1 hoặc nhiều phần tử ở đầu mảng //

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
]
console.log(languages.unshift('Dart','Java'))  // Thêm 2 phần tử đầu tiên là Dart Jav JavaScript ....Ruby //
console.log(languages)

// Splicing : Xóa, cắt, chèn cả phần tử mới vào mảng //
// Xóa //
var languages = [
    'JavaScript', // Vị trí 0//
    'PHP',        // Vị trí 1 //
    'Ruby',       // Vị trí 2 //
]
languages.splice(1, 1) // vị trí 1 đầu tiên là mốc , còn 1 ở sau là cần xóa 1 dòng móc đó thành JavaScript và Ruby
languages.splice(1, 2) // vị trí 1 đầu tiên là mốc , còn 2 ở sau là cần xóa 2 dòng tiếp theo đó thành JavaScript

// Chèn //
languages.splice(1, 0, 'Dart') // vị trí 1 đầu tiên là mốc , còn 0 ở sau là không xóa dòng nào nữa và 'Dart' thêm vào trước mốc 1 là thành JavaScript,Dart,PHP,Ruby

console.log(languages)

// ConCat : nối được 2 mảng //
var languages = [
    'JavaScript', 
    'PHP',        
    'Ruby',       
]
var languages2 = [
    'Dart',
    'Java'       
]
console.log(languages.concat(languages2))

// Slicing : Cắt vị trí phần tử //
var languages = [
    'JavaScript', // Vị trí 0//
    'PHP',        // Vị trí 1//
    'Ruby',       // Vị trí 2//
]
console.log(languages.slice(1)) // Có nghĩa là ở vị trí số 1 thì là PHP thì nó đã cắt đi vị trí 0 rồi là còn PHP,Ruby //
console.log(languages.slice(1, 2)) // Có nghĩa là ở vị trí số 1 thì là PHP thì nó đã cắt đi vị trí 0 rồi nhưng có vị trí số 2 thì nó sẽ cắt luôn là sẽ thành PHP và cắt hết ở phía sau
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object trong JavaScript //
var myInfor = {
    name: 'Tan Dang',
    age: 18,
    address: 'Đà Nẵng, Việt Nam'
}
console.log(myInfor);

//Nếu thêm 1 keyword email//
myInfor.email = 'dangphanquoctan2003@gmail.com' //Thêm 1 keyword //

//Nếu lấy 1 keyword//
console.log(myInfor.name)       //Lấy mỗi keyName//
console.log(myInfor.age)        //Lấy mỗi age//
console.log(myInfor.address)    //Lấy mỗi address//

//////////////////////////////////////////////////////////////////////////////////////////////////

//Object contructor: Xây dựng đối tượng //
//Tạo bảng thiết kế //
function User(firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName  = lastName;
        this.avatar    = avatar;
}
var author = new User('Tấn', 'Đặng', 'Avatar');
var user = new User('Nam', 'Trương', 'Avatar');

author.title = 'Hello'      // hàm này chỉ có phần author->user ('Tấn', 'Đặng', 'Avatar') để lấy và thêm hello trong phần đó // 
user.comment = 'Good night' // hàm này chỉ có phần user -user ('Nam', 'Trương', 'Avatar') để lấy và thêm Good night trong phần đó//

console.log(author.User);
console.log(user.User);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Object prototype - Basic :Nguyên mẫu tạo nên 1 đối tượng //
// Prototype là gì ? //

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.avatar    = avatar;
}

User.prototype.className = 'Hello' //prototype sẽ thêm được 1 thuộc tính được tạo ra 
User.prototype.getClassname = function(){
    return this.className;
}

var author = new User('Tấn', 'Đặng', 'Avatar');
var user = new User('Nam', 'Trương', 'Avatar');

console.log(user.className); 

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Đối tương Date : trả về thời gian hiện tại //

var date = new Date();

var year = date.getFullYear(); //Đây là năm//
var month = date.getMonth() + 1;   // Đây là tháng, +1 bởi vì hiện trong code vị trí đầu tiên sẽ là số 0 nên phải + 1 cho đúng tháng từ tháng 1->12
var day = date.getDate();

console.log(year); //Xuất ra năm
console.log(month); //Xuất ra tháng
console.log(day); //Xuất ra ngày

console.log(`${day}/${year}/${month}`) // Xuất ra 1 lần ngắn gọn //
//Ví dụ : hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số./
function getNextYear(){
    var date = new Date();
    return date.getFullYear() + 1;
}
console.log(getNextYear)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Math Object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

 */

// Math.PI : trả về số Pi//

console.log(Math.PI);

// Math.round : Làm tròn số//

console.log(Math.round(1.49)) // 1.49 thì sấp xĩ thành 1 
console.log(Math.round(1.5)) // 1.5 thì sấp xĩ thành 2

// Math.abs() : Giá trị tuyệt đối //

console.log(Math.abs(-4)); // giá trị tuyệt đối số âm thành dương = 4

// Math.ceil() : Làm tròn trên //

console.log(Math.ceil(4,1)); // làm tròn thành 5 chỉ có 1 giá trị thập phân nhỏ nhất thì vẫn làm tròn trên

// Math.floor() : Làm tròn dưới //

console.log(Math.floor(4,9)); // làm tròn thành 4 , chỉ có giá trị thập phân lơn nhất thì vẫn làm tròn dưới

// Math.random() : 

console.log(Math.radom()); // Cho số thập phân ngẫu nhiên nhỏ hơn 1 
console.log(Math.floor(Math.random() *10)); // Loại bỏ số thập phần (floor) và chọn số ngẫu nhiên (randam) *10 là từ 0 đến 9

// Ví dụ về chọn ngẫu nhiên coins//
var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coins',
    '50 coins',
    '40 coins',
    '30 coins',
    '20 coins',
]
console.log(bonus[random]);

//Ví dụ về chọn ngẫu nhiên đập đồ cường hóa tỉ lệ 50% 50%
var random = Math.floor(Math.random() * 100);

if(random < 5) {
    console.log('Cường hóa thành công')
}

//Math.min() : lấy số nhỏ nhất //

console.log(Math.min (-100, 1, 4, 10, 100)); // Lấy số nhỏ nhất -100

//Math.max() : lấy số lớn nhất //'

console.log(Math.max(-100, 1, 4, 10, 100)); // Lấy số lớn nhất 100

// Ví dụ :Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.//
function getRandomItem(){
    var array = []
    return Math.random
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Câu lệnh vẽ nhánh : luôn luôn chỉ lọt vào một nhánh đầu tiên nếu đúng,nếu không đúng thì nó sẽ xét tiếp nhánh tiếp theo //

var date = 2;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 3) {
    console.log('Hôm nay là thứ 3');
} else if (date === 4 ) {
    console.log('Hôm nay là thứ 4');
}
// Nếu mà k có nhánh nào đúng với biến thì sẽ dùng else //

var date = 9;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 3) {
    console.log('Hôm nay là thứ 3');
} else if (date === 4 ) {
    console.log('Hôm nay là thứ 4');
} else {
    console.log('Không có nhánh nào đúng ') // Tại vì biến đặt là số 9 nên là k có nhánh nào phù hợp với 9 cả //
}
//Ví dụ : Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

// Khi a chia hết cho 3 thì return về 1
// Khi a chia hết cho 5 thì return về 2
// Khi a chia hết cho 15 thì return về 3
function run(a) {
    if(a===3){
        return a/3
    }else if(a===5){
        return a/2.5
    }else if(a===15){
        return a/5
    }
}
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Câu lệnh rẽ nhánh - Switch //
var date = 2;

switch(date) {  //Truyền giá trị cho switch (date) , sau đó nó tìm thằng case nào hợp đúng với giá trị 2 của date //
    case 2:
        console.log('Hôm nay là thứ 2')
        break;  // Thoát khỏi lệnh switch, nếu k có thì các giá trị sẽ lọt vào hết mặc dù sai hay đúng gì đi nữa nên phải có break //
    case 3:
        console.log('Hôm nay là thứ 3')
        break;
    case 4:
        console.log('Hôm nay là thứ 4')
        break;
    case 5:
        console.log('Hôm nay là thứ 5')
        break;
    default: // Là nếu k có giá trị nào đúng thì nó sẽ chạy thằng default, lưu ý nếu k có break đóng nào thì nó cũng sẽ lọt vào default mặc dù sai hay đúng giá trị nhé//
        console.log('Không có giá trị nào')
}
 // nếu xử dụng tính đúng hay sai thì dùng if else cho dễ,
 //Ví dụ : Hoàn thành code còn thiếu #2 
 //Cập nhật tháng 4 năm 2022
//Cho trước một đoạn mã bị thiếu phần switch case, hãy bổ sung để hoàn thiện đoạn mã.
// function run(fruits) {
//     var result;

//     (fruits) {
//         "Banana":
//             result = "This is a Banana";
//         "Apple":
//             result = "This is an Apple";
//             break;
//             result = "No fruits";
//     }

//     return result;
// }
//Bổ sung//
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default:
        result = "No fruits";
    }

    return result;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Toán tử 3 ngôi - Ternary operator//

var cousre = {
    name: 'JavaScript',
    coin:250,
}
//Toán tử 2 ngôi vế trái vế phải//
if(cousre.coin>0){
    console.log(`${cousre.coin} Coin`); // Coin có nghĩa là chữ khi khai báo ra //
}else {
    console.log('Free');
}
//Toán tử 3 ngôi 
             //Vế thứ nhất//       //Vế thứ hai//     //Vế thứ 3//
var result = cousre.coin > 0 ? `${cousre.coin} Coin` : 'Miễn Phí'
console.log(result);
//ví dụ//
var a = 1;
var b = 2;

var c = a > 0 ? a : b; //Vế nhất là k có, vế hai là có dấu ? và vế ba là có dấu : //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////






















































