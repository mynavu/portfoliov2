import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutMobile = ({ image, onImageChange1, onImageChange2, currentData, onFinishLoading }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      };
    return (
    <section id="home">
        <div className="aboutContainer">
                <div className="bio">
                    <h1 className="blueGlow title titleFont center">MYN<span className="flicker">A</span> VU</h1>
                    <p className='thin center long'>
                        I am a software developer and an undergrad focusing on Computer Science and Statistics. 
                        My interests are software engineering, quant development, and data analysis.    
                    </p>
                </div>
                <div className="stats">
                    <h3 className="titleFont blueGlow center">Myna Vu</h3>
                    <div className="profile">
                    {/*}
                        <div className="imageOptions">
                            <a id="default" onClick={onImageChange1}>Default</a>
                            <a id="ghibli" onClick={onImageChange2}>Ghibli</a>
                        </div>
                    */}
                    </div>
                    <img className="profileImage" src={image}></img>
                    <p className='center'>Rank: First year CS student</p>
                    <p className='center'>Spawn: Vietnam</p>
                    <div className="questBar">
                            <p className="label">GPA</p>
                            <div className="progressBar">
                                <div className={`yellowBar ${onFinishLoading ? 'nintyPercent' : ''}`}></div>
                            </div>
                    </div>
                    <div className="questBar">
                            <p className="label">Sleep</p>
                            <div className="progressBar">
                                <div className={`blueBar ${onFinishLoading ? 'twentyPercent' : ''}`}></div>
                            </div>
                    </div>
                    <div className="questBar">
                            <p className="label">Vibes</p>
                            <div className="progressBar">
                                <div className={`pinkBar ${onFinishLoading ? 'hundredPercent' : ''}`}></div>
                            </div>
                    </div>
                    <h4 className="titleFont whiteGlow">CONTACT</h4>
                    <div className="contacts">
                        <a href="https://www.linkedin.com/in/myna-vu-237091322/" target="_blank"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/mynavu" target="_blank"><i className="bi bi-github"></i></a>
                        <a href="mailto:avu13@uclive.ac.nz"><i className="bi bi-envelope-fill"></i></a>
                    </div>
                </div>
                <div className="quests">
                    <h3 className="titleFont blueGlow center">QUESTS&nbsp; 
                        <i className="bi bi-backpack4-fill"></i>
                    </h3>
                    <h4 className="titleFont whiteGlow">CURRENT</h4>
                    <div className="questBar">
                        <p className="label">Getting an internship</p>
                        <div className="progressBar">
                        </div>
                    </div>
                    <h4 className="titleFont whiteGlow">IN PROGRESS</h4>
                    <div className="questBar">
                        <p className="label">BSc in CS</p>
                        <div className="progressBar">
                            <div className={`greenBar ${onFinishLoading ? 'tenPercent' : ''}`}></div>
                        </div>
                    </div>
                    <div className="questBar">
                        <p className="label">Learn React</p>
                        <div className="progressBar">
                            <div className={`greenBar ${onFinishLoading ? 'thirtyPercent' : ''}`}></div>
                        </div>
                    </div>
                </div>
                <h4 className='center'>→ View my <a href='https://docs.google.com/document/d/1-k0W10jzwevb6pspTTL6hp3bLAj1jgDwr_VGr0AC_G4/edit?usp=sharing' target="_blank" className='resumeLink'>resume</a></h4>
        </div>
        <div className="skillsContainer">
            <h3 className="titleFont blueGlow center">SKILLS&nbsp;
             <i className="bi bi-stars"></i>
            </h3>
            <div className="fourSkills">
                <div className="langContainer">
                    <h4 className="titleFont whiteGlow">Languages</h4>
                    <div className="lang">
                        <p className="blue">Python</p>
                        <p className="orange">HTML</p>
                        <p className="yellow">CSS</p>
                        <p className="blue">SQL</p>
                        <p className="green">Bash</p>
                        <p className="yellow">JavaScript</p>
                    </div>
                </div>
                <div className="techContainer">
                    <h4 className="titleFont whiteGlow">Technologies</h4>
                    <div className="tech">
                        <p className="lightGreen">Node.js</p>
                        <p className="blue">PostgreSQL</p>
                        <p className="green">Supabase</p>
                        <p className="cyan">React</p>
                    </div>
                </div>
                <div className="creativeContainer">
                    <h4 className="titleFont whiteGlow">Creative</h4>
                    <div className="creative">
                        <p className="blue">Photoshop</p>
                        <p className="orange">Illustrator</p>
                        <p className="cyan">Maya</p>
                        <p className="purple">Canva</p>
                    </div>
                </div>
                <div className="devToolsContainer">
                    <h4 className="titleFont whiteGlow">Dev Tools</h4>
                    <div className="devTools">
                        <p className="red">Git</p>
                        <p className="blue">VSCode</p>
                        <p className="orange">Claude</p>
                        <p className="white">Grok</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="achievementsContainer">
            <h3 className="titleFont blueGlow center">ACHIEVEMENTS <br></br>UNLOCKED&nbsp;
            <i className="bi bi-unlock-fill"></i>
            </h3>
            <div className="achievements">
                <div className="achievement">
                    <h4 className="achievementName yellowBorder">
                        <i className="bi bi-trophy-fill"></i>
                        &nbsp;Global Nominee
                    </h4>
                    <p className='small'>Chosen as Vietnam's first NASA Space Apps Hackathon nominee</p>
                </div>
                <div className="achievement">
                    <h4 className="achievementName greenBorder">
                        <i className="bi bi-mortarboard-fill"></i>
                        &nbsp;Grade Farmer
                    </h4>
                    <p className='small'>Obtained a 4.0 GPA in highschool + 2 princpal's list</p>
                </div>
                <div className="achievement">
                    <h4 className="achievementName pinkBorder">
                        <i className="bi bi-cake-fill"></i>
                        &nbsp;Vanilla Dev
                    </h4>
                    <p className='small'>Rigourously covered vanilla HTML, CSS and JS</p>
                </div>
                <div className="achievement">
                    <h4 className="achievementName purpleBorder">
                        <i className="bi bi-palette-fill"></i>
                        &nbsp;Design Dabbler
                    </h4>
                    <p className='small'>Skilled in 3D Modelling, UI/UX, Graphic Design, and etc...</p>
                </div>
            </div>

        </div>
        <h3 className="titleFont blueGlow center">PROJECTS&nbsp;
            <i className="bi bi-folder-fill"></i>
        </h3>
        <div className="projectsContainer">
                <Slider {...settings}>
                    {currentData.map(data => (
                        <div className="card">
                            <img src={data.imageUrl}></img>
                            <h4 className='titleFont center'>{data.name}</h4>
                            <p className='small center thin'>{data.caption}</p>
                            <div className='projectLinks'>
                                <a href={data.webUrl} target="_blank"><i className="bi bi-globe"></i></a>
                                <a href={data.github} target="_blank"><i className="bi bi-github"></i></a>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>
        <div className='footer'>
            <p className='credits'>Made with <i className="bi bi-heart-fill pink"></i> and <i className="fa-brands fa-react cyan"></i></p>
            <h5 className=''>2025 © Myna Vu</h5>
        </div>


    </section>
    );
};