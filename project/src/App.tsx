import React from 'react';
import { 
  Zap, 
  Brain, 
  Clock, 
  Trophy, 
  Star, 
  Github, 
  Disc as Discord, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronDown,
  Rocket,
  Flame
} from 'lucide-react';


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const targetDate = new Date('2025-01-15T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 text-center justify-center relative speedometer">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-orange-500/20">
          <div className="text-4xl font-bold text-white flicker">{value}</div>
          <div className="text-sm text-orange-400 uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
};


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
        <p className="pb-4 text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden electric-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-yellow-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 speed-lines" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Flame className="w-12 h-12 text-orange-500 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold comic-text text-yellow-100">
                FlashHack
              </h1>
            </div>
            <p className="text-2xl md:text-4xl mb-8 text-yellow-100 text-center comic-text">
              Think Fast. Build Faster.
            </p>
            <p className="text-xl mb-12 text-yellow-300">
              A high-speed hackathon where ideas turn into reality in just 3 hours!
            </p>
            <CountdownTimer />
            <div className="flex gap-4 justify-center mt-12">
              <a 
                href="https://flashhack.devfolio.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] glow-effect"
              >
                Register Now
              </a>
              <a 
                href="https://chat.whatsapp.com/FgqWREf3HapCY2rORB3r65" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] glow-effect"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-black/30 relative overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 comic-text text-yellow-100">
                What is FlashHack?
              </h2>
              <p className="text-orange-100 mb-6">
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                alt="AI Technology"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
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
      </section>

      {/* Judging Criteria */}
      <section className="py-20 bg-black/30 relative overflow-hidden">
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
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

      {/* Community Section */}
      <section className="py-20 bg-black/30 relative overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-30" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-12 comic-text text-yellow-100">
            Join Our Community
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
      </section>
    </div>
  );
}

export default App;
