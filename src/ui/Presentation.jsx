import Button from "./Button";

function Presentation() {
  return (
    <div className="h-screen w-full bg-black-main">
      <div className="text-white  w- h-full space-y-8 pt-36 pl-48">
        <h1 className="text-8xl font-extrabold uppercase tracking-wider">
          Archil <br /> milorava.
        </h1>
        <h4 className="text-4xl font-bold">frontend developer</h4>
        <div className="flex gap-4">
          <Button>github</Button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
