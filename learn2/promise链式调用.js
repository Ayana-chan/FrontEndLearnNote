
const fs=require('fs');

//第一个任务
const p=new Promise((resolve,reject)=>{
    fs.readFile("learn2/resource/msg.txt",(err,data)=>{
        resolve([data]);//数组，可以把之后的返回值都塞进这个数组
    });
});

p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("learn2/resource/msg2.txt",(err,data)=>{
            // 把新数据data压入value数组并返回数组
            value.push(data);
            resolve(value);
        });
    });
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("learn2/resource/msg3.txt",(err,data)=>{
            value.push(data);
            resolve(value);
        });
    });
}).then(value=>{
    // 串联所有数据，以换行分隔
    console.log(value.join('\r\n'));
});