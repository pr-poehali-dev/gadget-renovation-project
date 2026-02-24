import { useState } from "react"
import { motion } from "framer-motion"
import { Settings, LogOut, ChevronRight } from "lucide-react"
import { RANKS, getRank } from "@/data/ranks"

const USER_XP = 3400

const STATUS_OPTIONS = ["🎣 На рыбалке", "🔍 Ищу клад", "🏕️ В походе", "🏠 Дома", "📍 В городе"]

interface ProfilePageProps {
  onLogout: () => void
}

export function ProfilePage({ onLogout }: ProfilePageProps) {
  const [status, setStatus] = useState(STATUS_OPTIONS[0])
  const [showStatusPicker, setShowStatusPicker] = useState(false)
  const rank = getRank(USER_XP)
  const nextRank = RANKS[RANKS.findIndex(r => r.min === rank.min) + 1]
  const progress = nextRank ? ((USER_XP - rank.min) / (nextRank.min - rank.min)) * 100 : 100

  const glassCard = {
    background: "rgba(255,255,255,0.55)",
    backdropFilter: "blur(40px) saturate(180%)",
    WebkitBackdropFilter: "blur(40px) saturate(180%)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.08)",
    border: "1px solid rgba(255,255,255,0.5)",
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50" />
      <motion.div className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(15,118,110,0.2) 0%, transparent 70%)", filter: "blur(70px)", top: "-10%", left: "-10%" }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)", filter: "blur(80px)", bottom: "-10%", right: "-10%" }}
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative z-10 w-full max-w-[380px] rounded-[24px] p-7"
        style={glassCard as React.CSSProperties}
      >
        {/* Аватар */}
        <div className="flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="relative cursor-pointer">
            <div className="w-24 h-24 rounded-full overflow-hidden"
              style={{ boxShadow: `0 0 0 3px ${rank.color}55, 0 0 0 5px rgba(255,255,255,0.8), 0 8px 24px rgba(0,0,0,0.12)` }}>
              <img src="/placeholder-user.jpg" alt="Профиль"
                className="w-full h-full object-cover"
                onError={e => { (e.target as HTMLImageElement).src = "https://cdn.poehali.dev/projects/b4be5d4c-5235-40aa-bcdd-92cc51c0ded8/files/876ee2b9-b91e-4e0b-ab2c-2802a65c8374.jpg" }} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center border-2 border-white">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </motion.div>

          <h2 className="mt-3 text-lg font-bold text-gray-800">Виктор_Рыбак</h2>
          <p className="text-xs text-gray-500">Самара • рыбак с 2019</p>
        </div>

        {/* Статус */}
        <div className="mt-4 relative">
          <button onClick={() => setShowStatusPicker(!showStatusPicker)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-gray-700 font-medium"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.6)" }}>
            <span>{status}</span>
            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${showStatusPicker ? "rotate-90" : ""}`} />
          </button>
          {showStatusPicker && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-1 left-0 right-0 rounded-xl overflow-hidden z-20"
              style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.6)" }}>
              {STATUS_OPTIONS.map(s => (
                <button key={s} onClick={() => { setStatus(s); setShowStatusPicker(false) }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-teal-50 transition-colors ${s === status ? "text-teal-600 font-semibold" : "text-gray-700"}`}>
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Рейтинг — кристаллы */}
        <div className="mt-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.5)" }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-base font-bold" style={{ color: rank.color }}>{rank.emoji} {rank.title}</span>
              <p className="text-xs text-gray-500 mt-0.5">{USER_XP.toLocaleString()} / {nextRank ? nextRank.min.toLocaleString() : "25 000"} XP</p>
            </div>
            <div className="flex gap-0.5 flex-wrap justify-end max-w-[120px]">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="text-base leading-none"
                  style={{ opacity: i < rank.crystals ? 1 : 0.18, filter: i < rank.crystals ? `drop-shadow(0 0 3px ${rank.color})` : "none" }}>
                  💎
                </span>
              ))}
            </div>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.07)" }}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${rank.color}88, ${rank.color})` }} />
          </div>
          <div className="flex justify-between mt-1.5">
            <p className="text-[10px] text-gray-400">Следующий: {nextRank ? nextRank.title : "Максимальный ранг!"}</p>
            <p className="text-[10px] font-semibold" style={{ color: rank.color }}>{rank.crystals} 💎</p>
          </div>
        </div>

        {/* Таблица рангов */}
        <details className="mt-3">
          <summary className="text-xs text-teal-600 font-semibold cursor-pointer hover:text-teal-800 select-none px-1">
            Все ранги системы ▸
          </summary>
          <div className="mt-2 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.5)" }}>
            <div className="max-h-48 overflow-y-auto">
              {RANKS.map(r => (
                <div key={r.min} className={`flex items-center justify-between px-3 py-1.5 text-xs ${r.min === rank.min ? "font-bold" : ""}`}
                  style={{ background: r.min === rank.min ? `${r.color}18` : "transparent" }}>
                  <span>{r.emoji} <span style={{ color: r.min === rank.min ? r.color : "#6b7280" }}>{r.title}</span></span>
                  <span className="text-gray-400">{r.min.toLocaleString()} XP · {r.crystals}💎</span>
                </div>
              ))}
            </div>
          </div>
        </details>

        {/* Настройки и выход */}
        <div className="mt-4 space-y-2">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 font-medium"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.6)" }}>
            <Settings className="w-4 h-4 text-teal-600" strokeWidth={1.75} />
            Настройки профиля
            <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
          </motion.button>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,200,200,0.5)" }}>
            <LogOut className="w-4 h-4" strokeWidth={1.75} />
            Выйти из аккаунта
          </motion.button>
        </div>
      </motion.div>
    </main>
  )
}
