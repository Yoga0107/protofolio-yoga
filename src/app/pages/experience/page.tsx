"use client";

const experiences = [
  {
    company: 'PT. Fungsitama Cipta Teknologi',
    role: 'Junior Frontend Developer',
    type: 'Remote',
    period: 'Dec 2024 – Mar 2025',
    description: 'Enthusiastic Fullstack Next.js Developer building ERP web applications. Proficient in Next.js, React.js, and TailwindCSS to enhance system functionality and performance.',
    highlights: [
      'ERP Module Development: HR management, master data, payroll, and employee management modules',
      'Built intuitive UI with Next.js, Jotai, and ShadCN UI',
      'Implemented PostgreSQL for efficient data management',
      'Architected microfrontend structure using a well-defined boilerplate',
    ],
    tech: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Node.js'],
    color: '#6c63ff',
  },
  {
    company: 'Saka Sakti Inovasi',
    role: 'Junior Frontend Developer',
    type: 'Remote',
    period: 'Apr 2024 – Oct 2024',
    description: 'Contributed to frontend development for an innovative e-commerce enabler application using ReactJS, NextJS, and TailwindCSS.',
    highlights: [
      'Dukcapil Website frontend development with React, NextJS, TailwindCSS',
      'WordPress microsite creation and maintenance',
      'Mobile attendance app for Papua Pegunungan Government using React Native',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'React Native', 'WordPress', 'Express.js', 'PostgreSQL', 'Docker'],
    color: '#ff6584',
  },
  {
    company: 'Zegasoft',
    role: 'Backend Developer',
    type: 'Internship',
    period: 'Nov 2023 – Jan 2024',
    description: 'Collaborated in building resilient backend infrastructure for an e-commerce enabler application.',
    highlights: [
      'Backend infrastructure development ensuring seamless operations',
      'Optimized database interactions using Node.js and PostgreSQL',
      'Implemented TypeScript for advanced and robust frontend interface',
    ],
    tech: ['Node.js', 'PostgreSQL', 'TypeScript', 'Docker'],
    color: '#43e97b',
  },
  {
    company: 'Goks Indonesia',
    role: 'Software Developer',
    type: 'Remote',
    period: 'Project Based',
    description: 'Full-stack website developer contributing to impactful web applications for government and enterprise initiatives.',
    highlights: [
      'Web applications for Kemenkes Awarding initiative',
      'PAM Jaya Management Trainee dashboard for real-time data visualization',
      'Event registration web app with barcode features',
    ],
    tech: ['Node.js', 'SQL', 'React.js'],
    color: '#ffd166',
  },
  {
    company: 'Bakrie Center Foundation – CLP 5',
    role: 'IT & Database Intern',
    type: 'Internship',
    period: 'Aug 2022 – Dec 2022',
    description: '6-month internship program contributing to various digitalization projects.',
    highlights: [
      'Revamped WordPress website for Ddrocare Foundation',
      'Developed mobile app for brand audit and waste audit process',
      'Conducted user education and training on applications',
    ],
    tech: ['Java', 'Kotlin', 'SQL', 'TypeScript'],
    color: '#f77f00',
  },
  {
    company: 'Bakrie Center Foundation – CLP 4',
    role: 'IT & Database Intern',
    type: 'Internship',
    period: 'Feb 2022 – Jul 2022',
    description: '6-month internship program with hands-on experience in web development and IoT.',
    highlights: [
      'Company profile website for PETA Foundation',
      'Employee information system for PETA Foundation',
      'Digitalization roadmap and IoT education sessions',
    ],
    tech: ['TailwindCSS', 'MongoDB', 'React.js'],
    color: '#a29bfe',
  },
];

const activities = [
  {
    title: 'Teaching Assistant – Mobile Programming',
    org: 'Pancasila University',
    desc: 'Flutter development: layouts, user interactions, codebase organization, responsive apps.',
  },
  {
    title: 'Teaching Assistant – Computer Networking',
    org: 'Pancasila University',
    desc: 'Networking protocols, Cisco technologies, network configuration and best practices.',
  },
  {
    title: 'Teaching Assistant – Algorithm & Data Structures',
    org: 'Pancasila University',
    desc: 'Algorithms and data structures in C++, practical exercises, responsive software solutions.',
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <p className="section-label fade-up-1 mb-2">Career</p>
      <h1 className="display-font fade-up-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 8 }}>
        Professional <span className="gradient-text">Experience</span>
      </h1>
      <p className="fade-up-3 mb-12" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 500 }}>
        3+ years building web and mobile products across startups, agencies, and internship programs.
      </p>

      {/* Timeline */}
      <div className="fade-up-4" style={{ position: 'relative', paddingLeft: 28 }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 8,
          bottom: 0,
          width: 1,
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
        }} />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* dot */}
              <div style={{
                position: 'absolute',
                left: -32,
                top: 20,
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: exp.color,
                border: '2px solid var(--bg-primary)',
                boxShadow: `0 0 10px ${exp.color}66`,
              }} />

              <div className="card" style={{ padding: '24px 28px' }}>
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <div style={{ flex: 1 }}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="display-font" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                        {exp.role}
                      </h3>
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '2px 8px',
                        borderRadius: 6,
                        background: `${exp.color}20`,
                        color: exp.color,
                        fontFamily: 'DM Mono, monospace',
                        border: `1px solid ${exp.color}40`,
                      }}>
                        {exp.type}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="mono-font" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: 14 }}>
                  {exp.description}
                </p>

                <ul style={{ marginBottom: 14, paddingLeft: 0, listStyle: 'none' }}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, marginBottom: 6, color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <section className="mt-12 fade-up-5">
        <p className="section-label mb-4">Education</p>
        <div className="card p-6">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <h3 className="display-font" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>
                Pancasila University
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Informatics Engineering – Software Engineering
              </p>
            </div>
            <span className="mono-font" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>2019 – 2024</span>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="mt-10 fade-up-6">
        <p className="section-label mb-4">Activities</p>
        <div className="grid md:grid-cols-3 gap-4">
          {activities.map((a, i) => (
            <div key={i} className="card p-5">
              <h4 className="display-font" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 4 }}>{a.title}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: 8, fontFamily: 'DM Mono, monospace' }}>{a.org}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
