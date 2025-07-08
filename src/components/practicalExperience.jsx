import "../styles/form.css";
import "../styles/practicalExperience.css";

function PracticalExperience({
  practicalExperienceData,
  handlerCompanyNameChange,
  handlerPositionTitleChange,
  handlerResponsibilitiesChange,
  handlerFromDatePracticalChange,
  handlerToDatePracticalChange,
  handlerWorkingFlagChange,
  handlerPracticalExperienceSubmit,
}) {
  return (
    <div className="practical-experience-form">
      <h1>Practical Experience</h1>
      <form onSubmit={handlerPracticalExperienceSubmit}>
        <div className="row">
          <label htmlFor="company-name">Company Name:</label>
          <input
            id="company-name"
            type="text"
            placeholder="Abstergo"
            autoComplete="on"
            value={practicalExperienceData.companyName}
            onChange={handlerCompanyNameChange}
          />
        </div>
        <div className="row">
          <label htmlFor="position-title">Position Title:</label>
          <input
            id="position-title"
            type="text"
            placeholder="Scientist"
            autoComplete="on"
            value={practicalExperienceData.positionTitle}
            onChange={handlerPositionTitleChange}
          />
        </div>
        <div className="row">
          <label htmlFor="responsibilities">Responsibilities:</label>
          <textarea
            id="responsibilities"
            value={practicalExperienceData.responsibilities}
            onChange={handlerResponsibilitiesChange}
            placeholder="Been there, done that."
            autoComplete="on"
          />
        </div>
        <div className="row">
          <label htmlFor="from-practical-experience">From:</label>
          <input
            id="from-practical-experience"
            type="date"
            value={practicalExperienceData.from}
            onChange={handlerFromDatePracticalChange}
          />
        </div>
        <div className="row">
          <label htmlFor="to-practical-experience">To:</label>
          <input
            id="to-practical-experience"
            type="date"
            value={practicalExperienceData.to}
            onChange={handlerToDatePracticalChange}
          />
        </div>
        <div className="row-checkbox">
          <input
            type="checkbox"
            id="flag"
            checked={practicalExperienceData.workingThereFlag}
            onChange={handlerWorkingFlagChange}
          />
          <label htmlFor="flag">I'm still working there</label>
        </div>
        <div className="row">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PracticalExperience;
