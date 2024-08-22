function Navbar() {
  return (
    <div className="bg-[#050505] flex items-center h-20 justify-between px-28">
      <img
        src="../../public/logo.png"
        alt="logo"
        className="h-[40px] w-[131.89px]"
      />
      <div className="border border-[#fdf6ed] h-10 w-20 rounded-sm text-[#fdf6ed] flex items-center justify-center ">
        <p>EN</p>
      </div>
    </div>
  );
}

export default Navbar;
