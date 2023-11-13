import { VideoCamera } from "@phosphor-icons/react";

export function Lesson() {
    return (
        <button className="flex items-center gap-3 text-sm text-primary-white">
            <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
            <span>Fundamentos do Redux</span>
            <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
        </button>
    )
}