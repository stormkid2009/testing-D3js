const array=[0, 1, 2, 3, 4, 5];
//function to remove item from the array
const removeItem=(arr,i)=>{
        return [
            ...arr.slice(0,arr[i]),//first slice from start to item we want
            ...arr.slice(arr[i+1],arr.length)//second slice begin after item to the end
        ]
}
//console.log(removeItem(array,3));
const source={
    name:"sherif",
    job:"web dev",
    age:42
};
//making new object with source and new properties added 
//if key already exists we gonna over write it
const newObj = Object.assign({},source,{country:"Egypt"},{sex:"male"},{name:"Anwar"});
console.log(newObj);
