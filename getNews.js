const axios = require('axios')
const cheerio = require('cheerio')
const { cssNews } = require('./array')

// import fetch from 'node-fetch';



let cssArray = []
let world = []
let next = []
let funArray = []
const JSTIPS = []


//CSS NEWS

const getCssNews = () => {

    axios

        .get("https://www.lafermeduweb.net/tag/css")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);


            $(".article-title* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                cssArray.push(datas)



            })

        })

    axios
        .get("https://www.lafermeduweb.net/tag/css?page=2")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data


            $(".article-title* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                cssArray.push(datas)
            })

        })

    axios
        .get("https://www.lafermeduweb.net/tag/css?page=3")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data


            $(".article-title* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                cssArray.push(datas)
            })

        })



    axios
        .get("https://www.lafermeduweb.net/tag/css?page=4")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data


            $(".article-title* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                cssArray.push(datas)
            })

        })

    axios
        .get("https://www.lafermeduweb.net/tag/css?page=5")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data        
            $(".article-title* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                cssArray.push(datas)
            })

        })




}

// TECHNO NEWS

const getTechnoNews = () => {
    axios

        .get("https://www.nextinpact.com/acces-libre")
        .then((response) => {
            //handling the success
            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data

            $("h2* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                next.push(datas)

            })
        })

        //handling error
        .catch((error) => {
            console.log(error);
        });
    axios
        .get("https://www.nextinpact.com/acces-libre/page/2")
        .then((response) => {
            //handling the success
            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data

            $("h2* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                next.push(datas)

            })
        })

        //handling error
        .catch((error) => {
            console.log(error);
        });

    axios

        .get("https://www.lemondeinformatique.fr/toute-l-actualite-marque-sur-w3c-459.html")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data


            $("h2* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                world.push(datas)
            })

        })

    axios

        .get("https://www.lemondeinformatique.fr/recherche/index.html?search=html")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data


            $("h2* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                world.push(datas)
            })

        })

    axios

        .get("https://www.lemondeinformatique.fr/recherche/recherche.php?type=pertinence&page=2&search=html")
        .then((response) => {

            const html = response.data;

            //loading response data into a Cheerio instance
            const $ = cheerio.load(html);

            //selecting the elements with the data


            $("h2* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                world.push(datas)

            })

        })


}

// NEWS FUN

const getFunNews = () => {
    axios

        .get("https://lesjoiesducode.fr/")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("h1* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                funArray.push(datas)
            })
        })
    axios
        .get("https://lesjoiesducode.fr/page/2")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("h1* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                funArray.push(datas)
            })
        })
    axios
        .get("https://lesjoiesducode.fr/page/3")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("h1* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                funArray.push(datas)
            })
        })
    axios
        .get("https://lesjoiesducode.fr/page/4")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("h1* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                funArray.push(datas)
            })
        })
    axios
        .get("https://lesjoiesducode.fr/page/5")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("h1* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                funArray.push(datas)
            })
        })
    axios
        .get("https://lesjoiesducode.fr/page/6")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("h1* a*").each(function (index, listItem) {
                let datas = $(this).attr("href")
                funArray.push(datas)
            })
        })

}

const JSNEWS = () => {
    axios

        .get("https://jsstartup.com/?fbclid=IwAR2gGlkfcN4RrwpPKmy2BinCFQyCN5tkNd3xDKcHmC4KHqHh-dz1F7ouGRk")
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);

            $("article a").each(function (index, listItem) {
                let datas = $(this).attr("href")
                JSTIPS.push(datas)

            })
        })



}



let updateNews = () => {
    setInterval(() => {
        console.log('hello')
        getCssNews()
        getTechnoNews()
        setTimeout(() => {
            exports.funArray = getFunNews
            exports.worldInfoArray = world
            exports.cssArray = cssArray
            exports.nextImpactInfo = next
            exports.JSTIPS = JSTIPS
        }, 1000)


    }, 1800000);

}









// getCssNews()
// getTechnoNews()
// getFunNews()
// updateNews()
// JSNEWS()





exports.worldInfoArray = world
exports.cssArray = cssArray
exports.nextImpactInfo = next
exports.funArray = funArray
exports.JSTIPS = JSTIPS











