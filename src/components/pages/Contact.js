import React from 'react';
import { useState } from 'react';
import '../pages/Pages.css';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
      const { name, value } = event.target;

      return name === 'name' ? setName(value) : setEmail(value);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      setName('');
      setEmail('');
    };

    return (

    <React.Fragment>

    <div>
      <h1>Contact Me</h1>
        <p>
          Have any questions? Please do not hesitate to contact me here or reach me in the links below:
        </p>
    </div>

    <container class="d-flex align-items-center flex-column">

        <button type="button" class="btn btn-info btn-block"><a href="https://www.linkedin.com/in/brian-henry-garcia/" target="_blank">LinkedIn</a></button>
            <br></br>
        <button type="button" class="btn btn-info btn-block"><a href="https://github.com/itsbrianfire" target="_blank">GitHub</a></button>

    </container>

    <form class="text-center border border-light p-5" action="#!">

      <input type="text" value={name} id="defaultContactFormName" class="form-control mb-4" onChange={handleInputChange} placeholder="Name"/>

      <input type="email" value={email} id="defaultContactFormEmail" class="form-control mb-4" onChange={handleInputChange} placeholder="E-mail"/>

      <label>Subject</label>
        <select class="browser-default custom-select mb-4">
            <option value="" disabled>Choose option</option>
            <option value="1" selected>Feedback</option>
            <option value="2">Report a bug</option>
        </select>

      <div class="form-group">
          <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" onChange={handleFormSubmit} placeholder="Message"></textarea>
      </div>

      <button class="btn btn-info btn-block" type="submit">Send</button>

    </form>
  
  </React.Fragment>
  
  );
}