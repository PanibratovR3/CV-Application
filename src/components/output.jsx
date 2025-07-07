import "../styles/output.css";

function Output({
  personalData,
  educationArray,
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
        <div className="education">
          <h1>Education</h1>
          {educationArray.length > 0 && (
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
          )}
        </div>
      </div>
    )
  );
}

export default Output;
