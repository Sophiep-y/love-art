import React, { useEffect } from "react";
import PublicLayout from "../../components/Layout/PublicLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/svg";
import { useForm } from "react-hook-form";
import { API_END_POINTS } from "../../utils/api-endpoint";
import { useMutationCreate } from "../../hooks/crud/mutation.create";
import { USER_DETAILS } from "../../utils/constants";
import { APP_ROUTES } from "../../utils/app-routes";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { getValues, register, handleSubmit, setValue } = useForm({
    defaultValues: {
      new_password: "",
      confirm_password: "",
      otp: "",
      email: "",
    },
  });
  const otp = new URLSearchParams(location.search).get("otp");
  const email = new URLSearchParams(location.search).get("email");

  const { mutate: requestResetPassword } = useMutationCreate(
    API_END_POINTS.reset_password,
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

  useEffect(() => {
    setValue("otp", otp);
    setValue("email", email);
  }, [otp, email]);
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
            placeholder="New Password"
            {...register("new_password")}
          />

          <input
            className="border-solid border-primary border mt-10 p-2.5 uppercase w-80 text-solidLove"
            placeholder="Confirm New Password"
            {...register("confirm_password")}
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

export default ResetPassword;
