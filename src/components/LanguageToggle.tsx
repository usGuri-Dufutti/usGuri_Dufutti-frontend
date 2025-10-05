import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import "flag-icons/css/flag-icons.min.css"

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isPt = i18n.language === "pt-BR"

  const toggle = () => {
    const next = isPt ? "en" : "pt-BR"
    i18n.changeLanguage(next)
    try {
      localStorage.setItem("i18nextLng", next)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button onClick={toggle} variant="outline" size="sm" aria-label="Toggle language" className="inline-flex items-center gap-2">
      <span className={isPt ? "fi fi-br" : "fi fi-us"} aria-hidden="true"></span>
      {isPt ? "PT" : "EN"}
    </Button>
  )
}


