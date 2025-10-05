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
import { Calculator, Layers, Download, Eye, Leaf, LandPlot, Sprout } from "lucide-react";

function MapSidebar() {
    const navigate = useNavigate();
    
    const handleAddArea = () => {
        console.log("Navegar para cadastro de área");
        navigate("/register-area");
    };

    const handleAddPlant = () => {
        console.log("Navegar para cadastro de planta");
        navigate("/register-plant");
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
                        <p className="text-xs text-gray-600 dark:text-gray-400">Blooming Events Monitoring</p>
                    </div>
                </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4 space-y-6">
                {/* Métricas Principais */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className="flex text-center items-center justify-center">
                            <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Monitored</div>
                                <div className="text-md font-bold text-gray-900 dark:text-white">California</div>
                                <div className="text-sm font-medium mt-1 text-blue-600 dark:text-blue-400">Area</div>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

               

    

                {/* Status da Floração */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-purple-600" />
                        Areas Count
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="p-3 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Number of Areas</span>
                                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-medium">
                                    5
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Data of Detection</span>
                                <span className="text-green-600 dark:text-green-400 font-medium">05/10/25</span>
                            </div>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Botões de Ação */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white">
                        Register
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
                                    New Plant
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
                                    New Area
                                </span>
                            </button>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Ferramentas do Mapa */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Layers className="w-4 h-4 text-blue-600" />
                        Tools
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-3 text-sm gap-3 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg">
                                    <Eye className="w-4 h-4 text-green-600" />
                                   View History
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start p-3 text-sm gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                                    <Download className="w-4 h-4 text-blue-600" />
                                    Export Data
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