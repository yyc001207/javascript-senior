function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)//递归
}
var onmessage = function (event) {
    var number = event.data
    console.log('分线程接收主线程发送的数据' + number);
    //计算
    var result = fibonacci(number)
    postMessage(result)
    console.log('分线程向主线程返回数据' + result);
}