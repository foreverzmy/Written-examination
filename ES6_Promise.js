function timeout(){
  console.log("任务执行中");
}
function start(){//任务启动
  return new Promise(()=>{
    console.log("开始等待...");
    setTimeout(timeout,1000);
  });
}
start().then(()=>{console.log("...完成!")});