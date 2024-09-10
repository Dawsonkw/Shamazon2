function Login() {
  return (
    <div className="rounded-lg bg-gray-400 w-[33vw] flex flex-col justify-center items-center mx-auto mt-4 h-[850px]">
      <h1 className="text-3xl font-bold underline">Login</h1>
      <p className="text-lg">Enter your name and password to log in.</p>
      <form className="flex flex-col gap-y-4 mt-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded-md shadow-lg text-center"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-md shadow-lg text-center"
        />
        <button
          className="p-2 rounded-md shadow-lg bg-blue-400"
          onClick={() => {
            //Add functionality for login with Django endpoint after you make API
          }}
        >
          Login
        </button>

        <button
          className="p-2 rounded-md shadow-lg bg-blue-400"
          onClick={() => {
            //Add functionality for account Registration with Django endpoint after you make API
          }}
        >
          Sign up
        </button>
        <p className="text-xs text-center">Don't have an account? Sign up.</p>
      </form>
    </div>
  );
}

export default Login;
