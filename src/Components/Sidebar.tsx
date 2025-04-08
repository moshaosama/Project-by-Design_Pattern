const Sidebar = () => {
  return (
    <div className="bg-gray-700 h-full p-10">
      <div className="flex flex-col gap-10">
        <a href="/home" className="text-xl font-semibold ">
          Home
        </a>

        <a href="/home" className="text-xl font-semibold ">
          About
        </a>

        <a href="/home" className="text-xl font-semibold ">
          Content
        </a>

        <a href="/home" className="text-xl font-semibold ">
          LogOut
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
