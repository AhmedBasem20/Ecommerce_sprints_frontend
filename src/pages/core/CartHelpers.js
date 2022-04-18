export const addItem = (item ={},count = 0, next = f => f) => {
  let cart = []
  if(typeof window !== 'undefined'){
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
  }
  cart.push({
      ...item,
      count: 1
  })
  
   // remove duplicates
   // build an Array from new Set and turn it back into array using Array.from
   // so that later we can re-map it
   // new set will only allow unique values in it
   // so pass the ids of each object/product
   // If the loop tries to add the same value again, it'll get ignored
   // ...with the array of ids we got on when first map() was used
   // run map() on it again and return the actual product from the cart
    cart = Array.from(new Set(cart.map(p => p.id))).map(id => {
            return cart.find(p => p.id === id);
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        next();
  }
}
export const itemsTotal = () => {
  if (typeof window !== 'undefined'){
    if(localStorage.getItem('cart')){
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
  return 0
}
export const getCart = () => {
  if (typeof window !== 'undefined'){
    if(localStorage.getItem('cart')){
      return JSON.parse(localStorage.getItem('cart'))
    }
  }
  return []
}

export const updateItem = (productId, count) => {
  let cart = []
  if(typeof window !== 'undefined'){
    if(localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    cart.map((product, i) => {
      if(product.id === productId){
        console.log(count)
        cart[i].count = count
      }
    })
      localStorage.setItem('cart' , JSON.stringify(cart))
    }
  }
export const removeItem = (productId, count) => {
  let cart = []
  if(typeof window !== 'undefined'){
    if(localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    cart.map((product, i) => {
      if(product.id === productId){
        cart.splice(i , 1) 
      }
    })
      localStorage.setItem('cart' , JSON.stringify(cart))
    }
    console.log(cart)
    return cart
  }
