'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useGeneralStore } from '@/stores/generalStore'
import { usePlayerStore } from '@/stores/playerStore'
import { PlayerCard } from '@/app/roster/(components)/player-card'
import { FootballField } from '@/app/roster/(components)/football-field'
import { PlayerList } from '@/app/roster/(components)/player-list'
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar"

export default function RosterPage() {
  const setFieldRef = useGeneralStore((state) => state.setFieldRef)
  const { players, resetPositions } = usePlayerStore()
  const fieldRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if(!players.length) {
      router.push('/');
      return;
    }
    setFieldRef(fieldRef)
  }, [])

  return (
    <div className="w-full flex">
      <div className="w-20 flex items-center flex-col">
        <SidebarTrigger />
        <PlayerList />
      </div>
      <Sidebar variant="sidebar" className="border-r">
        <SidebarHeader className="border-b px-4 py-2">
          <h2 className="text-lg font-semibold">Oyuncular</h2>
        </SidebarHeader>
        <SidebarContent className="p-4">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              id={player.id}
              number={player.number}
              name={player.name}
            />
          ))}
        </SidebarContent>
        <SidebarFooter>
          <Button onClick={resetPositions}>Pozisyonları Sıfırla</Button>
        </SidebarFooter>
      </Sidebar>
      <div ref={fieldRef} className="w-full">
        <FootballField />
      </div>
    </div>
  )
}
