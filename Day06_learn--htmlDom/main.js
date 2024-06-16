// HTML DOM //
// 1. Element: ID, class, tag, // CSS selector, HTML collection
// 2. Attribute
// 3. Text
var productsListElement = document.querySelector
('.products-list');
var firstProductElement =document.querySelector
(' .product:first-child');
var buttonElements =document.getElementsByTagName('button');
// DOM attributes //

var headingElement
    document.querySelector('h1');

headingElement.title = 'Title test';

alert(headingElement.setAttribute);

// Ví dụ //
// Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:

// Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
// Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
// Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
// Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
// Chú ý: Các bạn viết code vào file main.js nhé.

// index.html //
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <h1>F8 - Học lập trình để đi làm</h1>
//     <p>Truy cập <a>fullstack.edu.vn</a> để học lập trình miễn phí các bạn nhé!!!</p>
// </body>
// </html>

// kết quả //

// index.html //
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <h1>F8 - Học lập trình để đi làm</h1>
//     <p>Truy cập <a>fullstack.edu.vn</a> để học lập trình miễn phí các bạn nhé!!!</p>
// </body>
// </html>

// main.js //

var Sora = document.querySelector("h1");

Sora.title = "F8 - Học lập trình để đi làm";

Sora.setAttribute("data-title", "F8 - Học lập trình để đi làm");

var Arya = document.querySelector("a");

Arya.href = "https://fullstack.edu.vn/";

Arya.setAttribute("target", "_blank");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//InnerText vs textContent Property //

// Innnertext //
var headingElement =
    document.querySelector('.heading');

console.log(headingElement.innerText)
console.log(headingElement.textContent)

//ví dụ về sử dụng InnerText //
//Các bạn hãy thay đổi nội dung của thẻ h1 thành F8 - Học lập trình để đi làm.//

//index.html//
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <h1 class="heading">F8</h1>
// </body>
// </html>

//main.js//
const getheading = document.querySelector('h1');
getheading.innerText = 'F8 - Học lập trình để đi làm';
//////////////////////////////////////////////////////////////////////////////////////////////

// InnerHTML vs OuterHTML Property //
var boxElement = document.querySelector('.box')

boxElement.outerHTML = '<span>Test</span>';

console.log(boxElement.innerHTML);

// vis dụ innerHTML //
//Các bạn hãy viết hàm render nhận vào 1 tham số là html, 
//hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.//

//main.js//
// function render(html) {
    
// }

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)

//kết quả//
function render(html) {
    var ul = document.querySelector("ul");
    ul.innerHTML = html;    
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)
// ví dụ 2 //
// Ở bài trước chúng ta đã tạo hàm render để thực hiện chèn 1 đoạn text HTML vào thẻ ul. Trong bài này chúng ta cùng làm 1 thử thách khó hơn nhé.

// Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

// Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

// ReactJS
// AngularJS
// VueJS

// Kết quả //
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {

var trung = courses.map(function (acc) {

return `<li>${acc}</li>`;

});

trung.join("");

var Sora = document.querySelector("ul");

Sora.innerHTML = trung;

}

render(courses);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOM CSS //
var boxElement =
document.querySelector('.box');
Object.assign(boxElement.style, {
width: 200px,
height: 100px',
backgroundColor: 'green',
});


