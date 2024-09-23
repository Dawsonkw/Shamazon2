import splashLogo from "../assets/shamazonDriver.webp";

function SplashLogo() {
  return (
    <>
      <img
        src={splashLogo}
        alt="Splash Logo"
        className="object-fit max-h-[800px] border-4 border-black my-8 mx-8"
      />
    </>
  );
}

export default SplashLogo;
