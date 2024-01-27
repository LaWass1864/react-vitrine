import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';

// La souris est ici car si nous la mettons dans App.js ca poserai pb
const Home = () => {
    return (
        <div>
            <Navigation />
           <Mouse />
           <SocialNetwork />
        </div>
    );
};

export default Home;