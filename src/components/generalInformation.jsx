import "../styles/form.css";
import "../styles/generalInformation.css";

function GeneralInformation({
  handlerNameChange,
  handlerEmailChange,
  handlerPhoneChange,
  handlerPersonalSubmit,
}) {
  return (
    <div className="general-information">
      <h1>General Information</h1>
      <form onSubmit={handlerPersonalSubmit}>
        <div className="row">
          <label>Name:</label>
          <input
            type="text"
            placeholder="John Doe"
            onChange={handlerNameChange}
          />
        </div>
        <div className="row">
          <label>Email:</label>
          <input
            type="email"
            placeholder="myemail@email.com"
            onChange={handlerEmailChange}
          />
        </div>
        <div className="row">
          <label>Phone number:</label>
          <input
            type="tel"
            placeholder="+xx-xxx-xxx-xx-xx"
            onChange={handlerPhoneChange}
          />
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInformation;
