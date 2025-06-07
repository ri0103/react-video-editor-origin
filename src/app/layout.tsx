import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "non.geist/font/geist-variable.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Video Editor", // Updated title
  description: "Video editor application", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Added suppressHydrationWarning for ThemeProvider */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="vite-ui-theme" // From original project
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
