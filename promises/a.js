const promisesOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});
promisesOne.then(function(){
    console.log("Promises consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn 2 resolved');
})

const promisesThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'saba',password:'123'})
    },1000)
});
promisesThree.then(function(user){
    console.log(user);
})

const promisesFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'sabaParveen',email:'saba@example.com'})
        }
        else{
            reject('error:something went wrong')
        }
    },1000)
})

promisesFour.then((user)=>{
    console.log(user);
    return user.username
}).then((u)=>{
    console.log(u)
}).catch((e)=>{
    console.log(e)
}).finally(()=>
console.log('The promises either reject or resolve'));

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'javascript',email:'saba@example.com'})
        }
        else{
            reject('error:Js went wrong')
        }
    },1000)
});
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()