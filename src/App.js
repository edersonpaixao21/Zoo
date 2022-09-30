import Activities from "./components/Activities/Activities";
import Animals from "./components/Animals/Animals";
import EmailSection from "./components/EmailSection/EmailSection";
import Entrada from "./components/Entrada/Entrada";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Valores from "./components/Valores/Valores";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Entrada />
        <Animals />
        <Activities />
        <Valores />
        <Faq />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
