import { useRef, useState } from "react";
import "../../stylesheets/ContactForm.scss";
import ContactInput from "./ContactInput";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Input Refs
  const fullNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  // Form Ref
  const formRef = useRef();

  // Custom messages
  const showMessageForSomeTime = (errorMessage, successMessage, duration) => {
    setErrorMessage(errorMessage);
    setSuccessMessage(successMessage);

    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateId = "";
    const serviceId = "";
    const publicKey = "";

    if (
      fullNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      subjectRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      showMessageForSomeTime("Cannot submit an empty form", "", 2000);
      setLoading(false);
      return;
    }

    if (fullNameRef.current.value === "" || emailRef.current.value === "") {
    }

    try {
      setLoading(true);
      await emailjs.sendForm(templateId, serviceId, formRef.current, publicKey);
      showMessageForSomeTime("", "Successfully sent message. Thank You!", 2000);
      setLoading(false);
      fullNameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      showMessageForSomeTime(error, "", 2000);
    }
  };

  return (
    <form className="contact__form" onClick={handleSubmit} ref={formRef}>
      <h1 className="--header" style={{ color: "black" }}>
        Contact Us
      </h1>
      <ContactInput
        type={"text"}
        placeholder={"Type your full name here"}
        id={"name"}
        name="from_name"
      />
      <ContactInput
        type={"email"}
        placeholder={"Type your email here"}
        id={"email"}
        name="from_email"
      />
      <ContactInput
        type={"text"}
        placeholder={"Type your subject here"}
        id={"subject"}
        name="from_subject"
      />
      <ContactInput
        type={"textarea"}
        placeholder={"Type your message here..."}
        id={"message"}
        name="message"
      />
      <ContactInput
        type={"submit"}
        placeholder={"Submit"}
        id={"button"}
        disabled={loading}
      />
    </form>
  );
}
