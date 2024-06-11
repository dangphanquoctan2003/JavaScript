//Var : khai báo biến//
var fullName = 'Dang Phan Quoc Tan'
var age = 26;

// alert : gọi hàm thông báo//
alert(fullName);
alert(age);

// console : in ra những cái dòng thông báo trên các console//
// console.log : in ra dòng chữ thông báo trên dòng log//
console.log('Day la 1 dong log')
console.log('123')

var fullName = 'Dang Phan Quoc Tan'
console.log(fullName)

//Confirm : xac nhan tren thanh thong bao gom : cancel & Ok//
confirm('Xac nhận bạn đủ tuổi');

//prompt: có thêm 1 ô input trên thanh thông báo//
prompt('Xác nhận bạn đủ tuổi');

// //set timeout : chạy đoạn code sau một khoảng thời gian và chạy duy nhất 1 lần//
setTimeout(function() {
    alert('Thong bao')
}, 1000)

// //set interval : chạy đoạn code sau một khoảng thời gian và chạy liên tục lặp đi lặp lại//
setInterval(function() {
    alert('Thong bao')
}, 1000)