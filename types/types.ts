
interface Position {
    x: number
    y: number
  }
  
  interface Player {
    id: string
    number: string
    name: string
    position: Position
  }

export type { Position, Player }