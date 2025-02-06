import React from 'react'

import {
    Linkedin,
    Instagram,

} from 'lucide-react';
import FooterBg from '../assets/FooterBg.svg'
const Community: React.FC = () => {
    return (
        <div className='bg-black'>
            <section className="md:pt-20 w-full">

                <div className="md:min-h-[70vh] relative px-4 flex justify-center items-center ">
                    <img srcSet={FooterBg} className='bg-cover bottom-0 absolute md:w-[1200px] bg-center' />
                    <div className='relative pb-10 z-10'>


                        <h2 className="text-4xl text-center font-bold mb-12 comic-text text-yellow-100">
                            Stay Updated
                        </h2>
                        <div className="flex justify-center gap-6 mb-12">
                            {[
                                { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/gdg-rcet/' },
                                { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', href: 'https://www.instagram.com/gdgc_rcet?igsh=czZwN3dvcWYzZ3Z2' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-4 bg-gradient-to-br from-orange-900/30 to-transparent rounded-full hover:bg-orange-700/30 transition-colors glow-effect"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Community