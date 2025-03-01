'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Briefcase, FileText, Gavel, Scale } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface CaseFile {
	lawyer: {
		name: string
		photo: string
	}
	instance: string
	type: string
	caseNumber: number
	decision: string
	image: string
	timeline: {
		date: string
		event: string
	}[]
}

const caseFiles: CaseFile[] = [
	{
		lawyer: {
			name: 'Юлия Владимировна',
			photo: '/JuliaVladimirovna.png?height=100&width=100',
		},
		instance: 'Верховный суд РФ',
		type: 'Constitutional Law',
		caseNumber: 2434,
		decision:
			'Историческое постановление о правах на неприкосновенность частной жизни',
		image: '/SupremeCourt.webp?height=200&width=300',
		timeline: [
			{
				date: '2024-02-01',
				event:
					'Клиент подал петицию, оспаривающую закон о защите персональных данных',
			},
			{
				date: '2024-02-15',
				event: 'Дело принято Верховным судом',
			},
			{
				date: '2024-03-10',
				event: 'Представленные устные аргументы',
			},
			{
				date: '2024-04-05',
				event:
					'Суд вынес историческое решение, усиливающее защиту частной жизни!',
			},
		],
	},
	{
		lawyer: {
			name: 'Игорь Матвеев',
			photo: '/IgorMatveev.png?height=100&width=100',
		},
		instance: 'Арбитражный суд города Москвы',
		type: 'Criminal Law',
		caseNumber: 2464,
		decision:
			'Обвинительный приговор был отменен в связи с появлением новых доказательств',
		image: '/ArbitrationCourt.jpg?height=200&width=300',
		timeline: [
			{
				date: '2024-01-20',
				event: 'Обнаружены новые улики в деле об убийстве 10-летней давности',
			},
			{
				date: '2024-02-05',
				event: 'Апелляция подана на основании новых данных ДНК',
			},
			{
				date: '2024-03-15',
				event: 'Слушание в апелляционном суде',
			},
			{
				date: '2024-03-30',
				event:
					'Обвинительный приговор отменен, назначено новое судебное разбирательство',
			},
		],
	},
	{
		lawyer: {
			name: 'Мухтар Саидович',
			photo: '/MuxtarSaidovich.png?height=100&width=100',
		},
		instance: 'Симоновский суд Москвы',
		type: 'Civil Rights',
		caseNumber: 3464,
		decision:
			'Успешное урегулирование коллективного иска против крупной корпорации за дискриминацию',
		image: '/SimonovskyDistrictCourt.jpg?height=200&width=300',
		timeline: [
			{
				date: '2024-02-10',
				event:
					'Коллективный иск подан против крупной корпорации за дискриминацию',
			},
			{
				date: '2024-02-25',
				event: 'Выдан сертификат класса',
			},
			{
				date: '2024-03-20',
				event: 'Начался процесс медиации',
			},
			{
				date: '2024-04-15',
				event: 'Мировое соглашение достигнуто, ожидается одобрение суда',
			},
		],
	},
]

const getCaseIcon = (type: string) => {
	switch (type) {
		case 'Constitutional Law':
			return <Scale className='h-6 w-6' />
		case 'Criminal Law':
			return <Gavel className='h-6 w-6' />
		case 'Civil Rights':
			return <FileText className='h-6 w-6' />
		default:
			return <Briefcase className='h-6 w-6' />
	}
}

const getRussianType = (type: string) => {
	switch (type) {
		case 'Constitutional Law':
			return 'Конституционное право'
		case 'Criminal Law':
			return 'Уголовное право'
		case 'Civil Rights':
			return 'Гражданское право'
		default:
			return 'Другое'
	}
}

export default function LawyerCaseFiles() {
	const [selectedCase, setSelectedCase] = useState<CaseFile | null>(null)

	return (
		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
			{caseFiles.map((caseFile, index) => (
				<Card
					key={index}
					className='overflow-hidden bg-gray-50 items-center flex flex-col justify-between'
				>
					<CardHeader className='pb-0'>
						<div className='flex items-center space-x-4'>
							<Image
								src={caseFile.lawyer.photo}
								alt={caseFile.lawyer.name}
								width={50}
								height={50}
								className='rounded-full'
							/>
							<div>
								<CardTitle className='text-lg'>
									{caseFile.lawyer.name}
								</CardTitle>
								<p className='text-sm text-muted-foreground'>
									{caseFile.instance}
								</p>
							</div>
						</div>
					</CardHeader>
					<CardContent className='pt-4'>
						<div className='relative h-40 mb-4 overflow-hidden rounded-md'>
							<Image
								src={caseFile.image || '/placeholder.svg'}
								alt='Case related image'
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 hover:scale-110'
							/>
							<div className='absolute bottom-2 right-2'>
								<Badge
									variant='secondary'
									className='flex items-center space-x-1'
								>
									{getCaseIcon(caseFile.type)}
									<span>{getRussianType(caseFile.type)}</span>
								</Badge>
							</div>
						</div>
						<p className='font-semibold text-primary mb-4'>
							{caseFile.decision}
						</p>
						<Dialog>
							<DialogTrigger asChild>
								<Button
									variant='outline'
									className='w-full bg-neutral-50'
									onClick={() => setSelectedCase(caseFile)}
								>
									Детали дела
								</Button>
							</DialogTrigger>
							<DialogContent className='max-w-4xl bg-white shadow-md text-gray-800'>
								<DialogHeader>
									<DialogTitle className='flex text-xl'>
										{selectedCase?.lawyer.name}
										<span className='mx-2 items-center flex'>
											<svg
												className='w-5 h-5 transition-transform group-hover:translate-x-0.5'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M17 8l4 4m0 0l-4 4m4-4H3'
												/>
											</svg>
										</span>
										<Link
											href={''}
											target='_blank'
											className='relative group cursor-pointer'
										>
											Дело № {selectedCase?.caseNumber}
											<div className='absolute -bottom-3 left-0 w-0 h-0.5 bg-green-500 rounded-full transition-all duration-500 ease-in-out group-hover:w-full'></div>
										</Link>
									</DialogTitle>
								</DialogHeader>

								<div className='mt-2 rounded-lg'>
									<h3 className='text-lg font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2'>
										Хронология дела
									</h3>
									<ul className='space-y-6'>
										{selectedCase?.timeline.map((event, index) => (
											<li key={index} className='flex items-start'>
												<div className='flex-shrink-0 w-24 text-sm font-medium text-gray-600'>
													{new Date(event.date).toLocaleDateString('ru-RU', {
														month: 'short',
														day: 'numeric',
														year: 'numeric',
													})}
												</div>
												<div className='ml-5 flex-grow'>
													<div className='w-3 h-3 rounded-full bg-primary mt-2 mr-3 float-left'></div>
													<p className='text-base text-gray-700'>
														{event.event}
													</p>
												</div>
											</li>
										))}
									</ul>
								</div>
							</DialogContent>
						</Dialog>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
