import React from "react";
import PublicLayout from "../../components/Layout/PublicLayout";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg";
import { useForm } from "react-hook-form";
import { API_END_POINTS } from "../../utils/api-endpoint";
import { useMutationCreate } from "../../hooks/crud/mutation.create";
import { USER_DETAILS } from "../../utils/constants";
import { APP_ROUTES } from "../../utils/app-routes";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { getValues, register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: requestResetPassword } = useMutationCreate(
    API_END_POINTS.forgot_password,
  );

  const onSubmit = handleSubmit((values) => {
    requestResetPassword(values, {
      onSuccess(data) {
        // setIsError(false);
        // localStorage.setItem(USER_DETAILS, JSON.stringify(data));
        // navigate(APP_ROUTES.recommend);
        console.log("data", data);
      },
      onError(error) {
        console.log("error", error?.response?.data?.message);
      },
    });
  });
  return (
    <PublicLayout>
      <div className="flex w-1/2 justify-between">
        <Logo />
        <span className="uppercase text-6xl text-primary font-extralight">
          Client Reset Password
        </span>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <form className="flex flex-col">
          <input
            className="border-solid border-primary border p-2.5 uppercase w-80 text-solidLove"
            placeholder="Username"
            {...register("email")}
          />
        </form>
        <div className="mt-10">
          <button
            onClick={onSubmit}
            className="border border-solid border-black w-80 p-2.5 uppercase text-black"
          >
            Reset Password
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

export default ForgotPassword;
