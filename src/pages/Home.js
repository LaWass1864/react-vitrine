import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';

// La souris est ici car si nous la mettons dans App.js ca poserai pb
const Home = () => {
    return (
        <div>
            <Navigation />
            <Mouse />
            <div className="home">
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1> Wass Porfolio </h1>
                        <h2> <DynamicText /></h2>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;