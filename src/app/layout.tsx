import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import './globals.css'

const prataStatic = Prata({
	variable: '--font-prata',
	weight: ['400'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap', // Стратегия отображения шрифта
	preload: true, // Убедимся, что шрифт загрузится
})

export const metadata: Metadata = {
	title: 'Межрегиональный правовой центр',
	description:
		'«Межрегиональный правовой центр» (МПЦ) — это юридическая компания, которая оказывает помощь гражданам, организациям и индивидуальным предпринимателям',
	icons: {
		icon: '/favicon.ico',
		apple: '/MPCIcon.png',
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
	appleWebApp: {
		title: 'МПЦ',
		statusBarStyle: 'black-translucent',
		capable: true,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={`${prataStatic.variable} antialiased`}>
			<Head>
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
