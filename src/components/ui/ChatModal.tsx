"use client"

import { useState, useRef, useEffect } from "react"
import { Leaf, Send, Loader2, Satellite, MapPin, X, ArrowLeft } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface ChatModalProps {
  locationDescription?: string
  onClose: () => void
  showGoBack?: boolean
  onGoBack?: () => void
}

function ChatModal({ locationDescription = "Área de monitoramento de vegetação", onClose, showGoBack = false, onGoBack }: ChatModalProps) {
  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Refs for auto-scrolling and dynamic textarea height
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Effect for auto-scrolling to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Effect for adjusting textarea height dynamically based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto" // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [prompt])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim() || isLoading) return

    const userMessage = prompt.trim()
    setPrompt("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      // --- MOCK API CALL ---
      // In a real application, you would replace this with an actual API call.
      // Example: const response = await fetch('/api/chat', { ... });
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const aiResponse = `Com base nos dados de satélite da região de Caxias do Sul, posso fornecer informações detalhadas sobre "${userMessage}". A área monitorada apresenta características específicas da Mata Atlântica de altitude, com índice NDVI de 0.68 indicando vegetação saudável e ativa.`
      
      setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle Enter key for submission (Shift+Enter for new line)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Create a synthetic FormEvent to pass to handleSubmit
      const syntheticEvent = {
        ...e,
        preventDefault: () => {},
        stopPropagation: () => {},
        currentTarget: e.currentTarget.form as EventTarget & HTMLFormElement,
        target: e.target,
      } as unknown as React.FormEvent<HTMLFormElement>;
      handleSubmit(syntheticEvent);
    }
  }

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Chat Card */}
      <div className="relative w-full max-w-3xl mx-4 flex flex-col h-[90vh] max-h-[700px]">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-800 shadow-2xl flex flex-col flex-1">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-green-200 dark:border-green-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {showGoBack && onGoBack && (
                <button
                  className="text-gray-700 dark:text-white hover:bg-green-100 dark:hover:bg-green-800 p-1 rounded-full mr-2"
                  onClick={onGoBack}
                  aria-label="Voltar"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
                  Assistente IA
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Análise de Vegetação e Floração
                </p>
              </div>
            </div>
            <button
              className="text-gray-700 dark:text-white hover:bg-green-100 dark:hover:bg-green-800 p-1 rounded-full"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 px-4 sm:px-6 py-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Satellite className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm px-4">
                    Faça uma pergunta sobre a vegetação, floração ou dados de satélite desta área
                  </p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[90%] sm:max-w-[80%] rounded-xl p-3 sm:p-4 ${message.role === "user" ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg" : "bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white backdrop-blur-sm"}`}>
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
                      <span className="text-sm">Analisando dados de satélite...</span>
                    </div>
                  </div>
                </div>
              )}
              {/* Invisible div to mark the end of messages for auto-scrolling */}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
           {/* Location Description */}
           <div className="mx-4 sm:mx-6 mb-4 p-3 sm:p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Área Analisada</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed break-words">
              {locationDescription}
            </p>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-4 sm:px-6 pb-4 sm:pb-6 pt-4 border-t border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua pergunta..."
                className="flex-1 max-h-40 py-2 px-3 resize-none bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl backdrop-blur-sm focus:border-green-500 dark:focus:border-green-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 text-sm"
                disabled={isLoading}
                rows={1} // Start with a single row
              />
              <button
                type="submit"
                disabled={!prompt.trim() || isLoading}
                className="h-10 w-10 flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 border border-green-200 dark:border-green-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Enviar mensagem"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatModal;