import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
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

const prataStatic = Prata({
	variable: '--font-prata',
	weight: ['400'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap', // Add font-display strategy
	preload: true, // Ensure font preloading
})

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
		<html lang='ru' className={`${prataStatic.variable} antialiased`}>
			<Head>
				<meta name='apple-mobile-web-app-title' content='МПЦ' />
				<meta name='application-name' content='МПЦ' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='black-translucent'
				/>
				<link rel='apple-touch-icon' href='/MPCIcon.png' />
				{/* Шрифт */}
				<Link rel='preconnect' href='https://fonts.googleapis.com' />
				<Link rel='preconnect' href='https://fonts.gstatic.com' />
				<Link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className={`antialiased bg-background`}>{children}</body>
		</html>
	)
}
