import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

export const Analytics = () => {
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
                        {/* Placeholder Content */}
                        <div className="flex items-center justify-center h-[calc(100vh-180px)]">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-neutral-400">分析画面（準備中）</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
