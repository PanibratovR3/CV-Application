function UpdateEducation({
  educationFormData,
  handlerSchoolNameChange,
  handlerTitleOfStudyChange,
  handlerFromDateChange,
  handlerToDateChange,
  handlerEducationUpdateSubmit,
}) {
  return (
    <div>
      <h1>Update Education Info</h1>
      <form onSubmit={handlerEducationUpdateSubmit}>
        <div className="row">
          <label>School name: </label>
          <input
            type="text"
            value={educationFormData.schoolName}
            onChange={handlerSchoolNameChange}
          />
        </div>
        <div className="row">
          <label>Title of study: </label>
          <input
            type="text"
            value={educationFormData.titleOfStudy}
            onChange={handlerTitleOfStudyChange}
          />
        </div>
        <div className="row">
          <label>From: </label>
          <input
            type="date"
            value={educationFormData.from}
            onChange={handlerFromDateChange}
          />
        </div>
        <div className="row">
          <label>To: </label>
          <input
            type="date"
            value={educationFormData.to}
            onChange={handlerToDateChange}
          />
        </div>
        <div className="row">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateEducation;
