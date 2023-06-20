import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from 'axios';


function App() {

  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyARS2L8uutgNYKCGpS5N17YG3J3_Mae12E");
  const [quantity, setQuantity] = useState();
  const [pagination, setPagin] = useState();

  const callbackFunction = (entries) => {
    const [ entry ] = entries
    setResult(entry.isEntersecting)
  }


   const options = {
    root: null,
    rootMargin: "0px",
    theshold: 1
   }

   useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
      if (book.current) observer.observe(result);

   })

  const BookCard = (props) => {
    const {volumeInfo} = props.info;
    const {title, authors, subtitle, publishedDate} = props.volumeInfo;


  }

  function handleChange(event) {
   const book = event.target.value;
   setBook(book);
}
function handleSubmit(event) {
  event.preventDefault();
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=30")
  .then(data => {
  console.log(data);
  console.log(data.data.items);
  setResult(data.data.items);
  setQuantity(data);
 });
}

function handlePagin(event) {
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=30")
  .then(data => {
  console.log(data);
  console.log(data.data.items);
  setResult(data.data.items);
 });
}

  return (
    <div>
<nav class="navbar navbar-light">
  <h1 className="greeting">Search for books</h1>
  <form action="#" id="navbar-search" onSubmit={handleSubmit} className="navbar_search" >
      <input class="input navbar_input" type="text" onChange={handleChange} placeholder="Type to search..." autoComplete='on' data-path="0.0.0.0.2.0.1" />
      <span> 
      <div class="input-group-text" data-path="0.0.0.0.2.0.0">
                    <button onClick={handleSubmit} class="btn btn-sm text-secondary"  type="button" data-path="0.0.0.0.2.0.0.0">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-5" data-path="0.0.0.0.2.0.0.0.0">
                        <path d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z" fill="currentColor" data-path="0.0.0.0.2.0.0.0.0.0"></path>
                      </svg>
                    </button>
                  </div>
      </span>
    </form>

    <div>
  <div class="" id="navbarText" className="navbar_cath">
     <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link">Cathegories   
        </a>
      </li>
    </ul>
    <div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    all
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only"></span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">art</a>
    <a class="dropdown-item" href="#">biography</a>
    <a class="dropdown-item" href="#">computers</a>
    <a class="dropdown-item" href="#">history</a>
    <a class="dropdown-item" href="#">medical</a>
    <a class="dropdown-item" href="#">poetry</a>
  </div> 
</div>
     <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" >Sorting by   
        </a>
      </li>
    </ul>
    <div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    relevance
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only"></span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">newest</a>
  </div>
</div>
  </div>
  </div>
</nav>


<div className='bookCards'>
{result.map((book, index) => (
<a target='_blank' href={book.volumeInfo.previewLink} className='book-card' key={book.id}>
<h3 className='book-category'>{book.volumeInfo.categories + ''}</h3>
<img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} width={250} height={350}/>
<h3 className='book-title'>{book.volumeInfo.title}</h3>
<h3 className='book-author'>{book.volumeInfo.authors + ''}</h3>
</a>
))}
</div>

<div>
<button type="button" class="btn btn-outline-warning justify-content-center btn-lg" className="load_more_button" aria-haspopup="true">Load more</button>
</div>
  

</div>
  );
}
export default App;
