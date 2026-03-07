import Header from './components/Header';
import Objective from './components/Objective';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Objective />
        <Skills />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;