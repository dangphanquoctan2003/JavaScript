//Toán tử số học //
var a = 1 + 2;
console.log(a)

var a = 1 * 2;
console.log(a)
/////////////////////////////////////////////////////////////////
//Các thuộc tính toán tử số học//
/**
+ : cộng
- : trừ
* : nhân
** : lũy thừa 
/ : chia
% : chia lấy số dư
++ : tăng 1 giá trị số
-- : giảm 1 giá trị số
 */
//Toán tử cộng//
var a = 1;
var b = 2;
var c = a + b;
console.log(c);

//Toán tử trừ
var a = 1;
var b = 2;
var c = a - b;
console.log(c);

//Toán tử nhân//
var a = 1;
var b = 2;
var c = a * b;
console.log(c);

//Toán tử lũy thừa//
var a = 2;
var b = 2;
var c = a ** b;
console.log(c);

//Toán tử chia//
var a = 8;
var b = 2;
var c = a / b;
console.log(c);

//Toán tử chia lấy số dư//

var a = 8;
var b = 5;
var c = a % b;
console.log(c)

//Toán tử tăng 1 giá trị số //
var a = 5;
a ++;
console.log(a)

//Toản tử giảm đi 1 giá trị số//
var a = 5;
a--;
console.log(a)
///////////////////////////////////////////////////////////////////////

//Toán tử gán là dấu "="//
var fullName = 'Dang Phan Quoc Tan'
/////////////////////////////////////////////////////////////////////////////////////////////////
//Các thuộc tính của toán tử gán//
/**
Toán tử                     Ví dụ                       Tương đương
=                           x = y                           x = y
+=                          x += y                          x = x + y
-=                          x -= y                          x = x - y
*=                          x *= y                          x = x * y
/=                          x /= y                          x = x / y
**=                          x **= y                          x = x ** y
 */

//Toán tử gán = //
var a = 1 ;
console.log(a);

//Toán tử cộng +=//
var a = 1;
a += 2;
console.log(a);
//Toán tử trừ -=//
var a = 1;
a -= 2; 
console.log(a)
//Toán tử nhân *=//
var a = 1;
a *= 2;
console.log
//Toán tử chia /= //
var a = 8;
a /= 2;
console.log(a);
//Toán tử lũy thừa **= //
var a = 2;
a **= 2;
console.log(a);
///////////////////////////////////////////////////////////////////////////////////////////////////


// Toán tử so sánh//
var a = 1;
var b = 2;

if (a < b) {
    alert('Dung')
}

//Toán tử logic//

var a = 1;
var b = 2;

if (a>0 && b>0) {
    alert('a va b lon hon 0')
}
// Toán tử ++ -- //

// Toán tử ++ //
var a = 6;
a++;
console.log(a);
//bài ví dụ xét a++ và ++a //
var a = 2
var b = ++a + a++ - a--; 
/** giải thích
 ++a : nó đã cộng lên 1 rồi => 2 + 1 = 3
 a++ : nó chỉ là copy nên nó lấy thằng ++a trước tại vì nó đã tính toán rồi nên là bằng 3 
       mà a++ là nó sẽ qua thằng khác tiếp theo để tính toán thì chừ bây giờ nó vẫn giữ nguyên là 3 
 a-- : nó chỉ là copy, nhưng nó lấy thằng a++ đã tính trước nên bây là 4 
 => b = 3 + 3 - 4 = 2
 => b = 2
*/ 
console.log(b);
// Toán tử chuỗi cách 1 //
var firstName = 'Tan'
var lastName = 'Dang'
console.log(firstName);
console.log(lastName);
console.log(firstName + ' ' + lastName);
//Nằm trên 1 hàng cách 2//
var firstName = 'Tan'
name += ' Dang';
console.log(firstName)
///////////////////////////////////////////////////////////////////////////////////////////////////
//Toán tử so sánh//
/**
==                 => Bằng
!=                 => Không bằng
>                  => Lớn hơn
<                  => Bé hơn
>=                 => Lớn hơn hoặc bằng
<=                 => Bé hơn hoặc bằng
*/
//Toán tử bằng == //
var a = 1;
var b = 1;

