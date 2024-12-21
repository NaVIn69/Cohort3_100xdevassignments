/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=[];
   transactions.forEach((transaction) => {
    
   
    // object destructuring  taking the price and category 
     const {category:cat,price}=transaction
     // here we find that category in my arr 
     let obj=arr.find(({category})=>cat===category);
     if(obj===undefined){
        arr.push({
          category:cat,
          totalSpent:price
        })
     }else{
      // here we update the object total spent
       obj.totalSpent+=price;
     }
   })
   return arr;
}

module.exports = calculateTotalSpentByCategory;
