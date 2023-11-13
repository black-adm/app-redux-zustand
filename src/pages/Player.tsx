import {
    MonitorPlay,
    Stack,
    ChatTeardropText,
    CaretDoubleDown,
    VideoCamera,
} from "@phosphor-icons/react";
import ReactPlayer from "react-player";

export function Player() {
    return (
        <div className="bg-primary-gray h-screen flex justify-center items-center text-dark-primary">
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between px-2 sm:px-6 md:px-4">

                    <div className="mt-2 flex flex-col gap-1">
                        <h1 className="flex items-center gap-2 text-2xl font-bold">
                            <MonitorPlay className="h-7 w-7" weight="bold" />
                            Fundamentos do Redux
                        </h1>

                        <span className="mt-2 flex items-center gap-1 text-sm font-medium tracking-wide text-light-primary">
                            <Stack className="mb-1 h-4 w-4" weight="bold" />
                            Módulo - "Desvendando o Redux"
                        </span>
                    </div>

                    <button className="px-3 py-2 text-sm text-primary-white font-medium flex items-center gap-2 rounded-sm bg-medium-primary hover:bg-light-primary">
                        <ChatTeardropText className="w-4 h-4" />
                        Deixar feedback
                    </button>
                </div>

                <main className="pr-80 mx-2 relative flex overflow-hidden rounded-lg border-4 border-light-primary bg-medium-primary shadow">
                    <div className="flex-1">
                        <div className="w-full bg-dark-primary aspect-video">
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                controls
                                url="https://www.youtube.com/watch?v=1i04-A7kfFI"
                            />
                        </div>
                    </div>

                    <aside className="divide-y-4 divide-light-primary absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar scrollbar-track-light-primary scrollbar-thumb-condensed-primary scrollbar-thin w-80 border-l-4 border-light-primary bg-medium-primary">
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
                                <button className="flex items-center gap-3 text-sm text-primary-white">
                                    <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
                                </button>

                                <button className="flex items-center gap-3 text-sm text-primary-white">
                                    <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
                                </button>

                                <button className="flex items-center gap-3 text-sm text-primary-white">
                                    <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
                                </button>
                            </nav>
                        </div>

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
                        </div>

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
                                <button className="flex items-center gap-3 text-sm text-primary-white">
                                    <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
                                </button>

                                <button className="flex items-center gap-3 text-sm text-primary-white">
                                    <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
                                </button>

                                <button className="flex items-center gap-3 text-sm text-primary-white">
                                    <VideoCamera className="w-4 h-4 text-primary-gray" weight="bold" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-primary-white">09:13</span>
                                </button>
                            </nav>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    )
}