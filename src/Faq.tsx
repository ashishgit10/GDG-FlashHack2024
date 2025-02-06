import React from 'react'
import {
    ChevronDown,
} from 'lucide-react';
function Faq() {
    const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className="border-b border-orange-800/30">
                <button
                    className="w-full py-4 flex justify-between items-center text-left group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-lg group-hover:text-orange-400 transition-colors flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <span className="text-orange-400">?</span>
                        </div>
                        {question}
                    </span>
                    <ChevronDown className={`transform transition-transform text-orange-400 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                    <p className="pb- font-Doto text-gray-100 font-bold">{answer}</p>
                </div>
            </div>
        );
    };
    return (
        <div className='bg-black'>
            <section className="md:py-20 py-10 relative overflow-hidden">
                <div className="absolute inset-0 electric-grid opacity-30" />
                <div className="container mx-auto px-4 relative">
                    <h2 className="text-4xl font-bold text-center mb-12 comic-text text-yellow-100">
                        FAQ
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <FAQItem
                            question="Who can participate?"
                            answer="Anyone passionate about technology and responsible use of AI can participate. Whether you're a beginner or a pro, all you need is creativity and determination."
                        />
                        <FAQItem
                            question="Do I need AI experience?"
                            answer="No prior AI experience is required, but basic programming knowledge is recommended. We'll provide resources and mentorship during the event."
                        />
                        <FAQItem
                            question="What tools can I use?"
                            answer="You can use AI tools, modify open-source projects, or build from scratch. The choice is yours as long as you can explain your implementation."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Faq