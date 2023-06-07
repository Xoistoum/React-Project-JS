import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
<nav class="navbar navbar-light">
 
  <h1 className="greeting">Search for books</h1>

  

  <form action="#" id="navbar-search" className="navbar_search" >
      <input class="input navbar_input" />
      <span> 

      </span>
    </form>

 
  <div class="" id="navbarText">
     <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link">Cathegories <span class="sr-only"></span></a>
      </li>
    </ul>
     <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" >Sorting by</a>
      </li>
    </ul>
  </div>

</nav>
  );
}
export default App;
