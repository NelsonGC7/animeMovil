import puppeteer from 'puppeteer';
import fs from  'fs';

const datos = []


export async function extraCap(name,cap){
    try{
        const browser = await puppeteer.launch({
            headless: "shell",
            defaultViewport: null,
        })
        const page = await browser.newPage()
        await page.goto(`https://www3.animeflv.net/ver/${name}-${cap}`);
        await page.waitForSelector('.CpCnA')
        await page.waitForSelector('.CapiTnv')
  
        const data = await page.evaluate(() => {
            const url = document.querySelector('.CpCnA iframe').src ;
            const title = document.querySelector('h1').innerText
            return {
                title,
                url
            }
        });
        const data2 = await page.evaluate( async()=>{
            let cuentas = 0;
            [...document.querySelectorAll('.CapiTnv li')].map(dist => dist.classList.add(`active${cuentas = cuentas + 1}`));
           const btonn  = document.querySelector('.CapiTnv   li.active2');
           btonn.click()
            return document.querySelector('.CpCnA iframe').src
        })
        const obj = {
            title: data.title,
            "MEGA":data.url,
            "SW":data2
        }
        datos.push(obj)
        const dataJson = JSON.stringify(datos,null,2)

        fs.writeFile('data.json',dataJson,(error)=>{
            if(error)  return console.log(error)
            console.log('archivo creado')
        })

        page.close()
       browser.close()
       return obj
       
     
    }
    catch (err){
        console.log({"error in openNavigator": err})
    }

}

export async function extracRecient(){
    try{
        const browser = await puppeteer.launch({
            headless:false,
            defaultViewport:null
        })
        const page = await browser.newPage();

       await page.goto('https://www3.animeflv.net');
       await page.waitForSelector('.ListEpisodios');
       
       const clase = await page.evaluate(()=>{
        const animeList = [];
            const list = document.querySelectorAll('.ListEpisodios li');
            list.forEach(item =>{
                const capitulo= {
                    eposode: item.querySelector('.Capi').innerHTML.trim(),
                    urlimg:  item.querySelector('img').src,
                    title :item.querySelector('.Title').innerHTML.trim()

                }
                console.log(item)
                animeList.push(capitulo)
                // animeList.push(item.innerHTML)

            })

            return animeList;
       })
       console.log(clase)
    }
    catch(err){
        console.log({
            "error al extraer los recientes": err
        })

    }




}