import { useState } from "react";
import { cn } from "../lib/util";

const skills = [
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "Javascript", level: 90, category: "frontend"},
    {name: "React", level: 95, category: "frontend"},
    {name: "Tailwind CSS", level: 95, category: "frontend"},

    {name: "Node.js", level: 95, category: "backend"},
    {name: "Express", level: 95, category: "backend"},
    {name: "MongoDB", level: 95, category: "backend"},
    {name: "PostgreSQL", level: 95, category: "backend"},
    {name: "GoLang", level: 95, category: "backend"},

    {name: "Git/Github", level: 95, category: "project management"},
    {name: "Agile", level: 95, category: "project management"},
]

const categories = ["all", "frontend", "backend", "project management"]

export function Skills() {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.category === activeCategory)

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} 
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}
                    onClick={() => setActiveCategory(category)} >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-center">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}