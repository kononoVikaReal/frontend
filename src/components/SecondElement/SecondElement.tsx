import Circle from '../Circle/Circle'
import { Details } from '../Details/Details'
import LegalServicesToBusiness from '../LegalServicesToBusiness/LegalServicesToBusiness'

const CallIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={32}
		height={32}
		color={'#000'}
		fill={'none'}
		{...props}
	>
		<path
			d='M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinejoin='round'
		/>
	</svg>
)

const circlesInfo = [
	{
		digit: '1',
		title: 'Юридические услуги гражданам',
	},
	{
		digit: '2',
		title: 'Юридические услуги бизнесу',
	},
	{
		digit: '3',
		title: 'Процедура медиации',
	},
]

const detailsInfo = [
	{
		digit: '1',
		heading: 'Что входит в юридические услуги гражданам?',
		subHeading:
			'Досудебное урегулирование, судебное представительство в областях права:',
		child: (
			<ul className='grid grid-cols-3 gap-4 text-sm items-center'>
				<li className='flex items-start'>
					<span className='mr-2 flex-shrink-0'>•</span>
					<span>Земельные споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Жилищные споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Трудовые споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Защита прав потребителей</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Налоговые споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Автоюрист. Споры с автосалонами</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Страховые споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Медицинские споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Имущественные споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Наследственные дела</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Семейные споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Банкротство</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Долевое строительство</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Долговые споры</span>
				</li>
				<li className='flex items-start'>
					<span className=' mr-2 flex-shrink-0'>•</span>
					<span>Уголовные дела</span>
				</li>
			</ul>
		),
	},
	{
		digit: '2',
		heading: 'Что входит в юридические услуги бизнесу?',
		subHeading: 'Полное сопровождение деятельности юридического лица: ',
		child: <LegalServicesToBusiness />,
	},
	{
		digit: '3',
		heading: 'Что входит в процедуру медиации?',
		subHeading:
			'Медиация — это процесс внесудебного решения споров и проведения переговоров с помощью специального нейтрального посредника (медиатора)',
		child: (
			<ul className='space-y-6 text-sm'>
				<li className='flex items-start'>
					<span className='mr-2 flex-shrink-0'>•</span>
					<span>
						Разрешение споров в предпринимательской или иной экономической
						деятельности
					</span>
				</li>
				<li className='flex items-start'>
					<span className='mr-2 flex-shrink-0'>•</span>
					<span>Разрешение административных и иных правоотношений</span>
				</li>
				<li className='flex items-start'>
					<span className='mr-2 flex-shrink-0'>•</span>
					<span>
						Разрешение любых видов конфликтов внутри семейных, трудовых,
						имущественных и прочих правоотношений
					</span>
				</li>
			</ul>
		),
	},
]

const SecondElement = () => {
	return (
		<div className='bg-slate-50 text-black pb-8'>
			<div className='pt-10 mx-auto max-w-[1200px]'>
				<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3">
					<span className='text-[28px] leading-[45px] font-prata text-background'>
						На данный момент у нас есть 3 основных направления
					</span>
				</div>

				{/* Кружки с направлениями */}
				<div className='mt-16 grid md:grid-cols-3 gap-8 mb-24'>
					{circlesInfo.map((circle, index) => (
						<div
							className='flex flex-col items-center text-center group'
							key={index}
						>
							<Circle digit={circle.digit} />
							<p className='text-lg font-medium'>{circle.title}</p>
						</div>
					))}
				</div>
				{/* Секции с деталями по направлениям */}
				{detailsInfo.map((detail, index) => (
					<Details
						key={index}
						digit={detail.digit}
						heading={detail.heading}
						subHeading={detail.subHeading}
						child={detail.child}
					/>
				))}

				<div className='mx-auto max-w-[1100px] bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg grid grid-cols-5 items-center gap-6 hover:shadow-xl transition-shadow'>
					<div className='col-span-4 flex gap-5 items-center'>
						<div className='p-3 bg-white rounded-lg shadow-sm border border-blue-100 transition-all duration-300 ease-linear hover:animate-pulse hover:scale-105'>
							<CallIcon className='w-6 h-6 text-blue-600' />
						</div>
						<span className='text-gray-700 text-lg leading-snug font-medium'>
							Для получения подробной информации и заказа услуги
						</span>
					</div>

					<button className='bg-elite text-white p-5 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg'>
						Заказать звонок
					</button>
				</div>
			</div>
		</div>
	)
}

export default SecondElement
