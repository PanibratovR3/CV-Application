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
          <label>Company Name:</label>
          <input
            type="text"
            value={practicalExperienceFormData.companyName}
            onChange={handlerCompanyNameChange}
          />
        </div>
        <div className="row">
          <label>Position Title:</label>
          <input
            type="text"
            value={practicalExperienceFormData.positionTitle}
            onChange={handlerPositionTitleChange}
          />
        </div>
        <div className="row">
          <label>Responsibilities:</label>
          <textarea
            value={practicalExperienceFormData.responsibilities}
            onChange={handlerResponsibilitiesChange}
          />
        </div>
        <div className="row">
          <label>From:</label>
          <input
            type="date"
            value={practicalExperienceFormData.from}
            onChange={handlerFromDatePracticalChange}
          />
        </div>
        <div className="row">
          <label>To:</label>
          <input
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
