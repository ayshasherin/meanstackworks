var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",20,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

 ]
// // print number of items in shop

// console.log(products.length);




// // print number of available items

// let avail_stock=0;
// for(let item of products){
//     if(item[3]>0){
//         avail_stock++
//     }
// }
// console.log(avail_stock);





// // print all product names only

// var items=products.map((item)=>item[1]);
// console.log(items);


// //print all available product (filter)
// var avail_items=products.filter(item=>item[3]>0)
// console.log(avail_items);

// //print out of stock product name
// var out_stock_names=products.filter(item=>item[3]==0).map(item=>item[1])
// console.log(out_stock_names);


// //add 5 rs offer for all product whose stock > 50
// var offer_products=products.filter(item=>item[3]>50).map(item=>item[2]-5)
// console.log(offer_products);
// //or
// var offer_products=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
// console.log(offer_products);

// // In map,filter there will be only one parameter.But in sort and reduce no:of parameters will be two 
//                                               //bcoz to it is to compare two values 



// //sort the products stock wise in descensing order (here no need of any variables bcoz it will sort internally)
// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products);


// //sort descending order of price
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products);


//   REDUCE()

// print costly product from products array

var costly_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly_product);

// print low cost product

var low_cost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_cost_product);

var low_cost_product=products.reduceRight((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_cost_product);


//  FIND()

//it returns only matched single result ie; condition match cheeyyunna first occurence maathre kittullu.

// search whether item treat is present in shop

var srch_item=products.find(item=>item[1]=="treat")
console.log(srch_item);

//search item with price rs 20
//ee condition match cheeyyunna first occurence maathre kittullu.

var search_item=products.find(item=>item[2]==20)
console.log(search_item);


//   SOME()
//some() retuns only boolean values


//is it possible to purchase item < 10 rs 

var is_avail=products.some(item=>item[2]<10)
console.log(is_avail);

//is it possible to purchase item < 30 rs

var is_aval=products.some(item=>item[2]<30)
console.log(is_aval);


//   FOREACH
// athinn vendi new variable kodukkenda aavashyam illa also we can avoid for loop

//print all product name

// var names=products.map(item=>item[1])    //instaed of this lengthy code we can write as follows
//console.log(names);                  
// for(let names of products){
   // console.log(names);
//}

products.map(item=>item[1]).forEach(names=>console.log(names))

//print items > 30 rs  (here there is a condition so here wenshould use filter)

products.filter(item=>item[2]>30).forEach(item=>console.log(item))








