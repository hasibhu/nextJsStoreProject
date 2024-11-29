"use client"

import Theme_Provider from "./Theme_Provider";

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Theme_Provider
                attribute='class'
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                
                {children}
            </Theme_Provider>
        </div>
    );
};

export default Providers;