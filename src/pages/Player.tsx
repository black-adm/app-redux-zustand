import {
    ChatTeardropText,
} from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { Module } from "../components/Module";

export function Player() {
    return (
        <div className="bg-primary-gray h-screen flex justify-center items-center text-dark-primary">
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between px-2 sm:px-6 md:px-4">
                    <Header />

                    <button className="px-3 py-2 text-sm text-primary-white font-medium flex items-center gap-2 rounded-sm bg-medium-primary hover:bg-light-primary">
                        <ChatTeardropText className="w-4 h-4" />
                        Deixar feedback
                    </button>
                </div>

                <main className="pr-80 mx-2 relative flex overflow-hidden rounded-lg border-4 border-light-primary bg-medium-primary shadow">
                    <div className="flex-1">
                        <VideoPlayer />
                    </div>

                    <aside className="divide-y-4 divide-light-primary absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar scrollbar-track-light-primary scrollbar-thumb-condensed-primary scrollbar-thin w-80 border-l-4 border-light-primary bg-medium-primary">
                        <Module />
                    </aside>
                </main>
            </div>
        </div>
    )
}