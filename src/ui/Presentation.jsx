function Presentation() {
  return (
    <div
      className={`h-screen w-full bg-[url(https://i.ibb.co/xXBqyrj/image.png)]  bg-cover bg-center text-green-main font-baskervville relative`}
    >
      <img src="" alt="" loading="lazy" />

      <div className="  w- h-full space-y-8 pt-36 pl-48">
        <h1 className=" text-8xl font-extrabold uppercase tracking-wider">
          Archil <br /> milorava.
        </h1>
        <h4 className="text-[37px] font-bold">frontend developer</h4>
        <div className="flex gap-4">
          <a
            href="https://github.com/Archil-Milorava"
            className="h-8 w-28 border-2 text-center  tracking-widest font-semibold  hover:opacity-70 transition-all  border-green-main"
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
