import React from 'react';
import MenuIcon from '/img/menu.svg';
import CartIcon from '/img/shopping_bag.svg'
import ProfileIcon from '/img/profile.svg'


const context = {
    menuIcon: MenuIcon,
    cartIcon: CartIcon,
    profileIcon: ProfileIcon
};

const GeneralContext = React.createContext(context);

export default GeneralContext;