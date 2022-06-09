const fetch = require('node-fetch');

module.exports = {
    getImage,
   
}

async function getImage(req, res) {
    const image = await fetch('https://api.waifu.pics/sfw/dance'
            ).then(res => res.json());
            JSON.stringify(image);
            console.log("img:", image);
            res.json(image)

}

