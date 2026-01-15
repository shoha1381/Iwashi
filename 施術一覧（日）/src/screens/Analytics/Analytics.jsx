import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

export const Analytics = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-neutral-50 to-blue-100 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen overflow-hidden">
                {/* Unified Header */}
                <HeaderSection selectedStore="銀座店" />

                {/* Content */}
                <div className="flex-1 overflow-auto p-6 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-white shadow-sm">
                            <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-neutral-400">分析画面 (準備中)</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
