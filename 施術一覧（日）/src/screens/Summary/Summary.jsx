import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

export const Summary = () => {
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-neutral-400">集計画面 (準備中)</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
