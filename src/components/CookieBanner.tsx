import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"

interface CookieBannerProps {
  onShowDoc: (doc: "privacy" | "terms" | "rules") => void
}

export function CookieBanner({ onShowDoc }: CookieBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("rybaKopCookies")
    if (!accepted) setTimeout(() => setVisible(true), 800)
  }, [])

  const accept = () => {
    localStorage.setItem("rybaKopCookies", "1")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-[420px]"
        >
          <div className="rounded-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.12)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}>
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="flex-1">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Мы используем куки для работы сервиса, аналитики и удобства. Продолжая использовать сайт, вы соглашаетесь с{" "}
                  <button onClick={() => onShowDoc("privacy")} className="text-teal-600 font-semibold hover:underline">
                    Политикой конфиденциальности
                  </button>
                  .
                </p>
                <div className="flex gap-2 mt-3">
                  <button onClick={accept}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #0f766e, #065f46)", boxShadow: "0 4px 12px rgba(15,118,110,0.3)" }}>
                    Принять
                  </button>
                  <button onClick={accept}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50">
                    Только необходимые
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
