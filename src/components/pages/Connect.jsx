import { useState } from "react";


export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert(" Well done your message has been sent. I'll be in-contact soon !!"))
      .catch((error) => alert(error));
  }

  return (

    <div className='no-print'>
      <div className='connect'>
        <p> Connect with me:</p>
        <div className="logos">
          <a href="https://twitter.com/jaydeewilson" target="blank"><img align="center" src="twitter.svg" alt="jaydeewilson" /> </a>
          <a href="https://linkedin.com/in/john-desmond-jd-wilson-55a84613" target="blank"><img align="center" src="linked-in-alt.svg" alt="john-desmond-jd-wilson-55a84613" /> </a>
          <a href="https://github.com/Jay-Dee-W" target="blank"><img align="center" src="github.svg" alt="Jay-Dee-W" /> </a>
          <a href="mailto:jaydee.wilson@gmail.com" target="blank"><img align="center" src="Gmail.svg" alt="Jay-Dee-W" /> </a>
          <a href="https://www.upwork.com/freelancers/~01ac5db5f78a86cf12" target="blank"><img align="center" src="upwork.svg" alt='upwork' /> </a>
        </div>
        <div>
          <form netlify name="contact" onSubmit={handleSubmit} className="contact-form">
            <h2>
              Contact Me
            </h2>
            <p>
              Need a simple landing page or full eCommerce website or looking to launch the next web app unicorn?<br />
              Want a FULL STACK Web Developer on your team ?<br />
              Just send me a message below and I'll come to you !<br />
            </p>
            {/* <div> */}
              <label htmlFor="name">
                Name
              </label>
              <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
            {/* </div> */}
            {/* <div> */}
              <label htmlFor="email">
                Email
              </label>
              <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            {/* </div> */}
            {/* <div> */}
              <label htmlFor="message">
                Message
              </label>
              <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)} required/>
            {/* </div> */}
            <button type="send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

  )
}