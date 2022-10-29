class CurrencyService {
    

    //DATA PATH
    getCurrencies() {
        const config = ["EUR","USD","MDL","RON","RUB"]

        let currencies = []

        const date = new Date()
        let day = date.getDate()

        let month = date.getMonth()+1

        let year = date.getFullYear()

        let currentDate = `${day}.${month}.${year}`

        let xhr = new XMLHttpRequest()
        let url = `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${currentDate}`
        //hw1:substitute current date - "09.07.2021"-DONE
        // use the Date classe
        xhr.open('GET',url)
        
        xhr.onload = () => {
            //Transformer
            console.log(xhr.responseText)
            let xmlParser = new DOMParser()

            let xml = xmlParser.parseFromString(xhr.responseText,"text/xml")
            let valuteElements = xml.getElementsByTagName("Valute")
            
            for(let i=0;i<valuteElements.length;i++) {
               let code = valuteElements[i].children[1].firstChild.textContent
              
               if(config.includes(code)) {
                let nominal = valuteElements[i].children[2].firstChild.textContent
                let rate = valuteElements[i].children[4].firstChild.textContent
                currencies.push(new Currency(code,parseFloat(nominal),parseFloat(rate)))
               }
            }
            window.currencySwitcher = new CurrencySwitcher(currencies)
            window.currencySwitcher.render("rootCurrSwitch")
        }
        
        xhr.send()

        return currencies
    }
}