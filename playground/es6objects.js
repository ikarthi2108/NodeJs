//object property shorthand

const name = 'Karthi'
const userAge =27

const user = {
    name,
    age:userAge,
    location:"Tiruppur"
}

console.log(user)

//object destructuring

const product ={
    label: 'RedNoteBook',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.2
}

// const label = product.label
// const stock =product.stock

// const {label,price,stock}=product

// console.log(label)
// console.log(price)
// console.log(stock)


// const {label:productLabel,price,stock}=product

// console.log(productLabel)
// console.log(price)
// console.log(stock)

//label : productLabel is rename the object name

//---------------------------- //

// const {label:productLabel,price,stock,rating =5}=product

// console.log(productLabel)
// console.log(price)
// console.log(stock)
// console.log(rating)

//we can use destructuring in function arguments

const transaction =(type,{ label,stock,rating})=>{
console.log(type,label,stock)
}
transaction('order',product)