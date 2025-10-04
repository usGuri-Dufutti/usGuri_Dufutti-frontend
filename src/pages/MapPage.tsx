import Map from "@/components/ui/Map";
import MapSidebar from "@/components/ui/MapSidebar/MapSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

function MapPage() {
    return (
        <SidebarProvider>
            <div className="flex w-full h-screen bg-green-200">
                <MapSidebar />
                <div className="flex-1 p-4 bg-white">
                    <Map />
                </div>
            </div>
        </SidebarProvider>
    );
}

export default MapPage;
