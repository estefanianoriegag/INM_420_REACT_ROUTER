import Designer from '../../assets/images/designer.jpg';
import '../../assets/css/Contact.css';

export default function Contact() {
    return (
        <div>
            <div className="contact-container">
                <div>
                    {/* Contact Me introduction */}
                    <h2>Contact Me</h2>
                    <p className="contact-intro">
                        Feel free to reach out to me through the contact form below.
                        Whether you have a project in mind, a collaboration opportunity,
                        or just want to say hello, I'd love to hear from you. Your message
                        is important to me, and I'll get back to you as soon as possible.
                        Let's connect and create something amazing together!
                    </p>
                    {/* Contact Form */}
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required />
                        </div>
                        <div className="form-group">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
                {/* Side Image of Designer */}
                <div className="image-container">
                    <img src={Designer} alt="Designer looking at reference designs" />
                    <div className="shape10"></div>
                </div>
            </div>
        </div>
    );
}