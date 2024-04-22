const Book = () => {
    return (
        <div className="">
            <div className="w-full bg-fixed h-60 sm:h-96 md:h-[600px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/40 before:inset-0 transform duration-1000 ease-linear"
                style={{
                    backgroundImage: `url(${'https://i.ibb.co/jRYvLV8/Rectangle-4167.png'})`,
                }}>
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl sm:text-3xl lg:text-6xl md:text-4xl text-[#F0F0F0] md:mb-3 lg:mb-6 sm:mb-8">Ready to restore harmony in </h1>
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-[#F0F0F0] mb-8 sm:mb-16">your mind, body and spirit? </h1>
                    <button className="px-5 py-3 text-lg sm:text-xl font-semibold rounded-md  text-white bg-[#3A643B]">Book an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Book;
