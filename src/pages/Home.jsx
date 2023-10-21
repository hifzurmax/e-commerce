
import { useEffect, useState } from "react";
import Brands from "../components/Brands";
import WhyUs from "../components/WhyUs";
import Card from "../components/Card";
import Footer from "../components/Footer";
const Home = () => {

    const [extra, setExtra] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-qhnt2u3cq-hifzur-rahmans-projects.vercel.app/extra')
            .then(res => res.json())
            .then(data => {
                setExtra(data);
            })
    }, [])

    return (
        <div className="max-w-6xl mx-auto">
            <div className="min-h-[70vh] flex items-center pl-16" style={{ backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundImage: 'url(https://i.ibb.co/ZNkB5KP/min-31.jpg)' }}>
                <div>
                    <div className='mr-6 space-y-6'>
                        <h1 className="text-4xl text-white font-bold">Elevate your wardrobe with</h1>
                        <h1 className="text-4xl text-white bg-main w-fit p-4 font-bold">MANGO FASION</h1>
                        <h3 className='text-2xl text-white'>Unleash Your Inner Elegance</h3>
                        <button className="px-6 py-3 text-base text-white font-bold outline-double bg-main">Discover More</button>
                    </div>
                </div>
            </div>

            <Brands></Brands>

            <div className=" mt-24 mb-10">
                <h2 className="text-4xl text-center font-bold">NEW SUMMER COLLECTION</h2>
                <p className="text-center mt-4 text-lg font-light">Chase the Sun: Your Summer Style Unleashed</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    extra.map(card => <Card key={card._id} card={card}></Card>)
                }
            </div>

            <WhyUs></WhyUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;