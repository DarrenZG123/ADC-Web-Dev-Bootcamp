import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = ['Python', 'Java', 'Git', 'FastAPI', 'Excel'];
const projects = [
  {
    title: 'Smart Money Tracker',
    category: 'Full-stack development',
    description: 'Building a tool to monitor SEC filings from 100 prominent investors and institutions, with alerts for significant investment activity.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    status: 'In development',
  },
  {
    title: 'Blue Flappy Bird',
    category: 'Game development',
    description: 'A game built with custom gravity, hit-box collision detection, interactive controls, and dynamic score tracking.',
    tags: ['Game physics', 'Collision detection'],
  },
];

function Icon({ name, ...props }) {
  const paths = {
    work: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    research: <><path d="M9 3h6M10 3v6l-6 10a1.3 1.3 0 0 0 1 2h14a1.3 1.3 0 0 0 1-2L14 9V3M8 15h8" /></>,
    experience: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a24 24 0 0 0 18 0M12 12v3" /></>,
    about: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    education: <><path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6c4 3 8 3 12 0v-6M22 9v8" /></>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

function Tags({ items }) {
  return <ul className="tags" aria-label="Technologies and skills">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="layout">
        <aside className="sidebar panel">
          <a className="monogram" href="#main" aria-label="Darren Gao home">DG<span>.</span></a>
          <div className="profile">
            <h1>Darren Gao</h1>
            <p>Computer Science student</p>
            <p>University of Maryland<br />ACES Honors College</p>
            <p className="location">Bowie, Maryland</p>
          </div>
          <nav aria-label="Main navigation">
            {[['work', 'Work'], ['research', 'Research'], ['experience', 'Experience'], ['about', 'About']].map(([id, label]) => (
              <a key={id} href={`#${id}`}><Icon name={id} />{label}</a>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <a className="button" href={`${import.meta.env.BASE_URL}Darren-Gao-Resume.pdf`} download><Icon name="download" />Download resume</a>
            <a className="contact-link" href="mailto:darren12615@gmail.com"><Icon name="mail" />Get in touch</a>
            <a className="linkedin" href="https://www.linkedin.com/in/darrenzgao/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </aside>

        <main id="main" tabIndex={-1}>
          <header className="hero">
            <p className="eyebrow">Student. Researcher. Developer.</p>
            <h2>Curious mind.<br /><span>Practical software.</span></h2>
            <p className="intro">Exploring AI, accessibility, and full-stack development.</p>
          </header>

          <div className="overview-grid">
            <section className="panel research-card" id="research" aria-labelledby="research-title">
              <p className="eyebrow">Featured research <span className="divider">/</span> 2025–2026</p>
              <h2 id="research-title">Bilingual AAC</h2>
              <p className="card-copy">Helping make communication more accessible through predictive phrase suggestions and English–Spanish voice interaction.</p>
              <div className="language-graphic" aria-hidden="true"><span>Hello</span><div className="connection"><i /><i /><i /></div><span>Hola</span></div>
              <p className="card-note">Institute for Systems Research · University of Maryland</p>
            </section>
            <section className="panel education-card" aria-labelledby="education-title">
              <p className="eyebrow">Education</p>
              <Icon name="education" width="48" height="48" />
              <h2 id="education-title">UMD</h2>
              <p>Computer Science<br /><span>ACES Honors College</span></p>
              <p className="card-note">Expected May 2030</p>
            </section>
          </div>

          <section className="work-section" id="work" aria-labelledby="work-title">
            <div className="section-heading"><h2 id="work-title">Selected projects</h2><span>01 — 02</span></div>
            <div className="projects-grid">
              {projects.map(project => <article className="panel project-card" key={project.title}>
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                {project.status && <span className="status">{project.status}</span>}
                <p className="card-copy">{project.description}</p>
                <Tags items={project.tags} />
              </article>)}
            </div>
          </section>

          <section className="panel experience-card" id="experience" aria-labelledby="experience-title">
            <p className="eyebrow">Experience</p>
            <div className="experience-heading"><h2 id="experience-title">Research Intern</h2><p>Jun 2025 – Jun 2026</p></div>
            <p className="organization">UMD · Institute for Systems Research</p>
            <p className="card-copy">Worked under Dr. Huan Xu at the intersection of AI and Augmentative and Alternative Communication (AAC). Built a personalization engine using frequency analysis, recency weighting, and Markov-chain context modeling, alongside speech recognition and text-to-speech interaction.</p>
          </section>

          <div className="bottom-grid" id="about">
            <section className="panel" aria-labelledby="toolkit-title"><h2 className="eyebrow" id="toolkit-title">My toolkit</h2><Tags items={skills} /><p className="card-copy">Learning by building, from accessible communication tools to full-stack applications.</p></section>
            <section className="panel" aria-labelledby="highlights-title"><h2 className="eyebrow" id="highlights-title">A few highlights</h2><ul className="highlights"><li><strong>1st place</strong><span>2026 PGCPS County Math Competition</span></li><li><strong>App Dev Club</strong><span>Web Dev Bootcamp · Sep 2026–present</span></li></ul></section>
          </div>
          <footer><span>Darren Gao</span><a href="mailto:darren12615@gmail.com">darren12615@gmail.com</a></footer>
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
