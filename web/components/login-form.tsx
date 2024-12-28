"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useActionState } from "react";
import { login } from "@/app/actions";

const initialState = {
  message: "",
  errors: {},
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <Input
        type="email"
        name="email"
        placeholder="user@mail.com"
        className="w-full"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full"
      />
      {state?.errors?.email && (
        <p className="text-red-500">{state?.errors?.email}</p>
      )}
      {Array.isArray(state?.errors?.password)
        ? state.errors.password.map((error: string, index: number) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))
        : state?.errors?.password && (
            <p className="text-red-500">{state.errors.password}</p>
          )}
      {state?.errors?.api && (
        <p className="text-red-500">{state?.errors?.api}</p>
      )}
      <Button
        effect="gooeyLeft"
        className="w-full"
        type="submit"
        disabled={pending}
      >
        Login Now
      </Button>
    </form>
  );
}
