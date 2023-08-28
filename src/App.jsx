import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Characters from "./components/Characters";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* <header>
        <Nav />
      </header> */}
      <main>
        <Banner />
        <Characters />
      </main>
      <Footer />
    </>
  );
}
