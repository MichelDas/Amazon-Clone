import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const[{basket}, dispatch] = useStateValue();

    console.log(basket)
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="Logo"/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Hello Michel</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            

        </div>
    )
}

export default Header
