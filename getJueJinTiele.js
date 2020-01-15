
/* 
获取掘进文章标题
*/
const puppeteer = require('puppeteer');
const fs = require('fs');

puppeteer.launch({ headless: false, args: ['--app=https://www.google.com/'] }).then(async browser => {
    var page = await browser.newPage();
    
    await page.goto('https://juejin.im/timeline');
    await page.waitFor(3000)

    let aTags = await page.evaluate(async () => {

        let as = [...document.querySelectorAll('.entry-list .title')];
        return as.map((a) => {
            return {
                title: a.innerText
            }
        });
    });

    fs.appendFile('./data/juejin.json', JSON.stringify(aTags) + '\r\n\r\n', 'utf8', () => { });

});