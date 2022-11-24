import React from 'react';
import Collapse from './Collapse';

const FAQ = () => {
    return (
        <>
            <p className='font-bold text-[60px] text-[#486A6F] text-center mt-40 mb-12'>FAQ</p>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 w-full px-[9%]'>
                <div>
                    <Collapse question="Why are you Gay?" answer="at quod aut. Illo, magni, debitis nisi dolore eum consectetur mollitia est doloribus neque similique fuga dicta deleniti omnis totam nesciunt, animi ipsa beatae dolorem earum nulla sapiente ex vitae at temporibus? Dolorum nulla tenetur tempore iure voluptates molestias nam possimus id culpa voluptate sequi ab velit, veniam fugit minima cum nostrum, quis quasi libero porro quidem corrupti. At hic consequuntur maxime beatae autem fugit voluptatem impedit. Tempore enim nisi repellat dolor hic?"></Collapse>
                    <Collapse question="Why are you Gay?" answer="at quod aut. Illo, magni, debitis nisi dolore eum consectetur mollitia est doloribus neque similique fuga dicta deleniti omnis totam nesciunt, animi ipsa beatae dolorem earum nulla sapiente ex vitae at temporibus? Dolorum nulla tenetur tempore iure voluptates molestias nam possimus id culpa voluptate sequi ab velit, veniam fugit minima cum nostrum, quis quasi libero porro quidem corrupti. At hic consequuntur maxime beatae autem fugit voluptatem impedit. Tempore enim nisi repellat dolor hic?"></Collapse>
                    <Collapse question="Why are you Gay?" answer="at quod aut. Illo, magni, debitis nisi dolore eum consectetur mollitia est doloribus neque similique fuga dicta deleniti omnis totam nesciunt, animi ipsa beatae dolorem earum nulla sapiente ex vitae at temporibus? Dolorum nulla tenetur tempore iure voluptates molestias nam possimus id culpa voluptate sequi ab velit, veniam fugit minima cum nostrum, quis quasi libero porro quidem corrupti. At hic consequuntur maxime beatae autem fugit voluptatem impedit. Tempore enim nisi repellat dolor hic?"></Collapse>
                    <Collapse question="Why are you Gay?" answer="at quod aut. Illo, magni, debitis nisi dolore eum consectetur mollitia est doloribus neque similique fuga dicta deleniti omnis totam nesciunt, animi ipsa beatae dolorem earum nulla sapiente ex vitae at temporibus? Dolorum nulla tenetur tempore iure voluptates molestias nam possimus id culpa voluptate sequi ab velit, veniam fugit minima cum nostrum, quis quasi libero porro quidem corrupti. At hic consequuntur maxime beatae autem fugit voluptatem impedit. Tempore enim nisi repellat dolor hic?"></Collapse>
                    <Collapse question="Why are you Gay?" answer="at quod aut. Illo, magni, debitis nisi dolore eum consectetur mollitia est doloribus neque similique fuga dicta deleniti omnis totam nesciunt, animi ipsa beatae dolorem earum nulla sapiente ex vitae at temporibus? Dolorum nulla tenetur tempore iure voluptates molestias nam possimus id culpa voluptate sequi ab velit, veniam fugit minima cum nostrum, quis quasi libero porro quidem corrupti. At hic consequuntur maxime beatae autem fugit voluptatem impedit. Tempore enim nisi repellat dolor hic?"></Collapse>
                </div>
                <div className='h-[320px] w-full rounded-xl overflow-hidden hidden lg:block'>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_zrw0ybu1.json" background="#C6DBFF" speed="1" loop autoplay />
                </div>
            </div>
        </>
    );
};

export default FAQ;