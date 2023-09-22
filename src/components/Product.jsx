export default function Product(){
// const products = ['Laptops', 'Phone','Modem', 'extension',"BackBags",'Laptops']
const products = [
    {id:1,name:"Laptop",price: 500},
    {id:2,name:"Phone",price: 200},
    {id:3,name:"Modem",price: 50},
    {id:4,name:"Laptop",price: 90},
]

const fruits = ["apple", 'Mango', 'Banana']

const productList = products.map((product)=>(
    <h3 key={product.id}>
         {product.name}: ${product.price}
    </h3>
))

const fruitList = fruits.map((fruit,index)=>(
    <li key={index}>
        {fruit}
         
    </li>
))


    return <div>
        {productList}
        {fruitList}
    </div>
}