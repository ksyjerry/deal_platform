"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Building,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function SignUpForm() {
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    company: "",
    phone: "",
    userType: "seller", // Default to seller
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [showEmailVerificationDialog, setShowEmailVerificationDialog] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAgreementChange = (name, checked) => {
    setAgreements((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요.";
    }

    // Company validation
    if (!formData.company) {
      newErrors.company = "회사명을 입력해주세요.";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "전화번호를 입력해주세요.";
    }

    // Agreement validation
    if (!agreements.terms || !agreements.privacy) {
      newErrors.agreements = "필수 약관에 동의해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setServerError("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            user_type: formData.userType,
          },
        },
      });

      if (error) {
        setServerError(error.message);
        console.error("회원가입 오류:", error);
      } else {
        console.log("회원가입 성공:", data);
        setShowEmailVerificationDialog(true);
      }
    } catch (error) {
      console.error("회원가입 처리 중 예외 발생:", error);
      setServerError("회원가입 처리 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // 카카오 로그인 처리 함수
  const handleKakaoSignIn = async () => {
    try {
      setIsLoading(true);
      setServerError("");

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "kakao",
        options: {
          redirectTo:
            "https://pomwxcnjmafwvgdcyrdj.supabase.co/auth/v1/callback",
        },
      });

      if (error) {
        setServerError(error.message);
        console.error("카카오 로그인 오류:", error);
      }
    } catch (error) {
      console.error("카카오 로그인 처리 중 예외 발생:", error);
      setServerError("카카오 로그인 처리 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 flex flex-col flex-1 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="https://crystalpng.com/wp-content/uploads/2025/05/pwc-logo.png"
                alt="PwC Logo"
                className="h-12 w-auto"
              />
              <div className="ml-4 border-l pl-4 flex flex-col justify-center border-gray-300">
                <span className="text-xl font-bold text-gray-900">
                  M&A Platform
                </span>
                <span className="text-xs text-gray-500">삼일회계법인</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Form Header */}
            <div className="relative h-16 bg-[#F4511E] flex items-center justify-center">
              <Link
                href="/"
                className="absolute left-4 text-white hover:text-white/80 transition-colors"
                aria-label="홈으로 돌아가기"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold text-white">회원가입</h1>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-2">
                  <Label className="text-gray-700">회원 유형</Label>
                  <RadioGroup
                    name="userType"
                    defaultValue="seller"
                    className="flex space-x-4"
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, userType: value }))
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="seller" id="seller" />
                      <Label htmlFor="seller" className="cursor-pointer">
                        매도자
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="investor" id="investor" />
                      <Label htmlFor="investor" className="cursor-pointer">
                        투자자
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    이메일 주소 <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`pl-10 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    비밀번호 <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`pl-10 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "비밀번호 숨기기" : "비밀번호 표시"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password ? (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs mt-1">
                      8자 이상의 비밀번호를 입력해주세요.
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-700">
                    비밀번호 확인 <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`pl-10 ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "비밀번호 숨기기"
                          : "비밀번호 표시"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    이름 <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="홍길동"
                      className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">
                    회사명 <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="회사명을 입력해주세요"
                      className={`pl-10 ${
                        errors.company ? "border-red-500" : ""
                      }`}
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    전화번호 <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="010-1234-5678"
                      className={`pl-10 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Agreements */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start">
                    <Checkbox
                      id="terms"
                      checked={agreements.terms}
                      onCheckedChange={(checked) =>
                        handleAgreementChange("terms", checked === true)
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="terms"
                      className="ml-2 text-sm text-gray-600"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <Link
                        href="/terms"
                        className="text-[#F4511E] hover:underline"
                      >
                        서비스 이용약관
                      </Link>
                      에 동의합니다.
                    </Label>
                  </div>

                  <div className="flex items-start">
                    <Checkbox
                      id="privacy"
                      checked={agreements.privacy}
                      onCheckedChange={(checked) =>
                        handleAgreementChange("privacy", checked === true)
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="privacy"
                      className="ml-2 text-sm text-gray-600"
                    >
                      <span className="text-red-500 mr-1">*</span>
                      <Link
                        href="/privacy"
                        className="text-[#F4511E] hover:underline"
                      >
                        개인정보 처리방침
                      </Link>
                      에 동의합니다.
                    </Label>
                  </div>

                  <div className="flex items-start">
                    <Checkbox
                      id="marketing"
                      checked={agreements.marketing}
                      onCheckedChange={(checked) =>
                        handleAgreementChange("marketing", checked === true)
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="marketing"
                      className="ml-2 text-sm text-gray-600"
                    >
                      마케팅 정보 수신에 동의합니다. (선택)
                    </Label>
                  </div>

                  {errors.agreements && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.agreements}
                    </p>
                  )}
                </div>

                {/* 서버 에러 메시지 */}
                {serverError && (
                  <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-3 rounded">
                    {serverError}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#F4511E] hover:bg-[#D73C11] text-white rounded-md py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "처리 중..." : "회원가입"}
                </Button>
              </form>

              {/* Social Login Options */}
              <div className="mt-6">
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      간편 회원가입
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="py-6 px-10 bg-[#FEE500] hover:bg-[#FDD800] border-[#FEE500] text-[#3A1D1D] font-medium"
                    onClick={handleKakaoSignIn}
                    disabled={isLoading}
                  >
                    <img
                      src="/kakao.png"
                      alt="Kakao"
                      className="h-5 w-5 mr-2"
                    />
                    카카오로 시작하기
                  </Button>
                </div>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="px-6 py-4 bg-gray-50 text-center">
              <p className="text-sm text-gray-600">
                이미 계정이 있으신가요?{" "}
                <Link
                  href="/signin"
                  className="font-medium text-[#F4511E] hover:underline"
                >
                  로그인
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 border-t border-gray-200 fixed bottom-0 left-0 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img
                src="https://crystalpng.com/wp-content/uploads/2025/05/pwc-logo.png"
                alt="PwC Logo"
                className="h-8 w-auto"
              />
              <p className="ml-4 text-sm text-gray-500">
                © {new Date().getFullYear()} PwC. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                개인정보 처리방침
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                이용약관
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Verification Dialog */}
      <Dialog
        open={showEmailVerificationDialog}
        onOpenChange={setShowEmailVerificationDialog}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-lg">
              이메일 인증이 필요합니다
            </DialogTitle>
            <DialogDescription className="text-center">
              <div className="flex flex-col items-center py-4">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <p className="text-base">
                  {formData.email}로 인증 메일이 발송되었습니다.
                </p>
                <p className="mt-2">
                  이메일에 있는 링크를 클릭하여 계정 인증을 완료해주세요.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              className="bg-[#F4511E] hover:bg-[#D73C11] text-white"
              onClick={() => {
                setShowEmailVerificationDialog(false);
                router.push("/");
              }}
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
