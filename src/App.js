import "./App.css";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import DLP from "./pages/DLP";
import PPT from "./pages/PPT";
import Reflection from "./pages/Reflection";
import Exam from "./pages/Exam";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <hr className="m-4"/>
        <h1 style={{ textWrap: "nowrap", padding: "10px", paddingBottom: "0px", color: "gray" }}>- Files </h1>
        <div className="files">
          <DLP />
          <PPT />
          <Exam />
        </div>
        <h1 style={{ textWrap: "nowrap", padding: "10px", paddingBottom: "0px", color: "gray" }}>- Reflections </h1>
        <Reflection />
        <h1 style={{ textWrap: "nowrap", padding: "10px", paddingBottom: "0px", color: "gray" }}>- Documentation </h1>
        <Documentation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
