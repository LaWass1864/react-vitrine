import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';

// La souris est ici car si nous la mettons dans App.js ca poserai pb
const Home = () => {
    return (
        <div>
            <Navigation />
           <Mouse />
        </div>
    );
};

export default Home;