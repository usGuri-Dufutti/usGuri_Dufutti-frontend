"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { SpeciesList } from "./SpeciesList"
import { useNavigate } from "react-router-dom" 

interface Species {
  scientificName: string
}

interface PopupComponentProps {
  latitude: number
  longitude: number
  description: string
  species?: Species[]
  onClose?: () => void
}

function PopupComponent({
  latitude,
  longitude,
  description,
  onClose,
}: PopupComponentProps) {
  const navigate = useNavigate() // Adicione este hook
  const [showSpecies, setShowSpecies] = useState(false)

  // Função para navegar para a página de chat
  const handleMoreInfo = () => {
    navigate('/chat', { 
      state: { 
        locationDescription: description,
        coordinates: { latitude, longitude }
      } 
    })
  }

  return (
    <Card className="w-[400px] bg-emerald-50/95 backdrop-blur-sm border-emerald-200 shadow-xl">
      {/* Location Info */}
      <div className={`${showSpecies ? "hidden" : "block"}`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-emerald-950">Location Info</CardTitle>
                <p className="text-xs text-emerald-700 mt-0.5">Geographic coordinates</p>
              </div>
            </div>
            {onClose && (
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 -mt-1 -mr-1 hover:bg-emerald-100 text-emerald-700"
                onClick={onClose}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Coordinates Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/60 rounded-lg p-3 border border-emerald-200/50">
              <div className="flex items-center gap-1.5 mb-1">
                <Badge
                  variant="outline"
                  className="h-5 px-1.5 text-[10px] bg-emerald-500/10 text-emerald-700 border-emerald-300"
                >
                  LAT
                </Badge>
              </div>
              <div className="text-base font-semibold font-mono text-emerald-950 tabular-nums">{latitude.toFixed(5)}</div>
            </div>

            <div className="bg-white/60 rounded-lg p-3 border border-emerald-200/50">
              <div className="flex items-center gap-1.5 mb-1">
                <Badge
                  variant="outline"
                  className="h-5 px-1.5 text-[10px] bg-emerald-500/10 text-emerald-700 border-emerald-300"
                >
                  LON
                </Badge>
              </div>
              <div className="text-base font-semibold font-mono text-emerald-950 tabular-nums">
                {longitude.toFixed(5)}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/60 rounded-lg p-4 border border-emerald-200/50">
            <div className="text-xs font-medium text-emerald-700 uppercase tracking-wider mb-2">Description</div>
            <p className="text-sm text-emerald-950 leading-relaxed">{description}</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-300 shadow-sm active:scale-[0.98] transition-transform"
              onClick={() => setShowSpecies(true)}
            >
              Visualize Species
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm active:scale-[0.98] transition-transform"
              onClick={handleMoreInfo} // Use a nova função aqui
            >
              View More Details
            </Button>
          </div>
        </CardContent>
      </div>

      {/* Species View */}
      <div className={`${showSpecies ? "block" : "hidden"}`}>
        <SpeciesList
          onBack={() => setShowSpecies(false)}
          onClose={onClose}
        />
      </div>
    </Card>
  )
}

export default PopupComponent