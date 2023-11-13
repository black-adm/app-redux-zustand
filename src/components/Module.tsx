import { CaretDoubleDown } from "@phosphor-icons/react";
import { Lesson } from "./Lesson";

export function Module() {
    return (
        <div>
            <button className="flex w-full items-center p-4 gap-3 rounded-sm text-light-primary bg-primary-white hover:bg-primary-gray">
                <div className="flex w-8 h-8 rounded-full items-center justify-center text-primary-white bg-light-primary text-xs">
                    01
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">
                        Desvendando o Redux
                    </strong>
                    <span className="text-xs font-medium text-condensed-primary">
                        12 aulas
                    </span>
                </div>

                <CaretDoubleDown className="w-4 h-4 ml-auto text-condensed-primary" weight="bold" />
            </button>

            <nav className="relative flex flex-col gap-4 p-6">
                <Lesson />
                <Lesson />
                <Lesson />
            </nav>
        </div>
    )
}