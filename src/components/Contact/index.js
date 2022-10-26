import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: ""});
  const { name, email, message } = formState;

  function handleChange(e) {
    //note that setFormState is an async process
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;