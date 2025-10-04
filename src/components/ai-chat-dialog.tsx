import { useState } from "react"
import { Leaf, Send, Loader2, Satellite, MapPin } from "lucide-react"

interface AIChatDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  locationDescription: string
}

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AIChatDialog({ open, onOpenChange, locationDescription }: AIChatDialogProps) {
  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim() || isLoading) return

    const userMessage = prompt.trim()
    setPrompt("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const aiResponse = `Com base nos dados de satélite da região de Caxias do Sul, posso fornecer informações detalhadas sobre "${userMessage}". A área monitorada apresenta características específicas da Mata Atlântica de altitude, com índice NDVI de 0.68 indicando vegetação saudável e ativa. Os dados mostram padrões de floração consistentes com o período sazonal atual.`

      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-w-2xl max-h-[80vh] w-full mx-4 flex flex-col rounded-2xl border border-green-200 dark:border-green-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10 -z-10 rounded-2xl" />
        
        {/* Header */}
        <div className="p-6 border-b border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Assistente IA</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Análise de Vegetação e Floração
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Descrição da Área */}
        <div className="mx-6 mt-4 p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Área Analisada</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{locationDescription}</p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 px-6 py-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <Satellite className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Faça uma pergunta sobre a vegetação, floração ou dados de satélite desta área
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-xl p-4 ${
                      message.role === "user" 
                        ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg" 
                        : "bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white backdrop-blur-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-green-600" />
                    <span className="text-sm">Analisando dados de satélite...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 border-t border-green-200 dark:border-green-800">
          <div className="flex gap-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Digite sua pergunta sobre a vegetação local..."
              className="flex-1 min-h-[60px] px-3 py-2 resize-none bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl backdrop-blur-sm focus:border-green-500 dark:focus:border-green-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
              disabled={isLoading}
              rows={3}
            />
            <button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className="h-[60px] w-[60px] flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 border border-green-200 dark:border-green-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
  )
}