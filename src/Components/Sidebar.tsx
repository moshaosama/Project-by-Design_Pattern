const Sidebar = () => {
  return (
    <div className=" h-[86.8vh] p-10">
      <div className="flex flex-col gap-10">
        <a href="/" className="text-xl font-semibold ">
          Home
        </a>

        <a href="/carts" className="text-xl font-semibold ">
          Carts
        </a>

        <a href="/comments" className="text-xl font-semibold ">
          Comments
        </a>

        <a href="/logout" className="text-xl font-semibold ">
          LogOut
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
