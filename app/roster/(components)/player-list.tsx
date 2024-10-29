'use client'
import { usePlayerStore } from "@/stores/playerStore"
import { PlayerIcon } from "./player-icon"

export function PlayerList() {
  const { players } = usePlayerStore()

  return (
    <div className="flex flex-col gap-6 mt-7">
      {players.map((player) => (
        <PlayerIcon player={player} key={player.id} />
      ))}
    </div>
  )
} 