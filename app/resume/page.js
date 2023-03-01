import SideBar from "../../components/sidebar/Sidebar";
import Project from "../../components/projects/Project";

function Resume() {
  return (
    <main className="flex h-screen w-screen justify-between space-x-10 items-stretch p-40 text-black">
      <div className="w-[20%] bg-white min-h-full rounded-lg shadow-2xl shadow-purple outline outline-gray-500">
        {" "}
        <SideBar />
      </div>
      <div className=" w-full bg-white min-h-full rounded-lg shadow-2xl shadow-purple outline outline-gray-500">
        <Project />
      </div>
    </main>
  );
}

export default Resume;
