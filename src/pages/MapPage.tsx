import { useState } from "react";
import Map from "@/components/ui/Map";
import MapSidebar from "@/components/ui/MapSidebar/MapSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ChatModal from "@/components/ui/ChatModal";

function MapPage() {
    const [showChatModal, setShowChatModal] = useState(false);
    const [chatModalData, setChatModalData] = useState<{
        description: string;
        coordinates: { latitude: number; longitude: number };
        areaId: number;
    } | null>(null);

    const handleViewMoreDetails = (description: string, coordinates: { latitude: number; longitude: number }, areaId: number) => {
        setChatModalData({ description, coordinates, areaId });
        setShowChatModal(true);
    };

    const handleCloseChatModal = () => {
        setShowChatModal(false);
        setChatModalData(null);
    };

    const handleGoBack = () => {
        setShowChatModal(false);
        setChatModalData(null);
    };

    return (
        <SidebarProvider>
            <div className="flex w-full h-screen bg-green-200">
                <MapSidebar />
                <div className="flex-1 p-4 bg-white">
                    <Map onViewMoreDetails={handleViewMoreDetails} />
                </div>
            </div>
            
            {/* Chat Modal */}
            {showChatModal && chatModalData && (
                <ChatModal
                    locationDescription={chatModalData.description}
                    areaId={chatModalData.areaId}
                    onClose={handleCloseChatModal}
                    showGoBack={true}
                    onGoBack={handleGoBack}
                />
            )}
        </SidebarProvider>
    );
}

export default MapPage;
