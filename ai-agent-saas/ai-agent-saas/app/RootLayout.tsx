import { geistSans, geistMono } from "./layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper></ClientWrapper>
        {children}
      </body>
    </html>
  );
}
