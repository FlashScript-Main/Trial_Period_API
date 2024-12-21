import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FlashScript API",
    description: "This is the API Route for FlashScript Trial Project",
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
