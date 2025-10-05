import { Activity, Database, Globe, Satellite, TrendingUp, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

export function AboutSection() {
  const { t } = useTranslation()
  const benefits = [
    {
      icon: Activity,
      title: t("about.benefits.monitoring.title"),
      description: t("about.benefits.monitoring.description"),
    },
    {
      icon: Users,
      title: t("about.benefits.health.title"),
      description: t("about.benefits.health.description"),
    },
    {
      icon: TrendingUp,
      title: t("about.benefits.agriculture.title"),
      description: t("about.benefits.agriculture.description"),
    },
    {
      icon: Database,
      title: t("about.benefits.research.title"),
      description: t("about.benefits.research.description"),
    },
  ]

  const projectDetails = [
    {
      icon: Satellite,
      title: t("about.details.data.title"),
      content: t("about.details.data.content"),
    },
    {
      icon: Database,
      title: t("about.details.processing.title"),
      content: t("about.details.processing.content"),
    },
    {
      icon: Globe,
      title: t("about.details.visualization.title"),
      content: t("about.details.visualization.content"),
    },
  ]

  return (
    <section id="sobre" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("about.sectionTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("about.sectionParagraph")}
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
              {t("about.architectureTitle")}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("about.architectureDescription")}
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
