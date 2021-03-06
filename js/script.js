// create the `quotes` array and populate 

const quotes = [
  {
    contents: "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway",
    citation: "The Old Man and the Sea",
    year: "1952"
  },
  {
    contents: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    contents: "There is nothing permanent except change.",
    author: "Heraclitus",    
  },
  {
    contents: "You cannot shake hands with a clenched fist.",
    author: "Indira Gandhi",
  },
  {
    contents: "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "A. P. J. Abdul Kalam",    
  },
  {
    contents: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
    author: "Henry James", 
  },
  {
    contents: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",    
  },
  {
    contents: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen",    
  }
]

printQuote(); // Pull the first random quote

 // `getRandomQuote` function returns a random number from 0 to total lenght of 'quotes' array

function getRandomQuote(){
  let randomQuoteID = parseInt(Math.random() * quotes.length);

  return quotes[randomQuoteID]; // Return a quote object
} 

//`printQuote` function generates final HTML output

function printQuote(){
  let quote = getRandomQuote();
  let HTML = ``
  HTML += `<p class="quote">${quote['contents']}</p>
           <p class="source">${quote['author']}`
  if(quote['citation']){
    HTML += `<span class="citation">${quote['citation']}</span>`;
  }
  if(quote['year']){
    HTML+= `<span class="year">${quote["year"]}</span>`;
  }
  HTML += `</p>`
  document.getElementById('quote-box').innerHTML = HTML;
  return HTML;
}

// Event listener on button click

document.getElementById('load-quote').addEventListener("click", printQuote, false);