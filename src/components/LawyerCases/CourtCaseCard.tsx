'use client'
import {
	Building2,
	ChevronDown,
	GavelIcon,
	Link2,
	Scale,
	Trophy,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Attorney {
	fullName: string
	imageUrl: string
	lawyerType: string
}

interface CaseDetails {
	court: string
	caseNumber: string
	documentationUrl: string
	headline: string
	outcome: string
	monetaryAward?: string
	precedent?: string
	lawType?: string
}

interface CourtCaseCardProps {
	attorney: Attorney
	caseDetails: CaseDetails
}

export function CourtCaseCard({ attorney, caseDetails }: CourtCaseCardProps) {
	const [isOutcomeVisible, setIsOutcomeVisible] = useState(false)
	return (
		<article
			className='group bg-midnight-light rounded-xl shadow-lg overflow-hidden md:max-w-[380px] max-w-[300px] w-full mx-auto border border-slate-700 flex flex-col h-full relative transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-aurora/20 hover:-translate-y-1 hover:border-aurora/50'
			role='article'
			aria-labelledby={`case-${caseDetails.caseNumber}`}
		>
			<div className='absolute inset-0 bg-gradient-to-t from-aurora/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
			<div className='p-4 md:p-6 flex flex-col flex-grow relative'>
				{/* Значок типа закона */}
				<div className='h-8 flex items-center'>
					<div className='inline-flex items-center bg-aurora bg-opacity-20 text-aurora-light rounded-full px-3 py-1 text-sm font-medium transform transition-transform duration-300 group-hover:scale-105 group-hover:bg-opacity-30'>
						<Scale className='w-4 h-4 mr-1 transition-transform duration-300 group-hover:rotate-12' />
						{caseDetails.lawType || 'Civil Law'}
					</div>
				</div>

				{/* Секция адвоката - Фиксированная высота */}
				<div className='h-16 md:h-20 flex items-center space-x-3 md:space-x-4 mt-4'>
					<div className='relative'>
						<div className='absolute inset-0 bg-aurora rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-110' />
						<Image
							src={attorney.imageUrl}
							alt={`Attorney ${attorney.fullName}`}
							className='w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-aurora flex-shrink-0 transition-all duration-300 group-hover:border-aurora-light relative z-10'
							loading='lazy'
							width={100}
							height={100}
						/>
					</div>
					<div className='flex flex-col justify-center'>
						<h3 className='text-base md:text-lg font-semibold text-frost transition-colors duration-300 group-hover:text-aurora-light'>
							{attorney.fullName}
						</h3>
						<div className='flex items-center text-slate-400'>
							<GavelIcon className='w-3 h-3 md:w-4 md:h-4 mr-1 transition-transform duration-300 group-hover:rotate-12' />
							<span className='text-xs md:text-sm'>{attorney.lawyerType}</span>
						</div>
					</div>
				</div>

				{/* Заголовок дела - Фиксированная высота */}
				<h2
					id={`case-${caseDetails.caseNumber}`}
					className='text-xl md:text-2xl font-bold text-frost leading-tight mt-4 h-[8rem] transition-colors duration-300 group-hover:text-aurora-light'
				>
					{caseDetails.headline}
				</h2>

				{/* Заголовок обращения - Фиксированная высота */}
				<div className='grid grid-cols-2 gap-3 md:gap-4 h-16 my-4'>
					<div className='flex items-start space-x-2'>
						<Building2 className='w-4 h-4 md:w-5 md:h-5 text-aurora flex-shrink-0 transition-transform duration-300 group-hover:scale-110' />
						<div>
							<p className='text-xs md:text-sm font-medium text-frost-dark transition-colors duration-300 group-hover:text-frost'>
								{caseDetails.court}
							</p>
						</div>
					</div>
					<div className='flex items-start space-x-2'>
						<Link2 className='w-4 h-4 md:w-5 md:h-5 text-aurora flex-shrink-0 transition-transform duration-300 group-hover:rotate-12' />
						<a
							href={caseDetails.documentationUrl}
							className='text-xs md:text-sm font-medium text-aurora-light hover:text-aurora underline transition-colors duration-300'
							target='_blank'
							rel='noopener noreferrer'
						>
							{caseDetails.caseNumber}
						</a>
					</div>
				</div>

				{/* Кнопка переключения видимости */}
				<button
					onClick={() => setIsOutcomeVisible(!isOutcomeVisible)}
					className='mt-4 px-4 py-2 bg-aurora text-white rounded-lg flex items-center justify-between w-full text-sm md:text-base font-semibold'
				>
					<span>
						{isOutcomeVisible ? 'Скрыть подробности' : 'Показать подробности'}
					</span>
					<ChevronDown
						className={`w-5 h-5 transition-transform duration-300 ${
							isOutcomeVisible ? 'rotate-180' : ''
						}`}
					/>
				</button>

				{/* Раздел результатов */}
				<div
					className={`overflow-hidden transition-all duration-500 ${
						isOutcomeVisible
							? 'max-h-[800px] opacity-100 mt-4'
							: 'max-h-0 opacity-0'
					}`}
				>
					<div className='bg-midnight bg-opacity-50 rounded-lg p-3 md:p-4 mt-4 flex-grow transition-colors duration-300 group-hover:bg-opacity-70'>
						<div className='flex items-start space-x-3'>
							<Trophy className='w-5 h-5 md:w-6 md:h-6 text-emerald flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12' />
							<div className='flex-grow'>
								<h4 className='font-semibold text-frost text-sm md:text-base transition-colors duration-300 group-hover:text-aurora-light'>
									Исход дела
								</h4>
								<p className='mt-1 text-sm md:text-base text-slate-300 transition-colors duration-300 group-hover:text-frost'>
									{caseDetails.outcome}
								</p>
								{caseDetails.monetaryAward && (
									<p className='mt-2 text-sm md:text-base text-emerald font-semibold transition-all duration-300 group-hover:text-emerald-light group-hover:translate-x-1'>
										{caseDetails.monetaryAward}
									</p>
								)}
								{caseDetails.precedent && (
									<p className='mt-2 text-xs md:text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
										<strong className='text-frost-dark transition-colors duration-300 group-hover:text-frost'>
											Прецедент:
										</strong>{' '}
										{caseDetails.precedent}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}
