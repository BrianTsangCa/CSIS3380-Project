import '../App.css';

function SearchBar() {
  return (
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#cart">Cart</a>
  <a href="#history">History</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>
  );
}

export default SearchBar;
