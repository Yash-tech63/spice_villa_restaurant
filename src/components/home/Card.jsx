import React from 'react'
import { FocusCards } from '../ui/focus-cards';
import Footer from '../home/Footer';

const Card = () => {
    const cards = [
        {
            title: "PIZZA",
            src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            cost: " cost: 400 rupees "
        },
        {
            title: "Burger the brand",
            src: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
            cost: " cost: 200 rupees "
        },
        {
            title: "Sandbich",
            src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cost: " cost: 250 rupees "
        },
        {
            title: "healthy food",
            src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cost: " cost: 500 rupees "
        },
        {
            title: "The great chowmin",
            src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
            cost: " cost: 300 rupees "
        },
        {
            title: "The cold icecream",
            src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
            cost: " cost: 100 rupees "
        },
    ];
    return (
        <div>
            <div className='my-10'><FocusCards cards={cards} />;</div>
            <div className='border-1 rounded-2xl py-5'>
                <h1 className='text-shadow-2xs text-2xl text-amber-900'><b>Discover Your Perfect Dining Experience in Bhopal</b></h1>
                <br /> <br />
                <p>Looking for the best restaurants in Bhopal? Whether you're craving local delicacies or international cuisine, explore a wide array of dining options to suit every taste. From cozy cafes to upscale eateries, restaurants in Bhopal offer a perfect blend of flavor and ambiance. Enjoy delicious meals crafted by skilled chefs, using only the freshest ingredients. Whether you’re planning a casual outing or a special celebration, the diverse restaurant scene in Bhopal ensures an unforgettable dining experience. Make your reservations today and discover your new favorite spot! Let Bhopal's culinary delights take you on a gastronomic journey like never before.</p>
                <br />
                <h1 className='text-shadow-2xs text-2xl text-amber-900'><b>Charming Dine-in Restaurants in Bhopal: Where Ambiance Meets Taste</b></h1>
                <br /> <br />
                <p>Experience the finest dine-in restaurants in Bhopal, where delightful cuisine meets captivating ambiance. These charming spots offer more than just a meal – they provide a memorable dining experience with carefully curated menus, stylish interiors, and excellent service. Whether it's a romantic dinner, a family gathering, or a night out with friends, dine-in restaurants in Bhopal cater to every occasion. Indulge in a fusion of flavors while soaking in the inviting atmosphere, making every visit truly special. Book your table now and enjoy a perfect balance of taste and ambiance in Bhopal! Treat your senses to an unforgettable experience that goes beyond the plate.</p>
            </div>

        </div>
    )
}

export default Card
