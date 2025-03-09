/**
 * About page component
 * Displays personal information, skills, and background
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      
      <section className="max-w-prose">
        <p className="mb-4">
          I'm a software engineer passionate about building clean, efficient, and user-friendly web applications.
          With experience in modern frontend frameworks and backend technologies, I enjoy creating
          full-stack solutions that solve real problems.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open source,
          or enjoying the outdoors.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
