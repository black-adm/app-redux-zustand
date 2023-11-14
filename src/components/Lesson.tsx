import { VideoCamera } from "@phosphor-icons/react";

interface LessonProps {
    title: string
    duration: string
    onPlay: () => void
}

export function Lesson({ title, duration, onPlay }: LessonProps) {
    return (
        <button
            onClick={onPlay}
            className="flex items-center gap-3 text-sm text-primary-white"
        >
            <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-primary-white">
                {duration}
            </span>
        </button>
    )
}