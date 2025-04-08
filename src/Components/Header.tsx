const Header = () => {
  return (
    <div className="w-full bg-gray-400 flex justify-between mx-14">
      <div>
        <h1 className="text-2xl font-bold ">FakeStroe</h1>
      </div>
      <div className="flex items-center gap-4">
        <a href="#profile">Profile</a>
        <a href="#Logout">Logout</a>
      </div>
    </div>
  );
};

export default Header;
