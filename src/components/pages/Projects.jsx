import Project1 from '../../assets/images/project1.jpg';
import Project2 from '../../assets/images/project2.jpg';
import Project3 from '../../assets/images/project3.jpg';
import Project4 from '../../assets/images/project4.jpg';
import '../../assets/css/Projects.css';

export default function Projects() {
    return (
        <div>
            {/* Introduction to projects*/}
            <section className="projects-container">
                <h2 className="projects-heading">Projects</h2>
                <p className="projects-intro"> Welcome to the Project Page! Here, you will find a showcase of some of
                    my latest and most exciting design projects. Each project is a testament
                    to my passion for creativity and dedication to crafting visually captivating
                    experiences. From brand identities that leave a lasting impression to striking
                    visuals that tell compelling stories, these projects reflect my unique approach
                    to design. I hope these projects inspire and resonate with you, and I look forward
                    to bringing your ideas to life through the power of design. Enjoy the journey!</p>
                <div className="divider03" />
                {/* Project 01 */}
                <article className="project-page-container">
                    <div className="project-content">
                        <h2>- Cosmic Dreams</h2>
                        <p> Embark on an otherworldly exploration of celestial
                            aesthetics with me. I am thrilled to present my captivating project,
                            "Cosmic Dreams," where I delve into the wonders of the universe to
                            create mesmerizing digital artworks. Through this collection, I blend
                            captivating colors and surreal elements to transport you to distant
                            galaxies, showcasing the beauty of nebulas, planets, and celestial
                            phenomena. Each design is meticulously crafted, evoking a sense of
                            wonder and awe, inviting you to indulge in the mysteries of the cosmos.</p>

                    </div>
                    <div className="project-image left">
                        <img src={Project1} alt="Cosmic design illustration" />
                    </div>
                </article>
                {/* Project 02 */}
                <article className="project-page-container">
                    <div className="project-image right">
                        <img src={Project2} alt="Retro design" />
                    </div>
                    <div className="project-content">
                        <h2>- RetroVibe</h2>
                        <p> Let's revive nostalgia with a modern twist together. I'm excited to
                            share my latest endeavor, "RetroVibe," where I breathe new life into
                            retro aesthetics. This project showcases a collection of eye-catching
                            visuals inspired by the vibrant styles of the past. From pixel art
                            to neon signs, my designs effortlessly blend nostalgia and contemporary
                            flair. Whether it's a groovy '80s synthwave cover or a pixel-perfect
                            tribute to classic arcade games, "RetroVibe" celebrates the timeless
                            charm of the past while appealing to your modern sensibilities.</p>
                    </div>
                </article>
                {/* Project 03 */}
                <article className="project-page-container">
                    <div className="project-content">
                        <h2>- Botanical Enchantment</h2>
                        <p>Step into a magical world where nature meets imagination with me.
                            I am delighted to present "Botanical Enchantment," a project that
                            transports you to a whimsical realm where lush gardens, mystical
                            creatures, and enchanted forests reign supreme. Through a combination
                            of my hand-drawn illustrations and digital mastery, I invite you to
                            explore the harmony between nature and fantasy, sparking a sense of
                            childlike wonder and reconnecting you with the beauty of the natural world.</p>

                    </div>
                    <div className="project-image left">
                        <img src={Project3} alt="Botanical illustration" />
                    </div>
                </article>
                {/* Project 04 */}
                <article className="project-page-container">
                    <div className="project-image right">
                        <img src={Project4} alt="Cyperpunk illustration" />
                    </div>
                    <div className="project-content">
                        <h2>- Cyber Fusion</h2>
                        <p>Embrace the dystopian future with a touch of nature's grace alongside me.
                            I am breaking conventions with "Cyber Fusion," where I blend cyberpunk
                            aesthetics with organic forms to create visually stunning and thought-provoking
                            designs. Each artwork intertwines futuristic elements like neon lights,
                            futuristic cityscapes, and augmented reality with the delicate beauty of
                            nature's flora and fauna. "Cyber Fusion" challenges perceptions, offering
                            a fresh perspective on the coexistence of technology and the environment,
                            leaving you pondering the possibilities of tomorrow</p>
                    </div>
                </article>
            </section>
            {/* Background shapes */}
            <div className="shape02"></div>
            <div className="shape03"></div>
            <div className="shape04"></div>
            <div className="shape05"></div>
        </div>
    );
}