import { useState, useEffect } from "react";

// CSS filters for desktop sidebar
const BLUE_DARK = 'brightness(0) saturate(100%) invert(44%) sepia(83%) saturate(1352%) hue-rotate(187deg) brightness(102%) contrast(101%)';
const BLUE_LIGHT = 'brightness(0) saturate(100%) invert(65%) sepia(50%) saturate(500%) hue-rotate(187deg) brightness(110%) contrast(95%)';
const GRAY_DARK = 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
const GRAY_LIGHT = 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';

// Desktop Sidebar Navigation Item Component
const DesktopNavItem = ({ href, label, renderIcon }) => {
    const isActive = window.location.pathname === href ||
        (href === "/" && (window.location.pathname === "/" || window.location.pathname === "/schedule"));

    return (
        <a
            href={href}
            className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${isActive
                ? 'bg-blue-50'
                : 'hover:bg-neutral-50'
                }`}
        >
            {renderIcon(isActive)}
            <span className={`text-[9px] font-medium ${isActive ? 'text-[#0088ff]' : 'text-neutral-400'
                }`}>
                {label}
            </span>
        </a>
    );
};

// Desktop Sidebar Component - For screens >= 1280px
export const DesktopSidebar = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isDesktop) return null;

    const navItems = [
        {
            id: "treatment",
            label: "施術",
            href: "/",
            renderIcon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt=""
                        src="/img/footer-treatment.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                    <img
                        className="absolute w-[83%] h-[25%] top-[17%] left-[8%]"
                        alt=""
                        src="/img/footer-treatment-header.svg"
                        style={{ filter: isActive ? BLUE_DARK : GRAY_DARK }}
                    />
                </div>
            ),
        },
        {
            id: "analysis",
            label: "分析",
            href: "/analytics",
            renderIcon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="w-full h-full"
                        alt=""
                        src="/img/footer-analysis.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "sales",
            label: "売上",
            href: "/sales",
            renderIcon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center overflow-hidden">
                    <div className={`w-[60%] h-[55%] top-[35%] left-[20%] rounded-[6px] absolute ${isActive ? 'bg-[#0088ff]' : 'bg-[#999999]'}`} />
                    <img
                        className="absolute w-[92%] h-full top-0 left-[4%]"
                        alt=""
                        src="/img/footer-sales.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "summary",
            label: "集計",
            href: "/summary",
            renderIcon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="absolute w-[75%] h-[75%] top-[12%] left-[12%]"
                        alt=""
                        src="/img/footer-summary-1.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                    <img
                        className="absolute w-[75%] h-[25%] top-[12%] left-[12%]"
                        alt=""
                        src="/img/footer-summary-2.svg"
                        style={{ filter: isActive ? BLUE_DARK : GRAY_DARK }}
                    />
                </div>
            ),
        },
        {
            id: "customers",
            label: "顧客",
            href: "/customers",
            renderIcon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="absolute w-[94%] h-[69%] top-[15%] left-[3%]"
                        alt=""
                        src="/img/footer-customers-1.svg"
                        style={{ filter: isActive ? BLUE_DARK : GRAY_DARK }}
                    />
                    <img
                        className="absolute w-[62%] h-[69%] top-[15%] left-[34%]"
                        alt=""
                        src="/img/footer-customers-2.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
    ];

    const settingsItem = {
        id: "settings",
        label: "設定",
        href: "/settings",
        renderIcon: (isActive) => (
            <div className="w-6 h-6 relative flex items-center justify-center">
                <img
                    className="w-full h-full"
                    alt=""
                    src="/img/footer-settings.svg"
                    style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                />
            </div>
        ),
    };

    return (
        <aside className="fixed left-0 top-0 h-full w-[72px] bg-white shadow-lg z-[200] flex flex-col items-center py-8 gap-3 border-r border-neutral-100">
            {navItems.map((item) => (
                <DesktopNavItem key={item.id} {...item} />
            ))}
            <div className="flex-1" />
            <DesktopNavItem {...settingsItem} />
        </aside>
    );
};

export default DesktopSidebar;
