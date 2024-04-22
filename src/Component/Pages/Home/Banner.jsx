import { useMediaQuery } from '@react-hook/media-query';

const Banner = () => {
    const backgroundImageLarge = 'https://i.ibb.co/0FzqZNW/Rectangle-3464760.png';
    const backgroundImageSmall = 'https://i.ibb.co/CbzhST6/Rectangle-3464762.png';
    const isLargeScreen = useMediaQuery('(min-width: 768px)');
    const bgImage = isLargeScreen ? backgroundImageLarge : backgroundImageSmall;
    const smallDeviceStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:'600px'
    };

    
    const largeDeviceStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
    };

    return (
        <div>
            <div className="w-full h-60 sm:h-[600px] md:h-[800px] before:absolute before:inset-0  "
                style={{
                    backgroundImage: `url(${bgImage})`,
                    ...(isLargeScreen ? largeDeviceStyles : smallDeviceStyles), 
                }}>
                <div className="text-white bg-gradient-to-r from-[#121212E0] via-[#393939eb] to-[#01010100] h-full lg:pt-[250px] md:pt-72 pt-32 space-y-3 lg:space-y-10 md:space-y-6 px-12">
                    <h1 className="text-[#FFF7E2] font-light lg:text-[28px] mt-5">Namaste, Welcome to Amrutam </h1>
                    <p className="text-2xl md:text-base md:text-[30px]  lg:text-[48px]  font-bold">Step into Holistic Healing with Ayurveda  </p>
                    <p className="text-2xl md:text-base md:text-[30px] lg:text-[48px]  font-bold ">Book Consultation with certified Experts.  </p>
                    <p className="text-[#C9C9C9] text-[14px] md:text-[10px] lg:text-[20px] pb-5">Dive into the world of ayurveda and Experience Personalized Health Solutions and <br />Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
                    <button className="px-5 py-3 text-lg font-semibold rounded-md text-white bg-[#3A643B]">Book an Appointment</button>
                </div>
            </div>

            <div>
                <div className="bg-[#FFF7E2] w-full lg:h-36 py-4 ">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center lg:pl-16 md:pl-8">
                        <div className="flex items-center border-b lg:border-none md:border-none border-gray-300">
                            <div className="ml-4 md:ml-0">
                                <img src="https://i.ibb.co/P6H14w8/Frame-427319082.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">convenient online &<br />
                                    In-clinic consultations</h1>
                            </div>
                        </div>
                        <div className="flex items-center border-b lg:border-none md:border-none border-gray-300">
                            <div className="ml-4 md:ml-0">
                                <img src="https://i.ibb.co/bHgbFqk/Frame-427319083.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">Safe and effective <br /> treatment</h1>
                            </div>
                        </div>
                        <div className="flex items-center border-b lg:border-none md:border-none border-gray-300">
                            <div className="ml-4 md:ml-0">
                                <img src="https://i.ibb.co/mcsJnVL/Frame-427319084.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">Experienced Ayurvedic <br /> Practitioners</h1>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-4 md:ml-0">
                                <img src="https://i.ibb.co/LRYZjGR/Frame-427319085.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-[#3A643B] text-[20px] font-semibold">personalized Treatment<br />
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
