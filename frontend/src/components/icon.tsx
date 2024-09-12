import logo from "../assets/shamazonLogoEdit2.png";

function Icon() {
  return (
    <>
      <img src={logo} alt="logo" className="object-fit max-h-[200px]" />
      <div>
        <h1 className="text-white/70 text-4xl font-semibold ml-4">Shamazon</h1>
        <p className="text-white/70 text-lg ml-4">Electronics for the Masses</p>
      </div>
    </>
  );
}

export default Icon;
