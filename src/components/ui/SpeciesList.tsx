"use client"

import { CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, X, ArrowLeft } from "lucide-react"

interface Species {
  scientificName: string
}

interface SpeciesListProps {
  
  onBack?: () => void
  onClose?: () => void
}

export function SpeciesList({onBack, onClose }: SpeciesListProps) {

  const species: Species[] = [
    { scientificName: "Acer saccharum" },
    { scientificName: "Quercus rubra" },
    { scientificName: "Pinus strobus" },
    { scientificName: "Betula alleghaniensis" },
    { scientificName: "Fagus grandifolia" },
  ]

  return (
    <>
      {/* Header */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-emerald-950">
                Species Detected
              </CardTitle>
              <p className="text-xs text-emerald-700 mt-0.5">
                {species.length} species found
              </p>
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

      {/* Content */}
      <CardContent className="space-y-4">
        <div className="bg-white/60 rounded-lg border border-emerald-200/50 max-h-[280px] overflow-y-auto">
          <div className="divide-y divide-emerald-100">
            {species.map((item, index) => (
              <div
                key={index}
                className="p-3 hover:bg-emerald-50/50 transition-colors"
              >
                <div className="text-sm text-emerald-950 italic">
                  {item.scientificName}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        {onBack && (
          <Button
            variant="outline"
            className="w-full bg-white hover:bg-emerald-50 text-emerald-700 border-emerald-300 shadow-sm active:scale-[0.98] transition-transform"
            onClick={onBack}
          >
            <span className="mr-2">
              <ArrowLeft className="w-4 h-4 inline" />
            </span>
            Back to Location Info
          </Button>
        )}
      </CardContent>
    </>
  )
}
