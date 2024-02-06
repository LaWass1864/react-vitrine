import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Mouse from '../components/Mouse';


// La souris est ici car si nous la mettons dans App.js ca poserai pb
const Home = () => {
    return (
        <div>
            {/* la souris est dans ce fichier pour l'appeller dans chaque page */}
            <Mouse />
            {/*  menu */}
            <Navigation />
            <SocialNetwork />
         
        </div>
    );
};

export default Home;