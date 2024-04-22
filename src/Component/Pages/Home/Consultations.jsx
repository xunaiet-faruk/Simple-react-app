import image from '../../../../public/Rectangle 4144 (1).png'
const Consultations = () => {
    return (
        <div className="mt-32">
            <div className="bg-[#FFF7E2] pt-8 pb-5">
                <div className="mb-32 mt-12">
                    <h1 className="text-[48px] text-[#3A643B] font-semibold text-center">What sets Ayurvedic consultations apart?</h1>
                    <hr className="lg:border-2 border-gray-300 w-2 border-1 lg:w-[900px] mx-auto" />
                </div>

                <div className="grid lg:grid-cols-3 px-4 lg:px-0 gap-8 md:grid-cols-2 grid-cols-1  mx-auto max-w-[1300px]">
                    <div className="bg-white  border-t-4 border-[#437844] rounded-xl h-[290px] lg:w-[522px]">
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h1 className="text-[32px] mb-3 text-center pt-12 font-bold text-[#3A643B]">स्वस्थस्य स्वास्थ्य रक्षणं,
                                    <br /> आतुरस्य विकार प्रशमनं ।"</h1>
                                <p className="text-center text-[#437844]">[ Meaning: The Goal of Ayurveda is to maintain the <br /> health of a healthy person and to cure the disease of a <br /> diseased person. ]</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <img className="lg:w-[400px] lg:ml-20 max-w-full" src={image} alt="" />
                    </div>
                    <div className="bg-white lg:ml-10 pl-12 border-t-4 border-[#437844] rounded-xl h-[290px]">
                        <h1 className="text-[24px] text-[#437844] pt-12 font-bold">Precise diagnosis</h1>
                        <p className="text-[20px] text-[#414141]">Ayurveda's core principles <br /> revolve around Vata, Pitta, <br /> and Kapha doshas, guiding <br /> you with precise diagnosis <br /> and treatment.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-5 gap-1 mx-auto max-w-[1300px] mb-12 ">
                    <div className="bg-white mt-12 lg:mt-0  lg:-ml-4 pl-12 border-t-4 border-[#437844] rounded-xl h-[262px] lg:w-[330px] w-[]">
                        <h1 className="text-[24px] text-[#437844] pt-12 font-bold">Precise diagnosis</h1>
                        <p className="text-[20px] text-[#414141]">Ayurveda's core principles <br /> revolve around Vata, Pitta, <br /> and Kapha doshas, guiding <br /> you with precise diagnosis <br /> and treatment.</p>
                    </div>
                    <div className="mx-auto">
                        <img className="lg:w-[350px] mt-10  lg:mt-0 w-[430px] h-[274px] max-w-full" src="https://i.ibb.co/Kjfs898/Rectangle-4146.png" alt="" />
                    </div>
                    <div className="bg-white mt-10 lg:mt-0 pl-12 border-t-4 border-[#437844] rounded-xl  h-[264px] lg:w-[330px] ">
                        <h1 className="text-[24px] text-[#437844] pt-12 font-bold">Precise diagnosis</h1>
                        <p className="text-[20px] text-[#414141]">Ayurveda's core principles <br /> revolve around Vata, Pitta, <br /> and Kapha doshas, guiding <br /> you with precise diagnosis <br /> and treatment.</p>
                    </div>
                    <div className="mx-auto ml-4">
                        <img className="lg:w-[340px]  w-[580px] mt-10 lg:mt-0 h-[274px] max-w-full" src="https://i.ibb.co/SJ5CVyL/Rectangle-4148.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultations;
