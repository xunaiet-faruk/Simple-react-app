
const Banner = () => {

    return (
        <div>
          

            <div className="w-full h-60 sm:h-[600px] md:h-[890px]  bg-cover bg-center before:absolute  before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${'https://s3-alpha-sig.figma.com/img/c1af/953f/807faed30071845860b212ed47717559?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHZz7ngJyjHmSF3Xm~Mbmvsh6XIGK9xbBYq-L7n5ZTjCHFEQbQr1XyMV0WG-YCDnhsIkxbvKacEjSMcM7IEPcK3Q4Jd4BbMPu19w7-T5~mzrToEY558ThHLz3JHbOgpzwhLkbcD37ZT9hFAnO3yx98Fm4By3YMFtyS-53wCc7Ew8wt4EBlyLzKbMuXck9MiKZLQuUo9Ix-dAeooFTnes0gZmB6JwfOhpz8JPT1jASjmtgXJ1UKtMpOGHh-jGZtoSSRJYYD8cGJDRcnOYTjke7b~xJ4DhrZaWzU-tX~Z35mdUZSoItA9bH8nbD0rWXmKnMiL84ppuGNQxQYEo9uhJjA__'})` }}>
                {/* text container here */}
                <div className=" text-white lg:pt-80 space-y-8 px-12">
                    <h1 className="text-white  text-lg">Namaste, Welcome to Amrutam </h1>
                    <p className="text-sm md:text-base lg:text-5xl">Step into Holistic Healing with Ayurveda <br/>Book Consultation with certified Experts. </p>
                    <p>Dive into the world of ayurveda and Experience Personalized Health Solutions and <br/>Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                    <button className="px-5 py-3 text-lg font-semibold rounded-md text-white bg-[#3A643B]">Book an Appointment</button>
                </div>
            </div>

            <div>
                <div className="bg-[#FFF7E2] w-full lg:h-36 py-4 ">

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
                     <div className="flex  items-center">
                            <div>
                                <img src="https://i.ibb.co/P6H14w8/Frame-427319082.png" alt="" />

                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">convenient online &<br />
                                    In-clinic consultations</h1>
                            </div>
                            
                     </div>
                       
                        
                        <div className="flex  items-center">
                            <div>
                                <img src="https://i.ibb.co/bHgbFqk/Frame-427319083.png" alt="" />

                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">Safe and effective <br/> treatment</h1>
                            </div>
                        </div>

                        <div className="flex  items-center">
                            <div>
                                <img src="https://i.ibb.co/mcsJnVL/Frame-427319084.png" alt="" />

                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">Experienced Ayurvedic <br/> Practitioners</h1>
                            </div>
                        </div>

                        <div className="flex  items-center">
                            <div>
                                <img src="https://i.ibb.co/LRYZjGR/Frame-427319085.png" alt="" />

                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">personalized Treatment<br/>
                                    Plans & Guidance</h1>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
         
        </div>
    );
};

export default Banner;