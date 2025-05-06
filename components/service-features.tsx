"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bell, BarChart4, ListFilter, Calendar, Link } from "lucide-react"

export default function ServiceFeatures() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardAnimation = {
    hidden: { opacity: 0, y: 70, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -15,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  const sellerFeatures = [
    {
      title: "안전한 매물 비공개 등록",
      description: "기업 정보를 100% 비공개로 등록하고 관리할 수 있는 안전한 시스템",
      icon: <Shield className="h-6 w-6 text-[#F4511E]" />,
    },
    {
      title: "관심 투자자 알림",
      description: "매물에 관심을 보인 검증된 투자자 정보를 실시간으로 확인",
      icon: <Bell className="h-6 w-6 text-[#F4511E]" />,
    },
    {
      title: "전문가의 사전 기업가치 평가",
      description: "삼일회계법인 전문가의 객관적인 기업가치 평가 지원",
      icon: <BarChart4 className="h-6 w-6 text-[#F4511E]" />,
    },
  ]

  const investorFeatures = [
    {
      title: "산업별 추천 매물 리스트",
      description: "투자 관심 분야에 맞는 검증된 매물을 맞춤형으로 추천",
      icon: <ListFilter className="h-6 w-6 text-[#F4511E]" />,
    },
    {
      title: "나에게 맞는 매물 알림",
      description: "투자 조건에 맞는 새로운 매물이 등록되면 실시간 알림 제공",
      icon: <Calendar className="h-6 w-6 text-[#F4511E]" />,
    },
    {
      title: "비밀유지 하에 딜 상담 연결",
      description: "철저한 비밀유지 계약(NDA) 하에 안전한 딜 상담 진행",
      icon: <Link className="h-6 w-6 text-[#F4511E]" />,
    },
  ]

  return (
    <section id="service-features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            >
              서비스 기능 요약
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mb-8"
            >
              매도자와 투자자 모두를 위한 맞춤형 서비스를 제공합니다. 삼일회계법인의 M&A 플랫폼은 세계적인 수준의 기술과
              전문성을 결합하여 가장 효율적인 딜 매칭을 지원합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="h-10 w-10 rounded-full bg-[#F4511E]/10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                >
                  <Shield className="h-5 w-5 text-[#F4511E]" />
                </motion.div>
              </div>
              <p className="text-gray-700 font-medium">
                삼일회계법인의 M&A 플랫폼은 업계 최고 수준의 보안과 검증 시스템을 갖추고 있습니다.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            className="rounded-lg overflow-hidden shadow-md relative h-[400px]"
          >
            <img
              src="/placeholder.svg?key=u8m70"
              alt="PwC professionals analyzing business data"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <motion.div
              className="absolute bottom-0 left-0 p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-xl font-bold">최첨단 기술과 전문 인력의 만남</p>
              <p className="text-sm opacity-90">삼일회계법인 전문가와 AI 기술의 협업으로 최적의 딜 매칭을 제공합니다</p>
            </motion.div>
          </motion.div>
        </div>

        <Tabs defaultValue="seller" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-transparent border-b border-gray-200 rounded-none p-0 h-auto">
            <TabsTrigger
              value="seller"
              className="text-lg py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#F4511E] data-[state=active]:text-black data-[state=active]:bg-transparent relative overflow-hidden group"
            >
              <span>매도자를 위한 기능</span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-[#F4511E]/20"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </TabsTrigger>
            <TabsTrigger
              value="investor"
              className="text-lg py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[#F4511E] data-[state=active]:text-black data-[state=active]:bg-transparent relative overflow-hidden group"
            >
              <span>투자자를 위한 기능</span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-[#F4511E]/20"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seller">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {sellerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardAnimation}
                  whileHover="hover"
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-[#F4511E]/10 flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3, type: "spring" }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="investor">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {investorFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardAnimation}
                  whileHover="hover"
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-[#F4511E]/10 flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3, type: "spring" }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
