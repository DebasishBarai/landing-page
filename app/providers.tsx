"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <RecoilRoot>
        {children}
        </RecoilRoot>
      </ThemeProvider>
  );
};