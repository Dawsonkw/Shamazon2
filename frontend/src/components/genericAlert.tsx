import alertLogo from "../assets/404Alert.png";

function GenericAlert() {
  return (
    <>
      <img
        src={alertLogo}
        alt="alert Logo"
        className="object-fit h-[700px] mx-auto border-black my-8"
      />
      <h1 className="text-3xl font-bold tracking-tight lg:text-6xl text-center">
        You have found the echos of the ghost in the machine. 404
      </h1>
    </>
  );
}

export default GenericAlert;
