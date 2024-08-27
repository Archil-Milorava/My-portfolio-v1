import Button from "./Button";

function Presentation() {
  return (
    <div className="h-screen w-full bg-[url(https://i.ibb.co/xXBqyrj/image.png)]  bg-cover bg-center text-green-main font-baskervville relative">



      <div className="  w- h-full space-y-8 pt-36 pl-48">
        <h1 className=" text-8xl font-extrabold uppercase tracking-wider">
          Archil <br /> milorava.
        </h1>
        <h4 className="text-[37px] font-bold">frontend developer</h4>
        <div className="flex gap-4">
          <Button><a href="https://github.com/Archil-Milorava" target="_blank">github</a></Button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
