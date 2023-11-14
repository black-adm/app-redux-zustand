import * as Collapsible from "@radix-ui/react-collapsible"
import { CaretDoubleDown } from "@phosphor-icons/react";
import { Lesson } from "./Lesson";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModuleProps {
    moduleIndex: number
    title: string
    amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
    const dispatch = useDispatch()

    const { currentModuleIndex, currentLessonIndex } = useAppSelector(state => {
        const { currentModuleIndex, currentLessonIndex } = state.player
        return { currentModuleIndex, currentLessonIndex }
    })

    const lessons = useAppSelector((state) => {
        return state.player.course.modules[moduleIndex].lessons
    })

    return (
        <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
            <Collapsible.CollapsibleTrigger className="flex w-full items-center p-4 gap-3 rounded-sm text-light-primary bg-primary-white hover:bg-primary-gray">
                <div className="flex w-8 h-8 rounded-full items-center justify-center text-primary-white bg-light-primary text-xs">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">
                        {title}
                    </strong>
                    <span className="text-xs font-medium text-condensed-primary">
                        {amountOfLessons} aulas
                    </span>
                </div>

                <CaretDoubleDown
                    className="group-data-[state=open]:rotate-180 transition transform w-4 h-4 ml-auto text-condensed-primary" weight="bold"
                />
            </Collapsible.CollapsibleTrigger>

            <Collapsible.CollapsibleContent>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons.map((lesson, lessonIndex) => {
                        const isCurrent = currentModuleIndex === moduleIndex &&
                        currentLessonIndex === lessonIndex
                        
                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                duration={lesson.duration}
                                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                                isCurrent={isCurrent}
                            />
                        )
                    })}
                </nav>
            </Collapsible.CollapsibleContent>
        </Collapsible.Root>
    )
}