"use client";
import Beranda from "../Beranda";
import Tentang from "../Tentang";
import Projek from "../Projek";
import Kontak from "../Kontak";
import { Tabs } from "../../Ui/tabs";

export function TabsDemo() {

    const tabs = [
        {
            title: "Beranda",
            value: "beranda",
            content: (
                <Beranda />
            ),
        },
        {
            title: "Tentang",
            value: "tentang",
            content: (
                <Tentang />
            ),
        },
        {
            title: "Projek",
            value: "projek",
            content: (
                <Projek />
            ),
        },
        {
            title: "Kontak",
            value: "kontak",
            content: (
                <Kontak />
            ),
        },

    ];

    return (
        (<div className="bg-transparent overflow-hidden h-full md:h-full [perspective:1000px] relative flex flex-col w-full items-start justify-start">
            <Tabs tabs={tabs} />
        </div>)
    );
}
