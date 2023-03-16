import { useState } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Cardcomponent from "./Components/cardcomponent";

function App() {
  const [value, setValue] = useState(0);
  const [component, setComponent] = useState(0);

  const handleChangeincrement = () => {
    setValue(value + 1);
    setComponent(value + 1);
  };
  const handleChangedecrement = () => {
    setValue(value - 1);
    setComponent(value - 1);
  };

  return (
    <div>
      <Header />

      <Cardcomponent
        onChange1={handleChangeincrement}
        onChange2={handleChangedecrement}
        value={value}
        component={component}
      />
      <Footer />
    </div>
  );
}

export default App;
