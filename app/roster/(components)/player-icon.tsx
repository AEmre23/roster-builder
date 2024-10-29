import { useGeneralStore } from "@/stores/generalStore";
import { usePlayerStore } from "@/stores/playerStore";
import { motion, useMotionValue } from "framer-motion";
import { Player } from "@/types/types";
import { useEffect } from "react";

export function PlayerIcon({ player }: { player: Player }) {
    const fieldRef = useGeneralStore((state) => state.fieldRef)
    const updatePlayerPosition = usePlayerStore((state) => state.updatePlayerPosition)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    useEffect(() => {
        if (!fieldRef?.current) return;
        if (player.position.x === 0 && player.position.y === 0) return;

        x.set(player.position.x);
        y.set(player.position.y);
    }, [fieldRef, player.position]);

    const handleDragEnd = (playerId: string) => {
        if (!fieldRef?.current) return;
        
        const newPosition = {
            x: x.get(),
            y: y.get()
        };
        
        updatePlayerPosition(playerId, newPosition);
    }

    return (
        <motion.div
            key={player.id}
            drag
            style={{ x, y }}
            dragElastic={false}
            dragMomentum={false}
            dragConstraints={fieldRef!}
            onDragEnd={() => handleDragEnd(player.id)}
            className="size-14 z-50 bg-red-500 rounded-full flex items-center justify-center relative"
        >
            {player.number ? (
                <span className="absolute -top-1 -right-2 flex items-center justify-center text-sm size-6 bg-white rounded-full">
                    {player.number}
                </span>
            ) : null}
            <span className="text-white text-xs font-semibold">{player.name}</span>
        </motion.div>
    )
}