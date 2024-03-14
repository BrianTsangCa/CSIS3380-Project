import '../App.css';
import SearchBar from './SearchBar';
import logo from "./img/logo.png";

function Header(props) {
  return (
<div class="header">
  <img src={logo} alt="logo"/>
  <SearchBar length={props.cart.length} cart={props.cart}/>
</div>
  );
}

export default Header;
