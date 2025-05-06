import type { Metadata } from "next"
import SignInForm from "@/components/sign-in-form"

export const metadata: Metadata = {
  title: "로그인 | PwC Korea M&A Platform",
  description: "PwC Korea M&A Platform 계정으로 로그인하세요",
}

export default function SignInPage() {
  return <SignInForm />
}
