"use client";

import { fonts } from "@/chakra-ui/fonts";
import Providers from "./util/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
