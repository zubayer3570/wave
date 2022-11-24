import React from 'react';
import Collapse from './Collapse';

const FAQ = () => {
    return (
        <>
            <p className='font-bold text-[60px] text-[#486A6F] text-center mt-40 mb-12'>FAQ</p>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 w-full px-[9%]'>
                <div>
                    <Collapse question="Is domain and hosting price included in Packages?" answer="No, domain and hosting charge is not included in our package. You need to purchase that yourself and provide us the C-Panel login details in order to have us get started working on your project. However, if you have not much idea about domain and hosting, we can help you with that. BUT, THE COST IS ON YOU."></Collapse>
                    <Collapse question="Do you build any kind of website?" answer="Yes, we create website for any possible needs you can have. Contact us and we can have a discussion to make things clear."></Collapse>
                    <Collapse question="What kind of websites can you develop?" answer="Generally we work on E-commerce, Blog, Portfolio, Business Agency, Online News Portal, Event, Learning Management System, Landing Page websites. Kindly check our service page to know in details."></Collapse>
                    <Collapse question="Can you offer some discount on your pricing?" answer="We decided our price after researching the market and tried our best to keep the cost as low as possible. Hence, there is currently no discount offer going on. However, based on your project requirements (especially for large scale projects), we may consider lessening the cost to some extend."></Collapse>
                    <Collapse question="Can I get support after project completion?" answer="Of course! You can reach to us anytime if you face any issue with your website. We are always prepared to help you."></Collapse>
                </div>
                <div className='h-[320px] w-full rounded-xl overflow-hidden hidden lg:block'>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_zrw0ybu1.json" background="#C6DBFF" speed="1" loop autoplay />
                </div>
            </div>
        </>
    );
};

export default FAQ;