// Quote of the day - Random generator
const generateQuoteBtn = document.getElementById('quoteBtn');
const quoteOutput = document.getElementById('quoteOutput');
const authorOutput = document.getElementById('authorOutput');

const arrayOfQuotes = [
    {
        author: '-Abraham Lincoln-',
        quote: `In the end, it's not the years in your life that count. It's the life in your years.`
    },
    {
        author: 'Nelson Mandela',
        quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`   
    },
    {
        author: 'Steve Jobs',
        quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`
    },
    {
        author: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
        author: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {
        author: 'Oprah Winfrey',
        quote: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`
    },
    {
        author: 'Mother Teresa',
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    },
    {
        author: 'Ralph Waldo Emerson',
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.'
    },
    {
        author: 'Margaret Mead',
        quote: 'Always remember that you are absolutely unique. Just like everyone else.'
    },
];

generateQuoteBtn.addEventListener('click', generateQuote);

function generateQuote() {
    let random = Number.parseInt(Math.floor(Math.random() * arrayOfQuotes.length));
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}

