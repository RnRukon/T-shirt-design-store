import React from 'react';
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Pricing from "../Pricing/Pricing";
import Reviews from "../Reviews/Reviews";
import OutTeam from "../OurTeam/OutTeam";
import Subscribe from "../Subscribe/Subscribe";
import Chat from "../Chat/Chat";
import Navbar from '../Nevbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Counter />
            <Projects />
            <Services />
            <Pricing />
            <Reviews />
            <OutTeam />
            <Subscribe />
            <Chat />
            <Footer />
        </div>
    );
};

export default Home;