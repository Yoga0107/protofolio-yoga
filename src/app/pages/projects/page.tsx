"use client";


const projects = [
  {
    title: 'ERP System – HR & Payroll',
    category: 'Web App',
    description: 'Enterprise resource planning web application with HR management, master data, payroll, and employee management modules. Built with a microfrontend architecture for scalability.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Docker', 'Jotai', 'ShadCN UI'],
    color: '#6c63ff',
    status: 'Production',
    at: 'PT. Fungsitama Cipta Teknologi',
  },
  {
    title: 'Dukcapil Website',
    category: 'Government Web',
    description: 'Frontend development for the Dukcapil (Civil Registry) website. Focused on delivering a seamless, responsive user experience for public services.',
    tech: ['React.js', 'Next.js', 'TailwindCSS', 'TypeScript'],
    color: '#ff6584',
    status: 'Production',
    at: 'Saka Sakti Inovasi',
  },
  {
    title: 'Mobile Attendance App',
    category: 'Mobile',
    description: 'React Native attendance application for employees of the Papua Pegunungan Government. Features geolocation-based check-in and reporting.',
    tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    color: '#43e97b',
    status: 'Production',
    at: 'Saka Sakti Inovasi',
  },
  {
    title: 'E-Commerce Enabler Backend',
    category: 'Backend',
    description: 'Resilient backend infrastructure for an e-commerce enabler application. Optimized database interactions and implemented TypeScript for enhanced type safety.',
    tech: ['Node.js', 'PostgreSQL', 'TypeScript', 'Docker', 'Express.js'],
    color: '#ffd166',
    status: 'Production',
    at: 'Zegasoft',
  },
  {
    title: 'Kemenkes Awarding Dashboard',
    category: 'Web App',
    description: 'Web application supporting Kemenkes (Ministry of Health) Awarding initiative with real-time data visualization dashboards.',
    tech: ['React.js', 'Node.js', 'SQL'],
    color: '#a29bfe',
    status: 'Delivered',
    at: 'Goks Indonesia',
  },
  {
    title: 'Event Registration with Barcode',
    category: 'Web App',
    description: 'Web application supporting event registration with QR/barcode scanning features for PAM Jaya Management Trainee program.',
    tech: ['React.js', 'Node.js', 'SQL'],
    color: '#f77f00',
    status: 'Delivered',
    at: 'Goks Indonesia',
  },
  {
    title: 'PETA Foundation – Employee Info System',
    category: 'Web App',
    description: 'Comprehensive employee information system and company profile website. Also prepared and executed a digitalization roadmap for the organization.',
    tech: ['React.js', 'TailwindCSS', 'MongoDB'],
    color: '#00b4d8',
    status: 'Delivered',
    at: 'Bakrie Center Foundation',
  },
  {
    title: 'Brand Audit Mobile App',
    category: 'Mobile',
    description: 'Mobile application for streamlining the waste audit process. Conducted user education and training for the Ddrocare foundation.',
    tech: ['Kotlin', 'Java', 'SQL'],
    color: '#e63946',
    status: 'Delivered',
    at: 'Bakrie Center Foundation',
  },
];

const statusColors: Record<string, string> = {
  Production: '#43e97b',
  Delivered: '#6c63ff',
  'In Progress': '#ffd166',
};

export default function ProjectsPage() {
  return (
    <div>
      <p className="section-label fade-up-1 mb-2">Work</p>
      <h1 className="display-font fade-up-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 8 }}>
        Featured <span className="gradient-text">Projects</span>
      </h1>
      <p className="fade-up-3 mb-12" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 500 }}>
        A collection of real-world projects built across different organizations and domains.
      </p>

      <div className="grid md:grid-cols-2 gap-5 fade-up-4">
        {projects.map((project, i) => (
          <div key={i} className="card" style={{ padding: '24px 26px', position: 'relative', overflow: 'hidden' }}>
            {/* Color accent bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, ${project.color}, ${project.color}40)`,
            }} />

            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{
                    fontSize: '0.65rem',
                    padding: '2px 8px',
                    borderRadius: 6,
                    background: `${project.color}15`,
                    color: project.color,
                    fontFamily: 'DM Mono, monospace',
                    border: `1px solid ${project.color}30`,
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    fontSize: '0.65rem',
                    padding: '2px 8px',
                    borderRadius: 6,
                    background: `${statusColors[project.status] ?? '#888'}15`,
                    color: statusColors[project.status] ?? '#888',
                    fontFamily: 'DM Mono, monospace',
                    border: `1px solid ${statusColors[project.status] ?? '#888'}30`,
                  }}>
                    {project.status}
                  </span>
                </div>
                <h3 className="display-font" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 2, fontFamily: 'DM Mono, monospace' }}>
                  @ {project.at}
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 14 }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
