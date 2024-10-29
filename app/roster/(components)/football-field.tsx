import { useGeneralStore } from "@/stores/generalStore"

export function FootballField() {
  const { fieldRef } = useGeneralStore()

  return (
    <div ref={fieldRef} className="w-full h-full min-h-[80dvh] max-w-xl bg-green-600 relative rounded-md overflow-hidden">
      {/* Saha çizgileri */}
      <div className="absolute inset-0 border-4 border-white/70" />
      
      {/* Orta saha çizgisi */}
      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/70" />
      
      {/* Orta saha dairesi */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/70 rounded-full" />
      
      {/* Ceza sahaları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 border-2 border-t-0 border-white/70" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 border-2 border-b-0 border-white/70" />
      
      {/* Kale alanları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-12 border-2 border-t-0 border-white/70" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-12 border-2 border-b-0 border-white/70" />
    </div>
  )
}   