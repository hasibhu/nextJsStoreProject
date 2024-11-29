

'use client';

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

const Theme_Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"               // Apply theme class to the HTML element
      defaultTheme="system"           // Default theme based on system preference
      enableSystem                     // Enable system theme detection
      disableTransitionOnChange        // Disable transition to prevent flicker
    >
      {children}
    </NextThemesProvider>
  );
};

export default Theme_Provider;
