
const Review = () => {
   
    return (
        <div className="mb-12 bg-[#FFF7E2] lg:h-[90vh]  pt-24 ">
          
          <div>
                <h1 className="lg:text-[40px] md:text-[32px] text-[24px] text-center font-semibold text-[#3A643B]">STORIES FROM OUR VALUED CUSTOMERS!</h1>
                <hr className="lg:border-4 border-1 border-gray-300 w-3 lg:w-[800px] mx-auto" />
          </div>
            <div className="max-w-screen-xl mx-auto gap-12  px-3 lg:ml-36 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "> 
                <div className="max-[350px] space-y-6 mx-auto  o mt-12 rounded-2xl bg-white shadow-md dark:bg-[#18181B] w-[380px] md:w-[360px]">
                    <h1 className="bg-[#ECE7FF] py-3  font-bold rounded-t-xl px-5 text-xl w-full">Consulted for Skin</h1>
                    <div className="space-y-2">

                        <div className="flex justify-around">
                            <div className="flex gap-6">
                                <div className="bg-[#515151] rounded-full w-14 h-14">
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold  ">Sophie Moore  </h1>
                                    <p>Chennai</p>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <p>17/02/24</p>
                            </div>
                        </div>
                        <div className="flex gap-1  ml-6 pt-3">
                            {[...Array(4)].map((data, index) => (
                                <svg className="fill-[#EEDE4D] dark:fill-white/70" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                  <div className="">
                        <p className="text-[22px] -mt-5 font-semibold text-black ml-6">“One of a kind service”</p>
                        <p className="ml-6 mt-3 pb-8">Ultrices eros in cursus turpis massa <br/> tincidunt sem nulla pharetra diam sit <br/> amet nisl suscipit adipis.</p>
                  </div>
                </div>

                <div className="max-[350px] space-y-6 mx-auto o md:-ml-6 lg:-ml-2 ml-2 mt-12 rounded-2xl bg-white shadow-md dark:bg-[#18181B] w-[380px]  md:w-[360px]">
                    <h1 className="bg-[#ECFEE7] py-3  font-bold rounded-t-xl px-5 text-xl w-full">Consulted for Skin</h1>
                    <div className="space-y-2">

                        <div className="flex justify-around">
                            <div className="flex gap-6">
                                <div className="bg-[#515151] rounded-full w-14 h-14">
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold  ">Sophie Moore  </h1>
                                    <p>Mumbai</p>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <p>17/02/24</p>
                            </div>
                        </div>
                        <div className="flex gap-1 ml-6 pt-3">
                            {[...Array(4)].map((data, index) => (
                                <svg className="fill-[#EEDE4D] dark:fill-white/70" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-[22px] -mt-5  font-semibold text-black ml-6">“One of a kind service”</p>
                        <p className="ml-6 mt-3 pb-8">Ultrices eros in cursus turpis massa <br /> tincidunt sem nulla pharetra diam sit <br /> amet nisl suscipit adipis.</p>
                    </div>
                </div>

                <div className="max-[350px] ml-2 space-y-6 lg:-ml-[50px] mx-auto o mt-12 rounded-2xl bg-white shadow-md dark:bg-[#18181B]  w-[380px]  md:w-[360px]">
                    <h1 className="bg-[#ECFEE7] py-3  font-bold rounded-t-xl px-5 text-xl w-full">Consulted for Skin</h1>
                    <div className="space-y-2">

                        <div className="flex justify-around">
                            <div className="flex gap-6">
                                <div className="bg-[#515151] rounded-full w-14 h-14">
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold  ">Sophie Moore  </h1>
                                    <p>Chennai</p>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <p>17/02/24</p>
                            </div>
                        </div>

                        {/* rating  */}
                        <div className="flex gap-1 ml-6 pt-3">
                            {[...Array(4)].map((data, index) => (
                                <svg className="fill-[#EEDE4D] dark:fill-white/70" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-[22px] -mt-5  font-semibold text-black ml-6">“One of a kind service”</p>
                        <p className="ml-6 mt-3 pb-8">Ultrices eros in cursus turpis massa <br /> tincidunt sem nulla pharetra diam sit <br /> amet nisl suscipit adipis.</p>
                    </div>
                </div>
        </div>


        <div className="flex justify-center items-center gap-5 mt-16">
                <div className="bg-[#3A643B] w-3 h-3 rounded-full"></div>
                <div className="bg-[#C3C3C3] w-3 h-3 rounded-full"></div>
                <div className="bg-[#C3C3C3] w-3 h-3 rounded-full"></div>
        </div>


      

        </div>
    );
};

export default Review;