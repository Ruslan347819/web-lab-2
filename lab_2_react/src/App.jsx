import Header from './components/Header';
import Skills from './components/Skills';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen font-sans py-8">
      <div className="max-w-5xl mx-auto p-4 md:p-8">

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">

          <div className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-slate-200">
             <Header />
             <Skills />
          </div>

          <div className="w-full md:w-2/3 p-8">
            <Objective />
            <Experience />
            
            <div className="my-8 border-t border-slate-200"></div>
            
            <Education />
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;