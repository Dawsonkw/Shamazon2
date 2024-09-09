function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white/80 text-xs flex justify-between items-center h-[45px] shadow-md">
      <p className="text-xs font-bold tracking-wide ml-4">
        &copy; Dawson Woolley
      </p>
      <p className="text-sm font-medium text-gray-300 mr-4">
        <span className="block">Thousands served</span>
        <span className="block text-center">since 1990</span>
      </p>
    </div>
  );
}

export default Footer;
