/////////////////////////////////////////////////////////
/*
Hàm (function) trong Javascript
1. Hàm?
- Một khối mã
- Làm 1 việc cụ thể
2. Loại hàm
- Built-in
- Tự định nghĩa
3. Tính chất
- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về 1 giá trị
4. Tạo hàm đầu tiên
*/

function showDialog() {
    alert('Hi Js Day02')
}
showDialog();
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//Tham số hàm - JavaScript cơ bản
/**
1. Tham số ?
    - Định nghĩa
    - Kiểu dữ liệu
    - Tính private 
    - 1 tham số
    - Nhiều tham số
2. Truyền tham số
    - 1 tham số
    - Nhiều tham số
3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for of
*/
// Định nghĩa tham số : 1 giá trị truyền vào để gọi 1 cái gì đó , tính toán, xử lí,... //
function writeLog(message) {   //tham số//
    console.log(message)
}
writeLog('Text message');      // Đối số//

// Kiểu dữ liệu tham số , truyền bất cứ kiểu dữ liệu nào //
function writeLog(message) {  
    console.log(typeof message)
}
writeLog('Text message'); 
writeLog(123); 
writeLog(['JS,PHP']); 

//Tính private : chỉ sử dụng trong function, nếu đưa ra ngoài thì sẽ k khai báo
function writeLog(message) { 
    console.log(message)
}
writeLog('Text message');

// 1 tham số :
function writeLog(message) {
    console.log(message)
}
writeLog('Text message'); // Đây chính là 1 tham số Text message//

//Nhiều tham số
function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
}
writeLog('TEST', 'TEST2');
// Truyền tham số  như trên 1 tham số và nhiều tham số//

// Arguments //
function writeLog() {
    console.log(argument)
}
writeLog('Log1', 'Log2');

//Giởi thiệu vòng for of //
function writeLog() {
    for (var param of arguments) {
        console.log(param)
    }   
}
writeLog('Log1', 'Log2', 'Log3');
///////////////////////////////////////////////////////////////////////////////////
//Return trong hàm - JavaScript cơ bản//

var isConfirm = confirm('hi, Js');
console.log(isConfirm);

//Hàm cộng//
function cong(a, b) {
    return a + b;
}
var result = cong(2, 8);
console.log(result)
/////////////////////////////////////////////////////////////////////////////////////

/**
 * Một số điều cần biết về function
1. Khi function đặt trùng tên
2. Khai báo biến trong hàm
3. Định nghĩa hàm trong hàm
 */
//Khi function đặt trùng tên : thì nó sẽ lấy duy nhất cái function mới được tạo //
function showMessage() {
    console.log('Massage1');
}
function showMessage() {
    console.log('Massage2');
}
function showMessage() {
    console.log('Massage3');
}
showMessage();

//Khai báo biến trong hàm : khai biến trong hàm như bthuong //
function fullName() {
    var fullName = 'Son Dang'
    console.log(fullName);
}
showMessage();

//Định nghĩa hàm trong hàm : Có định nghĩa như bth //

function showMessage() {
    function showMessage2() {
        console.log('showMessage2');
    }
    showMessage2();
}
showMessage();
//////////////////////////////////////////////////////////////////////////////////////////

/**
 * Các loại function
1. Declaration function
2. Expression funtion
 */

// Declaration function//
function showMessage() {

}
//Expression funtion//
function showMessage() {

}

var showMassage = function() {

}
/////////////////////////////////////////////////////////////////////////

/**
 CÁC CHUỖI TRONG JAVASCRIPT
1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào
    - Kiểm tra datatype
2. Một số case sử dụng backlash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
 */
//1. Tạo chuổi: ngắn gọn//
//Cách 1//
var fullName = 'Dang Phan Quoc Tan'

//Cách 2: dài dòng hơn//
var fullName = new String('Son Dang');

// Kiểm tra datatype//
var fullName = new String('Son Dang');
console.log(typeof fullName)

//2. Một số case sử dụng backlash//
var fullName = 'Dang Phan Quoc Tan la \'Con nguoi\'';
console.log(fullName)
//3. Xem độ dài chuỗi
var fullName = "Dang Tan";
console.log(fullName. length)
//4. Chú ý về độ dài khi viết code : nếu chữ dài quá thì cho xuống dòng//
var fullName = "Dang Tan helo"
+ "Dang Tan helo"
+ "Dang Tan helo"
+ "Dang Tan helo"
;
console.log(fullName)
//5. template String ES6 : dấu ``//
var firstName = 'Tan';
var lastName = 'Dang';

console.log(`Toi la: ${firstName} ${lastName}`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * LÀM VIỆC VỚI CHUỖI
1. length
2. Find index
3. Cut string
4. Replace
5. Convert to upper case
6. Convert to lower case
7. Trim
8. Split
9. Get a character by index
 */
var myString = 'Hello JS JS so good'
//1. Length: đo độ dài //
console.log(myString. length)

//2. Find index : tìm vị trí trong chuỗi ở đầu ( IndexOf)//

console.log(myString.indexOf('JS', 10 )) //,10 là khi thằng indexOf tìm cái chữ Js vị trí từ hàng 10 trở lên để tìm JS nếu có
//2. Find index : tìm vị trí trong chuỗi ở cuối (LastIndexOf) //

console.log(myString.lastIndexOf('JS')) //,10 là khi thằng LastindexOf tìm cái chữ Js vị trí từ hàng cuối để tìm

//3. Cut string : để cắt //
console.log(myString.slice(6,8)) // Cắt chữ JS là cắt từ vị trí số 6 đến vị trí số 8, nếu chỉ có mỗi số 6 thì cắt từ trái sang phải 6 ô//

//4. Replace: thay thế chữ ở hàm khai báo//
console.log(myString.replace('JS', 'JavaScript')) // Thay thế chữ js ở hàm myString 

//5. Convert to upper case : Viết hoa các chuỗi//
console.log(myString.toUpperCase(0))

//6. Convert to lower case : Viết thường các chuỗi//
console.log(myString.toLowerCase(0))

//7. Trim : Loại bỏ tất cả khoảng trắng phần cách(space)//
console.log(myString.trim())

//8.Split : nó sẽ cách ra từng chữ cái 1 //
var language = 'javascript'
console.log(language.split(''))

//9. Get a character by index : Lấy được 1 kí tự bởi 1 cái index cho trước //
const myString2 = 'Son Dang'
console.log(myString2.charAt(0))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Kiểu số (Number) trong Javascript
1. Tạo giá trị number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type
2. Làm việc với Number
    - To String
    - To Fixed
 */
// 1. Tạo giá trị number //

// Các cách tạo (Cách 1)//
var age = 18;
var PI = 3.14;

// Các cách tạo (Cách 2)//
var otherNumber = new Number(9);

//Cách kiểm tra data type //
console.log(typeof age)

//2. Làm việc vói Number //
// To String //
var age = 18;
var PI = 3.14;
var myString = age.toString();
console.log(typeof age.toString())

//To fixed//
var age = 18;
var PI = 3.14;

console.log(PI.toFixed())
////////////////////////////////////////////////////////////////////////