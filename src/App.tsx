import { useState, useEffect } from 'react';
import Faq from './Faq';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Community from './Components/Community';
import Landingpage from './Components/Landingpage';
import Loader from './Components/loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="text-white">

      {isLoading && <Loader />}

      {/* Main content */}
      {!isLoading && (
        <>
          {/* Hero Section */}
          <Landingpage />

          {/* About Section */}
          <section>
            <About />
          </section>

          {/* Timeline Section */}
          <Timeline />

          {/* FAQ Section */}
          <Faq />

          {/* Community Section */}
          <Community />
        </>
      )}
    </div>
  );
}

export default App;
