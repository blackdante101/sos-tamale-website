import "../../stylesheets/ContactInput.scss";
import PropTypes from "prop-types";

export default function ContactInput({
  type,
  placeholder,
  id,
  inputRef,
  nameValue,
}) {
  switch (type) {
    case "textarea":
      return (
        <textarea
          placeholder={placeholder}
          name={id}
          id={nameValue}
          key={id}
          ref={inputRef}
          className="contact__form__input textarea --input"
        ></textarea>
      );
    case "submit":
      return (
        <input
          type={type}
          value={placeholder}
          id={id}
          name={nameValue}
          key={id}
          ref={inputRef}
          className="contact__form__input --cta --input"
        />
      );
    default:
      return (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={nameValue}
          key={id}
          ref={inputRef}
          className="contact__form__input --input"
        />
      );
  }
}

ContactInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
