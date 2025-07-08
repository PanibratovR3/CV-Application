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
          <label htmlFor="school-name">School name: </label>
          <input
            id="school-name"
            type="text"
            value={educationFormData.schoolName}
            onChange={handlerSchoolNameChange}
          />
        </div>
        <div className="row">
          <label htmlFor="title-of-study">Title of study: </label>
          <input
            id="title-of-study"
            type="text"
            value={educationFormData.titleOfStudy}
            onChange={handlerTitleOfStudyChange}
          />
        </div>
        <div className="row">
          <label htmlFor="from-education">From: </label>
          <input
            id="from-education"
            type="date"
            value={educationFormData.from}
            onChange={handlerFromDateChange}
          />
        </div>
        <div className="row">
          <label htmlFor="to-education">To: </label>
          <input
            id="to-education"
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
