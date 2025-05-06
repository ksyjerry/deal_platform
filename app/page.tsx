import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import QuickAccessButtons from "@/components/quick-access-buttons"

export const metadata: Metadata = {
  title: "삼일회계법인 M&A Platform | 국내 최고의 전문가 네트워크와 함께하는 M&A 플랫폼",
  description: "삼일회계법인의 딜 전문가가 직접 검토한 검증된 매물과 투자자 네트워크를 통한 신뢰할 수 있는 M&A 플랫폼",
}

export default function Home() {
  return (
    <>
      <ClientPage />
      <QuickAccessButtons />
    </>
  )
}
