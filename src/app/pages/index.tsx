
import SideNav from "../components/SideNav";

export default function Home() {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Hello</h1>
        {/* ...rest of your content */}
      </main>
    </div>
  );
}
