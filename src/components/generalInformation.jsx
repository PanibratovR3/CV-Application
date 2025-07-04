import "../styles/form.css";

function GeneralInformation() {
  return (
    <div>
      <h1>General Information</h1>
      <form>
        <div className="row">
          <label>Name:</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="row">
          <label>Email:</label>
          <input type="email" placeholder="myemail@email.com" />
        </div>
        <div className="row">
          <label>Phone number:</label>
          <input type="phone" placeholder="+xx-xxx-xxx-xx-xx" />
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInformation;
