import React, {useState, useEffect} from 'react';
import avatar from '../../assets/portfolio-images/bryan-avatar.jpg'

function Nav(props) {
    const {
        categories=[],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(()=>{
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <img src={avatar} alt="bryan-avatar"/>
                <a data-testid="link" href="/">
                    
                    Bryan Dumpit: Web Development Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <p>About Me</p>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                    <li>
                        <span>Contact Me</span>
                    </li>
                     {categories.map((category)=> (
                        <li
                            className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'
                            }`}
                            key={category.name}
                        >
                            <span 
                                onClick={()=> {
                                    setCurrentCategory(category)
                                }}
                            >
                                {category.name}
                            </span>
                        </li>
                     ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;