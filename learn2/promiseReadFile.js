//NodeJS+Promise封装异步读取文件
//启动方式：在FrontEndLearn下的终端输入： node learn2/promiseReadFile.js

// 引入fs模块
const fs=require('fs');

//封装
const p=new Promise(function(resolve,reject){
    //必须用相对终端的绝对路径
    fs.readFile("learn2/resource/msg.txt",(err,data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
});

p.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log("ERROR: Read Error");
})

