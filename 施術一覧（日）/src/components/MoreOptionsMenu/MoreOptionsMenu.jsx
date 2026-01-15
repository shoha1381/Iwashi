import { useEffect, useRef } from "react";

export const MoreOptionsMenu = ({ isOpen, onClose, anchorPosition }) => {
    const menuRef = useRef(null);

    const menuItems = [
        {
            id: 1,
            label: "類似症例",
            icon: "/static/schedule/vector.svg",
        },
        {
            id: 2,
            label: "写真 AI 生成",
            icon: "/static/schedule/vector-1.svg",
        },
        {
            id: 3,
            label: "写真比較",
            icon: "/static/schedule/vector-2.svg",
        },
    ];

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Dark Backdrop Overlay */}
            <div
                className="fixed inset-0 z-40 bg-black/40"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Menu - White Glassmorphism, positioned below more icon, right-aligned */}
            <nav
                ref={menuRef}
                className="fixed z-50 bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)]"
                style={{
                    top: anchorPosition?.top || "52px",
                    right: anchorPosition?.right || "80px"
                }}
                role="navigation"
                aria-label="機能メニュー"
            >
                <ul className="py-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className="w-full h-11 px-4 flex items-center gap-3 hover:bg-neutral-100/80 transition-colors text-left"
                                onClick={() => {
                                    alert(`${item.label} は開発中です`);
                                    onClose();
                                }}
                            >
                                <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-4 h-4 object-contain"
                                    />
                                </span>
                                <span className="font-medium text-neutral-800 text-[13px] tracking-wide whitespace-nowrap">
                                    {item.label}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
