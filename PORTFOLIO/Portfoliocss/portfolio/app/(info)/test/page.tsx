// pages/about.js
"use client";
import Head from 'next/head'
import { 
  Code2,
  Terminal,
  Layout,
  Code2Icon,
  LucideAtom,
  GitBranchIcon,
  FileJson2
} from 'lucide-react'
export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <link href="https://fonts.googleapis.com/css2?family=Style+Script&family=Verdana&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-blob"></div>
          <h1 className="intro-title">About Me</h1>
          <p className="intro-text">
            Hello! I'm a passionate Computer Science student with a keen interest in web development 
            and software engineering. I love turning complex problems into simple, beautiful, and 
            intuitive solutions. Currently exploring the vast world of technology and always eager 
            to learn something new.
          </p>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="section-title">Educational Journey</h2>
          <div className="education-timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2022 - Present</div>
              <div className="timeline-degree">Bachelor in Computer Science</div>
              <div className="timeline-institution">Your University Name</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">2020 - 2022</div>
              <div className="timeline-degree">Higher Secondary Education</div>
              <div className="timeline-institution">Your School Name</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-box">
              <Code2Icon className="skill-icon" size={32} />
              <div className="skill-name">HTML5</div>
            </div>
            <div className="skill-box">
              <Code2 className="skill-icon" size={32} />
              <div className="skill-name">CSS3</div>
            </div>
            <div className="skill-box">
              <FileJson2 className="skill-icon" size={32} />
              <div className="skill-name">JavaScript</div>
            </div>
            <div className="skill-box">
              <LucideAtom className="skill-icon" size={32} />
              <div className="skill-name">React</div>
            </div>
            <div className="skill-box">
              <Terminal className="skill-icon" size={32} />
              <div className="skill-name">Python</div>
            </div>
            <div className="skill-box">
              <GitBranchIcon className="skill-icon" size={32} />
              <div className="skill-name">Git</div>
            </div>
            <div className="skill-box">
              <Layout className="skill-icon" size={32} />
              <div className="skill-name">Node.js</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}