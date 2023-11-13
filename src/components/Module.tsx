import * as Collapsible from "@radix-ui/react-collapsible"
import { CaretDoubleDown } from "@phosphor-icons/react";
import { Lesson } from "./Lesson";

interface ModuleProps {
    moduleIndex: number
    title: string
    amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
    return (
        <Collapsible.Root>
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

                <CaretDoubleDown className="w-4 h-4 ml-auto text-condensed-primary" weight="bold" />
            </Collapsible.CollapsibleTrigger>

            <Collapsible.CollapsibleContent>
                <nav className="relative flex flex-col gap-4 p-6">
                    <Lesson title="Curso Redux" duration="23:37" />
                    <Lesson title="Curso Redux" duration="23:37" />
                    <Lesson title="Curso Redux" duration="23:37" />
                </nav>
            </Collapsible.CollapsibleContent>
        </Collapsible.Root>
    )
}