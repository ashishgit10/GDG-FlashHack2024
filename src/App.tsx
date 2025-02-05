
import Faq from './Faq';

import About from './Components/About';
import Timeline from './Components/Timeline';
import Judging from './Components/Judging';
import Community from './Components/Community';
import Landingpage from './Components/Landingpage';



function App() {
  return (
    <div className=" bg-black text-white">
      {/* Hero Section */}
      <Landingpage />

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
