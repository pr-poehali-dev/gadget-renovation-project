import { useState } from "react"
import { LinkBioPage } from "./pages/LinkBioPage"
import { AuthPage } from "./pages/AuthPage"
import { ProfilePage } from "./pages/ProfilePage"
import { CookieBanner } from "./components/CookieBanner"
import { DocModal } from "./components/DocModal"

type Page = "home" | "auth" | "profile"
type DocType = "privacy" | "terms" | "rules"

function App() {
  const [page, setPage] = useState<Page>("home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeDoc, setActiveDoc] = useState<DocType | null>(null)

  const handleAuth = () => {
    setIsLoggedIn(true)
    setPage("profile")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setPage("home")
  }

  const showDoc = (doc: DocType) => setActiveDoc(doc)

  return (
    <>
      {page === "home" && (
        <LinkBioPage onLogin={() => setPage("auth")} />
      )}
      {page === "auth" && (
        <AuthPage onAuth={handleAuth} onShowDoc={showDoc} />
      )}
      {page === "profile" && isLoggedIn && (
        <ProfilePage onLogout={handleLogout} />
      )}

      <CookieBanner onShowDoc={showDoc} />
      <DocModal doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </>
  )
}

export default App
