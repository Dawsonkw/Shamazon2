function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4 py-8 border border-black -mt-[50px] z-50 relative bg-white rounded-lg h-[1000px]">
      {children}
    </main>
  );
}

export default Container;
