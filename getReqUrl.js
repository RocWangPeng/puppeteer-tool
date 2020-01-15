
/* 
获取所有请求的资源地址
*/
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false, args: ['--app=https://www.google.com/'] });
    const page = await browser.newPage();

    await page.goto('https://baidu.com');//目标网站

    page.on('request', request => {
        var url = request._url
        // 写入文件
        fs.appendFile('./data/url.json',url+'\r\n\r\n','utf8',()=>{});
    });

})();