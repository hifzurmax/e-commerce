import about from "../assets/about.png"
import { FaChessQueen, FaTags, FaStroopwafel, FaSwatchbook } from "react-icons/fa6";
const WhyUs = () => {
    return (
        <div>
            <div className="mt-24  hero min-h-[40vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={about} className="md:max-w-sm rounded-sm shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Why Choose Us?</h1>
                        <p className="py-6">Discover why our fashion brand stands out in the industry. At MANGO FASION, we are more than just clothes; we are a lifestyle. Here are three compelling reasons to make us your go-to fashion destination.</p>
                        <button className="px-6 py-3 text-base text-white font-bold outline-double bg-main">Discover More</button>
                    </div>
                </div>

            </div>
            <div className="grid md:grid-cols-2 my-10 gap-4 lg:grid-cols-4">
                <div className="bg-gray-200 space-y-4 p-4">
                    <div className="bg-main w-fit p-5 mx-auto text-center rounded-full"><FaChessQueen className="text-white text-3xl"></FaChessQueen></div>
                    <h3 className="text-xl text-center font-bold">Unparalleled Style Selection</h3>
                    <p className="text-base text-center font-semibold">Discover the latest trends and timeless classics for every occasion.</p>
                </div>
                <div className="bg-gray-200 space-y-4 p-4">
                    <div className="bg-main w-fit p-5 mx-auto text-center rounded-full"><FaTags className="text-white text-3xl"></FaTags></div>
                    <h3 className="text-xl text-center font-bold">Quality Craftsmanship</h3>
                    <p className="text-base text-center font-semibold">Our garments are meticulously crafted for lasting comfort and durability.</p>
                </div>
                <div className="bg-gray-200 space-y-4 p-4">
                    <div className="bg-main w-fit p-5 mx-auto text-center rounded-full"><FaStroopwafel className="text-white text-3xl"></FaStroopwafel></div>
                    <h3 className="text-xl text-center font-bold">Personalized Shopping Experience</h3>
                    <p className="text-base text-center font-semibold">Enjoy a unique, expert-guided shopping journey tailored to your style.</p>
                </div>
                <div className="bg-gray-200 space-y-4 p-4">
                    <div className="bg-main w-fit p-5 mx-auto text-center rounded-full"><FaSwatchbook className="text-white text-3xl"></FaSwatchbook></div>
                    <h3 className="text-xl text-center font-bold">Sustainable Fashion Commitment</h3>
                    <p className="text-base text-center font-semibold">Embrace eco-friendly fashion with us, making a positive impact on the world.</p>
                </div>

            </div>
        </div>
    );
};

export default WhyUs;