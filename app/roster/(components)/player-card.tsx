import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { usePlayerStore } from "@/stores/playerStore"

interface PlayerCardProps {
  id: string
  number: string
  name: string
  isCollapsed?: boolean
}

export function PlayerCard({ id, number, name, isCollapsed = false }: PlayerCardProps) {
  const updatePlayer = usePlayerStore((state) => state.updatePlayer)

  if (isCollapsed) {
    return (
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-2">
        {number}
      </div>
    )
  }

  return (
    <Card className="mb-4 bg-white/10 backdrop-blur-sm">
      <CardContent className="pt-4 space-y-2">
        <div className="flex gap-2">
          <Input
            type="number"
            value={number}
            onChange={(e) => updatePlayer(id, { number: e.target.value })}
            className="w-16 text-center"
            min={1}
            autoFocus={false}
            max={99}
          />
          <Input
            type="text"
            value={name}
            autoFocus={false}
            onChange={(e) => updatePlayer(id, { name: e.target.value })}
            placeholder="Oyuncu adı"
            className="flex-1"
          />
        </div>
      </CardContent>
    </Card>
  )
} 