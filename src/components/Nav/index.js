import React, {useState, useEffect} from 'react';
import avatar from '../../assets/portfolio-images/bryan-avatar.jpg'

function Nav(props) {
    const {
        navbar=[],
        setNavbarSelected,
        navbarSelected
    } = props;

    useEffect(()=>{
        document.title = navbarSelected.name}, [navbarSelected]
    )
    

    return (
        <header className="flex-row px-1">
            <h2>
                <img src={avatar} alt="bryan-avatar"/>
                <a data-testid="link" href="/react-portfolio">
                    
                    Bryan Dumpit: Web Development Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    
                    {navbar.map((nav)=> (
                        <li
                            className ={`mx-1 ${
                                navbarSelected.name === nav.name && 'navActive'
                            }`}
                            key={nav.name}
                            >
                                <span
                                    onClick={()=>{
                                        setNavbarSelected(nav);
                                    }}
                                >
                                    {nav.name}
                                </span>
                            </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;