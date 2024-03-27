import React from 'react';
import  "./style.css"
import Carousel from "./Carousel";

const Reviews = () => {
    const CustomerReview=[
        {
            name:"David Billings",
            country:"United States",
            date:"2 days ago",
            message:"The team at Podbulk demonstrated a deep understanding of my needs and objectives,\n" +
                "taking the time to listen to my ideas and concerns before crafting a tailored strategy that exceeded my expectations. Their attention to detail and commitment to excellence were evident at every stage of the process, from the initial consultation to the final deliverables\n",
            image:"/ReviewImage/David Billings.jpg"
        },
        {
            name:"Art Studio",
            country:"Germany",
            date:"6 days ago",
            message:"I recently had an outstanding experience with PodBulk. They effortlessly grasped the project requirements with minimal guidance from my end. I needed a bulk order of 100 T-shirts, each catering to different niches, and PodBulk delivered flawlessly. If you're seeking to jumpstart your POD store with a bulk order, look no further than this exceptional service. AAA+ quality and delivery ahead of schedule. Many thanks to PodBulk for exceeding expectations!!",
            image:"/ReviewImage/Art Studio.jpg"
        },
        {
            name:"David Billings",
            country:"United States",
            date:"2 days ago",
            message:"The team at Podbulk demonstrated a deep understanding of my needs and objectives,\n" +
                "taking the time to listen to my ideas and concerns before crafting a tailored strategy that exceeded my expectations. Their attention to detail and commitment to excellence were evident at every stage of the process, from the initial consultation to the final deliverables\n",
            image:"/ReviewImage/David Billings.jpg"
        },
        {
            name:"Maria Champlin",
            country:"United States",
            date:"5 days ago",
            message:"From the initial consultation to the final delivery, Pod Bulk demonstrated a profound understanding of our business objectives and a meticulous attention to detail. Their team of experts conducted a thorough analysis of our needs, providing invaluable insights and recommendations that ultimately resulted in a solution tailored to our specific requirements. ",
            image:"/ReviewImage/Maria Champlin.jpg"
        },
        {
            name:"Chester Georges",
            country:"United States",
            date:"1 week ago",
            message:"\n" +
                "In summary, if you're looking for a team of dedicated professionals who are passionate about delivering results and exceeding expectations, look no further than Podbulk. They have earned my trust and loyalty, and I look forward to working with them on future projects.\n",
            image:"/ReviewImage/Chester Georges.jpg"
        },
        {
            name:"Susanne Wagner",
            country:"Germany",
            date:"1 week ago",
            message:"I've worked with several companies in the past, but none have impressed me as much as podbulk. Their professionalism and skill set them apart from the competition. I highly recommend them to anyone in need of their services.",
            image:"/ReviewImage/Susanne Wagner.jpg"
        },
        {
            name:"Daniel Wiener",
            country:"United States",
            date:"2 week ago",
            message:"\n" +
                "What truly sets PODBULK apart is their unwavering dedication to customer satisfaction.\n" +
                "Throughout the project, they remained accessible, responsive, and proactive, keeping me informed" +
                " every step of the way and ensuring that my vision was brought to life exactly as I had envisioned.",
            image:"/ReviewImage/Daniel Wiener.jpg"
        },
        {
            name:"Julian Hill",
            country:"United States",
            date:"2 week ago",
            message:"My experience working with this team was amazing. This team captured my ideas very well and provided revisions until I was satisfied. I will be working with them again and recommending her to friends and family.",
            image:"/ReviewImage/Julian Hill.jpg"
        },
        {
            name:"David Herman",
            country:"Canada",
            date:"2 week ago",
            message:"Throughout the project, podbulk maintained clear lines of communication, keeping us informed of progress milestones and addressing any concerns with efficiency and professionalism. Their responsiveness and proactive approach ensured that the project remained on track and exceeded our timeline expectations.",
            image:"/ReviewImage/David Herman.png"
        },
        {
            name:"Kelly J. Williams",
            country:"Canada",
            date:"3 week ago",
            message:"What truly distinguishes the Podbulk team is their unwavering commitment to quality and excellence. Every deliverable was meticulously crafted to the highest standards, reflecting their dedication to producing work of the utmost caliber. Their expertise and innovation were evident in every aspect of the project, from the creative concept development to the flawless execution.",
            image:"/ReviewImage/Kelly J. Williams.jpg"
        },
        {
            name:"Kelly Russ",
            country:"United States",
            date:"3 week ago",
            message:"Communication was seamless, with podbulk site providing regular updates and progress reports to" +
                " ensure transparency and alignment with our goals. They were receptive to feedback and proactive in addressing any concerns, always striving to exceed our expectations in terms of quality and timeliness.",
            image:"/ReviewImage/Kelly Russ.jpg"
        },
        {
            name:"Harry Walsh",
            country:"United States",
            date:"1 month ago",
            message:"One of the most impressive aspects of working with Pod Bulk is their unwavering commitment to" +
                " excellence. Every deliverable was meticulously crafted with attention to detail, showcasing their dedication to producing work of the highest standard. Their creativity and attention to detail consistently elevated our marketing efforts, resulting in tangible results and a measurable return on investment.",
            image:"/ReviewImage/David Herman.png"
        },
        {
            name:"Logan Barnes",
            country:"Australia",
            date:"1 month ago",
            message:"I've had the pleasure of working on my second project with PodBulk, and once again, they've exceeded expectations. Their communication is top-notch, and they promptly implemented all requested changes. I wholeheartedly endorse this platform!",
            image:"/ReviewImage/David Herman.png"
        },
        {
            name:"Olivia",
            country:"United States",
            date:"1 month ago",
            message:"One of the most impressive aspects of working with Pod Bulk is their unwavering commitment to excellence. Every deliverable was meticulously crafted with attention to detail, showcasing their dedication to producing work of the highest standard. Their creativity and attention to detail consistently elevated our marketing efforts, resulting in tangible results and a measurable return on investment. ",
            image:"/ReviewImage/David Herman.png"
        },
        {
            name:"Lion King Luxurious",
            country:"Canada",
            date:"2 month ago",
            message:"They demonstrated remarkable skill in translating our vision into exceptional designs, showing great attention to detail by asking thorough and insightful questions to ensure they fully comprehended our requests. Their commitment to understanding our needs resulted in the delivery of precisely what we envisioned.",
            image:"/ReviewImage/David Herman.png"
        },
        {
            name:"Olivia",
            country:"United States",
            date:"1 month ago",
            message:"One of the most impressive aspects of working with Pod Bulk is their unwavering commitment to excellence. Every deliverable was meticulously crafted with attention to detail, showcasing their dedication to producing work of the highest standard. Their creativity and attention to detail consistently elevated our marketing efforts, resulting in tangible results and a measurable return on investment. ",
            image:"/ReviewImage/David Herman.png"
        },
        {
            name:"Devin Jacobs",
            country:"United States",
            date:"3 month ago",
            message:"Highly professional, their graphic skills are truly outstanding. Not only did they meet deadlines, but they also exceeded expectations, leaving our team thoroughly satisfied with their work. Thank you for your exceptional service!",
            image:"/ReviewImage/David Herman.png"
        },
    ]
    return (
        <section className="py-16">

            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-center">
                    <div className=" text-center px-5">
                        <h1 className=" text-gray-950 text-xl md:text-[64px] font-bold font-['Montserrat'] uppercase md:leading-[57.60px]">OUR
                            CUSTOMER REVIEWS</h1>
                        <p
                            className=" max-w-[777px] mx-auto pt-5 text-gray-950 text-base font-medium font-['Montserrat'] leading-relaxed">Discover
                            what our valued customers have to say about their experiences with us. Read these genuine
                            reviews to get a glimpse into the satisfaction and trust we've earned.
                        </p>
                    </div>
                </div>


                <Carousel CustomerReview={CustomerReview}/>


            </div>


        </section>
    );
};

export default Reviews;