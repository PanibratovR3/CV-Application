import "../styles/form.css";
import "../styles/practicalExperience.css";

function PracticalExperience() {
  return (
    <div className="practical-experience-form">
      <h1>Practical Experience</h1>
      <form>
        <div className="row">
          <label>Company Name:</label>
          <input type="text" />
        </div>
        <div className="row">
          <label>Position Title:</label>
          <input type="text" />
        </div>
        <div className="row">
          <label>Responsibilities:</label>
          <textarea></textarea>
        </div>
        <div className="row">
          <label>From:</label>
          <input type="date" />
        </div>
        <div className="row">
          <label>To:</label>
          <input type="date" />
        </div>
        <div className="row-checkbox">
          <input type="checkbox" id="flag" />
          <label for="flag">I'm still working there</label>
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PracticalExperience;
