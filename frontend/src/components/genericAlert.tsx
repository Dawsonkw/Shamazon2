import alertLogo from "../assets/404Alert.png";

function GenericAlert() {
  return (
    <>
      <img
        src={alertLogo}
        alt="alert Logo"
        className="object-fit h-[700px] mx-auto border-black my-8"
      />
      <div className="flex flex-col justify-center ">
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl text-center">
          404
        </h1>
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl text-center">
          Page Not Found
        </h1>
      </div>
    </>
  );
}

export default GenericAlert;
