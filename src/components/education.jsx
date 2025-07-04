import "../styles/form.css";

function Education() {
  return (
    <div>
      <h1>Education</h1>
      <form>
        <div className="row">
          <label>School name: </label>
          <input type="text" />
        </div>
        <div className="row">
          <label>Title of study: </label>
          <input type="text" />
        </div>
        <div className="row">
          <label>From: </label>
          <input type="date" />
        </div>
        <div className="row">
          <label>To: </label>
          <input type="date" />
        </div>
      </form>
    </div>
  );
}

export default Education;
