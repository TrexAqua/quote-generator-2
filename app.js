const quoteP = document.querySelector('.main-quote')
const author = document.querySelector('.who')
const newQuote = document.querySelector('.new-quote')
const headline = document.querySelector('.headline')
const headlineLine = document.querySelector('.line')
const twitterButton = document.querySelector('.twitter')
const loader = document.querySelector('.loader')

const APIURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
const twitterURL = `https://twitter.com/intent/tweet?text=${quoteP.textContent}`
const getQuote = async ()=> {
    loader.classList.remove('display-none')
    quoteP.classList.add('display-none')
    author.classList.add('display-none')
    newQuote.classList.add('display-none')
    headline.classList.add('display-none')
    headlineLine.classList.add('display-none')
    twitterButton.classList.add('display-none')

    const data = await fetch(APIURL, {
        method: 'GET',
        headers:{
            'X-Api-Key': 'APIKEY'
        }
    }).then(response => response.json())
    console.log(data[0])
    quoteP.textContent = data[0].quote
    author.textContent = `-${data[0].author}`
    loader.classList.add('display-none')
    quoteP.classList.remove('display-none')
    author.classList.remove('display-none')
    newQuote.classList.remove('display-none')
    headline.classList.remove('display-none')
    headlineLine.classList.remove('display-none')
    twitterButton.classList.remove('display-none')
}
const tweet = () => {
    window.open(twitterURL)
}
getQuote()

newQuote.addEventListener('click', getQuote)
