import SideNav from './components/SideNav';

const HomePage = () => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 p-4">
        <h1>Hello 👋,</h1>
        <h2>I&apos;m Oktaviardi Pratama Putra</h2>
        <p>
          Hi, I&apos;m Oktaviardi Pratama, a passionate individual Frontend developer with a strong focus on startups, products, UI, UX, and delivering high-quality development. Based in Bekasi, I offer freelance services as both an individual and as part of a team. I have a wide range of skills, including HTML5, CSS3, VueJS, ReactJs, Laravel, JQuery, Ionic, Python (Flask, Django), MongoDB, Mongoose, Postgres SQL, Socket IO, Firebase, GraphQL, and Redis. If you&apos;re in need of a reliable and skilled developer, feel free to contact me. I&apos;m confident that we can work together to achieve great things.
        </p>
        <button className="bg-blue-500 text-white p-2 rounded">Let&apos;s Connect</button>
      </main>
    </div>
  );
};

export default HomePage;
