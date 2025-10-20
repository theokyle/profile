import { Code, Database, User } from "lucide-react";

export function AboutMe() {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground"> 
                            Results-driven and detail-oriented junior-level developer with a solid foundation in JavaScript, HTML, and CSS. Eager to contribute technical skills and creativity to a dynamic development team. Adept at collaborating with cross-functional teams to analyze requirements, troubleshoot issues, and deliver high-quality solutions. Proven ability to quickly adapt to new technologies and methodologies. Committed to continuous learning and professional growth. Seeking an opportunity to leverage my coding expertise and passion for problem-solving in a challenging and collaborative environment.
                        </p>
                        <p className="text-muted-foreground">
                            Before transitioning into tech, I spent 10+ years in non-profit leadership as a pastor and the founding Executive Director of LifeBridge, an organization providing financial education and grants to low-income individuals. This experience honed my skills in leadership and project management along with a passion for building solutions that serve others.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get in Touch</a>
                            <a href="https://docs.google.com/document/d/1c0n9QqFIbodfiEC42NIIVSc-n786ojKH/edit?usp=sharing&ouid=112164895988933995841&rtpof=true&sd=true" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"><Code className="h-6 w-6 text-primary" /></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive web application with modern frameworks</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"><User className="h-6 w-6 text-primary" /></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing user interfaces and seamless user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"><Database className="h-6 w-6 text-primary" /></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Database Management</h4>
                                    <p className="text-muted-foreground">Creating backend servers and databases using MongoDB and NodeJS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}