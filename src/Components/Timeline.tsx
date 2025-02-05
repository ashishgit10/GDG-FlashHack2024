import React from 'react'

import {
    Brain,
    Rocket,
} from 'lucide-react';
const Timeline: React.FC = () => {
    return (
        <div> <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 electric-grid opacity-30" />
            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl font-bold text-center mb-12 comic-text text-yellow-100">
                    Event Timeline
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gradient-to-br from-orange-900/30 to-transparent rounded-lg border border-orange-500/20 hover:border-orange-400 transition-colors glow-effect">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-orange-500/20 rounded-full">
                                    <Brain className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold text-orange-400">Phase 1: Qualifier</h3>
                            </div>
                            <p className="text-orange-200">
                                Critical thinking assessment with real-world problem-solving challenges.
                            </p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-red-900/30 to-transparent rounded-lg border border-red-500/20 hover:border-red-400 transition-colors glow-effect">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-red-500/20 rounded-full">
                                    <Rocket className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold text-red-400">Phase 2: Final Sprint</h3>
                            </div>
                            <p className="text-red-200">
                                3-hour build marathon with live presentation and judging.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Timeline