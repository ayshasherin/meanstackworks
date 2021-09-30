var product={
    p_code:100,
    name:"product1",
    price:250,
    avail_qty:50,
    batch_code:"est_2k21_08"
}

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

// check for batch_code is present
// if not add batch_code=est_2k21_09
if("batch_code" in product){
console.log(true);
}
else{
    product.batch_code="est_2k21_09"
}
console.log(product);