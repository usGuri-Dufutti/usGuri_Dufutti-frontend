import { 
    Sidebar, 
    SidebarHeader, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { MapPin, Layers, Calendar, Download, Eye, Leaf, LandPlot, Sprout } from "lucide-react";

function MapSidebar() {
    const navigate = useNavigate();
    
    const handleAddArea = () => {
        console.log("Navegar para cadastro de área");
        // navigate("/register-area");
    };

    const handleAddPlant = () => {
        console.log("Navegar para cadastro de planta");
        // navigate("/register-plant");
    };
    
    return (
        <Sidebar className="w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-r border-gray-200 dark:border-gray-800 h-full">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10 -z-10" />
            
            <SidebarHeader className="p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="cursor-pointer active:scale-95" onClick={() => navigate("/")}>
                        <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Bloomwatch</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Monitoramento de Floração</p>
                    </div>
                </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4 space-y-6">
                {/* Métricas Principais */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className="grid grid-cols-2 gap-3 text-center">
                            <div className="p-3 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                <div className="text-sm font-medium text-green-600 dark:text-green-400">NDVI</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">0.68</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Saúdavel</div>
                            </div>
                            <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Área</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">3.1km²</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Monitorada</div>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Localização Atual */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        Localização
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="text-sm space-y-2 p-3 bg-gray-50/50 dark:bg-gray-800/20 rounded-lg">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Cidade:</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">Caxias do Sul</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Estado:</span>
                                <span className="font-medium">RS</span>
                            </div>
                            <div className="text-xs font-mono text-gray-500 dark:text-gray-400 text-center mt-2">
                                -29.167, -51.524
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Status da Floração */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        Status da Floração
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="p-3 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Intensidade</span>
                                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-medium">
                                    Moderada
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Detectado em</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">10/12/2024</span>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Botões de Ação */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        Registros
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={handleAddPlant}
                                className="group flex flex-col items-center justify-center p-3 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-200"
                            >
                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-700 transition-colors">
                                    <Sprout className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-xs font-medium text-green-700 dark:text-green-300 text-center">
                                    Nova Planta
                                </span>
                            </button>

                            <button
                                onClick={handleAddArea}
                                className="group flex flex-col items-center justify-center p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200"
                            >
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-700 transition-colors">
                                    <LandPlot className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-xs font-medium text-blue-700 dark:text-blue-300 text-center">
                                    Nova Área
                                </span>
                            </button>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Ferramentas do Mapa */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Layers className="w-4 h-4 text-blue-600" />
                        Ferramentas
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-3 text-sm gap-3 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
                                    <Eye className="w-4 h-4 text-green-600" />
                                    Visualizar Histórico
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-3 text-sm gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                                    <Download className="w-4 h-4 text-blue-600" />
                                    Exportar Dados
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

export default MapSidebar;