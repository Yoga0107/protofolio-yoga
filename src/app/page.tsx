import SideNav from './components/SideNav';

export default function Home() {
  return (
    <div className="flex">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Hello</h1>
        <p className="mt-4">
          I'm <span className="font-bold">Yoga Arditya Putra</span><br />
          <span className="text-lg">Software Engineer - Application Developer</span>
        </p>
        <p className="mt-6 text-justify">
        Hello, I'm Yoga Arditya Putra, a dedicated application developer with a passion for crafting both web and mobile applications. With experience spanning across both frontend and backend development, I focus on delivering robust and scalable solutions. My expertise includes working with technologies such as PostgreSQL, React Native, React.js, Tailwind CSS, REST APIs, WordPress, PHP, Laravel, and more. Whether it's building a seamless user experience or developing efficient backend systems, I thrive on turning ideas into reality. If you're seeking a reliable and skilled developer, let's connect to create something exceptional together.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Let’s Connect
        </button>
      </main>
    </div>
  );
}
