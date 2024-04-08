import React from 'react';
import { slide as Menu } from 'react-burger-menu';

 const Sidebar =  () => {
  return (
    <Menu isOpen={false} right>
      <a className="menu-item" href="/">
        Pricing
      </a>
      <a className="menu-item" href="/salads">
        About Us
      </a>
      <a className="menu-item" href="/pizzas">
        Contact Us
      </a>
      <a className="menu-item" href="/desserts">
        Home
      </a>
    </Menu>
  );
};

export default Sidebar;