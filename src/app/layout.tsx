import type { Metadata } from "next";
import "@/app/ui/globals.css";
import "@/app/ui/main.css";
import "@/app/ui/a.css";
import "@/app/ui/h.css";
import "@/app/ui/section.css";
import "@/app/ui/hr.css";
import "@/app/ui/image.css";

export const metadata: Metadata = {
  title: "Patient",
  description: "Patient's Portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
