'use client'


import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'



const Theme_Provider = ({children, ...props}: ThemeProviderProps) => {
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    );
};

export default Theme_Provider;