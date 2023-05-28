import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Services from './component/Services';

function App() {
  return (
    <div className="bg-site-blue text-secondary">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
