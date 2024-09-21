import puppeteer from 'puppeteer';

async function openNavigator(){
    try{
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        const page = await browser.newPage()
        await page.goto('https://www3.animeflv.net/ver/sword-art-online-2');
        await page.waitForSelector('.CpCnA')
        const data = await page.evaluate(() => {
            return document.querySelector('.CpCnA iframe').src
        });
     
        const data2 = await page.evaluate( async()=>{
            let cuentas = 0
            const lista = [...document.querySelectorAll('.CpCnA li')].map(dist => dist.classList.add(`active${cuentas = cuentas + 1}`));
           const btonn  = document.querySelector('.CpCnA li.active2');
           btonn.click()
           
            return   lista
        })
       console.log(data2)
       
     
    }
    catch (err){
        console.log({"error in openNavigator": err})
    }

}

openNavigator()