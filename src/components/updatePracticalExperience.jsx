function UpdatePracticalExperience({
  practicalExperienceFormData,
  handlerCompanyNameChange,
  handlerPositionTitleChange,
  handlerResponsibilitiesChange,
  handlerFromDatePracticalChange,
  handlerToDatePracticalChange,
  handlerWorkingFlagChange,
  handlerPracticalExperienceUpdateSubmit,
}) {
  return (
    <div>
      <h1>Update Practical Experience Info</h1>
      <form onSubmit={handlerPracticalExperienceUpdateSubmit}>
        <div className="row">
          <label htmlFor="company-name">Company Name:</label>
          <input
            id="company-name"
            type="text"
            value={practicalExperienceFormData.companyName}
            onChange={handlerCompanyNameChange}
          />
        </div>
        <div className="row">
          <label htmlFor="position-title">Position Title:</label>
          <input
            id="position-title"
            type="text"
            value={practicalExperienceFormData.positionTitle}
            onChange={handlerPositionTitleChange}
          />
        </div>
        <div className="row">
          <label htmlFor="responsibilities">Responsibilities:</label>
          <textarea
            id="responsibilities"
            value={practicalExperienceFormData.responsibilities}
            onChange={handlerResponsibilitiesChange}
          />
        </div>
        <div className="row">
          <label htmlFor="from-practical-experience">From:</label>
          <input
            id="from-practical-experience"
            type="date"
            value={practicalExperienceFormData.from}
            onChange={handlerFromDatePracticalChange}
          />
        </div>
        <div className="row">
          <label htmlFor="to-practical-experience">To:</label>
          <input
            id="to-practical-experience"
            type="date"
            value={practicalExperienceFormData.to}
            onChange={handlerToDatePracticalChange}
          />
        </div>
        <div className="row-checkbox">
          <input
            type="checkbox"
            id="flag"
            checked={practicalExperienceFormData.workingThereFlag}
            onChange={handlerWorkingFlagChange}
          />
          <label htmlFor="flag">I'm still working there</label>
        </div>
        <div className="row">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePracticalExperience;
