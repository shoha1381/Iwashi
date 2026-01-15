import { Link, useLocation } from "react-router-dom";

// CSS filters for colors
const BLUE_DARK = 'brightness(0) saturate(100%) invert(44%) sepia(83%) saturate(1352%) hue-rotate(187deg) brightness(102%) contrast(101%)';
const BLUE_LIGHT = 'brightness(0) saturate(100%) invert(65%) sepia(50%) saturate(500%) hue-rotate(187deg) brightness(110%) contrast(95%)';
const GRAY_DARK = 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
const GRAY_LIGHT = 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';

export const NavigationSection = () => {
    const location = useLocation();

    // Determine active item based on current route
    const getActiveItem = () => {
        const path = location.pathname;
        if (path.startsWith('/customers')) return 'customers';
        if (path.startsWith('/sales')) return 'sales';
        if (path.startsWith('/analytics')) return 'analysis';
        if (path.startsWith('/summary')) return 'summary';
        if (path.startsWith('/settings')) return 'settings';
        return 'treatment'; // Default for / and /schedule
    };

    const activeItem = getActiveItem();

    // Order: 施術, 分析, 売上, 集計, 顧客, 設定
    const navigationItems = [
        {
            id: "treatment",
            label: "施術",
            path: "/",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt="Treatment body"
                        src="/img/vector.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                    <img
                        className="absolute w-[83%] h-[25%] top-[17%] left-[8%]"
                        alt="Treatment header"
                        src="/img/vector-1.svg"
                        style={{ filter: isActive ? BLUE_DARK : GRAY_DARK }}
                    />
                </div>
            ),
        },
        {
            id: "analysis",
            label: "分析",
            path: "/analytics",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt="Analysis"
                        src="/img/vector-7.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "sales",
            label: "売上",
            path: "/sales",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt="Sales"
                        src="/img/vector-15.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "summary",
            label: "集計",
            path: "/summary",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt="Summary"
                        src="/img/vector-4.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "customers",
            label: "顧客",
            path: "/customers",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    <img
                        className="absolute w-[94%] h-[69%] top-[15%] left-[3%]"
                        alt="Customers 1"
                        src="/img/vector-5.svg"
                        style={{ filter: isActive ? BLUE_DARK : GRAY_DARK }}
                    />
                    <img
                        className="absolute w-[62%] h-[69%] top-[15%] left-[34%]"
                        alt="Customers 2"
                        src="/img/vector-6.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "settings",
            label: "設定",
            path: "/settings",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    {/* Gear Icon */}
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt="Settings"
                        src="/img/vector-2.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            {/* Desktop Side Navigation */}
            <nav className="side-nav hidden lg:flex" role="navigation" aria-label="メインナビゲーション">
                {navigationItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`side-nav-item ${activeItem === item.id ? "active" : ""}`}
                        aria-label={item.label}
                        aria-current={activeItem === item.id ? "page" : undefined}
                    >
                        {item.icon(activeItem === item.id)}
                        <span className="side-nav-label">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Mobile/Tablet Bottom Navigation - All 6 items */}
            <nav className="bottom-nav lg:hidden" role="navigation" aria-label="メインナビゲーション">
                {navigationItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`bottom-nav-item ${activeItem === item.id ? "active" : ""}`}
                        aria-label={item.label}
                    >
                        <span className="bottom-nav-icon">{item.icon(activeItem === item.id)}</span>
                        <span className="bottom-nav-label">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
};
