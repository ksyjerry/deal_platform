import type { Metadata } from "next";
import SignUpForm from "@/components/sign-up-form";

export const metadata: Metadata = {
  title: "회원가입 | 삼일회계법인 M&A 플랫폼",
  description: "삼일회계법인 M&A 플랫폼 계정 생성하기",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
