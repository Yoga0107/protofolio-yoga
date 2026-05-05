"use client";
import { GitHub, Linkedin, Phone, Mail, MapPin } from 'react-feather';

const skills = [
  { name: 'Frontend', items: ['React.js', 'Next.js', 'TailwindCSS', 'TypeScript'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'PHP', 'Laravel'] },
  { name: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'] },
  { name: 'Mobile', items: ['React Native', 'Flutter', 'Kotlin'] },
  { name: 'DevOps', items: ['Docker', 'Git', 'GitHub', 'Vercel'] },
  { name: 'Other', items: ['WordPress', 'Jotai', 'ShadCN UI', 'REST API'] },
];

const competencies = [
  'Web Developer',
  'Mobile Developer',
  'Backend Developer',
  'Frontend Developer',
  'Unit Testing',
  'Project Lead',
  'Team Leadership',
  'Operations Mgmt',
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16">
        <p className="section-label fade-up-1 mb-3">Portfolio</p>
        <h1 className="display-font fade-up-2"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
          Hello, I&apos;m{' '}
          <span className="gradient-text">Yoga</span>
          <br />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.75em' }}>
            Software Engineer
          </span>
        </h1>

        <p className="fade-up-3" style={{ maxWidth: 580, color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: 28 }}>
          Informatics Technology student at Pancasila University, Jakarta. Passionate about building
          scalable web and mobile applications with a focus on exceptional user experience and clean architecture.
        </p>

        <div className="fade-up-4 flex flex-wrap gap-3 mb-8">
          <a
            href="mailto:yogaputra0107@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm"
            style={{ background: 'var(--accent-primary)', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <Mail size={15} /> Get in Touch
          </a>
          <a
            href="https://github.com/yogaarditya"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm"
            style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', color: 'var(--text-primary)', textDecoration: 'none' }}
          >
            <GitHub size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yoga-arditya-putra"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm"
            style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', color: 'var(--text-primary)', textDecoration: 'none' }}
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>

        {/* Contact info chips */}
        <div className="fade-up-5 flex flex-wrap gap-3">
          {[
            { icon: <Phone size={13} />, text: '+62 812-9909-0466' },
            { icon: <Mail size={13} />, text: 'yogaputra0107@gmail.com' },
            { icon: <MapPin size={13} />, text: 'Jakarta, Indonesia' },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-2 mono-font"
              style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', padding: '5px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'var(--accent-primary)' }}>{icon}</span>
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* About / Objective */}
      <section className="card fade-up-5 mb-8 p-7">
        <p className="section-label mb-2">About</p>
        <h2 className="display-font mb-4" style={{ fontSize: '1.4rem', fontWeight: 700 }}>
          Fullstack Developer with ERP Experience
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>
          Enthusiastic and experienced Fullstack Next.js Developer specializing in building ERP web applications.
          Proficient in utilizing Next.js, React.js, and TailwindCSS to enhance system functionality and performance.
          Also skilled in mobile application development with React Native and Flutter. I consider myself a lifelong
          learner, always eager to embrace new knowledge and skills.
        </p>
      </section>

      {/* Competencies */}
      <section className="mb-8 fade-up-6">
        <p className="section-label mb-4">Key Competencies</p>
        <div className="flex flex-wrap gap-2">
          {competencies.map(c => (
            <span key={c} className="tech-tag" style={{ fontSize: '0.75rem', padding: '6px 14px' }}>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section>
        <p className="section-label mb-4">Technical Skills</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(({ name, items }) => (
            <div key={name} className="card p-5">
              <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: 12, fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em' }}>
                {name.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => (
                  <span key={item} className="tech-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
