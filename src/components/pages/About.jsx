import Designer from '../../assets/images/designer.jpg';
import '../../assets/css/About.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* Introduction to Designer */}
                <h2>About Me</h2>
                <p>
                    Hello, I'm Estefania, a passionate and creative graphic designer
                    with a flair for visual storytelling. Design has always been my
                    true calling, and I believe in its power to convey messages, evoke
                    emotions, and leave a lasting impact. With a keen eye for detail
                    and an intuitive sense of aesthetics, I strive to create captivating
                    and meaningful designs that resonate with audiences. My design journey
                    has led me to explore various styles, from sleek and modern to whimsical
                    and handcrafted. I find inspiration in the world around me, from
                    nature's beauty to cultural diversity, and I channel these influences
                    into my work. I'm dedicated to collaborating closely with clients,
                    understanding their vision, and bringing it to life through innovative
                    and purposeful designs. Whether it's crafting a brand identity,
                    designing striking visuals, or creating illustrations that tell
                    compelling stories, I'm passionate about pushing the boundaries of
                    creativity and making a positive impact through design. Let's embark
                    on a creative journey together and transform your ideas into visually
                    captivating experiences that leave a lasting impression.
                </p>
            </div>
            {/* Side image of the designer */}
            <div className="about-image">
                <img src={Designer} alt="myself" />
                <div className="shape"></div>
            </div>
        </div>
    );
}