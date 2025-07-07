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
  const [educationDataArray, setEducationDataArray] = useState([]);
  const [educationFormData, setEducationFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    from: "",
    to: "",
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
  const handleSchoolNameChange = (event) => {
    setEducationFormData({
      ...educationFormData,
      schoolName: event.target.value,
    });
  };
  const handleTitleOfStudyChange = (event) => {
    setEducationFormData({
      ...educationFormData,
      titleOfStudy: event.target.value,
    });
  };
  const handleFromDateChange = (event) => {
    setEducationFormData({
      ...educationFormData,
      from: event.target.value,
    });
  };
  const handleToDateChange = (event) => {
    setEducationFormData({
      ...educationFormData,
      to: event.target.value,
    });
  };
  const handleEducationSubmit = (event) => {
    event.preventDefault();
    setEducationDataArray([
      ...educationDataArray,
      {
        id: crypto.randomUUID(),
        ...educationFormData,
      },
    ]);
    setEducationFormData({
      schoolName: "",
      titleOfStudy: "",
      from: "",
      to: "",
    });
  };
  const handleEducationDelete = (id) => {
    setEducationDataArray([
      ...educationDataArray.filter((educationItem) => educationItem.id !== id),
    ]);
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
        <Education
          educationData={educationFormData}
          handlerSchoolNameChange={handleSchoolNameChange}
          handlerTitleOfStudyChange={handleTitleOfStudyChange}
          handlerFromDateChange={handleFromDateChange}
          handlerToDateChange={handleToDateChange}
          handlerEducationSubmit={handleEducationSubmit}
        />
      </div>
      <Output
        personalData={personalData}
        educationArray={educationDataArray}
        showData={showCVFlag}
        handlerEducationDelete={handleEducationDelete}
      />
    </div>
  );
}

export default App;
