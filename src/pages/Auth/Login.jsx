import React from "react";
import PublicLayout from "../../components/Layout/PublicLayout";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg";
import { useForm } from "react-hook-form";
import { API_END_POINTS } from "../../utils/api-endpoint";
import { useMutationCreate } from "../../hooks/crud/mutation.create";
import { USER_DETAILS } from "../../utils/constants";
import { APP_ROUTES } from "../../utils/app-routes";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { getValues, register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: login } = useMutationCreate(API_END_POINTS.login);

  const handleLogin = () => {
    navigate(APP_ROUTES.recommend);
  };

  const onSubmit = handleSubmit((values) => {
    console.log("values", values);
    login(values, {
      onSuccess(data) {
        console.log("data", data);
        setIsError(false);
        localStorage.setItem(USER_DETAILS, JSON.stringify(data));
        navigate(APP_ROUTES.recommend);
      },
      onError(error) {
        console.log("error", error?.response?.data?.message);
        if (error?.response?.data?.error_code === "NEED_PASSWORD_RESET") {
          navigate(APP_ROUTES.forgot_password);
        }
        setIsError(true);
        setErrorMessage(error?.response?.data?.message);
      },
    });
  });
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
            {...register("username")}
          />
          <input
            className="border-solid border-primary border mt-10 p-2.5 uppercase w-80 text-solidLove"
            placeholder="password"
            type={"password"}
            {...register("password")}
          />
        </form>
        <span
          className={"cursor-pointer text-solidLove"}
          onClick={() => navigate(APP_ROUTES.forgot_password)}
        >
          Forgot Password?
        </span>
        <div className="mt-10">
          <button
            onClick={onSubmit}
            className="border border-solid border-black w-80 p-2.5 uppercase text-black"
          >
            Login
          </button>
        </div>
        {isError ? (
          <div
            className={"bg-red  px-4 py-3 rounded relative mt-10 border-r-6"}
          >
            <span className={"text-black"}>{errorMessage}</span>
          </div>
        ) : null}
      </div>
    </PublicLayout>
  );
};

export default LoginPage;
