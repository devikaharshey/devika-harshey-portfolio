const Contact = () => {
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 h-full w-full object-fit"/>

                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-lg text-white-600 mt-3">
                        I&apos;m always open to discussing new projects, creative ideas or opportunities to collaborate.
                        Feel free to share any of your thoughts with me.
                    </p>

                    <div className="flex flex-row gap-3 mt-4">
                        <div className="social-icon" onClick={() => window.open("https://github.com/devikaharshey", "_blank")} title="Github Profile">
                            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                        </div>
                        <div className="social-icon" onClick={() => window.open("https://www.linkedin.com/in/devika-harshey-b4b961290/", "_blank")} title="LinkedIn Profile">
                            <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2"/>
                        </div>
                        <div className="social-icon" onClick={() => window.open("https://www.cloudskillsboost.google/public_profiles/a6eb5922-8298-4ad1-adaa-016fe53df0f3", "_blank")} title="Google Cloud Profile">
                            <img src="/assets/google.png" alt="google" className="w-1/2 h-1/2"/>
                        </div>
                        <div className="social-icon" onClick={() => window.open("mailto:devika.harshey@gmail.com", "_self")} title="My Email">
                            <img src="/assets/email.png" alt="email" className="w-1/2 h-1/2"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
