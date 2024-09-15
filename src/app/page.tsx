"use client"; // Mark this as a Client Component
import SideNav from "../components/SideNav";

export default function Home() {
  return (
    <div className="flex bg-gray-900 text-gray-100 min-h-screen">
      <SideNav />
      <main className="flex-1 p-8 ml-16"> {/* Adjusted margin-left */}
        <h1 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Hello
        </h1>
        <p className="mt-2 text-lg animate__animated animate__fadeIn">
          I&apos;m <span className="font-bold text-blue-400">Yoga Arditya Putra</span>
          <br />
          <span className="text-xl text-gray-400">Software Engineer - Application Developer</span>
        </p>
        <p className="mt-6 text-justify text-gray-300 leading-relaxed animate__animated animate__fadeIn">
          Hello, I&apos;m Yoga Arditya Putra, a dedicated application developer with a passion for crafting both web and mobile applications. 
          With experience spanning across both frontend and backend development, I focus on delivering robust and scalable solutions. 
          My expertise includes working with technologies such as PostgreSQL, React Native, React.js, Tailwind CSS, REST APIs, WordPress, PHP, Laravel, and more. 
          Whether it&apos;s building a seamless user experience or developing efficient backend systems, I thrive on turning ideas into reality. 
          If you&apos;re seeking a reliable and skilled developer, let&apos;s connect to create something exceptional together.
        </p>

        <div className="mt-8 flex items-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors duration-300 rounded-lg shadow-lg transform hover:scale-105 animate__animated animate__pulse animate__delay-2s">
            Let&apos;s Connect
          </button>
          <span className="ml-4 text-2xl animate__animated animate__fadeIn animate__delay-1s">🤝</span>
        </div>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 animate__animated animate__fadeIn">
            <li>🔹 Frontend Development (React.js, Tailwind CSS)</li>
            <li>🔹 Backend Development (Node.js, PHP, Laravel)</li>
            <li>🔹 Database Management (PostgreSQL, MySQL)</li>
            <li>🔹 API Development (RESTful APIs)</li>
            <li>🔹 Mobile Development (React Native)</li>
            <li>🔹 Version Control (Git, GitHub)</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Projects</h2>
          <ul className="space-y-4 text-gray-300 animate__animated animate__fadeIn">
            <li>
              <strong>Project Management Tool</strong> - A web application for managing projects and tasks efficiently.
            </li>
            <li>
              <strong>eCommerce Platform</strong> - An online store built with React.js and Laravel for seamless shopping experiences.
            </li>
            <li>
              <strong>Mobile Fitness App</strong> - A React Native application that provides users with workout plans and tracking features.
            </li>
          </ul>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">Testimonials</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 text-gray-300 animate__animated animate__fadeIn">
            <p>&quot;Yoga is an exceptional developer. His attention to detail and ability to solve problems quickly made a significant impact on our projects.&quot;</p>
            <footer className="mt-2 text-gray-400">- Client Name</footer>
          </blockquote>
        </section>
      </main>
    </div>
  );
}
