import bgImage from "../assets/BgTx.svg";
import FlickerText from './FlickerText';
import Faq from './Faq';
import CounterTimer from './CountdownTimer';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Judging from './Components/Judging';
import Community from './Components/Community';



function App() {
  return (
    <div className=" bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden electric-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-yellow-900/20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="absolute inset-0 speed-lines" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mt-20">
              <div className="border py-1 inline-block px-5 md:px-8 rounded-xl">
                <div className="font-Smooch text-xl md:text-2xl">GDG - RCET</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div>
                <FlickerText />
              </div>
            </div>
            <p className="text-2xl md:text-4xl md:mb-8 text-yellow-100 text-center comic-text">
              Think Fast. Build Faster.
            </p>
            <p className="md:text-xl md:mb-12 text-yellow-300">
              A high-speed hackathon where ideas turn into reality in just 3 hours!
            </p>
            <CounterTimer />
            <div className="flex pt-8 gap-4 flex-col md:flex-row justify-center items-center pb-12 md:mt-12">
              <a
                href="https://flashhack.devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="md:px-8 md:py-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-md md:text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] glow-effect"
              >
                Register Now
              </a>
              <a
                href="https://chat.whatsapp.com/FgqWREf3HapCY2rORB3r65"
                target="_blank"
                rel="noopener noreferrer"
                className="md:px-8 md:py-4 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-md md:text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] glow-effect"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section>
        <About />
      </section>

      {/* Timeline Section */}

      <div>
        <Timeline />
      </div>

      {/* Judging Criteria */}
      <Judging />

      {/* FAQ Section */}

      <Faq />

      {/* Community Section */}
      <Community />

    </div>
  );
}

export default App;