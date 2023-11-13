import { ChatTeardropText } from "@phosphor-icons/react";

export function Player() {
    return (
        <div className="bg-primary-gray h-screen flex justify-center items-center text-dark-primary">
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between px-2">

                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">
                            Fundamentos Redux
                        </h1>
                        <span className="text-sm text-light-primary">
                            Módulo "Desvendando o Redux"
                        </span>
                    </div>

                    <button className="px-3 py-2 text-sm text-primary-white font-medium flex items-center gap-2 rounded-sm bg-medium-primary hover:bg-light-primary">
                        <ChatTeardropText className="w-4 h-4" />
                        Deixar feedback
                    </button>
                </div>

                <main>

                </main>
            </div>
        </div>
    )
}