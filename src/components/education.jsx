import "../styles/form.css";
import "../styles/education.css";

function Education({
  educationData,
  handlerSchoolNameChange,
  handlerTitleOfStudyChange,
  handlerFromDateChange,
  handlerToDateChange,
  handlerEducationSubmit,
}) {
  return (
    <div className="education-form">
      <h1>Education</h1>
      <form onSubmit={handlerEducationSubmit}>
        <div className="row">
          <label>School name: </label>
          <input
            type="text"
            value={educationData.schoolName}
            onChange={handlerSchoolNameChange}
          />
        </div>
        <div className="row">
          <label>Title of study: </label>
          <input
            type="text"
            value={educationData.titleOfStudy}
            onChange={handlerTitleOfStudyChange}
          />
        </div>
        <div className="row">
          <label>From: </label>
          <input
            type="date"
            value={educationData.from}
            onChange={handlerFromDateChange}
          />
        </div>
        <div className="row">
          <label>To: </label>
          <input
            type="date"
            value={educationData.to}
            onChange={handlerToDateChange}
          />
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Education;
