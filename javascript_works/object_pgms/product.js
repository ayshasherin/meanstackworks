var product={p_code:100,name:"product1",price:250,avail_qty:50}

//print product name
console.log(product.name);

//update stock as current + 30
console.log(product.avail_qty+=30);

// check for discount key is present
console.log("discount" in product);

//add discount "10%"
product["discount"]="10%"   //or 
console.log(product);  

product.discount="10%";
console.log(product);                  