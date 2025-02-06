import React from 'react'
import {
    Brain,
    Clock,
} from 'lucide-react';
import gif from "../assets/hackathon.gif"

const About: React.FC = () => {
    return (
        <div>   <section className="py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 speed-lines opacity-50" />
            <div className="container mx-auto px-4 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 comic-text text-yellow-100">
                            What is FlashHack?
                        </h2>
                        <p className="text-orange-100 mb-6 font-bold font-Doto">
                            FlashHack is a high-intensity, AI-powered hackathon hosted by GDG On Campus RCET, designed for innovators who thrive under pressure. With just 3 hours on the clock, participants will race against time to build functional prototypes using AI tools, open-source modifications, or custom-built solutions from scratch.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-gradient-to-br from-orange-900/30 to-transparent rounded-lg border border-orange-500/20">
                                <Brain className="w-8 h-8 text-orange-500 mb-2" />
                                <h3 className="font-bold mb-2 text-orange-400">Critical Thinking</h3>
                                <p className="text-sm text-orange-200">Test your problem-solving skills</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-red-900/30 to-transparent rounded-lg border border-red-500/20">
                                <Clock className="w-8 h-8 text-red-500 mb-2" />
                                <h3 className="font-bold mb-2 text-red-400">Time Challenge</h3>
                                <p className="text-sm text-red-200">Build under pressure</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            srcSet={gif}
                            alt="AI Technology"
                            className="rounded-lg shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg" />
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default About