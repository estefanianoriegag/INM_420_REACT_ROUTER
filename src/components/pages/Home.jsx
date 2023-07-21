import Project1 from '../../assets/images/project1.jpg';
import Project2 from '../../assets/images/project2.jpg';
import Project3 from '../../assets/images/project3.jpg';
import Project4 from '../../assets/images/project4.jpg';
import '../../assets/css/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            {/* Introduction Section */}
            <section className="introduction-section">
                <h2>Welcome to My Creative World!</h2>
                <p>
                    I'm Estefania, a passionate and innovative designer with a keen eye
                    for aesthetics and a love for crafting visually captivating
                    experiences. With a unique blend of artistic flair and technical
                    expertise, I strive to create designs that not only inspire but also
                    leave a lasting impression on the audience. From crafting compelling
                    brand identities to delivering user-centric interfaces, my mission is
                    to bring your ideas to life and transform them into exceptional
                    designs that stand out in today's competitive landscape.
                </p>
            </section>

            {/* Project Images */}
            <div className="projects-row">
                <img src={Project1} alt="Cosmic design illustration" />
                <img src={Project2} alt="Retro design" />
                <img src={Project3} alt="Botanical illustration" />
                <img src={Project4} alt="Cyperpunk illustration" />
            </div>

            {/* Services Section */}
            <section className="services-section">
                <h2>My Services</h2>
                <ul>
                    <li>- Brand Identity Design</li>
                    <li>- Web & Mobile UI/UX Design</li>
                    <li>- Graphic Design</li>
                    <li>- Illustration & Digital Art</li>
                    <li>- Product Packaging Design</li>
                    <li>- Print Design</li>
                </ul>
            </section>
        </div>
    );
};