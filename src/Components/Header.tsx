const Header = () => {
  return (
    <div className="w-full bg-gray-400 flex justify-between p-5 z-50">
      <div>
        <a href="/" className="text-2xl font-bold ">
          FakeStroe
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#profile">Profile</a>
        <a href="#Logout">Logout</a>
      </div>
    </div>
  );
};

export default Header;
