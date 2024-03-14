import '../App.css';
import searchicon from "./img/search.png";

function SearchBar(props) {
  return (
<div class="topnav">
  <a class="active" href="Home">Home</a>
  <a href="Cart" className="cart-link">
        Cart
        {props.length !== 0 && ( 
          <span className="cart-count">{props.length}</span>
        )}
      </a>
  <a href="History">History</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit" class="search-button">
      <i ><img class="search-icon" src={searchicon} alt="Search" /></i></button>
    </form>
  </div>
</div>
  );
}

export default SearchBar;
