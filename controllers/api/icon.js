const fetch = require('node-fetch');

module.exports = {
    getImage,
   
}

async function getImage(req, res) {
    const image = await fetch('https://api.waifu.pics/sfw/smug'
            ).then(res => res.json());
            JSON.stringify(image);
            res.json(image)

}

