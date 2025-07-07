import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/generalInformation.jsx";
import Output from "./components/output.jsx";
import Education from "./components/education.jsx";
import UpdateEducation from "./components/updateEducation.jsx";
import PracticalExperience from "./components/practicalExperience.jsx";

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

  const [selectedID, setSelectedID] = useState(null);
  const [updateEducationFlag, setUpdateEducationFlag] = useState(false);

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
  const handleEducationUpdate = (id) => {
    setSelectedID(id);
    const educationDataArrayCopy = [...educationDataArray];
    const dataFromId = educationDataArrayCopy.find(
      (educationItem) => educationItem.id === id
    );
    setEducationFormData({
      schoolName: dataFromId.schoolName,
      titleOfStudy: dataFromId.titleOfStudy,
      from: dataFromId.from,
      to: dataFromId.to,
    });
    setUpdateEducationFlag(!updateEducationFlag);
  };
  const handleEducationUpdateSubmit = (event) => {
    event.preventDefault();
    const educationDataCopy = [...educationDataArray];
    const educationalDataToUpdate = educationDataCopy.find(
      (educationDataItem) => educationDataItem.id === selectedID
    );
    educationalDataToUpdate.schoolName = educationFormData.schoolName;
    educationalDataToUpdate.titleOfStudy = educationFormData.titleOfStudy;
    educationalDataToUpdate.from = educationFormData.from;
    educationalDataToUpdate.to = educationFormData.to;
    setEducationDataArray([...educationDataCopy]);
    setEducationFormData({
      schoolName: "",
      titleOfStudy: "",
      from: "",
      to: "",
    });
    setUpdateEducationFlag(!updateEducationFlag);
  };
  if (updateEducationFlag) {
    return (
      <div>
        <UpdateEducation
          educationFormData={educationFormData}
          handlerSchoolNameChange={handleSchoolNameChange}
          handlerTitleOfStudyChange={handleTitleOfStudyChange}
          handlerFromDateChange={handleFromDateChange}
          handlerToDateChange={handleToDateChange}
          handlerEducationUpdateSubmit={handleEducationUpdateSubmit}
        />
      </div>
    );
  } else {
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
          <PracticalExperience />
        </div>
        <Output
          personalData={personalData}
          educationArray={educationDataArray}
          showData={showCVFlag}
          handlerEducationDelete={handleEducationDelete}
          handlerEducationUpdate={handleEducationUpdate}
        />
      </div>
    );
  }
}

export default App;
