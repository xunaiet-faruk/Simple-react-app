
const Ayurvedic = () => {
    return (
        <div className="py-24">
            <div>
                <h1 className="text-[#3A643B] text-center text-[32px] md:text-[32px] lg:text-[48px] font-semibold">Our ayurvedic approach</h1>
                <hr className="lg:border-2 border-gray-300 border-1 w-3 lg:w-[550px] mx-auto" />
                <p className="text-center text-[10px] lg:text-[20px] lg:py-7">At Amrutam we follow a unique and personalized approach to healing. Our expert <br/> practitioners begin each treatment process by conducting a thorough analysis of the <br/> patient’s body type, medical history, and current health conditions.</p>
            </div>

            {/* card data here     1      */}
         
            <div className="grid lg:grid-cols-4 md:grid-cols-2 px-5 grid-cols-1 gap-3 max-w-screen-xl mx-auto mt-16">
                <div className="max-[350px] mx-auto h-70 border-t-4 border-[#437844]  space-y-6 rounded-2xl bg-[#FFF7E2] px-6 py-7 shadow-md dark:bg-[#18181B] w-[260px]  md:w-[300px]">

                    <div className="bg-[#3A643BA8] w-20 h-20  ml-[85px] text-center rounded-full">
                        <h1 className="text-4xl py-5 text-white font-semibold">1</h1>

                    </div>

                    <div className="space-y-2">
                        <h2 className="font-medium text-[#3A643B] text-center sm:text-lg md:text-xl "> Make Appointment</h2>
                        <p className="text-center">You must make an <br /> appointment in advance, to <br /> choose the service and date.</p>
                    </div>


                </div>

                {/* card data here      2     */}
                <div className="max-[350px] h-70 mx-auto   border-t-4 border-[#437844]  space-y-6 rounded-2xl bg-[#FFF7E2] px-6 py-7 shadow-md dark:bg-[#18181B] w-[260px]  md:w-[300px]">
                    <div className="bg-[#3A643BA8] w-20 h-20  ml-[85px] text-center rounded-full">
                        <h1 className="text-4xl py-5 text-white font-semibold">2</h1>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-medium text-[#3A643B] text-center sm:text-lg md:text-xl ">Consultations</h2>
                        <p className="text-center">The next stage involves a <br/> thorough consultation with <br/> an Ayurveda practitioner.</p>
                    </div>


                </div>

                {/* card data here      3     */}
                <div className="max-[350px] mx-auto md:mt-5 lg:mt-0  h-70 border-t-4 border-[#437844]  space-y-6 rounded-2xl bg-[#FFF7E2] px-6 py-7 shadow-md dark:bg-[#18181B]  w-[260px]  md:w-[300px]">
                    <div className="bg-[#3A643BA8] w-20 h-20  ml-[85px] text-center rounded-full">
                        <h1 className="text-4xl py-5 text-white font-semibold">3</h1>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-medium text-[#3A643B] text-center sm:text-lg md:text-xl ">Treatment Planning</h2>
                        <p className="text-center">The Ayurvedic practitioner <br/> creates a personalized <br/> treatment plan for you</p>
                    </div>


                </div>

                {/* card data here      4     */}
                <div className="max-[350px] md:mt-5 lg:mt-0 mx-auto h-70 border-t-4 border-[#437844]  space-y-6 rounded-2xl bg-[#FFF7E2] px-6 py-7 shadow-md dark:bg-[#18181B]  w-[260px]  md:w-[300px]">
                    <div className="bg-[#3A643BA8] w-20 h-20  ml-[85px] text-center rounded-full">
                        <h1 className="text-4xl py-5 text-white font-semibold">4</h1>
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-medium text-[#3A643B] text-center sm:text-lg md:text-xl ">Maintenance</h2>
                        <p className="text-center">These visits allow for <br/> assessment of progress, <br/> adjustments to the <br/> treatment.</p>
                    </div>


                </div>
            </div>
        
        </div>
    );
};

export default Ayurvedic;