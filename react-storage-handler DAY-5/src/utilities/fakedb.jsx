const addTodb = id => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('Shopping-Cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }


    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('Shopping-Cart', JSON.stringify(shoppingCart))
}
const removeFromDb = id => {
    const storedCart = localStorage.getItem('Shopping-Cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('Shopping-Cart', JSON.stringify(shoppingCart))
        }
    }
}
const deleteShopingCart = () => {
    localStorage.removeItem('Shopping-Cart')
}
export { addTodb, removeFromDb, deleteShopingCart };