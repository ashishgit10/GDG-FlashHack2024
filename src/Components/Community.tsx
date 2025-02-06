import React from 'react'

import {
    Disc as Discord,
    Twitter,
    Linkedin,
    Instagram,

} from 'lucide-react';
import FooterBg from '../../assets/FooterBg.svg'
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
                                { icon: <Discord className="w-6 h-6" />, label: 'Discord' },
                                { icon: <Twitter className="w-6 h-6" />, label: 'Twitter' },
                                { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
                                { icon: <Instagram className="w-6 h-6" />, label: 'Instagram' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="p-4 bg-gradient-to-br from-orange-900/30 to-transparent rounded-full hover:bg-orange-700/30 transition-colors glow-effect"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            href="https://chat.whatsapp.com/FgqWREf3HapCY2rORB3r65"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] glow-effect"
                        >
                            Join Our WhatsApp Community
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Community