import { Activity, Database, Globe, Satellite, TrendingUp, Users } from "lucide-react"

export function AboutSection() {
  const benefits = [
    {
      icon: Activity,
      title: "Monitoramento em Tempo Real",
      description: "Detecção automática de eventos de floração através de análise de índices de vegetação (NDVI, EVI) com atualização diária",
    },
    {
      icon: Users,
      title: "Saúde Pública",
      description: "Sistema de alertas para gestão de crises de pólen, auxiliando populações sensíveis e profissionais de saúde",
    },
    {
      icon: TrendingUp,
      title: "Agricultura de Precisão",
      description: "Dados geoespaciais para otimização de manejo agrícola, previsão de safras e planejamento de colheitas",
    },
    {
      icon: Database,
      title: "Pesquisa Científica",
      description: "Base de dados histórica para estudos de biodiversidade, mudanças climáticas e conservação de ecossistemas",
    },
  ]

  const projectDetails = [
    {
      icon: Satellite,
      title: "Aquisição de Dados",
      content: "Integração com múltiplos satélites da NASA (MODIS, Landsat-8/9) para captura de imagens multiespectrais. Processamento de bandas espectrais (vermelho, NIR) para cálculo de índices de vegetação com resolução temporal diária e espacial de 250-500m.",
    },
    {
      icon: Database,
      title: "Processamento e Análise",
      content: "Pipeline automatizado de processamento de dados geoespaciais utilizando algoritmos de detecção de anomalias e machine learning. Análise temporal de séries históricas para identificação de padrões sazonais e eventos de floração atípicos.",
    },
    {
      icon: Globe,
      title: "Visualização e Acesso",
      content: "Interface web interativa com mapas dinâmicos para visualização de dados em múltiplas escalas. API REST para acesso programático aos dados, permitindo integração com sistemas externos e análises customizadas.",
    },
  ]

  return (
    <section id="sobre" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre o Projeto
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Sistema de monitoramento de floração baseado em sensoriamento remoto, utilizando dados da NASA Earth
            Science Division para detecção e análise de eventos de floração em escala global.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-500 dark:group-hover:bg-green-400 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Project Details */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Arquitetura do Sistema
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pipeline completo de aquisição, processamento e visualização de dados geoespaciais
            </p>
          </div>

          <div className="space-y-8">
            {projectDetails.map((detail, index) => {
              const IconComponent = detail.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:bg-green-500 dark:group-hover:bg-green-400 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {detail.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}