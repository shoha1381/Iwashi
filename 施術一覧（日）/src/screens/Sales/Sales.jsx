import { useState, useEffect } from "react";
import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";
import { CustomerOverviewModal } from "../../components/CustomerOverviewModal";

// Mock sales data - 合計 (Total summary)
const totalSales = {
    date: "23日(木)",
    cash: 3300,
    card: 3000,
    point: 300,
    groupon: 0,
    luxa: 0,
    total: 6600
};

// Mock sales data - 内訳 (Breakdown by customer)
const salesBreakdown = [
    { id: 1, date: "23日(木)", customer: "陳 静玉", cash: 3300, card: 0, point: 0, groupon: 0, luxa: 0, total: 3300 },
    { id: 2, date: "23日(木)", customer: "木村 明子", cash: 0, card: 3000, point: 300, groupon: 0, luxa: 0, total: 3300 },
];

export const Sales = () => {
    const [selectedDate] = useState(new Date());
    const [showCustomerOverview, setShowCustomerOverview] = useState(false);
    const [selectedCustomerData, setSelectedCustomerData] = useState(null);

    const formatDate = () => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();
        const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][selectedDate.getDay()];
        return `${year} / ${month} / ${day}　${dayOfWeek}`;
    };

    const formatCurrency = (amount) => {
        return amount === 0 ? "¥0" : `¥${amount.toLocaleString()}`;
    };

    const handleDetailClick = (sale) => {
        // Create customer data for the modal
        const customerData = {
            name: sale.customer,
            reading: "",
            photo: "/img/image-2.png", // Default photo
            courseInfo: "SP・初回",
            media: "ネSP",
            goal: "",
            cautions: [],
            labels: [],
            customerNumber: String(sale.id).padStart(8, '0'),
            firstVisit: "2024/01/15",
            lastVisit: "2024/10/05",
            rank: "シルバー"
        };
        setSelectedCustomerData(customerData);
        setShowCustomerOverview(true);
    };

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsDesktop(window.innerWidth >= 1280);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation - Hidden on mobile and desktop */}
            {!isMobile && !isDesktop && <NavigationSection />}

            {/* Main Content - Add left margin on desktop for sidebar */}
            <div className={`flex-1 flex flex-col pb-20 xl:pb-0 w-full h-screen ${isDesktop ? 'ml-[72px]' : 'lg:mr-16'}`}>
                {/* Unified Header */}
                <HeaderSection selectedStore="銀座店" />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto pt-16 w-full">
                    <div className="bg-white min-h-full">
                        <div className="px-6 py-8 max-w-5xl mx-auto">
                            {/* Store & Date Card - Glassmorphism */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 p-5 mb-8">
                                <p className="text-lg font-light text-neutral-700 tracking-wide">
                                    <span className="font-normal">銀座店</span>
                                    <span className="ml-4 text-neutral-600">{formatDate()}</span>
                                </p>
                            </div>

                            {/* 合計 Section */}
                            <div className="mb-10">
                                <h2 className="text-xl font-light text-neutral-700 tracking-wide mb-5 ml-2">合計</h2>
                                <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100">
                                    <table className="w-full border-collapse bg-white">
                                        <thead>
                                            <tr className="bg-[#55a5e8] text-white text-left">
                                                <th className="py-3 px-4 font-medium text-sm">日付</th>
                                                <th className="py-3 px-4 font-medium text-sm">現金</th>
                                                <th className="py-3 px-4 font-medium text-sm">カード</th>
                                                <th className="py-3 px-4 font-medium text-sm">ポイント</th>
                                                <th className="py-3 px-4 font-medium text-sm">グルーポン</th>
                                                <th className="py-3 px-4 font-medium text-sm">ルクサ</th>
                                                <th className="py-3 px-4 font-medium text-sm">合計</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-neutral-100 bg-white">
                                                <td className="py-3 px-4 text-sm text-neutral-700">{totalSales.date}</td>
                                                <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(totalSales.cash)}</td>
                                                <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(totalSales.card)}</td>
                                                <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(totalSales.point)}</td>
                                                <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(totalSales.groupon)}</td>
                                                <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(totalSales.luxa)}</td>
                                                <td className="py-3 px-4 text-sm font-medium text-neutral-700">{formatCurrency(totalSales.total)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 内訳 Section */}
                            <div>
                                <h2 className="text-xl font-light text-neutral-700 tracking-wide mb-5 ml-2">内訳</h2>
                                <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100">
                                    <table className="w-full border-collapse bg-white">
                                        <thead>
                                            <tr className="bg-[#55a5e8] text-white text-left">
                                                <th className="py-3 px-4 font-medium text-sm">日付</th>
                                                <th className="py-3 px-4 font-medium text-sm">顧客名</th>
                                                <th className="py-3 px-4 font-medium text-sm">現金</th>
                                                <th className="py-3 px-4 font-medium text-sm">カード</th>
                                                <th className="py-3 px-4 font-medium text-sm">ポイント</th>
                                                <th className="py-3 px-4 font-medium text-sm">グルーポン</th>
                                                <th className="py-3 px-4 font-medium text-sm">ルクサ</th>
                                                <th className="py-3 px-4 font-medium text-sm">合計</th>
                                                <th className="py-3 px-4 font-medium text-sm w-20"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {salesBreakdown.map((sale, index) => (
                                                <tr
                                                    key={sale.id}
                                                    className={`border-b border-neutral-100 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}
                                                >
                                                    <td className="py-3 px-4 text-sm text-neutral-700">{sale.date}</td>
                                                    <td className="py-3 px-4 text-sm text-neutral-700">{sale.customer}</td>
                                                    <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(sale.cash)}</td>
                                                    <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(sale.card)}</td>
                                                    <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(sale.point)}</td>
                                                    <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(sale.groupon)}</td>
                                                    <td className="py-3 px-4 text-sm text-neutral-600">{formatCurrency(sale.luxa)}</td>
                                                    <td className="py-3 px-4 text-sm font-medium text-neutral-700">{formatCurrency(sale.total)}</td>
                                                    <td className="py-3 px-4 text-right">
                                                        <button
                                                            onClick={() => handleDetailClick(sale)}
                                                            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-[#55a5e8] rounded-lg hover:bg-[#4a96d8] transition-colors shadow-[0_2px_6px_rgba(85,165,232,0.25)] whitespace-nowrap"
                                                        >
                                                            詳細
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Overview Modal */}
            <CustomerOverviewModal
                isOpen={showCustomerOverview}
                onClose={() => setShowCustomerOverview(false)}
                customerData={selectedCustomerData}
            />
        </div>
    );
};

