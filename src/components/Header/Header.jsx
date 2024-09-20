import React, { useState } from "react";
import {
  FaAddressBook,
  FaCamera,
  FaCaretDown,
  FaHeart,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/slices/userSlice";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="header section_padding">
        <div className="header-logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header-items">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link>Filters</Link>
            </li>
            <li>
              <Link to="/add-product">Publish</Link>
            </li>
            <li className="dropdown">
              <Link>Category</Link>
              {/* <ul class="dropdown-nav">
                <li>
                  <Link to="/home">Electronics</Link>
                </li>
                <li>
                  <Link>Vehicles</Link>
                </li>
                <li>
                  <Link to="/add-product">Education</Link>
                </li>
                <li>
                  <Link to="/home">Art</Link>
                </li>
                <li>
                  <Link>Home Appliances</Link>
                </li>
                <li>
                  <Link to="/add-product">Furniture</Link>
                </li>
                <li>
                  <Link to="/home">Sports</Link>
                </li>
                <li>
                  <Link>Miscellaneous</Link>
                </li>
              </ul> */}
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <i>
            {" "}
            <FaSearch />
          </i>
          <input type="text" placeholder="search here" />
          <i>
            {" "}
            <FaCamera />
          </i>
        </div>

        <div className="user-items">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                {user ? (
                  <>
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user.details.username}</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold">
                      <Link to="/login">Login/SignUp</Link>
                    </p>
                  </>
                )}
              </DropdownItem>
              <DropdownItem key="settings">Profile</DropdownItem>
              <DropdownItem key="team_settings">Orders</DropdownItem>
              <DropdownItem key="analytics">Wishlist</DropdownItem>
              <DropdownItem key="system">Contact</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleClick}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <i>
            <FaHeart />
          </i>
          <i>
            <FaCartShopping />
          </i>
        </div>
      </div>
    </>
  );
};

export default Header;
