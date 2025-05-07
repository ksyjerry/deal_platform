import type { Metadata } from "next";
import SignUpForm from "@/components/sign-up-form";

export const metadata: Metadata = {
  title: "회원가입 | PwC Korea M&A Platform",
  description: "PwC Korea M&A Platform 계정 생성하기",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
