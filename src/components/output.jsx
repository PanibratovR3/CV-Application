import "../styles/output.css";

function Output({ personalData, educationArray, showData }) {
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
                    <b>{educationItem.schoolName}</b>,{" "}
                    <i>{educationItem.titleOfStudy}</i>, {educationItem.from} -{" "}
                    {educationItem.to}
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
