import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/generalInformation.jsx";
import Output from "./components/output.jsx";
import Education from "./components/education.jsx";
import UpdateEducation from "./components/updateEducation.jsx";
import PracticalExperience from "./components/practicalExperience.jsx";
import UpdatePracticalExperience from "./components/updatePracticalExperience.jsx";
import View from "./components/view.jsx";

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
  const [practicalExperienceDataArray, setPracticalExperienceDataArray] =
    useState([]);
  const [practicalExperienceFormData, setPracticalExperienceFormData] =
    useState({
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      from: "",
      to: "",
      workingThereFlag: false,
    });

  const [selectedEducationID, setSelectedEducationID] = useState(null);
  const [updateEducationFlag, setUpdateEducationFlag] = useState(false);

  const [selectedPracticalExperienceID, setSelectedPracticalExperienceID] =
    useState(null);
  const [updatePracticalExperienceFlag, setUpdatePracticalExperienceFlag] =
    useState(false);

  const [viewModeFlag, setViewModeFlag] = useState(false);

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
    setSelectedEducationID(id);
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
      (educationDataItem) => educationDataItem.id === selectedEducationID
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

  const handleCompanyNameChange = (event) => {
    setPracticalExperienceFormData({
      ...practicalExperienceFormData,
      companyName: event.target.value,
    });
  };

  const handlePositionTitleChange = (event) => {
    setPracticalExperienceFormData({
      ...practicalExperienceFormData,
      positionTitle: event.target.value,
    });
  };

  const handleResponsibilitiesChange = (event) => {
    setPracticalExperienceFormData({
      ...practicalExperienceFormData,
      responsibilities: event.target.value,
    });
  };

  const handleFromDatePracticalChange = (event) => {
    setPracticalExperienceFormData({
      ...practicalExperienceFormData,
      from: event.target.value,
    });
  };

  const handleToDatePracticalChange = (event) => {
    setPracticalExperienceFormData({
      ...practicalExperienceFormData,
      to: event.target.value,
    });
  };

  const handleWorkingFlagChange = (event) => {
    setPracticalExperienceFormData({
      ...practicalExperienceFormData,
      workingThereFlag: event.target.checked,
    });
  };

  const handlePracticalExperienceSubmit = (event) => {
    event.preventDefault();
    setPracticalExperienceDataArray([
      ...practicalExperienceDataArray,
      { id: crypto.randomUUID(), ...practicalExperienceFormData },
    ]);
    setPracticalExperienceFormData({
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      from: "",
      to: "",
      workingThereFlag: false,
    });
  };

  const handlePracticalExperienceDelete = (id) => {
    setPracticalExperienceDataArray([
      ...practicalExperienceDataArray.filter(
        (practicalExperienceItem) => practicalExperienceItem.id !== id
      ),
    ]);
  };

  const handlePracticalExperienceUpdate = (id) => {
    setSelectedPracticalExperienceID(id);
    const practicalExperienceDataArrayCopy = [...practicalExperienceDataArray];
    const dataFromId = practicalExperienceDataArrayCopy.find(
      (practicalExperienceItem) => practicalExperienceItem.id === id
    );
    setPracticalExperienceFormData({
      companyName: dataFromId.companyName,
      positionTitle: dataFromId.positionTitle,
      responsibilities: dataFromId.responsibilities,
      from: dataFromId.from,
      to: dataFromId.to,
      workingThereFlag: dataFromId.workingThereFlag,
    });
    setUpdatePracticalExperienceFlag(!updatePracticalExperienceFlag);
  };

  const handlePracticalExperienceUpdateSubmit = (event) => {
    event.preventDefault();
    const practicalExperienceDataCopy = [...practicalExperienceDataArray];
    const practicalExperienceToUpdate = practicalExperienceDataCopy.find(
      (practicalExperienceItem) =>
        practicalExperienceItem.id === selectedPracticalExperienceID
    );
    practicalExperienceToUpdate.companyName =
      practicalExperienceFormData.companyName;
    practicalExperienceToUpdate.positionTitle =
      practicalExperienceFormData.positionTitle;
    practicalExperienceToUpdate.responsibilities =
      practicalExperienceFormData.responsibilities;
    practicalExperienceToUpdate.from = practicalExperienceFormData.from;
    practicalExperienceToUpdate.to = practicalExperienceFormData.to;
    practicalExperienceToUpdate.workingThereFlag =
      practicalExperienceFormData.workingThereFlag;
    setPracticalExperienceDataArray([...practicalExperienceDataCopy]);
    setPracticalExperienceFormData({
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      from: "",
      to: "",
      workingThereFlag: false,
    });
    setUpdatePracticalExperienceFlag(!updatePracticalExperienceFlag);
  };

  const handleViewMode = () => {
    setViewModeFlag(!viewModeFlag);
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
  } else if (updatePracticalExperienceFlag) {
    return (
      <div>
        <UpdatePracticalExperience
          practicalExperienceFormData={practicalExperienceFormData}
          handlerCompanyNameChange={handleCompanyNameChange}
          handlerPositionTitleChange={handlePositionTitleChange}
          handlerResponsibilitiesChange={handleResponsibilitiesChange}
          handlerFromDatePracticalChange={handleFromDatePracticalChange}
          handlerToDatePracticalChange={handleToDatePracticalChange}
          handlerWorkingFlagChange={handleWorkingFlagChange}
          handlerPracticalExperienceUpdateSubmit={
            handlePracticalExperienceUpdateSubmit
          }
        />
      </div>
    );
  } else if (viewModeFlag) {
    return (
      <div>
        <View
          personalData={personalData}
          educationData={educationDataArray}
          practicalExperienceData={practicalExperienceDataArray}
          handleViewMode={handleViewMode}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>CV Application</h1>
        <div className="mode-control">
          <button className="mode" onClick={handleViewMode}>
            View Mode
          </button>
        </div>
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
            <PracticalExperience
              practicalExperienceData={practicalExperienceFormData}
              handlerCompanyNameChange={handleCompanyNameChange}
              handlerPositionTitleChange={handlePositionTitleChange}
              handlerResponsibilitiesChange={handleResponsibilitiesChange}
              handlerFromDatePracticalChange={handleFromDatePracticalChange}
              handlerToDatePracticalChange={handleToDatePracticalChange}
              handlerWorkingFlagChange={handleWorkingFlagChange}
              handlerPracticalExperienceSubmit={handlePracticalExperienceSubmit}
            />
          </div>
          <Output
            personalData={personalData}
            educationArray={educationDataArray}
            practicalExperienceArray={practicalExperienceDataArray}
            showData={showCVFlag}
            handlerEducationDelete={handleEducationDelete}
            handlerEducationUpdate={handleEducationUpdate}
            handlerPracticalExperienceDelete={handlePracticalExperienceDelete}
            handlerPracticalExperienceUpdate={handlePracticalExperienceUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
