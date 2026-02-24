import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Fish } from "lucide-react"

type AuthMode = "login" | "register" | "forgot"

interface AuthPageProps {
  onAuth: () => void
  onShowDoc: (doc: "privacy" | "terms" | "rules") => void
}

export function AuthPage({ onAuth, onShowDoc }: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>("login")
  const [showPass, setShowPass] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [forgotSent, setForgotSent] = useState(false)

  const glassCard = {
    background: "rgba(255,255,255,0.55)",
    backdropFilter: "blur(40px) saturate(180%)",
    WebkitBackdropFilter: "blur(40px) saturate(180%)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.08)",
    border: "1px solid rgba(255,255,255,0.5)",
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.6)",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
  }

  const btnStyle = {
    background: "linear-gradient(135deg, #0f766e 0%, #065f46 100%)",
    boxShadow: "0 4px 16px rgba(15,118,110,0.35)",
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50" />

      <motion.div className="fixed z-0 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(15,118,110,0.22) 0%, transparent 70%)", filter: "blur(60px)", top: "-10%", left: "-10%" }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="fixed z-0 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)", filter: "blur(80px)", bottom: "-10%", right: "-15%" }}
        animate={{ x: [0, -60, 0], y: [0, -50, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="fixed z-0 w-[350px] h-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(161,122,55,0.1) 0%, transparent 70%)", filter: "blur(50px)", top: "50%", left: "10%" }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />

      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-10 w-full max-w-[380px]"
        style={glassCard as React.CSSProperties}
      >
        <div className="rounded-[20px] p-8">
          {/* Логотип */}
          <div className="flex flex-col items-center mb-7">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3" style={{ boxShadow: "0 0 0 3px rgba(15,118,110,0.3), 0 8px 24px rgba(0,0,0,0.1)" }}>
              <img src="https://cdn.poehali.dev/projects/b4be5d4c-5235-40aa-bcdd-92cc51c0ded8/files/876ee2b9-b91e-4e0b-ab2c-2802a65c8374.jpg" alt="РыбаКоп" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">РыбаКоп</h1>
            <p className="text-xs text-teal-600 mt-0.5 font-medium">
              {mode === "login" && "Добро пожаловать обратно!"}
              {mode === "register" && "Создай аккаунт рыбака-следопыта"}
              {mode === "forgot" && "Восстановление пароля"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* ВХОД */}
            {mode === "login" && (
              <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" strokeWidth={1.75} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400/50"
                      style={inputStyle as React.CSSProperties} />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" strokeWidth={1.75} />
                    <input type={showPass ? "text" : "password"} placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400/50"
                      style={inputStyle as React.CSSProperties} />
                    <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <button onClick={() => setMode("forgot")} className="text-xs text-teal-600 hover:text-teal-800 mt-2 block ml-auto">Забыли пароль?</button>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={onAuth}
                  className="w-full mt-4 py-3 rounded-xl text-white text-sm font-semibold tracking-wide"
                  style={btnStyle as React.CSSProperties}>
                  Войти
                </motion.button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Нет аккаунта?{" "}
                  <button onClick={() => setMode("register")} className="text-teal-600 font-semibold hover:underline">Зарегистрироваться</button>
                </p>
              </motion.div>
            )}

            {/* РЕГИСТРАЦИЯ */}
            {mode === "register" && (
              <motion.div key="register" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" strokeWidth={1.75} />
                    <input type="text" placeholder="Никнейм" value={name} onChange={e => setName(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400/50"
                      style={inputStyle as React.CSSProperties} />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" strokeWidth={1.75} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400/50"
                      style={inputStyle as React.CSSProperties} />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" strokeWidth={1.75} />
                    <input type={showPass ? "text" : "password"} placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400/50"
                      style={inputStyle as React.CSSProperties} />
                    <button onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl text-xs text-gray-600 space-y-2"
                  style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.5)" }}>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                      className="mt-0.5 accent-teal-600 shrink-0" />
                    <span>
                      Я принимаю{" "}
                      <button onClick={() => onShowDoc("terms")} className="text-teal-600 font-semibold hover:underline">Пользовательское соглашение</button>,{" "}
                      <button onClick={() => onShowDoc("privacy")} className="text-teal-600 font-semibold hover:underline">Политику конфиденциальности</button>{" "}
                      и{" "}
                      <button onClick={() => onShowDoc("rules")} className="text-teal-600 font-semibold hover:underline">Правила сообщества</button>
                    </span>
                  </label>
                </div>

                <motion.button whileHover={{ scale: agreed ? 1.02 : 1 }} whileTap={{ scale: agreed ? 0.97 : 1 }}
                  onClick={() => agreed && onAuth()}
                  className="w-full mt-4 py-3 rounded-xl text-white text-sm font-semibold tracking-wide transition-opacity"
                  style={{ ...btnStyle as React.CSSProperties, opacity: agreed ? 1 : 0.5 }}>
                  Создать аккаунт
                </motion.button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Уже есть аккаунт?{" "}
                  <button onClick={() => setMode("login")} className="text-teal-600 font-semibold hover:underline">Войти</button>
                </p>
              </motion.div>
            )}

            {/* ВОССТАНОВЛЕНИЕ */}
            {mode === "forgot" && (
              <motion.div key="forgot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {!forgotSent ? (
                  <>
                    <p className="text-xs text-gray-500 mb-4 text-center">Введите email — пришлём ссылку для сброса пароля</p>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600" strokeWidth={1.75} />
                      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                        className="w-full pl-9 pr-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-400/50"
                        style={inputStyle as React.CSSProperties} />
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      onClick={() => setForgotSent(true)}
                      className="w-full mt-4 py-3 rounded-xl text-white text-sm font-semibold"
                      style={btnStyle as React.CSSProperties}>
                      Отправить ссылку
                    </motion.button>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                    <div className="text-4xl mb-3">📬</div>
                    <p className="text-sm font-semibold text-gray-800">Письмо отправлено!</p>
                    <p className="text-xs text-gray-500 mt-1">Проверьте почту и перейдите по ссылке</p>
                  </motion.div>
                )}
                <button onClick={() => { setMode("login"); setForgotSent(false) }}
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-teal-600 mt-4 mx-auto">
                  <ArrowLeft className="w-3.5 h-3.5" /> Вернуться ко входу
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 pt-4 border-t border-white/40 flex items-center justify-center gap-1 text-xs text-gray-400">
            <Fish className="w-3.5 h-3.5 text-teal-500" strokeWidth={1.75} />
            <span>РыбаКоп — рыбаки и следопыты России</span>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
