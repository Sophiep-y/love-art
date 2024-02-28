import React from "react";
import PublicLayout from "../../components/Layout/PublicLayout";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/recommends");
  };
  return (
    <PublicLayout>
      <div className="flex w-1/2 justify-between">
        <Logo />
        <span className="uppercase text-6xl text-primary font-extralight">
          Client Login
        </span>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col">
          <input
            className="border-solid border-primary border p-2.5 uppercase w-80 text-solidLove"
            placeholder="Username"
          />
          <input
            className="border-solid border-primary border mt-10 p-2.5 uppercase w-80 text-solidLove"
            placeholder="password"
          />
        </form>
        <div className="mt-10">
          <button
            onClick={handleLogin}
            className="border border-solid border-black w-80 p-2.5 uppercase text-black"
          >
            Login
          </button>
        </div>
      </div>
    </PublicLayout>
  );
};

export default LoginPage;
