//1. Event listener -> OK
// 2. JSON I
//3. Fetch
//4. DOM location
//5. Local storage
//6. Session storage
//7. Coding convention
//8. Best Practices
//9. Mistakes
//10. Performance
//Ôn tập json //
//JSON là từ viết tắt của cụm từ nào:JavaScript Object Notation//
//JSON là 1 định dạng dữ liệu.//
const jsonString = '{"name": "Son Dang", "age": 18}'
const obj = JSON.parse(jsonString)
// ví dụ //
var object = {
    name: 'Son Dang',
    age: 18
}
var jsonString = JSON._______(object)
// Điền vào chỗ trống tên method chính xác để chuyển object sang dạng JSON
// Chọn câu trả lời đúng
// JSON.stringify dùng để chuyển dạng dữ liệu gốc thành dạng JSON
//////////////////////////////////////////////////////////////////////////////////////////////
// promise //
// sync //
// async //
console.log("Start");
for (let i = 0; i < 1000000000; i++) {
   // Do nothing
}
console.log("End");

// Asynchronous example
console.log("Start");
setTimeout(() => {
   console.log("End");
}, 0);
// promise (pain) //
setTimeout(function() {
    console.log(1); // viec 1
    setTimeout(function() {
        console.log(2); // viec 2
        setTimeout(function() {
            console.log(3); // viec 3
            setTimeout(function() {
                console.log(4); // viec 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
///////////////////////////////////////////////////////////////////////////////////
// promise (concetp) //
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        // Fake call API
        reject('Co loi!');
    }
);

promise
    .then(function(courses) { 
        console.log(courses); 
    })
    .catch(function(error) { 
        console.log(error);
    })
    .finally(function() { 
        console.log('Done!');
    });

///////////////////////////////////////////////////////////////////
// Ôn lại kiến thức promise //
// Promise có 3 trạng thái:
// Pending
// Fulfilled
// Rejected

// promise chain //
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        // Fake call API
        reject('Co loi!');
    }
);

promise
    .then(function() { 
        return 1;
    })
    .then(function(data) { 
        console.log(data);
        return 2;
    })
    .then(function(data) { 
        console.log(data);
        return 3;
    })
    .catch(function(error) { 
        console.log(error);
    })
    .finally(function() { 
        console.log('Done!');
    });
////////////////////////////////////////////////////////////////////////////////////////////////

// VVí dụ về callback hell và cách giải quyết bằng Promise//
Đây là ví dụ về callback hell trong truyền thuyết, và cách sử dụng Promise để giải quyết nó.

// Các bạn có thể thấy khi tạo ra 1 đoạn code callback hell sẽ dẫn đến khó đọc code, thay vì viết như thế, chúng ta có thể áp dụng tính chất chuỗi (chain) của Promise để tạo ra 1 đoạn code dễ nhìn hơn mà vẫn đảm bảo đúng logic.
function nothell(value) {
    return new Promise((resolve) => {
    return value + 1
    })
    }
    
    nothell(1)
    .then(() => {
    return nothell(1)
    })
    .then(() => {
    return nothell(1)
    })
    .then(() => {
    return nothell(1)
    });

/////////////////////////////////////////////////////////////////////////////////
//Promise methods (resolve, reject, all) //

// Promise resolve ,reject // 
var promise = new Promise(
    function(resolve, reject){
        resolve('error')
    }
);
promise
    .then(function(result){
        console.log('result: ', result);
    })
    .catch(function(err){
        console.log('err: ', err)
    });

//Promise all //
var promise2 = Promise.reject('Co loi!');

Promise.all([promisel, promise2])   
    .then(function([result1, result2]) { 
        console.log(result1.concat(result2))
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fetch //






