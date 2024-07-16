import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {getMessages} from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";

// const locales = ["en", "de", "kn-IN"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConnectCraft | MOOCs",
  description: "All in one learning site",
};

export default async function RootLayout({
  children,
  locale
}: {
  children: React.ReactNode;
  locale : string
}) {
  const messages = await getMessages();
  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <ConfettiProvider />
            <ToastProvider />
            <ThemeProvider>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
