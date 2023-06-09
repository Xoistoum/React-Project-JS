import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
<nav class="navbar navbar-light">
 
  <h1 className="greeting">Search for books</h1>

  <form action="#" id="navbar-search" className="navbar_search" >
      <input class="input navbar_input" type="text" placeholder="Type to search..." data-path="0.0.0.0.2.0.1" />
      <span> 
      <div class="input-group-text" data-path="0.0.0.0.2.0.0">
                    <button class="btn btn-sm text-secondary" type="button" data-path="0.0.0.0.2.0.0.0">
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-5" data-path="0.0.0.0.2.0.0.0.0">
                        <path d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z" fill="currentColor" data-path="0.0.0.0.2.0.0.0.0.0"></path>
                      </svg>
                    </button>
                  </div>
      </span>
    </form>


  <div class="" id="navbarText" className="navbar_cath">
     <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link">Cathegories   
        </a>
      </li>
    </ul>
    <div class="btn-group">
  <button class="btn btn-secondary btn-sm" type="button">
    Art
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only"></span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" href="#">History</a>
    <a class="dropdown-item" href="#">Programming</a>
    <a class="dropdown-item" href="#">Scince</a>
    <div class="dropdown-divider"></div>
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
    Name
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only"></span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" href="#">Year</a>
    <a class="dropdown-item" href="#">Author</a>
    <a class="dropdown-item" href="#">Type</a> 
    <div class="dropdown-divider"></div>
  </div>
</div>
  </div>

</nav>
  );
}
export default App;
