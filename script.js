
const quote = document.querySelector(".quote q"),
author = document.querySelector(".author")
btnQuote = document.querySelector(".btn-quote");

const getQuotes = () => {
  fetch("https://type.fit/api/quotes/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayQuote(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const displayQuote = (data) => {

    let random = Math.floor(Math.random() * data.length)

    console.log(random)

  quote.textContent = data[random]["text"];
  author.textContent = data[random]["author"];
};

btnQuote.addEventListener("click", ()=>{
    getQuotes();
})

getQuotes();


