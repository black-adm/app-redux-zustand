import { MonitorPlay, Stack } from "@phosphor-icons/react";
import { useCurrentLesson } from "../store/slices/player";

export function Header() {
    const { currentModule, currentLesson } = useCurrentLesson()

    return (
        <div className="mt-2 flex flex-col gap-1">
            <h1 className="flex items-center gap-2 text-2xl font-bold">
                <MonitorPlay className="mb-1 h-7 w-7" weight="bold" />
                {currentLesson.title}
            </h1>

            <span className="mt-2 flex items-center gap-1 text-sm tracking-wide font-semibold text-purple-950">
                <Stack className="mb-1 h-4 w-4" weight="bold" />
                Módulo › {currentModule.title}
            </span>
        </div>
    )
}