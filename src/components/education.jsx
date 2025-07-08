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
          <label htmlFor="school-name">School name: </label>
          <input
            id="school-name"
            type="text"
            value={educationData.schoolName}
            onChange={handlerSchoolNameChange}
            placeholder="Stanford"
          />
        </div>
        <div className="row">
          <label htmlFor="title-of-study">Title of study: </label>
          <input
            id="title-of-study"
            type="text"
            placeholder="Medicine"
            value={educationData.titleOfStudy}
            onChange={handlerTitleOfStudyChange}
          />
        </div>
        <div className="row">
          <label htmlFor="from-education">From: </label>
          <input
            id="from-education"
            type="date"
            value={educationData.from}
            onChange={handlerFromDateChange}
          />
        </div>
        <div className="row">
          <label htmlFor="to-education">To: </label>
          <input
            id="to-education"
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
