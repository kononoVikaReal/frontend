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
	title: 'Межрегиональный правовой центр',
	description:
		'«Межрегиональный правовой центр» (МПЦ) — это юридическая компания, которая оказывает помощь гражданам, организациям и индивидуальным предпринимателям',
	icons: {
		icon: '/favicon.ico',
	},
	keywords: 'МПЦ, Межрегиональный правовой центр',
	openGraph: {
		title: 'Межрегиональный правовой центр» (МПЦ)',
		description:
			'«Межрегиональный правовой центр» (МПЦ) — это юридическая компания, которая оказывает помощь гражданам, организациям и индивидуальным предпринимателям',
		url: 'https://mpctest.vercel.app/',
		siteName: 'Межрегиональный правовой центр» (МПЦ)',
		images: [
			{
				url: 'https://mpctest.vercel.app/MPCIcon.jpg',
				width: 800,
				height: 600,
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
}

export const viewport = 'width=device-width, initial-scale=1.0'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
				{/* Шрифт */}
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
