"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const api = "http://localhost:8000";

export async function login(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const data = schema.safeParse(rawFormData);

  if (!data.success) {
    return { ...prevState, errors: data.error.flatten().fieldErrors };
  }

  const res = await fetch(`${api}/login`);
  const json = await res.json();

  if (!res.ok) {
    return { ...prevState, errors: { api: json.message } };
  }

  redirect("/");
}

export async function register(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const schema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 character(s)" })
      .max(128, { message: "Password must contain at most 128 character(s)" })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must contain at least 1 uppercase letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must contain at least 1 lowercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must contain at least 1 number",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "Password must contain at least 1 special character",
      }),
  });

  const data = schema.safeParse(rawFormData);

  if (!data.success) {
    return { ...prevState, errors: data.error.flatten().fieldErrors };
  }

  const res = await fetch(`${api}/login`);
  const json = await res.json();

  if (!res.ok) {
    return { ...prevState, errors: { api: json.message } };
  }

  redirect("/");
}
