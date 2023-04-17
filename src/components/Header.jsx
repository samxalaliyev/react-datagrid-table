import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/products" >Products</Link> </li>
                    
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header