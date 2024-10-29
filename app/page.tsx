'use client'
import { useEffect, useState } from 'react'
import { usePlayerStore } from '@/stores/playerStore'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const initializePlayers = usePlayerStore((state) => state.initializePlayers)
  const players = usePlayerStore((state) => state.players)
  const router = useRouter()

  useEffect(() => {
    if (players.length > 0) {
      router.push('/roster')
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const count = parseInt(inputValue)
    if (count > 0) {
      initializePlayers(count)
      router.push('/roster')
    }
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="h-dvh mx-auto container flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-black to-green-900 animate-gradient-x" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <motion.div initial={{ translateY: 30 }} animate={{ translateY: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-full max-w-md relative z-10 bg-opacity-90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">
              Takımınızda kaç oyuncu olacak?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="number"
                min="1"
                max="11"
                value={inputValue}
                required
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Oyuncu sayısını girin"
                className="text-center"
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={!inputValue || parseInt(inputValue) < 1}
              >
                İlerle
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.main>
  )
}
