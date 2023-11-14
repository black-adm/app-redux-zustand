import { MonitorPlay, Stack } from "@phosphor-icons/react";

export function Header() {
    return (
        <div className="mt-2 flex flex-col gap-1">
            <h1 className="flex items-center gap-2 text-2xl font-bold">
                <MonitorPlay className="mb-1 h-7 w-7" weight="bold" />
                Fundamentos do Redux
            </h1>

            <span className="mt-2 flex items-center gap-1 text-sm font-medium tracking-wide text-light-primary">
                <Stack className="mb-1 h-4 w-4" weight="bold" />
                Módulo - "Desvendando o Redux"
            </span>
        </div>
    )
}