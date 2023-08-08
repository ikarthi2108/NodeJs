// setTimeout(()=>{
//     console.log("hi")
// },4000)

// const names = ['kavin','ken','karthi']
// const shortNames =names.filter((name)=> {
//     return name.length <=4
// })

// call backs

// const add =(a,b,callback) =>{
//     setTimeout(() =>{
//         callback(a+b)
//     },2000)
// }

// add(2,1,(sum) =>{
//     console.log(sum)
// })

// const names=['karthi','kavin','kural']

// const filteredNames=names.filter((name) =>{
// return name.length >=1
// })
// console.log(filteredNames)

// const geocode =(address,callback)=>{
//  setTimeout(()=>{
//     const data ={
//         latitude :0,
//         longitude:0
//     }
//     callback(data)
//  },2000)
// }

// geocode('Chennai',(dat) =>{
//  console.log(dat)
// })

const add=(num1,num2,callback)=>{
    setTimeout(()=>{
        const answer=num1+num2;
        callback(answer)
        //callback(num1+num2)
    },2000)
 }

add(20,1,(ans)=>{
    console.log(ans)
})