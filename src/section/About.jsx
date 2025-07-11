import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('devika.harshey@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    };

    return (
        <section id="about" className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Hi, I&apos;m Devika Harshey</p>
                            <p className="grid-subtext">Passionate Computer Science student with foundational knowledge
                                in web development, programming & UI/UX design. Aspiring
                                to learn new technologies and gain practical experience through creative projects and
                                teamwork.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Tech Stack & Coursework</p>
                            <p className="grid-subtext">My tech stack includes HTML, CSS, TailwindCSS,
                                Javascript/Typescript, Bootstrap, React, Next.js, C, C++ & Python.</p>
                        </div>
                        <div>
                            <p className="grid-subtext">My coursework includes Data Structures & Algorithms and Object Oriented Programming.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">Let&apos;s Connect!</p>
                            <p className="grid-subtext">Looking forward to connect & learn from creative
                                individuals.</p>
                            <a href="#contact"><Button name="Contact Me" isBeam containerClass="w-full mt-10"/></a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Passionate About Coding, Web Development...and Books!</p>
                            <p className="grid-subtext">
                                I love solving problems, designing and developing web apps. I enjoy exploring new
                                technologies, and enhancing my
                                skills.
                            </p>
                        </div>
                        <div>
                            <p className="grid-subtext">
                                But that&apos;s not all. Apart from coding & development, I also love writing poems,
                                books, etc.
                            </p>
                            <div>
                                <a href="https://tinyurl.com/2xnhchtk" target="_blank"><Button name="Checkout My Books" isBeam containerClass="w-full mt-10"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                    <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">devika.harshey@gmail.com</p>
                            </div>
                            <div>
                                <a href="/assets/cv.pdf" target="_blank"><Button name="View My CV" isBeam containerClass="w-full mt-10"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
