import { 
    Sidebar, 
    SidebarHeader, 
    SidebarContent, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { MapPin, Layers, Calendar, Download, Eye, Leaf} from "lucide-react";

function MapSidebar() {
    const navigate = useNavigate();
    
    return (
        <Sidebar className="w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-r border-gray-200 dark:border-gray-800 h-full">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-green-900/10 dark:to-blue-900/10 -z-10" />
            
            <SidebarHeader className="p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="cursor-pointer active:scale-95" 
                    onClick={() => navigate("/")}
                    >
                        <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400"></Leaf>
                        </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Bloomwatch</h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Monitoramento NASA</p>
                    </div>
                </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4 space-y-4">
                {/* Resumo Rápido */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className="grid grid-cols-2 gap-3 text-center">
                            <div className="p-3 rounded-lg bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                <div className="text-sm font-medium text-green-600 dark:text-green-400">NDVI</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">0.68</div>
                            </div>
                            <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Área</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">3.1km²</div>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Localização */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        <MapPin className="w-3 h-3 inline mr-2 text-green-600" />
                        Localização
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="text-xs space-y-1 p-2 text-gray-600 dark:text-gray-400">
                            <div className="flex justify-between">
                                <span>Cidade:</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">Caxias do Sul, RS</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Coordenadas:</span>
                                <span className="font-mono">-29.167, -51.524</span>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator className="bg-gray-200 dark:bg-gray-800" />

                {/* Status da Floração */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        <Calendar className="w-3 h-3 inline mr-2 text-purple-600" />
                        Floração
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600 dark:text-gray-400">Intensidade</span>
                                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs">
                                    Moderada
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600 dark:text-gray-400">Detectado em</span>
                                <span className="text-green-600 dark:text-green-400">10/12/2024</span>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator className="bg-gray-200 dark:bg-gray-800" />

                {/* Camadas */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        <Layers className="w-3 h-3 inline mr-2 text-blue-600" />
                        Camadas
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-2 text-xs">
                                    <input 
                                        type="checkbox" 
                                        defaultChecked 
                                        className="mr-2 w-3 h-3 text-green-600 rounded"
                                    />
                                    OpenStreetMap
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-2 text-xs">
                                    <input 
                                        type="checkbox" 
                                        defaultChecked 
                                        className="mr-2 w-3 h-3 text-green-600 rounded"
                                    />
                                    Satélite
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-2 text-xs">
                                    <input 
                                        type="checkbox" 
                                        className="mr-2 w-3 h-3 text-green-600 rounded"
                                    />
                                    NDVI
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator className="bg-gray-200 dark:bg-gray-800" />

                {/* Ações Rápidas */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        Ações
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-2 text-xs gap-2 hover:bg-green-50 dark:hover:bg-green-900/20">
                                    <Eye className="w-3 h-3 text-green-600" />
                                    Ver Histórico
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-2 text-xs gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                                    <Download className="w-3 h-3 text-blue-600" />
                                    Exportar Dados
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Legenda Simplificada */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        Legenda
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Monitorada</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <span>Floração</span>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

export default MapSidebar;