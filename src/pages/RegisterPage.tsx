import { useState } from "react"
import { 
  MapPin, 
  Calendar, 
  Leaf, 
  Upload, 
  Satellite,
  Plus,
  X
} from "lucide-react"

interface ObservationData {
  observation_id: string
  update_datetime: string
  site_id: string
  latitude: string
  longitude: string
  elevation: string
  state: string
  species_id: string
  genus: string
  species: string
  common_name: string
  kingdom: string
  individual_id: string
  phenophase_id: string
  phenophase_description: string
  observation_date: string
  day_of_year: string
  phenophase_status: string
  intensity_category_id: string
  intensity_value: string
  abundance_value: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<ObservationData>({
    observation_id: "",
    update_datetime: new Date().toISOString().split('T')[0],
    site_id: "",
    latitude: "",
    longitude: "",
    elevation: "",
    state: "",
    species_id: "",
    genus: "",
    species: "",
    common_name: "",
    kingdom: "Plantae",
    individual_id: "",
    phenophase_id: "",
    phenophase_description: "",
    observation_date: new Date().toISOString().split('T')[0],
    day_of_year: "",
    phenophase_status: "",
    intensity_category_id: "",
    intensity_value: "",
    abundance_value: ""
  })

  const [observations, setObservations] = useState<ObservationData[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setObservations(prev => [...prev, formData])
    setFormData({
      observation_id: "",
      update_datetime: new Date().toISOString().split('T')[0],
      site_id: "",
      latitude: "",
      longitude: "",
      elevation: "",
      state: "",
      species_id: "",
      genus: "",
      species: "",
      common_name: "",
      kingdom: "Plantae",
      individual_id: "",
      phenophase_id: "",
      phenophase_description: "",
      observation_date: new Date().toISOString().split('T')[0],
      day_of_year: "",
      phenophase_status: "",
      intensity_category_id: "",
      intensity_value: "",
      abundance_value: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10">
      {/* Header */}
      <header className="p-6 border-b border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Registro de Observações</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sistema de monitoramento de floração</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-800 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Nova Observação</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Registre dados de floração</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Localização */}
                <div className="space-y-4 p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Localização</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      placeholder="Latitude"
                      className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <input
                      type="text"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      placeholder="Longitude"
                      className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <input
                      type="text"
                      name="elevation"
                      value={formData.elevation}
                      onChange={handleChange}
                      placeholder="Elevação (m)"
                      className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Estado"
                      className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Espécie */}
                <div className="space-y-4 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Espécie</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="genus"
                      value={formData.genus}
                      onChange={handleChange}
                      placeholder="Gênero"
                      className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <input
                      type="text"
                      name="species"
                      value={formData.species}
                      onChange={handleChange}
                      placeholder="Espécie"
                      className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <input
                      type="text"
                      name="common_name"
                      value={formData.common_name}
                      onChange={handleChange}
                      placeholder="Nome comum"
                      className="col-span-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Fenologia */}
                <div className="space-y-4 p-4 rounded-lg bg-purple-50/50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Fenologia</h3>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="date"
                      name="observation_date"
                      value={formData.observation_date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <input
                      type="text"
                      name="phenophase_description"
                      value={formData.phenophase_description}
                      onChange={handleChange}
                      placeholder="Descrição da fenofase"
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                    <select
                      name="phenophase_status"
                      value={formData.phenophase_status}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    >
                      <option value="">Status da fenofase</option>
                      <option value="1">Ativa</option>
                      <option value="0">Inativa</option>
                    </select>
                    <input
                      type="text"
                      name="intensity_value"
                      value={formData.intensity_value}
                      onChange={handleChange}
                      placeholder="Valor de intensidade"
                      className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900/30 flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Registrar Observação
                </button>
              </form>
            </div>
          </div>

          {/* Lista de Observações */}
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-800 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Satellite className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Observações Registradas</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{observations.length} registros</p>
                </div>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {observations.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <Leaf className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Nenhuma observação registrada</p>
                  </div>
                ) : (
                  observations.map((obs, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {obs.genus} {obs.species}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{obs.common_name}</p>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full">
                          {obs.phenophase_status === "1" ? "Ativa" : "Inativa"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div>Data: {obs.observation_date}</div>
                        <div>Local: {obs.latitude}, {obs.longitude}</div>
                        <div className="col-span-2">Fenofase: {obs.phenophase_description}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}