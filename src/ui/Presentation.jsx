import { useState, useEffect } from "react";

function Presentation() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://i.ibb.co/xXBqyrj/image.png"; 
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className={`h-screen w-full bg-cover bg-center text-green-main font-baskervville relative transition-opacity duration-500 ${
        imageLoaded
          ? "bg-[url(https://i.ibb.co/xXBqyrj/image.png)] opacity-100"
          : "bg-gray-200 opacity-50"
      }`}
    >
      <img src="" alt="" loading="lazy" />
      <div className="w- h-full space-y-8 pt-36 pl-48">
        <h1 className="text-8xl font-extrabold uppercase tracking-wider">
          Archil <br /> milorava.
        </h1>
        <h4 className="text-[37px] font-bold">FullStack Developer</h4>
        <div className="flex gap-4">
          <a
            href="https://github.com/Archil-Milorava"
            className="h-8 w-28 border-2 text-center tracking-widest font-semibold hover:opacity-70 transition-all border-green-main"
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
