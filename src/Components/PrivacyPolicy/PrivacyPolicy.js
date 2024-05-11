import React from 'react';
import Navbar from '../Nevbar/Navbar';
import Footer from '../Footer/Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar/>

            <div className="flex justify-center py-10 bg-black">
                <h1 className="text-white  text-4xl font-extrabold">Privacy Policy</h1>
            </div>
            <div className="max-w-[1200px] mx-auto py-10 px-3">
                <div className="text-lg">

                    <p>{"This Privacy Notice is intended to assist you with understanding all you require to think about the what, why and how’s of our information assembling and preparing activities, and what your legitimate rights are as a person."}</p>
                    <p className="pt-10">{"We trust you’ll set aside some effort to peruse this record; we’ve attempted to keep it all as basic as could reasonably be expected and we will keep you educated if there are any progressions to the manner in which we measure your own information later on, prior to making them."}</p>

                    <p className="pt-10">{"Configuration Pod Bulk Ltd takes its obligations to ensuring your information truly and we do prompt you become more acquainted with our practices – If there’s anything in this strategy you don’t comprehend or on the off chance that you need to pose any inquiries, it would be ideal if you don’t hesitate to reach us utilizing the subtleties beneath."}
                    </p>

                    <p className="pt-10">For what reason do we gather individual information?</p>
                    <p className="pt-5">The data we gather from you is done as such to:</p>
                    <p className="pt-5">Satisfy legally binding commitments for example Give products and enterprises</p>
                    <p className="pt-5">Improve the administrations gave</p>
                    <p className="pt-5">Advise you of any progressions to merchandise and additionally benefits that may influence individuals</p>
                    <p className="pt-5">Give direct advertising</p>
                    <p className="pt-5">Improve advertising execution</p>
                    <p className="pt-5">Improve our sites so content is conveyed all the more effectively</p>
                    <p className="pt-5">Screen our sites and additionally App action to recognize utilization patterns</p>
                    <p className="pt-5">Screen measurable examination and lead statistical surveying</p>
                    <p className="pt-5">The states of utilization</p>
                    <p className="pt-5">Assent</p>
                    <p className="pt-5">For Pod Bulk Ltd to deal with your own information we will depend on your agree to for us to do.</p>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;