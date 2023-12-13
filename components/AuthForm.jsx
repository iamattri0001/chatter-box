"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./inputs/Input";

const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN");
  const [loading, setLoading] = useState(true);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGITER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    setLoading(true);

    if (variant === "REGISTER") {
      // server action register
    } else if (variant === "LOGIN") {
      // nextAuth login
    }
  };

  const socialAction = (action) => {
    setLoading(true);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        {variant === "REGISTER" && (
          <Input id="name" label={"Name"} register={register} errors={errors} />
        )}

        <Input
          id="emal"
          type={"email"}
          label={"Email Address"}
          register={register}
          errors={errors}
        />

        <Input
          id="password"
          type={"password"}
          label={"Password"}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default AuthForm;