if (a == b) {
    console.log('Điều kiện đúng')
} else {
    console.log('Điều kiện sai')
}
//Toán tử không bằng != //
var a = 1;
var b = 2;
if (a != b) {
    console.log('Điều kiện đúng')
} else {
    console.log('Điều kiện sai')
}
//Toán tử lớn hơn > //
var a = 4;
var b = 2;

if (a > b) {
    console.log('Điều kiện đúng')
} else{Ơ
    console.log('Điều kiện sai')
}
//Toán tử bé hơn < // 
var a = 1;
var b = 2;

if (a < b) {
    console.log('Điều kiện đúng')
} else{
    console.log('Điều kiện sai')
}
//Toán tử lớn hơn hoặc bằng >= //
var a = 2;
var b = 3;

if(a >= b) {
    console.log('Điều kiện đúng')
} else{
    console.log('Điều kiện sai')
}
//Toán tử bé hơn hoặc bằng <= //
var a = 2;
var b = 1;

if (a <= b) {
    console.log('Điều kiện đúng')
}else{
    console.log('Điều kiện sai')
}
//////////////////////////////////////////////////////////////////////////////////////////////

//Phần boolean//
var a = 5;
var b = 2;
var number = a > b

console.log(number);
//////////////////////////////////////////////////////////////


// Câu lệnh điều kiện If và Else //
var number = 1 > 2;
if (number) {
    console.log('Điều kiện đúng')
}else{
    console.log('Điều kiện sai')
}
/**Về các giá trị False
0
False
'' và ""
undefined
NaN
null
*/
///////////////////////////////////////////////////////////////////////

/*Toán tử logic
 1. && - And
 2. || - Or
 3. ! -Not
*/
// Toán tử && - And, nếu như điều kiện đúng của if thì đúng hết, còn nếu chỉ sai một cái a thì coi như sai//
var a = 1;
var b = 2;
var c = 3;

if ( a > 0 && b > 0 && c > 0) {
    console.log('Điều kiện đúng')
}
//Toán tử || - Or, nếu như điều kiện của if đúng hết thì đúng, còn nếu chỉ đúng 1 cái thì vẫn xuất ra đúng//
var a = 1;
var b = 2;
var c = 3;

if ( a < 0 || b < 0 || c > 0) {
    console.log('Điều kiện đúng')
}
// Toản tử ! - Not, Phủ định lại giá trị, nếu đúng thì sai, nếu sai thì đúng //
var a = 1;
var b = 2;
var c = 3;

if (!( a < 0)) {
    console.log('Điều kiện đúng')
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Kiểu dữ liệu trong JavaScript
 * 
 * 1. Dữ liệu nguyên thủy - primitive Data
 *      -Number
 *      -String
 *      -Boolean
 *      -Undefined
 *      -Null
 *      Symbol
 * 
 * 2.Dữ liệu phức tạp - Complex Data 
 *      - Function
 *      - Object
 * 
 */
// Dữ liệu Number
var a = 1;
var b = 2;
var c = 3;
var d = 3.1231231;
//Dữ liệu String//
var fullName = 'Tan Dang';
// Dữ liệu boolean//
var isSuccess = true;
//Dữ liệu Undifined //
var age;
//Dữ liệu Null
var isNull = null; // nothing
//Dữ liệu Symbol
var id = Symbol('id'); // unique 
// Dữ liệu phức tạp function
var myFunction = function(){
    alert('Hi,JavaScript')
}
myFunction();
// Dữ liệu phức tạp Object//
var myObject = {
    name:'Tan Dang',
    age: 18,
    address: 'Đà Nẵng'
};
// Dữ liệu phức tạp myArray//
var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
];
// về typeof 
// Ví dụ : console.log(typeof myArray)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toán tử so sánh phần 2//
/**
 * === 
 * !==
 */
//Toán tử so sánh === , so sánh tuyệt đối true và false a không bằng b
var a = 1;
var b = '1';
console.log(a === b);
//Toán tử so sánh === , so sánh tuyệt đối true và false a khác b 
var a = 1;
var b = '1';
console.log(a !== b);
// Hiểu hơn câu lệnh điều kiện và phép so sánh//

var a = 1;
var b = 2;

if(a<b) {
    console.log('A < B')
} else{
    console.log('A > B')
}