const quotes = [
    {
        quote: "A long life may not be good enough, but a good life is long enough.",
        author: "Benjamin Franklin",
    },
    {
        quote: "You need chaos in your soul to give birth to a dancing star.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "The most profound joy has more of gravity than of gaiety in it.",
        author: "Michel de Montaigne",
    },
    {
        quote: "Love the moment, and the energy of that moment will spread beyond all boundaries.",
        author: "Corita Kent",
    },
    {
        quote: "In a heated argument we are apt to lose sight of the truth.",
        author: "Publilius Syrus",
    },
    {
        quote: "Man is the artificer of his own happiness.",
        author: "Henry David Thoreau",
    },
    {
        quote: "A man travels the world over in search of what he needs and returns home to find it.",
        author: "George Moore",
    },
    {
        quote: "The crowd gives the leader new strength.",
        author: "Evenius",
    },
    {
        quote: "A man is but the product of his thoughts. What he thinks, he becomes.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "An unhurried sense of time is in itself a form of wealth.",
        author: "Bonnie Friedman",
    },
]; 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
