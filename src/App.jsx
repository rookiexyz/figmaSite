import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="bg-site-blue text-secondary">
      <Navbar />
      <Hero />
      {/* <h1 className='text-site-red font-bold text-8xl'>hello qasim</h1> */}
    </div>
  );
}

export default App;
