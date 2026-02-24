export interface Rank {
  min: number
  max: number
  title: string
  emoji: string
  crystals: number
  color: string
}

export const RANKS: Rank[] = [
  { min: 0,     max: 999,   title: "Новичок",         emoji: "🪨", crystals: 1,  color: "#9ca3af" },
  { min: 1000,  max: 1999,  title: "Следопыт",        emoji: "💎", crystals: 2,  color: "#60a5fa" },
  { min: 2000,  max: 2999,  title: "Рыболов",         emoji: "💎", crystals: 3,  color: "#34d399" },
  { min: 3000,  max: 3999,  title: "Знаток мест",     emoji: "💎", crystals: 4,  color: "#4ade80" },
  { min: 4000,  max: 4999,  title: "Охотник",         emoji: "💠", crystals: 5,  color: "#2dd4bf" },
  { min: 5000,  max: 5999,  title: "Разведчик",       emoji: "💠", crystals: 6,  color: "#22d3ee" },
  { min: 6000,  max: 6999,  title: "Бывалый",         emoji: "💠", crystals: 7,  color: "#38bdf8" },
  { min: 7000,  max: 7999,  title: "Мастер снасти",   emoji: "🔷", crystals: 8,  color: "#818cf8" },
  { min: 8000,  max: 8999,  title: "Кладоискатель",   emoji: "🔷", crystals: 9,  color: "#a78bfa" },
  { min: 9000,  max: 9999,  title: "Хранитель карт",  emoji: "🔷", crystals: 10, color: "#c084fc" },
  { min: 10000, max: 10999, title: "Ветеран",         emoji: "🏆", crystals: 11, color: "#f472b6" },
  { min: 11000, max: 11999, title: "Первопроходец",   emoji: "🏆", crystals: 12, color: "#fb7185" },
  { min: 12000, max: 12999, title: "Морской волк",    emoji: "🏆", crystals: 13, color: "#f97316" },
  { min: 13000, max: 13999, title: "Золотой крюк",    emoji: "🌟", crystals: 14, color: "#fbbf24" },
  { min: 14000, max: 14999, title: "Речной страж",    emoji: "🌟", crystals: 15, color: "#f59e0b" },
  { min: 15000, max: 15999, title: "Мастер-следопыт", emoji: "🌟", crystals: 16, color: "#eab308" },
  { min: 16000, max: 16999, title: "Легенда рек",     emoji: "💫", crystals: 17, color: "#84cc16" },
  { min: 17000, max: 17999, title: "Хранитель тайн",  emoji: "💫", crystals: 18, color: "#22c55e" },
  { min: 18000, max: 18999, title: "Великий ловец",   emoji: "💫", crystals: 19, color: "#10b981" },
  { min: 19000, max: 19999, title: "Архивариус",      emoji: "🔱", crystals: 20, color: "#0ea5e9" },
  { min: 20000, max: 20999, title: "Повелитель вод",  emoji: "🔱", crystals: 21, color: "#6366f1" },
  { min: 21000, max: 21999, title: "Страж природы",   emoji: "🔱", crystals: 22, color: "#8b5cf6" },
  { min: 22000, max: 22999, title: "Хозяин угодий",   emoji: "👑", crystals: 23, color: "#d946ef" },
  { min: 23000, max: 23999, title: "Мифический лов",  emoji: "👑", crystals: 24, color: "#ec4899" },
  { min: 24000, max: 25000, title: "Легенда РыбаКоп", emoji: "👑", crystals: 25, color: "#f43f5e" },
]

export function getRank(xp: number): Rank {
  return RANKS.find(r => xp >= r.min && xp <= r.max) ?? RANKS[0]
}
