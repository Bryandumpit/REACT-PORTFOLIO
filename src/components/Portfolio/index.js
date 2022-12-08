import React from 'react';
import Works from "../Works";



function Portfolio() { 

    const projects = [
        {
          name:'RoadTripcierge',
          description:'This project was focused on front-end web development. We built a website where a user can plan their road trip by providing their origin and destination. The website then retrieves information from third-party APIs and provides the user with options for hotels to stay at and a map and directions to get there. ',
          builtWith:['JavaScript', 'HTML', 'Bulma', 'Google Maps API', 'Hotels.com API', 'Google Geocoding API'],
          screenshot: 'roadtripcierge.png',
          url:'https://bryandumpit.github.io/Road-Tripcierge/'
        },
        {
          name: 'Giglr',
          description: 'Every now and then we need a break from work or study. Sometimes we enjoy scrolling through funny memes and if we have a particularly good one we share them too. Giglr was developed using the MVC model to provide this service to users.',
          builtWith:['JavaScript', 'Node.js', 'mySQL', 'sequelize', 'bcrypt', 'cloudinary', 'Express.js', 'Bootstrap', 'Handlebars.js'],
          screenshot: 'giglr.png',
          url:'https://giglr-app.herokuapp.com/'
        },
        {
          name: 'StarShip',
          description: 'StarShip provides users the platform to track stock market data. Users are able to track the market in general or they can search up a specific stock.',
          builtWith: ['JavaScript', 'MongoDb', 'Express.js', 'React.js', 'Node.js', 'Apollo', 'GraphQL', 'Alpaca API', 'Material UI'],
          screenshot: 'roadtripcierge.png',
          url:'https://still-cliffs-68409.herokuapp.com/'
        },
        {
          name: 'Placeholder2',
          description: 'Lorem Ipsum...',
          builtWith: ['JavaScript', 'etc.js'],
          screenshot: 'roadtripcierge.png',
          url:'https://github.com/Bryandumpit'
        }
      ]
    
      

    return (
        <section>
            <h1 data-testid="h1tag">Checkout My Works!</h1>
            <h2> Here they are:</h2>
            <Works projects={projects}/>
            
            
        </section>
    )
}

export default Portfolio;