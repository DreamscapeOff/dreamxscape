import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

export const ContactForm = () => {
  const form = useRef();
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const [cooldownValue, setCooldownValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // Add state for error messages

  // Fetch cooldown status on component mount or when necessary (e.g., after successful email sending)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./check_cooldown.php'); // Fetches data from check_cooldown.php on server
        const cooldownData = response.data;
        setIsCooldownActive(cooldownData.isCooldownActive);
        setCooldownValue(cooldownData.cooldownValue);
      } catch (error) {
        console.error('Error fetching cooldown data:', error);
        setErrorMessage('An error occurred while checking cooldown. Please try again later.');
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch only once on mount

  let SentMail = false;
  const handleSendEmail = async (email) => {
    if (SentMail == false) {
      email.preventDefault();

      // Send email logic (replace with your actual implementation)
      if (isCooldownActive) {
        alert('You are still on cooldown. Please wait before sending another email.');
        return;
      }

      try {
        // Send email using appropriate method (e.g., emailjs integration)
        await emailjs.sendForm(
          'service_tq3slhb', // Your service ID
          'template_7hj7lbg', // Your template ID
          email.target, // Your form object
          {
            publicKey: 'e7x44STPgCEI-SIT9',
            templateParams: { // Optional - add additional template parameters if needed
              "to_email": email.target.user_email.value // Set the recipient email from your form field
            }
          }
        )
        console.log(email.target.user_email.value);
        console.log('Email sent successfully!');
        SentMail = true;
        document.body.getElementsByClassName("result-container")[0].style.opacity = 1;
document.body.getElementsByClassName("result-container")[0].style.display = "block";
document.body.getElementsByClassName("contact-form-container")[0].style.animation = "DisappearStatusContainer 5s ease-out forwards";
document.body.getElementsByClassName("contactus-header")[0].style.animation = "DisappearStatusContainer 5s ease-out forwards";
document.body.getElementsByClassName("contact-form-container")[0].style.animationFillMode = "forwards";
document.body.getElementsByClassName("contactus-header")[0].style.animationFillMode = "forwards";

setTimeout(() => {

  // No need to set display: none here, animation takes care of it

}, 450);

// Rest of your code for showing and hiding the result container

        // Send request to server to set a new cooldown cookie (replace with your logic)
        // This might involve an additional axios request after successful email sending
        // ...
      } catch (error) {
        console.error('Error sending email:', error);
        setErrorMessage('An error occurred while sending the email. Please try again later.');
      }

      email.target.reset()
    }
  };

  // Removed redundant checkCooldown function (already called in handleSendEmail)

  return (
    <form ref={form} onSubmit={handleSendEmail}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="submit-mail" type="submit" value="Send Request" disabled={isCooldownActive} />
    </form>
  );
};
