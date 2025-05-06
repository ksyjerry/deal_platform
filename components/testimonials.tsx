"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Quote, Star, ChevronRight, ChevronLeft, Building, User, Award } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      content:
        "3개월 만에 원하던 매물을 찾고 딜을 성사시켰어요. 삼일회계법인의 전문가들이 모든 과정을 함께해 주셔서 안심하고 진행할 수 있었습니다.",
      name: "전략적 투자자 A사 CFO",
      company: "제조업 대기업",
      industry: "제조",
      dealSize: "1,200억 원",
      rating: 5,
      image: "/placeholder.svg?key=u8m72",
      logo: "/placeholder.svg?key=u8m73",
    },
    {
      id: 2,
      content:
        "매각 전 재무 리스크 진단까지 받을 수 있어 안심됐습니다. 예상보다 높은 가치로 회사를 매각할 수 있었고, 세무 이슈도 사전에 해결할 수 있었습니다.",
      name: "중소기업 대표 B씨",
      company: "IT 서비스 기업",
      industry: "IT 서비스",
      dealSize: "350억 원",
      rating: 5,
      image: "/placeholder.svg?key=u8m74",
      logo: "/placeholder.svg?key=u8m75",
    },
    {
      id: 3,
      content:
        "투자 대상 기업의 실사 과정에서 발견하기 어려운 잠재적 리스크를 미리 파악할 수 있었습니다. 전문가의 조언이 없었다면 큰 문제가 될 뻔했습니다.",
      name: "벤처캐피탈 C사 대표",
      company: "투자 전문 기업",
      industry: "금융 투자",
      dealSize: "500억 원",
      rating: 5,
      image: "/placeholder.svg?key=u8m76",
      logo: "/placeholder.svg?key=u8m77",
    },
  ]

  const successMetrics = [
    { label: "성공적인 딜 성사율", value: "94%" },
    { label: "평균 거래 소요 기간", value: "4.5개월" },
    { label: "고객 만족도", value: "96%" },
  ]

  // Company logos for success cases
  const companyLogos = [
    {
      name: "삼성전자",
      industry: "전자/IT",
      logo: "/company-logos/samsung.png",
      query: "Samsung Electronics logo blue",
    },
    {
      name: "현대자동차",
      industry: "자동차",
      logo: "/company-logos/hyundai.png",
      query: "Hyundai Motor Company logo",
    },
    {
      name: "SK이노베이션",
      industry: "에너지/화학",
      logo: "/company-logos/sk.png",
      query: "SK Innovation logo",
    },
    {
      name: "네이버",
      industry: "IT/플랫폼",
      logo: "/company-logos/naver.png",
      query: "Naver Corporation logo green",
    },
    {
      name: "카카오",
      industry: "IT/플랫폼",
      logo: "/company-logos/kakao.png",
      query: "Kakao Corporation logo yellow",
    },
    {
      name: "LG화학",
      industry: "화학/소재",
      logo: "/company-logos/lg.png",
      query: "LG Chem logo red",
    },
    {
      name: "롯데케미칼",
      industry: "화학/소재",
      logo: "/company-logos/lotte.png",
      query: "Lotte Chemical logo",
    },
    {
      name: "포스코",
      industry: "철강/금속",
      logo: "/company-logos/posco.png",
      query: "POSCO logo blue",
    },
    {
      name: "CJ제일제당",
      industry: "식품/바이오",
      logo: "/company-logos/cj.png",
      query: "CJ CheilJedang logo",
    },
    {
      name: "신한금융그룹",
      industry: "금융",
      logo: "/company-logos/shinhan.png",
      query: "Shinhan Financial Group logo blue",
    },
    {
      name: "KB금융그룹",
      industry: "금융",
      logo: "/company-logos/kb.png",
      query: "KB Financial Group logo yellow",
    },
    {
      name: "쿠팡",
      industry: "유통/물류",
      logo: "/company-logos/coupang.png",
      query: "Coupang logo orange",
    },
  ]

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">실제 성공 사례 / 고객 리뷰</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            삼일회계법인 M&A 플랫폼을 통해 성공적인 딜을 경험한 고객들의 이야기입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="lg:col-span-5"
          >
            <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">성공 지표</h3>
                  <Award className="h-6 w-6 text-[#F4511E]" />
                </div>

                <div className="space-y-6 mb-8">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{metric.label}</span>
                      <span className="text-2xl font-bold text-[#F4511E]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">삼일회계법인 M&A 플랫폼</span>은 매년 100건 이상의 성공적인 딜을
                  성사시키고 있습니다.
                </p>
                <div className="flex items-center text-[#F4511E] font-medium cursor-pointer">
                  <span>더 많은 성공 사례 보기</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-7"
          >
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="absolute top-8 left-8 h-12 w-12 rounded-full bg-[#F4511E]/10 flex items-center justify-center z-10">
                <Quote className="h-6 w-6 text-[#F4511E]" />
              </div>

              <div className="p-8 pt-24">
                <div className="flex mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-2xl font-light text-gray-800 mb-8 italic">"{testimonials[activeIndex].content}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-500 flex items-center">
                        <Building className="h-3 w-3 mr-1" />
                        {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-500 mb-1">거래 규모</div>
                    <div className="font-bold text-[#F4511E]">{testimonials[activeIndex].dealSize}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">{testimonials[activeIndex].industry} 산업</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={handlePrevious}
                    className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">주요 성공 사례 기업</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 h-20 rounded-md flex flex-col items-center justify-center p-4 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={`/abstract-geometric-shapes.png?height=60&width=120&query=${encodeURIComponent(company.query)}`}
                  alt={`${company.name} 로고`}
                  className="max-h-10 max-w-full object-contain"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">{company.industry}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-[#F4511E] font-medium"
            >
              <span>모든 성공 사례 보기</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
