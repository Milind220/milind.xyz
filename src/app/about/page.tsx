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
          I&apos;m a robotics engineer with a passion for software dev and electronics engineering.
          I want to build awesome, useful products that make the world better. 
          Currently, I&apos;m the Lead Electronics Engineer at Clearbot, Making PCBs and writing firmware for autonomous ocean cleaning boats.
          
          Starting with this website (March 9th, 2025), I&apos;m starting a whole chain of projects to explore all the ideas I have in my head.
        
          Keep an eye out for them. I&apos;ll also be posting about them on X.
        </p>
        <p>
          I studied Energy Science and Engineering at CityU HK, then realised that&apos;s going nowhere in Hong Kong, so I applied 
          to Clearbot as a robotics engineer. Weeks later I realised I&apos;d be a lot more useful designnig the electronics and writing the firmware,
          so that&apos;s what I&apos;ve been doing for the past year and a half. 
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {["PCB design", "KiCAD", "C/C++ firmware", "Rust", "Python", "Using AI to do what I can't", "Learning what I don't know"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
