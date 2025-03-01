import type { Metadata } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import './globals.css'

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// })

export const metadata: Metadata = {
	title: 'МПЦ',
	description: 'МПЦ',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
				<Link rel='preconnect' href='https://fonts.googleapis.com' />
				<Link rel='preconnect' href='https://fonts.gstatic.com' />
				<Link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}
