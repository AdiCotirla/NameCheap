import React from 'react'
import "../../Styling/footer.css"
import * as VscIcons from "react-icons/vsc"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='container-form'>
                <VscIcons.VscMail className='icon' />
                <p className='subs-info'>Subscribe to have new coupon lists delivered directly to your inbox</p>
                <form action="https://formsubmit.co/adioprea53@gmail.com" method="POST" className='form' >
                    <input type="email" name="SUBSCRIPTIE NOUA" required className='text-area' placeholder='Type your email' />
                    <button type="submit" className='button-submit'>SUBSCRIBE</button>
                </form>
            </div>
            <div className='container-under-form'>
                <p className='footer-info designer infos'>©Designed with passion by Cotirla Adrian</p>
                <div className='infos'>
                    <a href='https://www.instagram.com/adi_c_33/' alt="Creator" className='footer-links'>
                        <AiIcons.AiFillInstagram className='footer-icon instagram' />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100005022847470' alt="Creator" className='footer-links'>
                        <FaIcons.FaFacebookF className='footer-icon facebook' />
                    </a>
                    <a href='https://www.linkedin.com/in/cotirla-adrian-7b4444202/' alt="Creator" className='footer-links'>
                        <FaIcons.FaLinkedinIn className='footer-icon linkedin' />
                    </a>
                    
                </div>
                <p className='footer-info copyright infos'>Copyright © 2021-{(new Date().getFullYear())} www.couponbeast.com All rights reserved.</p>
            </div>
        </div>
    )
}
