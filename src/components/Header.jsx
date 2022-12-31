import React from 'react';

const Home = () => {
  return (
    <div id='home' className=' bg1'>
        <div className='min-h-screen'>
            <div className="flex flex-col justify-center h-full py-40">
                <div className="md:w-1/2 z-0 ">
                    <h1 className="text-[#d2cfdd] font-Bellefair pb-2 text-4xl p-4">By joining forces, we can make a real difference in shaping the future</h1>
                    <h1 className="text-white font-Bellefair pb-2 text-xl p-8 py-14">
                    We are a company that specializes in the development of blockchain solutions. Whether you are looking to launch your own cryptocurrency or want to build a decentralized application, we have the expertise to help you succeed.
                    </h1>
                    <button className='bt pt-14 mt-5' onClick={() => window.open('https://calendly.com/eugene0mart/a-15-minute-consultation-regarding-blockchain-technology')}>Get a Consultation</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
