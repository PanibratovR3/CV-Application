import "../styles/form.css";
import "../styles/generalInformation.css";

function GeneralInformation({
  personalData,
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
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            onChange={handlerNameChange}
            value={personalData.name}
            autoComplete="on"
          />
        </div>
        <div className="row">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="myemail@email.com"
            onChange={handlerEmailChange}
            value={personalData.email}
            autoComplete="on"
          />
        </div>
        <div className="row">
          <label htmlFor="phone">Phone number:</label>
          <input
            id="phone"
            type="tel"
            placeholder="+xx-xxx-xxx-xx-xx"
            onChange={handlerPhoneChange}
            value={personalData.phoneNumber}
            autoComplete="on"
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
