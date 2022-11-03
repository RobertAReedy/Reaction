import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    //note that setFormState is an async process
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("This email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (e.target.value.trim().length > 0) {
        setErrorMessage("");
      }
      else { setErrorMessage(`${e.target.name} is required.`); }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  };

  console.log(formState);

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange}></input>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="text" name="email" defaultValue={email} onChange={handleChange}></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;