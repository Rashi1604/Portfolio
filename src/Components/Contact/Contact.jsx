import React from 'react'
import './Contact.css'
import theme_pattern from '/theme_pattern.svg';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "ed20ecb1-b279-4b44-bbc3-83717a257ea4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully 🎉");
        event.target.reset();
        alert("Your form has been submitted successfully!");
      } else {
        console.error("Error:", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img loading='lazy'  src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently available for new projects and open to collaboration opportunities. Whether you need a seamless frontend experience, a robust backend system, or a full-stack solution, I am here to deliver high-quality, scalable results.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img loading='lazy'  src="./mail_icon.svg" alt="Email Icon" />
              <p>rashimadan@70@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img loading='lazy'  src="./call_icon.svg" alt="Call Icon" />
              <p>+91 83645-33571</p>
            </div>
            <div className="contact-detail">
              <img loading='lazy' src="./location_icon.svg" alt="Location Icon" />
              <p>Patiala, Punjab</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label>Write your message here</label>
          <textarea name="message" placeholder='Enter your message' rows="8" required></textarea>

          <button className="full-rounded">
            <span>Submit</span>
            <div className="border full-rounded" />
          </button>

          {result && <p className="result-message">{result}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
