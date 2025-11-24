import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral-800 text-white px-[10%] pt-10 pb-1'>
            <p>Home  |  Terms and Conditions  |  Private Policy  |  Collection Statement  |  Help  |  Manage Account</p>
            <p className='pt-3'>Copyright 2016 DEMO Streaming. All Rights Reserved.</p>
            <div className='flex justify-between'>
                <div className='flex gap-5 pt-15'>
                    <img src="./assets/social/facebook-white.svg" alt="facebook" className='size-10'/>
                    <img src="./assets/social/twitter-white.svg" alt="Twitter" className='size-10'/>
                    <img src="./assets/social/instagram-white.svg" alt="Instagram" className='size-10'/>
                </div>
                <div className='flex items-center gap-5'>
                    <img src="./assets/store/app-store.svg" alt="Apple Store" className='size-40'/>
                    <img src="./assets/store/play-store.svg" alt="Play Store" className='size-40'/>
                    <img src="./assets/store/windows-store.svg" alt="Microsoft Store" className='size-32'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
