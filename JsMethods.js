const items = [
    { name:'Car' , price:100 },
    { name:'Bike' , price:10 },
    { name:'Toy' , price:5 },
    { name:'Bear' , price:150 },
    { name:'Ball' , price:20 },
    { name:'Pan' , price:10 },
    { name:'Ship' , price:190 },
];

//Get Items Where Price <= 100
const FiltredItems = items.filter((item) => {
    return item.price <= 100;
});

//Return Array Of Items name
const ItemsNames = items.map((item) => {
    return item.name;
});

//Find a single Item in the Array
const FoundItem = items.find((item) => {
    return item.name == 'Car'; 
});

//Loop Through an Array 
items.forEach(item => {
    console.log(item.name);
});

//Check if an item has a price less than 100
const hasInExpensiveItems = items.some((item)=>{
    return item.price < 100;
});

//Check if every item has a price less than 100
const hasInExpensiveItemsEvery = items.every((item)=>{
    return item.price < 100;
});

//Get Total of items without Forloop
const Total = items.reduce((TotalItems , item) => {
    return  item.price + TotalItems ;
},0);





