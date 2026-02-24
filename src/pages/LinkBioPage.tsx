import { motion } from "framer-motion"
import { ProfileSection } from "@/components/ProfileSection"
import { LinkCard } from "@/components/LinkCard"
import { SocialFooter } from "@/components/SocialFooter"
import { MessageCircle, Send, MapPin, Users, FileText, Shield, ScrollText } from "lucide-react"

interface LinkBioPageProps {
  onLogin?: () => void
}

const links = [
  {
    title: "Войти в приложение",
    description: "Чаты и стены по городам",
    href: "#",
    icon: Users,
  },
  {
    title: "Чаты по городам",
    description: "Найди рыбаков и кладоискателей рядом",
    href: "#",
    icon: MessageCircle,
  },
  {
    title: "Стены по городам",
    description: "Отчёты, находки, места рыбалки",
    href: "#",
    icon: MapPin,
  },
  {
    title: "Telegram-сообщество",
    description: "Обсуждения и новости проекта",
    href: "#",
    icon: Send,
  },
  {
    title: "Пользовательское соглашение",
    description: "Правила использования сервиса",
    href: "#",
    icon: ScrollText,
  },
  {
    title: "Политика конфиденциальности",
    description: "Как мы защищаем ваши данные",
    href: "#",
    icon: Shield,
  },
  {
    title: "Правила сообщества",
    description: "Кодекс рыбака и кладоискателя",
    href: "#",
    icon: FileText,
  },
]

const socials = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "Чат" },
  { icon: MapPin, href: "#", label: "Карта" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 25,
    },
  },
}

export function LinkBioPage({ onLogin }: LinkBioPageProps) {
  return (
    <main className="relative min-h-screen px-6 py-10 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50" />

      {/* Animated gradient orbs — природа, вода, земля */}
      <motion.div
        className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(15, 118, 110, 0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6, 95, 70, 0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "30%",
          right: "-20%",
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "-5%",
          left: "20%",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(161, 122, 55, 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          top: "60%",
          left: "-5%",
        }}
        animate={{
          x: [0, 40, 80, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 30% 80%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 80% 40%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 60% 60%, rgba(255,255,255,0.4), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(255,255,255,0.4), transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed z-0 pointer-events-none"
        style={{
          width: "200%",
          height: "100px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          transform: "rotate(-35deg)",
          top: "20%",
          left: "-50%",
        }}
        animate={{
          left: ["-50%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4,
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-[400px] w-full flex flex-col flex-1 justify-between"
      >
        <motion.div variants={itemVariants} className="pt-2">
          <ProfileSection
            name="РыбаКоп"
            bio="Социальная сеть для рыбаков и кладоискателей 🎣 Чаты и стены по городам России"
            imageUrl="https://cdn.poehali.dev/projects/b4be5d4c-5235-40aa-bcdd-92cc51c0ded8/files/876ee2b9-b91e-4e0b-ab2c-2802a65c8374.jpg"
          />
          {onLogin && (
            <motion.div className="mt-4 flex justify-center" variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                onClick={onLogin}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #0f766e 0%, #065f46 100%)", boxShadow: "0 4px 16px rgba(15,118,110,0.35)" }}>
                <LogIn className="w-4 h-4" strokeWidth={1.75} />
                Войти / Регистрация
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="space-y-3 py-8" variants={containerVariants}>
          {links.map((link) => (
            <motion.div key={link.title} variants={itemVariants}>
              <LinkCard {...link} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="pb-2">
          <SocialFooter socials={socials} copyright="2026 РыбаКоп — Всё для рыбаков и кладоискателей" />
        </motion.div>
      </motion.div>
    </main>
  )
}