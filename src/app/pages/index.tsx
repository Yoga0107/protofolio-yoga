import SideNav from '../components/SideNav';

const Home = () => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Hello 👋,</h1>
        <p className="mt-4">
          I'm <span className="font-bold">Oktaviardi Pratama Putra</span><br />
          <span className="text-lg">Software Engineer - Frontend</span>
        </p>
        <p className="mt-6 text-justify">
          Hi, I'm Oktaviardi Pratama, a passionate individual Frontend developer with a strong focus on startups, products, UI, UX, and delivering high-quality development. Based in Bekasi, I offer freelance services as both an individual and as part of a team. I have a wide range of skills, including HTML5, CSS3, VueJS, ReactJs, Laravel, JQuery, Ionic, Python (Flask, Django), MongoDB, Mongoose, Postgres SQL, Socket IO, Firebase, GraphQL, and Redis. If you're in need of a reliable and skilled developer, feel free to contact me. I'm confident that we can work together to achieve great things.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Let’s Connect
        </button>
      </main>
    </div>
  );
};

export default Home;
