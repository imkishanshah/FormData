import MuiButton from "./Components/button";
import "./App.css";
import MuiTypography from "./Components/muiTypography";
import MuiTextfield from "./Components/textfield";
import MuiSelect from "./Components/muiSelect";
// import MuiRadiobutton from "./Components/muiRadiobutton";
import MuiCheckbox from "./Components/muiCheckbox";
import MuiStepper from "./Components/muiStepper";
import { useState } from "react";
import MuiForm from "./Components/muiForm";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Radiobutton from "./Components/radiobutton";
import Cardcomponent from "./Components/cardcomponent";
import MuiTable from "./Components/muiTable";

import DataTable from "./Components/dataTable";

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
    // <BrowserRouter>
    //   <div className="App">
    <div>
      <Header />
      // {/* <MuiTable /> */}
      // {/* <DataTable /> */}
      <Cardcomponent
        onChange1={handleChangeincrement}
        onChange2={handleChangedecrement}
        value={value}
        component={component}
      />
      <Footer />
    </div>
    // </BrowserRouter>
  );
}

export default App;
