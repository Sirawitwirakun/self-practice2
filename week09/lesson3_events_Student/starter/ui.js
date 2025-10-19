import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';

// Select DOM elements
const quoteList = document.getElementById('quote-list');
const form = document.getElementById('quoteForm');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const idInput = document.getElementById('quoteId');
const randomBtn = document.getElementById('randomBtn');
const randomDisplay = document.getElementById('randomQuoteDisplay');

function createQuoteElement(quote) {
  // Create the main div container
  const div = document.createElement('div');
  div.setAttribute('data-id', quote.id);
  
  // Create paragraph for quote content
  const contentP = document.createElement('p');
  contentP.textContent = quote.content;
  
  // Create paragraph for author
  const authorP = document.createElement('p');
  authorP.textContent = `— ${quote.author}`;
  
  // Create Edit button
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.setAttribute('data-id', quote.id);
  editBtn.textContent = 'Edit';
  
  // Create Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.setAttribute('data-id', quote.id);
  deleteBtn.textContent = 'Delete';
  
  // Add event listeners for Edit button
  editBtn.addEventListener('click', function() {
    const quotes = getAllQuotes();
    const quoteToEdit = quotes.find(q => q.id === quote.id);
    if (quoteToEdit) {
      contentInput.value = quoteToEdit.content;
      authorInput.value = quoteToEdit.author;
      idInput.value = quoteToEdit.id;
    }
  });
  
  // Add event listener for Delete button
  deleteBtn.addEventListener('click', function() {
    deleteQuote(quote.id);
    deleteQuoteFromDOM(quote.id);
  });
  
  // Append all elements to the div
  div.appendChild(contentP);
  div.appendChild(authorP);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  
  return div;
}

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote);
  quoteList.appendChild(quoteElement);
}

function updateQuoteInDOM(quote) {
  const quoteDiv = quoteList.querySelector(`[data-id="${quote.id}"]`);
  if (quoteDiv) {
    const contentP = quoteDiv.querySelector('p:first-child');
    const authorP = quoteDiv.querySelector('p:nth-child(2)');
    contentP.textContent = quote.content;
    authorP.textContent = `— ${quote.author}`;
  }
}

function deleteQuoteFromDOM(id) {
  const quoteDiv = quoteList.querySelector(`[data-id="${id}"]`);
  if (quoteDiv) {
    quoteDiv.remove();
  }
}

function renderQuotes() {
  // Clear the quote list
  quoteList.innerHTML = '';
  
  // Get all quotes and render each one
  const quotes = getAllQuotes();
  quotes.forEach(quote => {
    addQuoteToDOM(quote);
  });
}

function showRandomQuote() {
  const quotes = getAllQuotes();
  
  if (quotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --';
    return;
  }
  
  // Pick a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`;
}

// Event listener for form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const quoteId = idInput.value;
  
  if (content && author) {
    if (quoteId) {
      // Update existing quote
      const updatedQuote = updateQuote(Number(quoteId), content, author);
      if (updatedQuote) {
        updateQuoteInDOM(updatedQuote);
      }
    } else {
      // Add new quote
      const newQuote = addQuote(content, author);
      if (newQuote) {
        addQuoteToDOM(newQuote);
      }
    }
    
    // Reset the form
    form.reset();
    idInput.value = '';
  }
});

// Event listener for random quote button
randomBtn.addEventListener('click', showRandomQuote);

// Initial render
renderQuotes();