import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { cn } from "../lib/util";


export function Contact() {
    return (
        <section id="contact" className="py-23 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>

            <div className="container mx-auto">
                <div className="space-y-8">
                    <div className="space-y-6 justify-center">
                        <div className="flex justify-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:theokyle@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">theokyle@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex justify-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground hover:text-primary transition-colors">St. Louis, Mo</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 justify-center">
                        <div className="flex justify-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <a href="https://www.linkedin.com/in/kyle-butler-438263195">
                            <Linkedin />
                            </a>
                            </div>
                            <div>
                                <h4 className="font-medium">LinkedIn</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}