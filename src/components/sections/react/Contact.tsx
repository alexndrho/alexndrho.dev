import { FaRegPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styles from "@styles/sections/Contact.module.css";
import { toast } from "react-toastify";

interface IFormVales {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { register, formState, reset, handleSubmit } = useForm<IFormVales>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const formSubmit = async (data: IFormVales) => {
    const onSuccess = (message: string) => toast(message, { type: "success" });
    const onError = (message: string) => toast(message, { type: "error" });

    try {
      const formData: Record<string, string> = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) throw new Error("Error sending message");

      onSuccess("Message sent successfully");
      reset();
    } catch (error) {
      onError("Error sending message");
      console.error(error);
    }
  };

  return (
    <div className="container container--section">
      <h2>Contact</h2>

      <p>
        Get in touch with me directly on{" "}
        <a
          href="mailto: ho.alexander.g@gmail.com"
          className={styles.contact__link}
        >
          ho.alexander.g@gmail.com
        </a>{" "}
        or send me a message
      </p>

      {/* Netlify Form */}
      <form
        data-netlify="true"
        name="contact"
        action="POST"
        className={styles.contact__form}
        data-form-contact
        onSubmit={handleSubmit(formSubmit)}
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          id="name"
          placeholder="Name"
          className={`${styles.contact__name} ${
            styles.contact__input
          } input input--primary ${
            formState.errors.name ? "input--danger" : ""
          }`}
          data-form-input-name
          {...register("name", {
            required: "Please enter your name",
            minLength: {
              value: 5,
              message: "Name must be at least 5 characters long",
            },
            maxLength: {
              value: 30,
              message: "Name must be at most 30 characters long",
            },
          })}
        />
        {formState.errors.name && (
          <span className="text--danger text--sm">
            {formState.errors.name.message}
          </span>
        )}

        <input
          id="email"
          placeholder="Email"
          className={`${styles.contact__input} input input--primary ${
            formState.errors.email ? "input--danger" : ""
          }`}
          data-form-input-email
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {formState.errors.email && (
          <span className="text--danger text--sm">
            {formState.errors.email.message}
          </span>
        )}

        <textarea
          id="message"
          placeholder="Message"
          className={`${styles.contact__textarea} input input--primary ${
            formState.errors.message ? "input--danger" : ""
          }`}
          rows={8}
          data-form-input-message
          {...register("message", {
            required: "Please enter your message",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
          })}
        />
        {formState.errors.message && (
          <span className="text--danger text--sm">
            {formState.errors.message.message}
          </span>
        )}

        <button
          type="submit"
          className={`${styles.contact__submit} btn btn--primary btn--dashed-effect`}
        >
          Send Message
          <FaRegPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default Contact;
