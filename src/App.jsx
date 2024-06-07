import { Navbar } from "flowbite-react";
import "./App.css";
import ImageComponet from "./components/ImageComponet";
import { NavbarComponent } from "./components/NavbarComponent";
import { FooterComponent } from "./components/FooterComponent";
import { CardComponent } from "./components/CardComponent";

function App() {
  let isMale = true;

  const heading = {
    color: "red",
    fontSize: "64px",
  };
  return (
    <>
    <NavbarComponent />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mx-auto py-2">
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    <CardComponent/>
    </div>
    <FooterComponent/>
      {/* <div style={{ backgroundColor: "red" }}>
        <ImageComponet />
        <ImageComponet />
        <ImageComponet />
      </div> */}
    </>
  );
}

export default App;
