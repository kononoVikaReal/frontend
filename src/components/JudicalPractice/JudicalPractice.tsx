'use client'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Case = {
	client: {
		role: string
		name: string
	}
	caseDetails: {
		court: string
		caseNumber: string
		caseUrl: string
		decision: string
	}
}

export default function JudicalPractice() {
	const cases: Case[] = [
		{
			client: {
				role: 'Ответчик',
				name: 'Аверинцева А.В.',
			},
			caseDetails: {
				court: 'С/у 97 Санкт-Петербурга',
				caseNumber: '5-167/2022-97',
				caseUrl: 'https://sudact.ru/arbitral/doc/vl42h19EjeGjbB',
				decision: 'Отказано в удовлетворении',
			},
		},
		{
			client: {
				role: 'Истец',
				name: 'Соловьев В.В.',
			},
			caseDetails: {
				court: 'Псковский г/с',
				caseNumber: '2-2611/2022',
				caseUrl:
					'https://mos-gorsud.ru/rs/gagarinskij/services/cases/kas/details/a7961652b0-ea4f-11ec-b174-35589cb5e950',
				decision: 'Удовлетворен частично',
			},
		},
		{
			client: {
				role: 'Ответчик',
				name: 'Деев В.В.',
			},
			caseDetails: {
				court: 'Киришский г/с ЛО',
				caseNumber: '2-456/2022',
				caseUrl: 'https://sudact.ru/arbitral/doc/vl42h19EjeGjbB',
				decision: 'Удовлетворен',
			},
		},
		{
			client: {
				role: 'Истец',
				name: 'Чуносова К.К.',
			},
			caseDetails: {
				court: 'Невский р/с Санкт-Петербурга',
				caseNumber: '2-1979/2022',
				caseUrl:
					'https://mos-gorsud.ru/rs/gagarinskij/services/cases/kas/details/a7961652b0-ea4f-11ec-b174-35589cb5e950',
				decision: 'Удовлетворен частично',
			},
		},
	]

	// Функция для определения стиля принятия решений в зависимости от результата
	const getDecisionStyle = (decision: string) => {
		switch (decision) {
			case 'Удовлетворен':
			case 'Отказано в удовлетворении':
				return 'bg-green-100 text-green-800'
			case 'Удовлетворен частично':
				return 'bg-amber-100 text-amber-800'
			case 'Мировое соглашение':
				return 'bg-blue-100 text-blue-800'
			default:
				return 'bg-gray-100 text-gray-800' // Стиль по умолчанию
		}
	}
	return (
		<section className='px-4 md:px-6 lg:px-8 max-w-7xl mx-auto'>
			<div className=''>
				<div className='flex justify-center'>
					{/* Контейнер для iPad со стоковым изображением */}
					<div className='relative w-full max-w-[912px]'>
						{/* Стоковое изображение iPad определенных размеров */}
						<div className='relative'>
							<Image
								src='/Ipad.png'
								alt='iPad displaying court cases'
								width={912}
								height={684}
								className='w-full h-auto'
								priority
							/>

							{/* Наложение содержимого на область экрана iPad с учетом определенных размеров */}
							<div
								className={cn(
									'absolute overflow-y-auto',
									// Адаптивное позиционирование, оптимизированное для размеров 912x684
									'top-[10%] left-[12%] right-[12%] bottom-[10%]'
								)}
							>
								<div className='p-2 sm:p-4 md:p-6 h-full'>
									<div className='space-y-2 sm:space-y-3 md:space-y-4'>
										{cases.map((caseItem, index) => (
											<div
												key={index}
												className='border border-gray-200 rounded-lg overflow-hidden'
											>
												{/* Краткое описание кейса - адаптивный макет */}
												<div className='bg-gray-50 p-2 sm:p-3'>
													{/* Расположение рабочего стола: бок о бок */}
													<div className='hidden sm:flex sm:justify-between sm:items-start'>
														{/* Слева: Информация о клиенте и деле */}
														<div className='flex-1 pr-2'>
															<div className='flex flex-wrap items-center gap-2'>
																<span
																	className={cn(
																		'px-2 py-0.5 text-xs font-medium rounded inline-block',
																		caseItem.client.role === 'Истец'
																			? 'bg-blue-100 text-blue-800'
																			: 'bg-purple-100 text-purple-800'
																	)}
																>
																	{caseItem.client.role}
																</span>
																<span className='text-sm font-medium text-black'>
																	{caseItem.client.name}
																</span>
															</div>

															<div className='mt-2 text-sm text-black'>
																{caseItem.caseDetails.court}
															</div>

															{/* Интерактивная ссылка на номер дела */}
															<div className='mt-1'>
																<Link
																	href={caseItem.caseDetails.caseUrl}
																	target='_blank'
																	rel='noopener noreferrer'
																	className='text-xs text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 transition-colors py-1'
																>
																	{caseItem.caseDetails.caseNumber}
																	<ExternalLink className='w-3 h-3 flex-shrink-0' />
																</Link>
															</div>
														</div>

														{/* Правая сторона: Решение с динамичным дизайном */}
														<div className='min-w-[120px] text-right'>
															<span
																className={cn(
																	'text-xs font-medium px-2 py-1 rounded inline-block',
																	getDecisionStyle(
																		caseItem.caseDetails.decision
																	)
																)}
															>
																{caseItem.caseDetails.decision}
															</span>
														</div>
													</div>

													{/* Мобильный макет: дополненный названием суда, принявшего решение */}
													<div className='sm:hidden'>
														{/* Информация о клиенте */}
														<div className='flex flex-wrap items-center gap-2'>
															<span
																className={cn(
																	'px-2 py-0.5 text-xs font-medium rounded inline-block',
																	caseItem.client.role === 'Истец'
																		? 'bg-blue-100 text-blue-800'
																		: 'bg-purple-100 text-purple-800'
																)}
															>
																{caseItem.client.role}
															</span>
															<span className='text-xs font-medium text-black'>
																{caseItem.client.name}
															</span>
														</div>

														{/* Решение - перешел на мобильные устройства */}
														<div className='mt-2'>
															<span
																className={cn(
																	'text-xs font-medium px-2 py-1 rounded inline-block',
																	getDecisionStyle(
																		caseItem.caseDetails.decision
																	)
																)}
															>
																{caseItem.caseDetails.decision}
															</span>
														</div>

														{/* Название суда - после принятия решения на мобильных устройствах */}
														<div className='mt-2 text-xs line-clamp-2 text-black'>
															{caseItem.caseDetails.court}
														</div>

														{/* Интерактивная ссылка на номер дела */}
														<div className='mt-1'>
															<Link
																href={caseItem.caseDetails.caseUrl}
																target='_blank'
																rel='noopener noreferrer'
																className='text-xs text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 transition-colors py-1'
															>
																{caseItem.caseDetails.caseNumber}
																<ExternalLink className='w-3 h-3 flex-shrink-0' />
															</Link>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>

									{/* Единственная кнопка "Подробнее" в конце */}
									<div className='mt-4 sm:mt-6 text-center'>
										<Button
											asChild
											className='bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-2 px-3 sm:py-2 sm:px-4 h-auto'
										>
											<Link href='/all-cases'>
												<span className='flex items-center gap-1 sm:gap-2'>
													Подробнее
													<ExternalLink className='w-3 h-3 sm:w-4 sm:h-4' />
												</span>
											</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
