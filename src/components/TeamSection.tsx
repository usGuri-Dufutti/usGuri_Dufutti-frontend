import { Code, Database, Palette, Rocket, Github, Linkedin } from "lucide-react"
import { useTranslation } from "react-i18next"

export function TeamSection() {
  const { t } = useTranslation()
  const team = [
    {
      icon: Code,
      name: "Gabriel Gerhardt",
      role: t("team.roles.backendDev"),
      color: "from-green-500/20 to-green-500/5",
      iconColor: "text-green-600 dark:text-green-400",
      photo: "/images/team/gabriel-gerhardt.jpg", 
      linkedin: "https://www.linkedin.com/in/gabriel-gerhardt-0a8b852b9/",
      github: "https://github.com/Gabriel-Gerhardt",
    },
    {
      icon: Database,
      name: "Gabriel Hoppe",
      role: t("team.roles.backendDev"),
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-600 dark:text-blue-400",
      photo: "/images/team/gabriel-hoppe.jpg",
      linkedin: "https://www.linkedin.com/in/gabriel-hoppe-258665353/",
      github: "https://github.com/GabrielHoppe",
    },
    {
      icon: Palette,
      name: "Juliano Chies",
      role: t("team.roles.frontendDev"),
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-600 dark:text-purple-400",
      photo: "/images/team/juliano-chies.jpg",
      linkedin: "https://www.linkedin.com/in/julianochies/",
      github: "https://github.com/julianochies",
    },
    {
      icon: Rocket,
      name: "Mateus Tieppo",
      role: t("team.roles.frontendDev"),
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-600 dark:text-orange-400",
      photo: "/images/team/mateus-tieppo.jpg",
      linkedin: "https://www.linkedin.com/in/mateus-tieppo-0a88b0282/",
      github: "https://github.com/mateus-tieppo",
    },
  ]

  return (
    <section id="equipe" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("team.sectionTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("team.sectionParagraph")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => {
            const IconComponent = member.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Avatar - Foto ou Ícone */}
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <IconComponent className={`w-12 h-12 ${member.iconColor} group-hover:text-white transition-colors duration-300`} />
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex space-x-4 pt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}