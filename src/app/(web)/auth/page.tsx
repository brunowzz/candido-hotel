"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type DefaultFormDataType = {
  email: string;
  name: string;
  password: string;
};

const defaultFormData: DefaultFormDataType = {
  email: "",
  name: "",
  password: "",
};

export default function Auth() {
  const [formData, setFormData] =
    useState<DefaultFormDataType>(defaultFormData);

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session) push("/");
  }, [push, session]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSignIn() {
    try {
      await signIn();
      push("/");
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Sucesso. Por favor, efetue o login.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro, não conseguimos criar o seu usuário.");
    } finally {
      setFormData(defaultFormData);
    }
  }

  return (
    <section className="container mx-auto">
      <div className="mx-auto w-80 space-y-4 p-6 sm:p-8 md:w-[70%] md:space-y-6">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Crie uma conta!
          </h1>
          <p>OU</p>
          <span className="flex items-center">
            <AiFillGithub
              onClick={handleSignIn}
              className="mr-3 cursor-pointer text-4xl text-black dark:text-white"
            />{" "}
            |
            <FcGoogle
              onClick={handleSignIn}
              className="ml-3 cursor-pointer text-4xl"
            />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="nome@gmail.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Jon Fernandes"
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            min={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-tertiary-dark px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
          >
            Cadastre-se
          </button>
        </form>

        <button onClick={handleSignIn} className="text-blue-700 underline">
          Entrar
        </button>
      </div>
    </section>
  );
}
