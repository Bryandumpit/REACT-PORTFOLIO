import React from 'react';

function Nav() {
    function categorySelected(name){
        console.log(`${name} clicked`)
    }
    const categories = [
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
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
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={()=> categorySelected(category.name)}>
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