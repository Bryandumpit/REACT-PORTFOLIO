import React from 'react';

import PhotoList from "../../components/Photolist";



function Portfolio({currentCategory}) {
    const {name, description} = currentCategory;

    

    return (
        <section>
            <h1 data-testid="h1tag">{name}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    )
}

export default Portfolio;