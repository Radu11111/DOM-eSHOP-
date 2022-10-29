class TestDataService {
    

    //DATA PATH
    getTestProducts(count = 10) {
        let products = []

        let xhr = new XMLHttpRequest()
        let url = 'http://fakestoreapi.com/products'
        xhr.open('GET',url)
        
        xhr.onload = () => {
            //Transformer
            let data = JSON.parse(xhr.responseText)
            for(let i=0;i<data.lenght;i++) {
                data[i]
                let product = new Product(
                    data[i].id,
                    data[i].title,
                    data[i].image,{
                        amount:data[i].price,
                        currency:"MDL"
                    })
            products.push(product)
            }
            console.log(products)
            renderCatalog("root-catalog")
        }
        
        xhr.send()

        return products
    }
}