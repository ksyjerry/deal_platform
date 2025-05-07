"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

export async function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "폼 데이터가 없습니다." };
  }

  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { error: "이메일과 비밀번호는 필수 입력 항목입니다." };
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("로그인 에러:", error);
      return { error: error.message };
    }

    revalidatePath("/", "layout");
    redirect("/");
  } catch (error) {
    console.error("로그인 처리 중 예외 발생:", error);
    return { error: "로그인 처리 중 오류가 발생했습니다." };
  }
}

export async function signUp(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "폼 데이터가 없습니다." };
  }

  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const userType = formData.get("userType") as string;

    if (!email || !password) {
      return { error: "이메일과 비밀번호는 필수 입력 항목입니다." };
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || "",
          company: company || "",
          phone: phone || "",
          user_type: userType || "seller",
        },
      },
    });

    if (error) {
      console.error("회원가입 에러:", error);
      return { error: error.message };
    }

    revalidatePath("/", "layout");
    redirect("/");
  } catch (error) {
    console.error("회원가입 처리 중 예외 발생:", error);
    return { error: "회원가입 처리 중 오류가 발생했습니다." };
  }
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
