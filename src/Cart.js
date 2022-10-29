//Cart component module
class Cart {
    constructor(id) {
        this.id=id
        this.items=[]
    }
    render(rootID) {
        let root = document.getElementById(rootID)
        root.innerHTML = ''
        let count = this.items.length
        let countLabel = "empty"
        if(count > 0) {
            countLabel = `${count} items`   
        }
        let html = `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle bi bi-cart" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <img src="images/cart-icon.png" class="px-2">
          ${countLabel}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </ul>
        `
        root.innerHTML = html
    }
    addProduct(e) {          //<<<<<<event object
        console.log(e)         //<<<<event.target -> <a>
        //hw4: extract the product id from  the dataset-NOTE DONE
    }
    //hw5*:
    //    -Bootstrap icon -> cart | ICON CART-DONE
    //Am adaugat iconul cosului dar nu prin bootstrap icon,am conectat toate scripturile,dar nu mi-a reușit.
    //      -Add Adaptiviti
}