import { MonitorPlay, Stack } from "@phosphor-icons/react";
import { useAppSelector } from "../store";

export function Header() {
    const { currentModule, currentLesson } = useAppSelector(state => {
        const { currentModuleIndex, currentLessonIndex } = state.player

        const currentModule = state.player.course.modules[currentModuleIndex]
        const currentLesson = currentModule.lessons[currentLessonIndex]

        return { currentModule, currentLesson }
    })

    return (
        <div className="mt-2 flex flex-col gap-1">
            <h1 className="flex items-center gap-2 text-2xl font-bold">
                <MonitorPlay className="mb-1 h-7 w-7" weight="bold" />
                {currentLesson.title}
            </h1>

            <span className="mt-2 flex items-center gap-1 text-sm font-medium tracking-wide text-light-primary">
                <Stack className="mb-1 h-4 w-4" weight="bold" />
                Módulo - "{currentModule.title}"
            </span>
        </div>
    )
}