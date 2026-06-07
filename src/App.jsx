import "./App.css";

function App() {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>
                        <a href="#" className="linear-gradient-text-color">
                            wonder
                        </a>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Get in touch</a>
                        </li>
                        <li>
                            <a href="#">Our work</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="hero-section">
                <div className="hero-details">
                    <div className="hero-about">
                        <p>
                            A UI UX Design Agency ,<br /> <span className="linear-gradient-text-color">evolving</span>{" "}
                            The Way People <br /> Interact With Digital World.
                        </p>
                        <button className="linear-gradient-background-color">get in touch</button>
                    </div>

                    <div className="hero-image">
                        <img src="./src/assets/Images/UI-UX.png" alt="UI-UX differences" />
                    </div>
                </div>

                <img src="./src/assets/Images/Animation-border.png" alt="Animation Border" />
            </section>

            <section className="about-section">
                <div className="about-details">
                    <h2 className="linear-gradient-text-color">About Us</h2>
                    <h3>
                        Grow Your Business <br /> With Our Agency
                    </h3>
                    <p>
                        Our team live and breath UI UX, tackling design challenges <br /> with excitement. Our mission
                        is to improve lives and <br /> businesses through our design decisions. With versatile <br />{" "}
                        experience across startups and industry giants, we offer <br /> outstanding services in multiple
                        fields. When you partner up <br /> with us, you’ll get a superbrain team of UI UX experts,{" "}
                        <br /> dedicated to knowledge sharing and creating a better world.
                    </p>
                </div>

                <div className="about-image">
                    <img src="./src/assets/Images/Animation.png" alt="Animation about Image" />
                </div>
            </section>

            <section className="services-section">
                <div className="services-text">
                    <h2 className="linear-gradient-text-color">Our Services</h2>
                    <h3>We Provide Best Quality Service</h3>
                </div>

                <div className="services-details linear-gradient-background-color">
                    <div className="card" id="service1">
                        <div className="card-image">
                            <img src="./src/assets/Images/Software-engineer-cuate.png" alt="Software Engineer Cuate" />
                        </div>
                        <h4>mobile ui</h4>
                        <p>fast ,powerful & design what you want</p>
                        <button className="linear-gradient-background-color">read more</button>
                    </div>

                    <div className="card" id="service2">
                        <div className="card-image">
                            <img src="./src/assets/Images/research.png" alt="UX Research" />
                        </div>
                        <h4>ux researches</h4>
                        <p>fast ,powerful & design what you want</p>
                        <button className="linear-gradient-background-color">read more</button>
                    </div>

                    <div className="card" id="service3">
                        <div className="card-image">
                            <img src="./src/assets/Images/pre-design.png" alt="Pre Design" />
                        </div>
                        <h4>pre design</h4>
                        <p>fast ,powerful & design what you want</p>
                        <button className="linear-gradient-background-color">read more</button>
                    </div>

                    <div className="card" id="service4">
                        <div className="card-image">
                            <img src="./src/assets/Images/Website-creator-amico.png" alt="Website Creator Amico" />
                        </div>
                        <h4>website ui</h4>
                        <p>fast ,powerful & design what you want</p>
                        <button className="linear-gradient-background-color">read more</button>
                    </div>
                </div>
            </section>

            <section className="projects-section">
                <div className="projects-text">
                    <h2 className="linear-gradient-text-color">Our Work</h2>
                    <h3>Some of our projects</h3>
                </div>

                <div className="projects linear-gradient-background-color">
                    <div className="project">
                        <div className="project-image">
                            <img
                                src="./src/assets/Images/mockuuups-hand-holding-an-iphone-13-mockup-1.png"
                                alt="Mockuuups Hand Holding an Iphone 13"
                            />
                        </div>
                        <div className="project-details">
                            <p>
                                responsive design of e-commerce website <br /> (uniderma)
                            </p>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-image">
                            <img
                                src="./src/assets/Images/mockuuups-iphone-13-mockup-with-a-laptop.png"
                                alt="Mockuuups Hand Holding an Iphone 13"
                            />
                        </div>

                        <div className="project-details">
                            <p>
                                mobile application design <br /> (coffee)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="team-text">
                    <h2 className="linear-gradient-text-color">our team</h2>
                    <h3>they will do their best to achieve your goal </h3>
                </div>

                <div className="team-members">
                    <div className="card  linear-gradient-background-color">
                        <img src="./src/assets/Images/person1.png" alt="member 1" />
                        <h4>Rahma Farahat</h4>
                        <p>Ui designer</p>
                        <p>01111446852</p>
                        <p>Rahma1562@gamil.com</p>
                    </div>

                    <div className="card linear-gradient-background-color">
                        <img src="./src/assets/Images/person2.png" alt="member 2" />
                        <h4>Alyaa</h4>
                        <p>Ui designer</p>
                        <p>012008449871</p>
                        <p>Alyaa1456@gamil.com</p>
                    </div>

                    <div className="card linear-gradient-background-color">
                        <img src="./src/assets/Images/person3.png" alt="member 3" />
                        <h4>Aya Mahmoud</h4>
                        <p>Ui designer</p>
                        <p>01062984510</p>
                        <p>Aya1025@gamil.com</p>
                    </div>

                    <div className="card linear-gradient-background-color">
                        <img src="./src/assets/Images/person4.png" alt="member 4" />
                        <h4>mostafa abo elmagd</h4>
                        <p>Ui designer</p>
                        <p>01062984990</p>
                        <p>mostafa122@gamil.com</p>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-text">
                    <h2 className="linear-gradient-text-color">Drop you message</h2>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info linear-gradient-background-color">
                        <h3>📍 Contact Us</h3>
                        <div className="info-item">
                            <span className="emoji">🏢</span>
                            <p>Dakahlia - Mansoura</p>
                        </div>
                        <div className="info-item">
                            <span className="emoji">✉️</span>
                            <p>Mostafa@gamil.com</p>
                        </div>
                        <div className="info-item">
                            <span className="emoji">📞</span>
                            <p>+20 01212282246</p>
                        </div>
                        <div className="info-item">
                            <span className="emoji">📞</span>
                            <p>+20 01556965665</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h3>Get in Touch</h3>
                        <p>We'd love to hear from you! Send us a message and we’ll respond asap.</p>
                        <form action="#" method="post">
                            <div class="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Typing your message here ......"></textarea>
                            </div>
                            <button type="submit" className="linear-gradient-background-color">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="linear-gradient-background-color">
                <div className="footer-content">
                    <div className="footer-col">
                        <h4>wonder</h4>
                        <p>✨ Follow us</p>
                        <p>📞 call us: 01228246278</p>
                        <p>📱 Sponsored Developer Career</p>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>📞 +20 01228246278</p>
                        <p>📧 wonder@agency.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>Copyright wonder. All Rights Reserved ©</span>
                    <span>Designed by Developer Career Team.</span>
                </div>
            </footer>
        </>
    );
}

export default App;
