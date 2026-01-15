import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

export const Settings = () => {
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-neutral-400">設定画面 (準備中)</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
