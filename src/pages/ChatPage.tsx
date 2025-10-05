import { useState } from "react"
import { Leaf, Send, Loader2, Satellite, MapPin } from "lucide-react"
import { useLocation } from "react-router-dom"
import { sendChatMessage } from "@/services/api"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const location = useLocation()
  const { t } = useTranslation()
  
  const locationState = location.state as { locationDescription?: string; areaId?: number } || {}
  const locationDescription = locationState.locationDescription || "Área de monitoramento de vegetação"
  const areaId = locationState.areaId

  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim() || isLoading || !areaId) return

    const userMessage = prompt.trim()
    setPrompt("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await sendChatMessage(areaId, userMessage)
      setMessages((prev) => [...prev, { role: "assistant", content: response.answer }])
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t("chat.error"),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10">
      
      <div className="container mx-auto max-w-4xl py-4 px-4">
        
        {/* Card Principal - Ajustado para melhor responsividade */}
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-800 shadow-2xl w-full">
          
          {/* Header do Chat */}
          <div className="p-4 sm:p-6 border-b border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{t("chat.assistant")}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t("chat.subtitle")}
                </p>
              </div>
            </div>
          </div>

          {/* Descrição da Área */}
          <div className="mx-4 sm:mx-6 mt-4 p-3 sm:p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{t("chat.analyzedArea")}</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed break-words">
              {locationDescription || "-"}
            </p>
          </div>

          {/* Chat Messages - Altura ajustável */}
          <div className="px-4 sm:px-6 py-4 h-[50vh] min-h-[300px] max-h-[500px] overflow-y-auto">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Satellite className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm px-4">
                    {t("chat.emptyPrompt")}
                  </p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[90%] sm:max-w-[80%] rounded-xl p-3 sm:p-4 ${
                        message.role === "user" 
                          ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg" 
                          : "bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white backdrop-blur-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed break-words">{message.content}</p>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl p-3 sm:p-4 flex items-center gap-3 backdrop-blur-sm max-w-[90%] sm:max-w-[80%]">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-green-600" />
                      <span className="text-sm">{t("chat.analyzing")}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Form - Simplificado sem botões visíveis */}
          <form onSubmit={handleSubmit} className="px-4 sm:px-6 pb-4 sm:pb-6 pt-4 border-t border-green-200 dark:border-green-800">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Digite sua pergunta sobre a vegetação local..."
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl backdrop-blur-sm focus:border-green-500 dark:focus:border-green-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!prompt.trim() || isLoading || !areaId}
                className="h-[60px] w-[60px] flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 border border-green-200 dark:border-green-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}