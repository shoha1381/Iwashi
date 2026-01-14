import { useState } from "react";
import { Link } from "react-router-dom";
import { ScheduleGridSection } from "../Screen/sections/ScheduleGridSection";

// Icons
const SearchIcon = () => (
    <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Mock customer data
const mockCustomers = [
    { id: 1, name: "イソヒ", nameKana: "イソヒ", phone: "", store: "上野" },
    { id: 2, name: "佐藤 悌子 ロ", nameKana: "サトウ マサコ", phone: "", store: "上野" },
    { id: 3, name: "杉本 夏美", nameKana: "スギモト カヲ", phone: "", store: "上野" },
    { id: 4, name: "センポンマツ マサエ", nameKana: "センポンマツ マサエ", phone: "", store: "上野" },
    { id: 5, name: "宮取山 蒲花", nameKana: "宮取山 蒲花", phone: "", store: "上野" },
    { id: 6, name: "梅田 結菜", nameKana: "ウメダ ユイナ", phone: "", store: "上野" },
    { id: 7, name: "大塚 優子 セ", nameKana: "オオオカ カウコ", phone: "", store: "上野" },
    { id: 8, name: "小柳 真央 ウ", nameKana: "コヤナギ マオ", phone: "", store: "上野" },
    { id: 9, name: "境 美幸 ハ", nameKana: "サカイ ミユキ", phone: "", store: "上野" },
    { id: 10, name: "田之上 明子", nameKana: "タノウエ アキコ", phone: "", store: "上野" },
    { id: 11, name: "中西 萌", nameKana: "ナカニシ モエ", phone: "", store: "上野" },
    { id: 12, name: "中川 義成", nameKana: "中川 義成", phone: "", store: "上野" },
];

export const CustomerList = () => {
    const [searchName, setSearchName] = useState("");
    const [searchPhone, setSearchPhone] = useState("");
    const [selectedStore, setSelectedStore] = useState("全ての店舗");

    const filteredCustomers = mockCustomers.filter(customer => {
        const matchesName = customer.name.includes(searchName) || customer.nameKana.includes(searchName);
        const matchesPhone = customer.phone.includes(searchPhone);
        const matchesStore = selectedStore === "全ての店舗" || customer.store === selectedStore;
        return matchesName && matchesPhone && matchesStore;
    });

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <ScheduleGridSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen">
                {/* Header */}
                <header className="bg-white border-b border-neutral-200 px-6 py-4">
                    <h1 className="text-2xl font-bold text-neutral-800 mb-1">顧客</h1>
                    <h2 className="text-lg text-neutral-500">客</h2>
                </header>

                {/* Search and Filter Bar */}
                <div className="bg-white border-b border-neutral-200 px-6 py-4 flex flex-wrap items-center gap-4">
                    {/* Name Search */}
                    <div className="relative flex-1 min-w-[200px] max-w-[300px]">
                        <input
                            type="text"
                            placeholder="顧客名で検索"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            className="w-full h-10 pl-4 pr-10 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-blue-500 rounded-md text-white">
                            <SearchIcon />
                        </button>
                    </div>

                    {/* Phone Search */}
                    <div className="relative flex-1 min-w-[200px] max-w-[300px]">
                        <input
                            type="text"
                            placeholder="電話番号で検索"
                            value={searchPhone}
                            onChange={(e) => setSearchPhone(e.target.value)}
                            className="w-full h-10 pl-4 pr-10 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-blue-500 rounded-md text-white">
                            <SearchIcon />
                        </button>
                    </div>

                    {/* Store Filter */}
                    <div className="ml-auto">
                        <button className="flex items-center gap-2 h-10 px-4 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-600 hover:bg-neutral-50">
                            {selectedStore}
                            <ChevronDownIcon />
                        </button>
                    </div>
                </div>

                {/* Customer Table */}
                <div className="flex-1 overflow-auto px-6 py-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#3b5998] text-white text-left">
                                <th className="py-3 px-4 font-medium text-sm">顧客名</th>
                                <th className="py-3 px-4 font-medium text-sm">顧客名（カナ）</th>
                                <th className="py-3 px-4 font-medium text-sm">電話番号</th>
                                <th className="py-3 px-4 font-medium text-sm">店舗</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCustomers.map((customer, index) => (
                                <tr
                                    key={customer.id}
                                    className={`border-b border-neutral-200 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                                        }`}
                                >
                                    <td className="py-3 px-4">
                                        <Link
                                            to={`/customers/${customer.id}`}
                                            className="text-sm text-neutral-800 hover:text-blue-600 hover:underline"
                                        >
                                            {customer.name}
                                        </Link>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-neutral-600">{customer.nameKana}</td>
                                    <td className="py-3 px-4 text-sm text-neutral-600">{customer.phone || "-"}</td>
                                    <td className="py-3 px-4 text-sm text-neutral-600">{customer.store}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Bottom Navigation (Mobile) */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-2 flex justify-around">
                    <Link to="/" className="flex flex-col items-center gap-1 text-neutral-500">
                        <span className="text-xs">施術</span>
                    </Link>
                    <Link to="/customers" className="flex flex-col items-center gap-1 text-blue-600">
                        <span className="text-xs font-medium">顧客</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
