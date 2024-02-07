import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Mouse from '../components/Mouse';
import DynamicText from '../components/DynamicText';


// La souris est ici car si nous la mettons dans App.js ca poserai pb
const Home = () => {
    {/* la souris est dans ce fichier pour l'appeller dans chaque page */ }
    return (
        <div>
            <Mouse />
            <div className="home">
                {/*  menu */}
                <Navigation />
                <SocialNetwork />
                {/* on met le composant titre */
                }
                <div className="home-main">
                    <div className="main-content">
                        <h1> Wass Porfolio </h1>
                        {/* on injectera tout ce qu'on veut dans le DynamicText */}
                        <h2><DynamicText /></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;