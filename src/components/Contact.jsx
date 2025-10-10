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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
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
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground hover:text-primary transition-colors">St. Louis, Mo</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect with me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a><Linkedin /></a>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your name..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your email..." />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap=2", )}>
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}