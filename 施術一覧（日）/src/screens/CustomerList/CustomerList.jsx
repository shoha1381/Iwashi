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
                        {/* Search and Filter Bar - Matching reference design */}
                        <div className="px-6 py-5 flex flex-wrap items-center gap-4">
                            {/* Name Search - teal border style */}
                            <div className="relative flex-1 min-w-[200px] max-w-[280px]">
                                <input
                                    type="text"
                                    placeholder="顧客名で検索"
                                    value={searchName}
                                    onChange={(e) => setSearchName(e.target.value)}
                                    className="w-full h-9 pl-4 pr-10 border-2 border-[#5DADE2] rounded text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#3498db] placeholder:text-neutral-400"
                                />
                                <button className="absolute right-0 top-0 h-9 w-9 flex items-center justify-center bg-[#3498db] text-white rounded-r hover:bg-[#2980b9] transition-colors">
                                    <SearchIcon />
                                </button>
                            </div>

                            {/* Phone Search - teal border style */}
                            <div className="relative flex-1 min-w-[200px] max-w-[280px]">
                                <input
                                    type="text"
                                    placeholder="電話番号で検索"
                                    value={searchPhone}
                                    onChange={(e) => setSearchPhone(e.target.value)}
                                    className="w-full h-9 pl-4 pr-10 border-2 border-[#5DADE2] rounded text-sm bg-white focus:outline-none focus:ring-0 focus:border-[#3498db] placeholder:text-neutral-400"
                                />
                                <button className="absolute right-0 top-0 h-9 w-9 flex items-center justify-center bg-[#3498db] text-white rounded-r hover:bg-[#2980b9] transition-colors">
                                    <SearchIcon />
                                </button>
                            </div>

                            {/* Filter Dropdown - Right aligned */}
                            <div className="ml-auto">
                                <button className="flex items-center gap-2 h-9 px-3 text-sm text-neutral-600 hover:text-neutral-800 transition-colors">
                                    {filterOption}
                                    <ChevronDownIcon />
                                </button>
                            </div>
                        </div>

                        {/* Customer Table - Matching reference blue header */}
                        <div className="px-6 pb-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#3b82f6] text-white text-left">
                                        <th className="py-2.5 px-4 font-medium text-sm border-r border-[#5b9aff] first:rounded-tl">顧客名</th>
                                        <th className="py-2.5 px-4 font-medium text-sm border-r border-[#5b9aff]">顧客名（カナ）</th>
                                        <th className="py-2.5 px-4 font-medium text-sm border-r border-[#5b9aff]">電話番号</th>
                                        <th className="py-2.5 px-4 font-medium text-sm last:rounded-tr">店舗</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCustomers.map((customer, index) => (
                                        <tr
                                            key={customer.id}
                                            className={`border-b border-neutral-200 hover:bg-blue-50/50 transition-colors cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/80'
                                                }`}
                                        >
                                            <td className="py-2.5 px-4 border-r border-neutral-200">
                                                <Link
                                                    to={`/customers/${customer.id}`}
                                                    className="text-sm text-neutral-700 hover:text-blue-600 transition-colors"
                                                >
                                                    {customer.name}
                                                </Link>
                                            </td>
                                            <td className="py-2.5 px-4 text-sm text-neutral-500 border-r border-neutral-200">{customer.nameKana}</td>
                                            <td className="py-2.5 px-4 text-sm text-neutral-500 border-r border-neutral-200">{customer.phone}</td>
                                            <td className="py-2.5 px-4 text-sm text-neutral-500">{customer.store}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
