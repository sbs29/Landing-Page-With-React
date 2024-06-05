import React from "react";

const navbarItems = ["Home", "About", "Service", "Contact"];

const navbarItemsInHTML = navbarItems.map((singleNavbarItems, index) => {
	return <li key={index}><a class="nav-link text-bg-dark" href="#">{singleNavbarItems}</a></li>;
});

//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-dark" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {navbarItemsInHTML}
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Navbar;


