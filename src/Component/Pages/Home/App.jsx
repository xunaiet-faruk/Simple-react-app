const App = () => {
    return (
        <div className="mt-12 bg-[#FFF7E2] min-h-screen">

            <div className="flex flex-col md:flex-row justify-evenly pt-20 items-center">

                <div className="md:w-1/2 mt-12 md:mt-0 px-8 space-y-6">
                    <h1 className="text-5xl text-[#3A643B] font-bold">Amrutam Home App</h1>
                    <p className="text-[#676767]">The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                    <p className="text-[#000000] text-2xl font-semibold">Get a diet & lifestyle consultation with ayurvedic experts across the globe </p>
                    <div className="py-10">
                        <p className="font-bold text-3xl mb-5">Get the App now</p>
                        <div className="flex gap-5 items-center -ml-[270px] justify-center">
                            <img className="h-16" src="https://i.ibb.co/fr0ZytG/image-67.png" alt="" />
                            <img className="h-16" src="https://i.ibb.co/GcW1PrH/image-68.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <img className="w-full h-auto" src="https://i.ibb.co/59dg0KX/Group-39489.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default App;
