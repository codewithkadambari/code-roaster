import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { APP } from "@/config/app.config";
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
export const metadata: Metadata = { title: `${APP.name} — AI Code Critique`, description: APP.tagline };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${space.variable} ${mono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>; }
