import './contact.css'

export default function Contact() {
    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form action="#" method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
