import { AppSidebar, MobileSidebar } from "@/components/Sidebar"
import localFont from "next/font/local";
import { SidebarInset } from "@/components/ui/sidebar"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: {
//     template:'Obikels Creations | %s',
//   default: 'Obikels Creations',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          <div className="hidden lg:block">
            <AppSidebar />
          </div>
          <SidebarInset className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 py-8">
              <MobileSidebar />
              {children}
            </div>
          </SidebarInset>
        </div>
      </body>
    </html>
  )
}

