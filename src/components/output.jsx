import "../styles/output.css";

function Output({
  personalData,
  educationArray,
  practicalExperienceArray,
  showData,
  handlerEducationDelete,
  handlerEducationUpdate,
}) {
  return (
    showData && (
      <div>
        <div className="personal-data">
          <h1>{personalData.name}</h1>
          <div className="row-output">
            <b className="label">Email:</b> <i> {personalData.email}</i>
          </div>
          <div className="row-output">
            <b className="label">Phone number: </b>
            <i>{personalData.phoneNumber}</i>
          </div>
        </div>
        {educationArray.length > 0 && (
          <div className="education">
            <h1>Education</h1>
            <ul>
              {educationArray.map((educationItem) => {
                return (
                  <li key={educationItem.id}>
                    <div className="education-row">
                      <div className="education-text">
                        <b>{educationItem.schoolName}</b>,{" "}
                        <i>{educationItem.titleOfStudy}</i>,{" "}
                        {educationItem.from.slice(
                          0,
                          educationItem.from.indexOf("-")
                        )}{" "}
                        -{" "}
                        {educationItem.to.slice(
                          0,
                          educationItem.to.indexOf("-")
                        )}
                      </div>
                      <div className="control">
                        <button
                          className="delete"
                          onClick={() =>
                            handlerEducationDelete(educationItem.id)
                          }
                        >
                          Delete
                        </button>
                        <button
                          className="update"
                          onClick={() =>
                            handlerEducationUpdate(educationItem.id)
                          }
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {practicalExperienceArray.length > 0 && (
          <div className="practical-experience">
            <h1>Practical Experience</h1>
            <ul>
              {practicalExperienceArray.map((practicalExperienceItem) => {
                return (
                  <li key={practicalExperienceItem.id}>
                    <div className="practical-experience-row">
                      <div className="practical-experience-text">
                        <b>{practicalExperienceItem.companyName}</b>,
                        <i>{practicalExperienceItem.positionTitle}</i>
                        <p>{practicalExperienceItem.responsibilities}</p>
                        <i>
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
                        </i>
                      </div>
                      <div className="control">
                        <button className="delete">Delete</button>
                        <button className="update">Update</button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    )
  );
}

export default Output;
