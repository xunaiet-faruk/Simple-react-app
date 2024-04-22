import { LuGraduationCap, LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { IoBandageOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Meet = () => {
   
    return (
        <div className=" ">

            <div>
                <h1 className="text-[40px] text-center font-semibold text-[#3A643B]">Meet our Ayurveda experts </h1>
                <hr className="lg:border-4 w-1 border-1 border-gray-300  md:w-4 lg:w-[600px] mx-auto" />
            </div>
            <div className="grid mt-12 lg:grid-cols-5 md:grid-cols-2 gap-[350px] grid-cols-1 justify-center items-center max-w-screen-xl mx-auto">
                {/* card 1 icon here left   */}
                <div className="border-2  border-[#A5A5A5]  rounded-full w-12 flex justify-center items-center h-12">
                    <LuMoveLeft className="text-[#A5A5A5] text-2xl"/>
               </div>
          {/* card 2 data heree       */}
               <div >
                    <div className="my-10 -ml-48 flex w-[320px] flex-col items-center justify-center space-y-5 rounded-t-[40px] rounded-b-[40px] bg-[#FFF7E2]  font-sans shadow-lg dark:bg-[#18181B]">
                        <div className="group relative pt-10">
                            <img  className="h-[180px] w-[180px] rounded-full bg-slate-500 object-cover" src="https://i.ibb.co/qY57C2X/Ellipse-725.png" />
                       <div className="absolute -bottom-2 left-14 py-1 flex gap-1  justify-center items-center bg-black text-white rounded-full px-3 ">
                        <div className="">
                         <h1 className="text-xl font-bold">4.5 </h1>
                        </div>
                                <div className="">
                                    {[...Array(1)].map((data, index) => (
                                        <svg className="fill-[#EEDE4D] dark:fill-white/70" key={index} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    ))}
                                </div>
                       </div>
                        </div>
                       <div className="space-y-1">
                            <h1 className="text-center text-[20px] mt-3 font-bold text-black">Dr.  Vaishali  sharma</h1>
                            <p className="text-[#838383]">Ayurveda Practitioner (BAMS, MD)</p>
                           <div className="flex gap-2  items-center justify-center">
                                <p><LuGraduationCap className="text-[#3A643B] text-2xl" /></p>
                                <p className="text-[16px] font-semibold">25 years of experience</p>
                           </div>
                       </div>
                       
                        <div className="flex  gap-1 bg-[#3A643B1F] rounded-full px-9 py-1  text-[#3A643B] font-semibold items-center justify-center"> 
                       < IoBandageOutline />
                           <p className="font-semibold ">Skin Specialist</p>
                       </div>
                        <div className="bg-[#3A643B]  rounded-b-[40px] py-5 text-white w-full">
                            <h1 className="text-[20px] text-center font-semibold">Book  a  session</h1>
                        </div>            
                     </div>
               </div>

                {/* card 3 data heree       */}

                <div>
                    <div className="my-10  -ml-48  flex w-[320px] flex-col items-center justify-center space-y-5 rounded-t-[40px] rounded-b-[40px] bg-[#FFF7E2]  font-sans shadow-lg dark:bg-[#18181B]">
                        <div className="group relative pt-10">
                            <img className="h-[180px] w-[180px] rounded-full bg-slate-500 object-cover" src="https://i.ibb.co/qY57C2X/Ellipse-725.png" />
                            <div className="absolute -bottom-2 left-14 py-1 flex gap-1  justify-center items-center bg-black text-white rounded-full px-3 ">
                                <div className="">
                                    <h1 className="text-xl font-bold">4.5 </h1>
                                </div>
                                <div className="">
                                    {[...Array(1)].map((data, index) => (
                                        <svg className="fill-[#EEDE4D] dark:fill-white/70" key={index} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-center text-[20px] mt-3 font-bold text-black">Dr.  Vaishali  sharma</h1>
                            <p className="text-[#838383]">Ayurveda Practitioner (BAMS, MD)</p>
                            <div className="flex gap-2  items-center justify-center">
                                <p><LuGraduationCap className="text-[#3A643B] text-2xl" /></p>
                                <p className="text-[16px] font-semibold">25 years of experience</p>
                            </div>
                        </div>

                        <div className="flex  gap-1 bg-[#3A643B1F] rounded-full px-9 py-1  text-[#3A643B] font-semibold items-center justify-center">
                            < IoBandageOutline />
                            <p className="font-semibold ">Skin Specialist</p>
                        </div>
                        <div className="bg-[#3A643B]  rounded-b-[40px] py-5 text-white w-full">
                            <h1 className="text-[20px] text-center font-semibold">Book  a  session</h1>
                        </div>
                    </div>
                </div>

                {/* card 4 data heree       */}

                <div>
                    <div className=" my-10  -ml-48  flex w-[320px] flex-col items-center justify-center space-y-5 rounded-t-[40px] rounded-b-[40px] bg-[#FFF7E2]  font-sans shadow-lg dark:bg-[#18181B]">
                        <div className="group relative pt-10">
                            <img className="h-[180px] w-[180px] rounded-full bg-slate-500 object-cover" src="https://i.ibb.co/qY57C2X/Ellipse-725.png" />
                            <div className="absolute -bottom-2 left-14 py-1 flex gap-1  justify-center items-center bg-black text-white rounded-full px-3 ">
                                <div className="">
                                    <h1 className="text-xl font-bold">4.5 </h1>
                                </div>
                                <div className="">
                                    {[...Array(1)].map((data, index) => (
                                        <svg className="fill-[#EEDE4D] dark:fill-white/70" key={index} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-center text-[20px] mt-3 font-bold text-black">Dr.  Vaishali  sharma</h1>
                            <p className="text-[#838383]">Ayurveda Practitioner (BAMS, MD)</p>
                            <div className="flex gap-2  items-center justify-center">
                                <p><LuGraduationCap className="text-[#3A643B] text-2xl" /></p>
                                <p className="text-[16px] font-semibold">25 years of experience</p>
                            </div>
                        </div>

                        <div className="flex  gap-1 bg-[#3A643B1F] rounded-full px-9 py-1  text-[#3A643B] font-semibold items-center justify-center">
                            < IoBandageOutline />
                            <p className="font-semibold ">Skin Specialist</p>
                        </div>
                        <div className="bg-[#3A643B]  rounded-b-[40px] py-5 text-white w-full">
                            <h1 className="text-[20px] text-center font-semibold">Book  a  session</h1>
                        </div>
                    </div>
                </div>

                {/* card 2 icon here right   */}
                <div className="border-2  -ml-36  border-[#A5A5A5] rounded-full w-12 flex justify-center items-center h-12">
                    <LuMoveRight className="text-[#A5A5A5] text-2xl" />
                </div>


            </div>
                                    
            <div className="flex justify-center items-center gap-5 mt-12">
                <div className="bg-[#3A643B] w-3 h-3 rounded-full"></div>
                <div className="bg-[#C3C3C3] w-3 h-3 rounded-full"></div>
                <div className="bg-[#C3C3C3] w-3 h-3 rounded-full"></div>
            </div>

            <div className="flex items-center justify-center mt-12">
                <button className="text-[24px] rounded-xl py-3 px-6 border-2 border-[#3A643B] flex items-center">
                    Find more experts
                    <MdKeyboardArrowRight className="text-2xl mt-1 ml-1" />
                </button>
            </div>

            
        </div>
    );
};

export default Meet;