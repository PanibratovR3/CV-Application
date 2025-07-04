import "../styles/output.css";

function Output({ personalData, showData }) {
  return (
    showData && (
      <>
        <div className="personal-data">
          <h1 className="header">{personalData.name}</h1>
          <div className="row-output">
            <b className="label">Email:</b> <i> {personalData.email}</i>
          </div>
          <div className="row-output">
            <b className="label">Phone number: </b>
            <i>{personalData.phoneNumber}</i>
          </div>
        </div>
      </>
    )
  );
}

export default Output;
