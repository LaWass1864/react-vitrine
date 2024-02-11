import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Mouse from '../components/Mouse';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';


// La souris est ici car si nous la mettons dans App.js ca poserai pb
const Home = () => {
    {/* la souris est dans ce fichier pour l'appeller dans chaque page */ }

    const handleDragEnd = () => {
        // Code à exécuter lorsque le glisser-déposer se termine
        console.log("Drag ended");
    };
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            x: -100,
        }
    }
    return (
        <div>
            <Mouse />
            <motion.div className="home" initial='initial'
                animate='visible'
                exit="exit"
                variants={variants}
            >
                {/*  menu */}
                <Navigation />
                <SocialNetwork />
                {/* on met le composant titre */
                }
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1
                            drag
                            onDragEnd={handleDragEnd}
                            dragConstraints={{
                                left: -250,
                                right: 950,
                                top: -200,
                                bottom: 250,
                            }}> Wass Porfolio </motion.h1>
                        {/* on injectera tout ce qu'on veut dans le DynamicText */}
                        <motion.h2
                            drag
                            onDragEnd={handleDragEnd}
                            dragConstraints={{
                                left: -250,
                                right: 950,
                                top: -200,
                                bottom: 250,

                            }}>

                            <DynamicText />
                        </motion.h2>
                    </div>
                </div>
                <Buttons right={"/projet-1"} />
            </motion.div>
        </div>
    );
};

export default Home;