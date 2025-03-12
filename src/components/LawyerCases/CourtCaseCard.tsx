import Link from 'next/link'

interface Attorney {
	fullName: string
}

interface Client {
	role: 'Ответчик' | 'Истец'
}

interface CaseDetails {
	court: string
	caseNumber: string
	caseUrl: string
	decision: string
}

interface Case {
	attorney: Attorney
	client: Client
	caseDetails: CaseDetails
}

const cases: Case[] = [
	{
		client: {
			role: 'Ответчик',
		},
		attorney: {
			fullName: 'Ерхов В.Г.',
		},
		caseDetails: {
			court: 'Арбитражный суд города Москвы',
			caseNumber: 'А40-105535/22-72-742',
			caseUrl: 'https://sudact.ru/arbitral/doc/vlh19EjeGjbB',
			decision: 'Отказано в удовлетворении',
		},
	},
	{
		client: {
			role: 'Истец',
		},
		attorney: {
			fullName: 'Юрист МПЦ',
		},
		caseDetails: {
			court: 'Гагаринский районный суд города Москвы',
			caseNumber: '2A-0860/2022',
			caseUrl:
				'https://mos-gorsud.ru/rs/gagarinskij/services/cases/kas/details/a79616b0-ea4f-11ec-b174-35589cb5e950',
			decision: 'Удовлетворен',
		},
	},
	{
		client: {
			role: 'Истец',
		},
		attorney: {
			fullName: 'Юрист МПЦ',
		},
		caseDetails: {
			court: 'Химкинский городской суд Московской области',
			caseNumber: '2-1325/2022',
			caseUrl:
				'https://himki--mo.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=case&case_id=542358073&case_uid=5f0c55be-f816-4575-8654-063fb2e9d117&delo_id=1540005',
			decision: 'Удовлетворен',
		},
	},
]

export function CourtCaseCard() {
	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead className='bg-gray-50'>
						<tr>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
							>
								Юрист
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
							>
								Суд
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
							>
								Дело
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
							>
								Роль в суде
							</th>
							<th
								scope='col'
								className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
							>
								Решение
							</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{cases.map((caseItem, index) => (
							<tr
								key={index}
								className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
									{caseItem.attorney.fullName}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
									{caseItem.caseDetails.court}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer'>
									<Link
										href={`${caseItem.caseDetails.caseUrl}`}
										target='_blank'
									>
										{caseItem.caseDetails.caseNumber}
									</Link>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											caseItem.client.role === 'Истец'
												? 'bg-blue-100 text-blue-800'
												: 'bg-purple-100 text-purple-800'
										}`}
									>
										{caseItem.client.role}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											caseItem.caseDetails.decision === 'Удовлетворен'
												? 'bg-green-100 text-green-800'
												: caseItem.caseDetails.decision ===
												  'Удовлетворен частично'
												? 'bg-yellow-100 text-yellow-800'
												: caseItem.caseDetails.decision ===
												  'Отказано в удовлетворении'
												? 'bg-red-100 text-red-800'
												: caseItem.caseDetails.decision === 'Мировое соглашение'
												? 'bg-gray-100 text-green-500'
												: 'bg-blue-100 text-blue-800'
										}`}
									>
										{caseItem.caseDetails.decision}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
