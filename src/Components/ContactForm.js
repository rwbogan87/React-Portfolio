import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'reactstrap';
import '../Styling/ContactForm.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("mlezoarw");

    if (state.succeeded) {
        return <p>Thanks for reaching out! I'll return your message as soon as possible.</p>;
    }

    return (
        <form onSubmit={handleSubmit} id="emailForm">
            <label htmlFor="email">
                <p>Your Email Address:</p>
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br />
            <p>
                Message:
            </p>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button type="submit" disabled={state.submitting}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm