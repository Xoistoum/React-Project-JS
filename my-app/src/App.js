import React, {useState, useEffect, Component, useContext, createContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function App() {
  

  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyARS2L8uutgNYKCGpS5N17YG3J3_Mae12E");
  const [quantity, setQuantity] = useState();
  const [categ, setCateg] = useState();
  const [reload, setReload] = useState();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const navigation = (title, category, authors, thumbnail, description, link, countState) => {
    navigate('/more', {
    state: {passedInfo: [title, category, authors, thumbnail, description, link, countState]}
    });
    }

  const sortBookNew = (event) => {
    event.preventDefault();
    result.map(book => {
    if (book.volumeInfo.hasOwnProperty('publishedDate') === false) book.volumeInfo.publishedDate = '0000';
    });
    result.sort((a, b) => {
    return parseInt(b.volumeInfo.publishedDate.substring(0,4) - a.volumeInfo.publishedDate.substring(0,4))});
    setReload({});
    }
    
    const sortBookName = (event) => {
    event.preventDefault();
    result.sort((a, b) => {
    return (a.volumeInfo.title.localeCompare(b.volumeInfo.title))});
    setReload({});
    }

    
    const sortBookPopularity = (event) => {
    event.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key='+apiKey+'&maxResults=30'+'&startIndex='+count.toString()+'&orderBy=relevance')
    .then(data => {
    console.log(data);
    console.log(data.data.items);
    setResult(data.data.items);
    });
    setReload({});
    }

    const sortBookArt = (event) => {
      event.preventDefault();
      result.map((book, idx = result.length()) => {
        setCateg(book.volumeInfo.categories);
        console.log(categ);
        if (categ !== 'Art') {
        result.splice(idx, 1);
        idx--;
      }
      });
      console.log(result);
      setReload({});
       }

      const sortBookBiography = (event) => {
        event.preventDefault();
        result.map((book, idx = result.length()) => {
          setCateg(book.volumeInfo.categories);
          console.log(categ);
          if (categ !== 'Biography') {
          result.splice(idx, 1);
          idx--;
        }
        });
        console.log(result);
        setReload({});
         }

        const sortBookComputers = (event) => {
          event.preventDefault();
        result.map((book, idx = result.length()) => {
          setCateg(book.volumeInfo.categories);
          console.log(categ);
          if (categ !== 'Computers') {
          result.splice(idx, 1);
          idx--;
        }
        });
        console.log(result);
        setReload({});
         }

          const sortBookHistory = (event) => {
            event.preventDefault();
            result.map((book, idx = result.length()) => {
              setCateg(book.volumeInfo.categories);
              console.log(categ);
              if (categ !== 'History') {
              result.splice(idx, 1);
              idx--;
            }
            });
            console.log(result);
            setReload({});
             }

            const sortBookMedical = (event) => {
              event.preventDefault();
              result.map((book, idx = result.length()) => {
                setCateg(book.volumeInfo.categories);
                console.log(categ);
                if (categ !== 'Medical') {
                result.splice(idx, 1);
                idx--;
              }
              });
              console.log(result);
              setReload({});
               }

              const sortBookPoetry = (event) => {
                event.preventDefault();
        result.map((book, idx = result.length()) => {
          setCateg(book.volumeInfo.categories);
          console.log(categ);
          if (categ !== 'Poetry') {
          result.splice(idx, 1);
          idx--;
        }
        });
        console.log(result);
        setReload({});
         }
  

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

const handlePaginationPrev = async() => {
  if ((count - 30) < 0) {
  alert('This is the first page.');
  }
  else {
  setLoading(true);
  setCount(count => count - 30);
  await axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key='+apiKey+'&maxResults=30'+'&startIndex='+count.toString())
  .then(data => {
  console.log(data);
  console.log(data.data.items);
  setResult(data.data.items);
  setLoading(false);
  });
  }
  }
  
  const handlePaginationNext = async(event) => {
  if (book === '') {
  alert('Nothing was prompted.');
  }
  else {
  event.preventDefault();
  setLoading(true);
  setCount(count => count + 30);
  console.log(count)
  await axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key='+apiKey+'&maxResults=30'+'&startIndex='+count.toString())
  .then(data => {
  console.log(data);
  console.log(data.data.items);
  setResult(data.data.items);
  setLoading(false);
  });
  }
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
    <a class="dropdown-item" onClick={sortBookArt} href="#">art</a>
    <a class="dropdown-item" onClick={sortBookBiography} href="#">biography</a>
    <a class="dropdown-item" onClick={sortBookComputers} href="#">computers</a>
    <a class="dropdown-item" onClick={sortBookHistory} href="#">history</a>
    <a class="dropdown-item" onClick={sortBookMedical} href="#">medical</a>
    <a class="dropdown-item" onClick={sortBookPoetry} href="#">poetry</a>
  </div> 
  
</div>
     <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" >Sorting by   
        </a>
      </li>
    </ul>
    <div class="btn-group">
  <button class="btn btn-secondary btn-sm" onClick={sortBookPopularity} type="button">
    relevance
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only"></span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" onClick={sortBookName} href="#">name</a>
    <a class="dropdown-item" onClick={sortBookNew} href="#">newest</a>
  </div> 
</div>
  </div>
  </div>
</nav>
{result.length !== 0 ? <div className='result'> <h2 className="results">Found {quantity.data.totalItems} results</h2></div> : ''}

<div className='bookCards'>
{result.map((book, index) => (
<a target='_blank' className='book-card' key={book.id} onClick={() => {navigation(book.volumeInfo.title, book.volumeInfo.categories, book.volumeInfo.authors, 
  book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.description, book.volumeInfo.previewLink, count)}}>
<h3 className='book-category'>{book.volumeInfo.categories + ''}</h3>
<img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} width={250} height={350}/>
<h3 className='book-title'>{book.volumeInfo.title}</h3>
<h3 className='book-author'>{book.volumeInfo.authors + ''}</h3>
</a>
))
}
</div>

<div className='pagination'>
<button className='pagination-button-left' onClick={handlePaginationPrev}>Previous Page</button>
<button className='pagination-button' onClick={handlePaginationNext}>Next Page</button>
</div>
  

</div>
  );
}
export default App;
