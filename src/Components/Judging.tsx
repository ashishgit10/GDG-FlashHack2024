import React from 'react'
import {
    Brain,
    Star,
    Github

} from 'lucide-react';
const Judging: React.FC = () => {
    return (
        <div><section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 speed-lines opacity-30" />
            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-bold text-center mb-12 comic-text text-yellow-100">
                    Judging Criteria
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'Innovation',
                            description: 'Uniqueness and creativity of the solution',
                            icon: <Star className="w-6 h-6 text-yellow-400" />
                        },
                        {
                            title: 'Technical Execution',
                            description: 'Code quality and implementation',
                            icon: <Github className="w-6 h-6 text-orange-400" />
                        },
                        {
                            title: 'AI Integration',
                            description: 'Effective use of AI technologies',
                            icon: <Brain className="w-6 h-6 text-red-400" />
                        }
                    ].map((criterion, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gradient-to-br from-orange-900/30 to-transparent rounded-lg border border-orange-500/20 hover:border-orange-400 transition-colors glow-effect"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-orange-500/20 rounded-full">
                                    {criterion.icon}
                                </div>
                                <h3 className="text-xl font-bold text-orange-400">{criterion.title}</h3>
                            </div>
                            <p className="text-orange-200">{criterion.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section></div>
    )
}

export default Judging