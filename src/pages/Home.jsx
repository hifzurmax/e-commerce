
import Brands from "../components/Brands";
const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="min-h-[70vh] flex items-center pl-16" style={{ backgroundImage: 'url(https://i.ibb.co/ZNkB5KP/min-31.jpg)' }}>
                <div>
                    <div className='mr-6 space-y-6'>
                        <h1 className="text-4xl text-white font-bold">Elevate your wardrobe with</h1>
                        <h1 className="text-4xl text-white bg-main w-fit p-4 font-bold">MANGO FASION</h1>
                        <h3 className='text-2xl text-[#737373]'>Welcome and open yourself to your truest love this year with us! With the Release Process.</h3>
                        <button className="px-6 py-3 text-base text-white font-bold outline-double bg-main">Discover More</button>
                    </div>
                </div>
            </div>

            <Brands></Brands>
        </div>
    );
};

export default Home;