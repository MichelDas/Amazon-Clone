import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
function Header() {
    return (
        <div className="header">

            {/* Logo on the top left img */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="Logo"/>
            </Link>

            {/* Search bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 Links at right */}
            <div className="Header__nav">
                {/* 1st link */}
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span>Hello Michel</span>
                        <span>Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>
            </div>
            

        </div>
    )
}

export default Header
