"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName
}) => {
    const [active, setActive] = useState(propTabs[0]);
    const [tabs, setTabs] = useState(propTabs);

    const moveSelectedTabToTop = (idx) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(null); // Menyimpan ID tab yang sedang di-hover

    return (
        <>
            <div
                className={cn(
                    "flex flex-row items-center justify-center [perspective:1000px] relative sm:overflow-visible no-visible-scrollbar max-w-full w-full overflow-hidden",
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        onMouseEnter={() => setHovering(tab.value)}
                        onMouseLeave={() => setHovering(null)}
                        className={cn(
                            "relative px-4 py-2 rounded-full transition-all duration-500 ease-in-out", // Durasi lebih lama
                            tabClassName
                        )}
                        style={{
                            transformStyle: "preserve-3d",
                            background: hovering === tab.value || active.value === tab.value
                                ? "linear-gradient(90deg, rgba(50,50,50,1) 0%, rgba(0,0,0,0.2) 100%)" // Gradasi abu-abu dengan sentuhan kebiru-biruan
                                : "none", // Tanpa gradasi
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                className={cn(
                                    "absolute inset-0 inline-flex h-full animate-shimmer items-center justify-center rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] border border-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span
                            className={cn(
                                "relative block text-neutral-400 dark:text-white",
                                hovering === tab.value ? "text-gray-400" : "" // Warna teks saat hover
                            )}
                        >
                            {tab.title}
                        </span>

                        {/* Garis bawah untuk efek hover */}
                        <span
                            className={cn(
                                "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent origin-center transition-transform scale-x-0 duration-500 ease-in-out", // Garis bawah abu-abu tua kebiru-biruan
                                (hovering === tab.value || active.value === tab.value) ? "scale-x-100" : ""
                            )}
                        />
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-0", contentClassName)}
            />
        </>
    );
};

export const FadeInDiv = ({
    className,
    tabs,
    hovering
}) => {
    const isActive = (tab) => {
        return tab.value === tabs[0].value;
    };

    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0", className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
};