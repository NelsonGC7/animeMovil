import puppeteer from 'puppeteer';

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

        page.close()
        browser.close()
        return {
            title: data.title,
            "MEGA":data.url,
            "SW":data2
        };
    }
    catch (err){
        console.log({
            error:"error al escrapiar el capitulo"
        })
    }

}

export async function extracRecient(){
    try{
        const browser = await puppeteer.launch({//<-- creando y abriendo el nagegador simulado
            headless:'shell',
            defaultViewport:null
        })
        const page = await browser.newPage();

       await page.goto('https://www3.animeflv.net');
       await page.waitForSelector('.ListEpisodios');//<--- espera a que a paresca el selector para poder ser usado
       
       const recentEpisodes = await page.evaluate(()=>{
        const animeList = [];
            const list = document.querySelectorAll('.ListEpisodios li');
            list.forEach(item =>{
                const capitulo= {
                    episode: item.querySelector('.Capi').innerHTML.trim(),
                    urlimg:  item.querySelector('img').src,
                    title :item.querySelector('.Title').innerHTML.trim()

                }
                animeList.push(capitulo)
                // animeList.push(item.innerHTML)
            })

            return animeList;
       })
       return recentEpisodes;
    }
    catch(err){
        console.log({
            error:"error al extraer recientes"
        })

    }




}