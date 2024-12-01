import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Location } from "./components/Location";

function App() {
  return (
    <>
      <Header />
      <main id="content">
        <Home />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
