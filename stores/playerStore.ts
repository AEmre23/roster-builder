import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Player, Position } from '@/types/types'
import { v4 as uuidv4 } from 'uuid'

interface PlayerStore {
  players: Player[]
  initializePlayers: (count: number) => void
  updatePlayer: (id: string, data: Partial<Player>) => void
  updatePlayerPosition: (id: string, position: Position) => void
  resetPositions: () => void
}

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set) => ({
      players: [],
      initializePlayers: (count) => {
        const newPlayers = Array.from({ length: count }, (_, index) => ({
          id: uuidv4(),
          number: '',
          name: '',
          position: { x: 0, y: 0 }
        }))
        set({ players: newPlayers })
      },
      updatePlayer: (id, data) => {
        set((state) => ({
          players: state.players.map(player => 
            player.id === id ? { ...player, ...data } : player
          )
        }))
      },
      updatePlayerPosition: (id, position) => {
        set((state) => ({
          players: state.players.map(player =>
            player.id === id ? { ...player, position } : player
          )
        }))
      },
      resetPositions: () => {
        set((state) => ({
          players: state.players.map(player => ({ ...player, position: { x: 0, y: 0 } }))
        }))
        localStorage.removeItem('player-storage')
      }
    }),
    {
      name: 'player-storage',
    }
  )
)