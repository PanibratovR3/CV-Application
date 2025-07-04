import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/generalInformation.jsx";
import Output from "./components/output.jsx";
import Education from "./components/education.jsx";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [showCVFlag, setShowCVFlag] = useState(false);
  const handleNameChange = (event) => {
    setPersonalData({
      ...personalData,
      name: event.target.value,
    });
  };
  const handleEmailChange = (event) => {
    setPersonalData({
      ...personalData,
      email: event.target.value,
    });
  };
  const handlePhoneChange = (event) => {
    setPersonalData({
      ...personalData,
      phoneNumber: event.target.value,
    });
  };
  const handlePersonalDataSubmit = (event) => {
    event.preventDefault();
    setShowCVFlag(true);
  };
  return (
    <div className="field">
      <div>
        <GeneralInformation
          handlerNameChange={handleNameChange}
          handlerEmailChange={handleEmailChange}
          handlerPhoneChange={handlePhoneChange}
          handlerPersonalSubmit={handlePersonalDataSubmit}
        />
        <Education />
      </div>
      <Output personalData={personalData} showData={showCVFlag} />
    </div>
  );
}

export default App;
