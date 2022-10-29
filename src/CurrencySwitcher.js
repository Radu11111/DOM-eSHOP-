//Cart component module
class CurrencySwitcher {
    constructor(currencies) {
      this.currencies = currencies
      this.selected = this.currencies[0] 
    }
    render(rootID) {
        let root = document.getElementById(rootID)
        root.innerHTML = ''
         
        let countLabel = this.selected?.code?? "loading..."

        let dropList = ``
        // for(let i=0;i<this.currencies.length;i++) {
        //     dropList += `<li><a onclick="window.currencySwitcher.change(event)" class="dropdown-item" href="#">${this.currencies[i].code}</a></li>`
        // }

        // hw* :use forEach() -DONE
        currencies.forEach((dropCurrencies,index) => {
            dropList += `<li><a onclick="window.currencySwitcher.change(event)" class="dropdown-item" href="#">${this.currencies[index].code}</a></li>`
            dropCurrencies = dropList
        })
        let html = `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle bi bi-cart" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${countLabel}
          </a>
          <ul class="dropdown-menu">
          ${dropList}
          </ul>
        </li>
        </ul>
        `
        root.innerHTML = html
    }
    change(e) {
        console.log(e.target.innerText)
        // for(let i=0;i<this.currencies.lenght;i++) {
        //     if(this.currencies[i].code == e.target.innerText) {
        //         this.selected = this.currencies[i]
        //         break
        //     }
        // }
        //hw* - Use array.map()-DONE
        currencies.map((currenciesEvent,index) => {
            if(this.currencies[index].code ==e.target.innerText) {
                this.selected = this.currencies[index]
            }
        })
        this.render("rootCurrSwitch")
    }
}
//HW2*: rewrite all for() --> Array.forEach,map,filter, -DONE