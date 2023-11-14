import { PlayPause, VideoCamera } from "@phosphor-icons/react";

interface LessonProps {
    title: string
    duration: string
    isCurrent?: boolean
    onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {
    return (
        <button
            onClick={onPlay}
            data-active={isCurrent}
            disabled={isCurrent}
            className="flex items-center gap-3 text-sm text-primary-white data-[active=true]:text-indigo-300 enabled:hover:text-indigo-400"
        >
            {isCurrent ? (
                <PlayPause className="w-4 h-4 text-indigo-300" weight="bold" />
            ) : (
                <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
            )}
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-primary-white">
                {duration}
            </span>
        </button>
    )
}