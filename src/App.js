import "./App.scss";
import Header from "./Comps/Header";
import Biografi from "./Comps/Body/Biografi";
import Pendidikan from "./Comps/Body/Pendidikan";
import Kemampuan from "./Comps/Body/Kemampuan";
import Hobi from "./Comps/Body/Hobi";
import Hubungi from "./Comps/Body/Hubungi";
import Footer from "./Comps/Footer";

function App() {
  return (
    <div className="container">
      <Header name="Ilham Novriadi" as="Mobile Developer"/>
      <Biografi/>
      <Pendidikan/>
      <Kemampuan />
      <Hobi />
      <Hubungi />
      <Footer />
    </div>
  );
}

export default App;
