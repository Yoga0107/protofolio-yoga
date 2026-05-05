"use client";
import { Mail, Phone, MapPin, GitHub, Linkedin } from 'react-feather';

const socials = [
  {
    label: 'Email',
    value: 'yogaputra0107@gmail.com',
    href: 'mailto:yogaputra0107@gmail.com',
    icon: Mail,
    color: '#6c63ff',
    desc: 'Best way to reach me for project inquiries or collaborations.',
  },
  {
    label: 'GitHub',
    value: 'github.com/yogaarditya',
    href: 'https://github.com/yogaarditya',
    icon: GitHub,
    color: '#f0f0ff',
    desc: 'Check out my open source contributions and personal projects.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yoga-arditya-putra',
    href: 'https://linkedin.com/in/yoga-arditya-putra',
    icon: Linkedin,
    color: '#0a66c2',
    desc: 'Connect professionally and view my full career history.',
  },
  {
    label: 'Phone',
    value: '+62 812-9909-0466',
    href: 'tel:+628129909046',
    icon: Phone,
    color: '#43e97b',
    desc: 'For urgent inquiries — available during Jakarta business hours.',
  },
  {
    label: 'Location',
    value: 'Jakarta, Indonesia',
    href: 'https://maps.google.com/?q=Jakarta,Indonesia',
    icon: MapPin,
    color: '#ff6584',
    desc: 'Based in Jakarta (residing in Bekasi, West Java). Open to remote work globally.',
  },
];

export default function SocialMediaPage() {
  return (
    <div>
      <p className="section-label fade-up-1 mb-2">Connect</p>
      <h1 className="display-font fade-up-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 8 }}>
        Let&apos;s <span className="gradient-text">Connect</span>
      </h1>
      <p className="fade-up-3 mb-12" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 480 }}>
        I&apos;m open to freelance, full-time opportunities, and interesting collaborations. Feel free to reach out!
      </p>

      <div className="flex flex-col gap-4 fade-up-4">
        {socials.map(({ label, value, href, icon: Icon, color, desc }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="card"
            style={{ padding: '22px 26px', textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 20 }}
          >
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color: color,
              flexShrink: 0,
            }}>
              <Icon size={20} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p className="mono-font" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {label}
              </p>
              <p className="display-font" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4, wordBreak: 'break-all' }}>
                {value}
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* CTA card */}
      <div className="mt-10 fade-up-5" style={{
        padding: '36px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.1))',
        border: '1px solid rgba(108,99,255,0.25)',
        textAlign: 'center',
      }}>
        <h2 className="display-font" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 10 }}>
          Open to Opportunities
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20, maxWidth: 420, margin: '0 auto 20px' }}>
          Looking for a dedicated fullstack developer? I&apos;m available for remote and on-site roles.
          Let&apos;s build something exceptional together.
        </p>
        <a
          href="mailto:yogaputra0107@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 28px',
            borderRadius: 12,
            background: 'var(--accent-primary)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          <Mail size={16} />
          Send me an email
        </a>
      </div>
    </div>
  );
}
