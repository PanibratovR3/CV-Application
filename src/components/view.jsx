import "../styles/form.css";
import "../styles/view.css";
function View({
  personalData,
  educationData,
  practicalExperienceData,
  handleViewMode,
}) {
  return (
    <div>
      <h1>CV Application</h1>
      <div className="mode-control">
        <button className="mode" onClick={handleViewMode}>
          Edit Mode
        </button>
      </div>
      <h1>Your CV</h1>
      <div className="header">{personalData.name}</div>
      <p>
        <b>Email:</b> <i>{personalData.email}</i>
      </p>
      <p>
        <b>Phone number:</b> <i>{personalData.phoneNumber}</i>
      </p>
      <h2>Education</h2>
      <ul>
        {educationData.map((educationDataItem) => {
          return (
            <li key={educationDataItem.id}>
              <b>{educationDataItem.schoolName}</b> (
              {educationDataItem.titleOfStudy})
              <p>
                {educationDataItem.from.slice(
                  0,
                  educationDataItem.from.indexOf("-")
                )}
                -
                {educationDataItem.to.slice(
                  0,
                  educationDataItem.to.indexOf("-")
                )}
              </p>
            </li>
          );
        })}
      </ul>
      <h2>Practical Experience</h2>
      <ul>
        {practicalExperienceData.map((practicalExperienceItem) => {
          return (
            <li key={practicalExperienceItem.id}>
              <p>
                <b>{practicalExperienceItem.positionTitle}</b> at{" "}
                <i>{practicalExperienceItem.companyName}</i>
              </p>
              <p>
                <i>{practicalExperienceItem.responsibilities}</i>
              </p>
              <p>
                {practicalExperienceItem.from.slice(
                  0,
                  practicalExperienceItem.from.indexOf("-")
                )}{" "}
                -{" "}
                {practicalExperienceItem.workingThereFlag
                  ? "present"
                  : practicalExperienceItem.to.slice(
                      0,
                      practicalExperienceItem.to.indexOf("-")
                    )}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default View;
