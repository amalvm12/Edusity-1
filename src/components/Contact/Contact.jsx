import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locoation_icon from '../../assets/location-icon.png'


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key","dfd861df-6ec3-4528-a13d-ae3bb36cb1de");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset()
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Feel free to reach out through contact form or find our contact information below.
                Your feedback, question, and suggestions are important to us as we strive to provide exceptional
                service to our university community
            </p>
            <ul>
                <li> <img src={email_icon} alt="" /> edusity@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +1 123-456-7890</li>
                <li> <img src={locoation_icon} alt="" /> 20 Cooper Square, New York, NY 10003, USA</li>
            </ul>
        </div> 
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label> Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label >Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number 'required />
                <label > Write your message</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>

                <button type='sumbit ' className='btn dark-btn'> Submit now</button>

            </form>
            <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact