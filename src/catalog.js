//catalog module
// const catalog = [
//     new Product(1, "Olive Oil","images/olive-oil-gf3d38d501_640.jpg", {
//         amount:50,
//         currency:"MDL"
//     }),
//     new Product(2, "Nuts","images/nuts-g156e9fe74_640.jpg", {
//         amount:150,
//         currency:"MDL"
//     }),
//     new Product(3, "Strawberry","images/strawberry-g80bbb13c5_640.jpg", {
//         amount:25,
//         currency:"MDL"
//     }),
// ]
//hw1:why the render function here is called renderCatalog,
// but inside Product is naming render?-DONE
//renderCatalog() este o funcție a carei denumire corespunde convenției JS camelCase
//și este o funcție care nu face parte dintr-o clasă,fapt pentru care a și fost denumită atât de explicit.
//Pe când render() reprezintă o metodă,iar faptul că face parte din clasa Product,fapt pentru care este
//clar ce reprezintă funcția dată.
const renderCatalog=(rootID) => {
    let root = document.getElementById(rootID)
    root.innerHTML = ''
    catalog.forEach( product => root.innerHTML+=product.render())
    
    
    //attach event handlers
    let btns = document.querySelectorAll('.btn-add-to-cart') //HTML Collection
    
    //hw3:use Array.forEach() -DONE
    btns.forEach((btn) => {
        let btnCart = btn.addEventListener('click', cart.addProduct)
    })
    //or use for loop
    // for(let i=0;i < btns.length;i++) {
    //     btns[i].addEventListener('click',cart.addProduct)
    //     //aceasta e echivalent cu btns[i].onclick =cart.addProduct
    // }
}