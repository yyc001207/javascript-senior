/**
 * 自定义模块1
 */
//私有数据
function myModule() {
  var msg = 'My atguigu'
  //操作数据的函数
  function doSomething() {
    console.log('doSomething ' + msg.toUpperCase());
  }
  function doOtherthing() {
    console.log('doOtherthing ' + msg.toLowerCase());
  }
  //向外暴露
  return {
    doSomething,
    doOtherthing
  }
}