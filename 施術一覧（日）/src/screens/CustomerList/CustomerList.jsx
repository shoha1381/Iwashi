import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

// Icons
const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// Mock customer data (matching reference)
const mockCustomers = [
    { id: 1, name: "イソンヒ", nameKana: "イソンヒ", phone: "-", store: "上野" },
    { id: 2, name: "佐藤 雅子 口", nameKana: "サトウ ママコ", phone: "-", store: "上野" },
    { id: 3, name: "杉本 夏美", nameKana: "スギモト ナツミ", phone: "-", store: "上野" },
    { id: 4, name: "センボンマツ マサエ", nameKana: "センボンマツ マサエ", phone: "-", store: "上野" },
    { id: 5, name: "世取山 風花", nameKana: "世取山 風花", phone: "-", store: "上野" },
    { id: 6, name: "梅田 結菜", nameKana: "ウメダ ユイナ", phone: "-", store: "上野" },
    { id: 7, name: "大岡 優子 セ", nameKana: "オオオカ ユウコ", phone: "-", store: "上野" },
    { id: 8, name: "小柳 真央 ウ", nameKana: "コヤナギ マオ", phone: "-", store: "上野" },
    { id: 9, name: "境 美幸 ハ", nameKana: "サカイ ミユキ", phone: "-", store: "上野" },
    { id: 10, name: "田之上 明子", nameKana: "タノウエ アキコ", phone: "-", store: "上野" },
    { id: 11, name: "中西 萌", nameKana: "ナカニシ モエ", phone: "-", store: "上野" },
    { id: 12, name: "中川 義成", nameKana: "中川 義成", phone: "-", store: "上野" },
];

export const CustomerList = () => {
    const [searchName, setSearchName] = useState("");
    const [searchPhone, setSearchPhone] = useState("");
    const [filterOption, setFilterOption] = useState("すべての顧客");

    const filteredCustomers = mockCustomers.filter(customer => {
        const matchesName = customer.name.includes(searchName) || customer.nameKana.includes(searchName);
        const matchesPhone = searchPhone === "" || customer.phone.includes(searchPhone);
        return matchesName && matchesPhone;
    });

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen">
                {/* Unified Header */}
                <HeaderSection selectedStore="銀座店" />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto pt-16 w-full">
                    <div className="bg-white min-h-full">
                        {/* Search and Filter Bar - Glassmorphism style with soft shadows */}
                        <div className="px-6 py-5 flex flex-wrap items-center gap-4">
                            {/* Name Search - Glassmorphism soft shadow */}
                            <div className="relative flex-1 min-w-[200px] max-w-[280px]">
                                <input
                                    type="text"
                                    placeholder="顧客名で検索"
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    className="w-full h-10 pl-4 pr-12 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-300 placeholder:text-neutral-400 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                                />
                                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#55a5e8] text-white rounded-lg hover:bg-[#4a96d8] transition-colors shadow-[0_2px_8px_rgba(85,165,232,0.3)]">
                                    <SearchIcon />
                                </button>
                            </div>

                            {/* Phone Search - Glassmorphism soft shadow */}
                            <div className="relative flex-1 min-w-[200px] max-w-[280px]">
                                <input
                                    type="text"
                                    placeholder="電話番号で検索"
                                    value={searchPhone}
                                    onChange={(e) => setSearchPhone(e.target.value)}
                                    className="w-full h-10 pl-4 pr-12 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-300 placeholder:text-neutral-400 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                                />
                                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#55a5e8] text-white rounded-lg hover:bg-[#4a96d8] transition-colors shadow-[0_2px_8px_rgba(85,165,232,0.3)]">
                                    <SearchIcon />
                                </button>
                            </div>

                            {/* Filter Dropdown - Right aligned, soft style */}
                            <div className="ml-auto">
                                <button className="flex items-center gap-2 h-10 px-4 text-sm text-neutral-500 hover:text-neutral-700 transition-colors">
                                    {filterOption}
                                    <ChevronDownIcon />
                                </button>
                            </div>
                        </div>

                        {/* Customer Table - Glassmorphism style with soft shadows */}
                        <div className="px-6 pb-6">
                            <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100">
                                <table className="w-full border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-neutral-100 text-neutral-600 text-left border-b border-neutral-200">
                                            <th className="py-3 px-5 font-medium text-sm">顧客名</th>
                                            <th className="py-3 px-5 font-medium text-sm">顧客名（カナ）</th>
                                            <th className="py-3 px-5 font-medium text-sm">電話番号</th>
                                            <th className="py-3 px-5 font-medium text-sm">店舗</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCustomers.map((customer, index) => (
                                            <tr
                                                key={customer.id}
                                                className={`border-b border-neutral-100 hover:bg-blue-50/30 transition-colors cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                                                    }`}
                                            >
                                                <td className="py-3 px-5">
                                                    <Link
                                                        to={`/customers/${customer.id}`}
                                                        className="text-sm text-neutral-700 hover:text-blue-500 transition-colors"
                                                    >
                                                        {customer.name}
                                                    </Link>
                                                </td>
                                                <td className="py-3 px-5 text-sm text-neutral-500">{customer.nameKana}</td>
                                                <td className="py-3 px-5 text-sm text-neutral-500">{customer.phone}</td>
                                                <td className="py-3 px-5 text-sm text-neutral-500">{customer.store}</td>
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
    );
};
