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

function MapSidebar() {
    return (
        <Sidebar className="w-64 bg-green-400 h-full">
            <SidebarHeader className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">UsGuri Dufutti</h2>
            </SidebarHeader>
            
            <SidebarContent className="px-4">
                <SidebarGroup>
                    <SidebarGroupLabel>Location Info</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <div className="text-sm text-green-600">
                                    <p>City: Caxias do Sul, RS</p>
                                    <p>Coordinates: -29.167, -51.524</p>
                                </div>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarSeparator />
                
                <SidebarGroup>
                    <SidebarGroupLabel>Map Layers</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="w-full justify-start">
                                    <input 
                                        type="checkbox" 
                                        defaultChecked 
                                        className="mr-2 rounded" 
                                    />
                                    <span>OpenStreetMap</span>
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