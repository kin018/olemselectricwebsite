import React, { useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import {
  ContactMainContainer,
  ContactWrapper,
  ContactMainTitle,
  ContactHubContainer,
  ContactHubMediaContainer,
  ContactHubFormContainer,
  ContactHubMediaHeader,
  ContactHubMediaBlob,
  ContactHubFormInput,
  ContactHubFormMessageInput,
  ContactHubSendButton,
  ContactHubMediaVerticalHeader,
  ContactHubAltSendButton,
  ContactHubAltSendButtonIcon,
  ContactHubAltSendButtonText,
} from '../styledComponents/StyledComponents';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); //prevent refresh

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        toast.success('Success! Message sent');
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Oops! Message failed');
      });
  };

  return (
    <ContactMainContainer id="contact">
      <ContactWrapper>
        <ContactMainTitle>Contact</ContactMainTitle>
        <ContactHubContainer>
          <ContactHubMediaContainer>
            <ContactHubMediaBlob>
              <ContactHubMediaHeader>
                Temp <br />
                Jawn!
              </ContactHubMediaHeader>
            </ContactHubMediaBlob>
          </ContactHubMediaContainer>
          <ContactHubFormContainer>
            <ContactHubMediaVerticalHeader>
              Temp Jawn!
            </ContactHubMediaVerticalHeader>
            <form ref={form} onSubmit={sendEmail}>
              <ContactHubFormInput
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <ContactHubFormInput
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />

              <ContactHubFormInput
                type="tel"
                name="user_phone"
                placeholder="Phone"
                required
              />

              <ContactHubFormInput
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <ContactHubFormMessageInput
                name="message"
                rows="6"
                placeholder="MESSAGE"
                required
              />
              <ContactHubSendButton type="submit" value="SEND">
                <ContactHubAltSendButton>
                  <ContactHubAltSendButtonIcon>
                    <FaPaperPlane />
                  </ContactHubAltSendButtonIcon>
                  <ContactHubAltSendButtonText>
                    Send
                  </ContactHubAltSendButtonText>
                </ContactHubAltSendButton>
              </ContactHubSendButton>
            </form>
          </ContactHubFormContainer>
        </ContactHubContainer>
      </ContactWrapper>
    </ContactMainContainer>
  );
}

export default Contact;
