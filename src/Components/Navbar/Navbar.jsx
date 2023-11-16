import React, {useState} from 'react' 
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


    // const: It's a keyword in JavaScript used to declare a variable that cannot be reassigned.

    // menu: This is the name of the variable that will store the state value.
    
    // setMenu: This is the function that will be used to update the value of the menu state.
    
    // useState("shop"): This is a React Hook called useState. It is used in functional components to add state to them. The argument passed ("shop") is the initial value of the state variable (menu in this case). The initial value is set to "shop".
    
    // So, in simpler terms, this line of code is creating a state variable called menu that starts with the value "shop". The setMenu function can be used later to change the value of menu when needed, triggering a re-render of the component. This is a fundamental concept in React for managing and updating component state.

    const Navbar = () => {
const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Shopper</p>
        
      </div>

      <ul className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
<button>Login</button>
<img src={cart_icon} alt="" />
<div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
