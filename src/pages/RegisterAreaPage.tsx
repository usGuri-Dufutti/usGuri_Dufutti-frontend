import { useState } from "react"
import { 
  MapPin, 
  Leaf, 
  Upload, 
  Satellite,
  X,
  Navigation,
  Map,
  LandPlot
} from "lucide-react"

interface AreaData {
  area_id: string
  area_name: string
  description: string
  latitude: string
  longitude: string
  elevation: string
  state: string
  city: string
  biome: string
  area_size: string
  vegetation_type: string
  created_date: string
  last_monitoring_date: string
  status: "active" | "inactive"
  conservation_status: string
  observations_count: string
}

export default function RegisterAreaPage() {
  const [formData, setFormData] = useState<AreaData>({
    area_id: "",
    area_name: "",
    description: "",
    latitude: "",
    longitude: "",
    elevation: "",
    state: "",
    city: "",
    biome: "",
    area_size: "",
    vegetation_type: "",
    created_date: new Date().toISOString().split('T')[0],
    last_monitoring_date: new Date().toISOString().split('T')[0],
    status: "active",
    conservation_status: "",
    observations_count: "0"
  })

  const [areas, setAreas] = useState<AreaData[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newArea = {
      ...formData,
      area_id: `AREA-${Date.now()}`
    }
    setAreas(prev => [...prev, newArea])
    setFormData({
      area_id: "",
      area_name: "",
      description: "",
      latitude: "",
      longitude: "",
      elevation: "",
      state: "",
      city: "",
      biome: "",
      area_size: "",
      vegetation_type: "",
      created_date: new Date().toISOString().split('T')[0],
      last_monitoring_date: new Date().toISOString().split('T')[0],
      status: "active",
      conservation_status: "",
      observations_count: "0"
    })
    setSelectedFile(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const removeArea = (areaId: string) => {
    setAreas(prev => prev.filter(area => area.area_id !== areaId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10">
      {/* Header Simples */}
      <header className="p-6 border-b border-green-200 dark:border-green-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
            <LandPlot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sistema de Monitoramento de Áreas</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cadastro de áreas de vegetação</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Formulário no Topo */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-800 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <LandPlot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Nova Área de Monitoramento</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cadastre uma nova área para observação</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informações Básicas */}
            <div className="space-y-4 p-4 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Informações da Área</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="area_name"
                  value={formData.area_name}
                  onChange={handleChange}
                  placeholder="Nome da área"
                  className="md:col-span-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descrição da área"
                  rows={3}
                  className="md:col-span-2 px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 resize-none"
                />
                <input
                  type="text"
                  name="area_size"
                  value={formData.area_size}
                  onChange={handleChange}
                  placeholder="Tamanho (hectares)"
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                />
                <select
                  name="vegetation_type"
                  value={formData.vegetation_type}
                  onChange={handleChange}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                >
                  <option value="">Tipo de vegetação</option>
                  <option value="floresta_ombrofila">Floresta Ombrófila</option>
                  <option value="floresta_estacional">Floresta Estacional</option>
                  <option value="campo_nativo">Campo Nativo</option>
                  <option value="mata_ciliar">Mata Ciliar</option>
                  <option value="reflorestamento">Reflorestamento</option>
                </select>
              </div>
            </div>

            {/* Localização */}
            <div className="space-y-4 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Localização</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Cidade"
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                />
                <select
                  name="biome"
                  value={formData.biome}
                  onChange={handleChange}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                >
                  <option value="">Bioma</option>
                  <option value="mata_atlantica">Mata Atlântica</option>
                  <option value="amazonia">Amazônia</option>
                  <option value="cerrado">Cerrado</option>
                  <option value="caatinga">Caatinga</option>
                  <option value="pampa">Pampa</option>
                  <option value="pantanal">Pantanal</option>
                </select>
              </div>
            </div>

            {/* Status e Conservação */}
            <div className="space-y-4 p-4 rounded-lg bg-purple-50/50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Status e Conservação</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                >
                  <option value="active">Ativa</option>
                  <option value="inactive">Inativa</option>
                </select>
                <select
                  name="conservation_status"
                  value={formData.conservation_status}
                  onChange={handleChange}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                >
                  <option value="">Status de conservação</option>
                  <option value="preservada">Preservada</option>
                  <option value="perturbada">Perturbada</option>
                  <option value="degradada">Degradada</option>
                  <option value="recuperacao">Em recuperação</option>
                </select>
                <input
                  type="date"
                  name="created_date"
                  value={formData.created_date}
                  onChange={handleChange}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                />
                <input
                  type="date"
                  name="last_monitoring_date"
                  value={formData.last_monitoring_date}
                  onChange={handleChange}
                  className="px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Upload de Imagem (Opcional) */}
            <div className="space-y-4 p-4 rounded-lg bg-orange-50/50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Imagem da Área (Opcional)</h3>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="flex-1 px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                {selectedFile && (
                  <span className="text-sm text-gray-600 dark:text-gray-400 truncate flex-1">
                    {selectedFile.name}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900/30 flex items-center justify-center gap-2"
            >
              <LandPlot className="w-5 h-5" />
              Cadastrar Área
            </button>
          </form>
        </div>

        {/* Lista de Áreas Cadastradas - Aparece ao rolar para baixo */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-green-200 dark:border-green-800 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Satellite className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Áreas Cadastradas</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{areas.length} áreas monitoradas</p>
            </div>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {areas.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Map className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Nenhuma área cadastrada</p>
                <p className="text-sm mt-2">As áreas aparecerão aqui após o cadastro</p>
              </div>
            ) : (
              areas.map((area) => (
                <div key={area.area_id} className="p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 group hover:border-green-300 dark:hover:border-green-700 transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                        {area.area_name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                        {area.description || "Sem descrição"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        area.status === "active" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                      }`}>
                        {area.status === "active" ? "Ativa" : "Inativa"}
                      </span>
                      <button
                        onClick={() => removeArea(area.area_id)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded transition-all duration-200"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{area.city}, {area.state}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      <span>{area.vegetation_type}</span>
                    </div>
                    <div>
                      <span className="font-medium">Tamanho:</span> {area.area_size} ha
                    </div>
                    <div>
                      <span className="font-medium">Bioma:</span> {area.biome}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Coordenadas:</span> {area.latitude}, {area.longitude}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Status de conservação:</span> {area.conservation_status || "Não informado"}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}