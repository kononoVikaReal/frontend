import Circle from '../Circle/Circle'
import { Details } from '../Details/Details'

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
		child: (
			<div className='grid md:grid-cols-3 gap-8'>
				{/* Сопровождение деятельности */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Сопровождение деятельности
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Консультации</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Правовая экспертиза и разработка внутренней документации
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Правовой анализ хозяйственной деятельности предприятия,
								оптимизация налогообложения
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представление интересов в государственных органах и иных
								организациях
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Разработка проектов договоров, экспертиза правовых документов и
								оценка рисков
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Сопровождение сделок, инвестиционных проектов и т.п</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Ведение претензионной работы и иной деловой переписки</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Представительство в судебных органах</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Регистрация, реорганизация, ликвидация предприятия</div>
						</li>
					</ul>
				</div>
				{/* Взыскание долгов */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Взыскание долгов
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Досудебное урегулирование: правовой анализ ситуации, определение
								материального состояния должника и оценка перспективы взыскания
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Определение местонахождения должника, в том числе его розыск
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Подготовка и направление должнику письменных претензий,
								уведомлений о наличии долга и обязанности его вернуть, в том
								числе телефонные переговоры и выезд к должнику
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Судебная процедура возврата долга</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Правовой анализ ситуации, определение материального состояния
								должника и оценка перспективы взыскания
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представительство в суде на всех стадиях судебного
								разбирательства
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Принятие мер по обеспечению иска о взыскании задолженности
							</div>
						</li>
					</ul>
				</div>
				{/* Оспаривание действий гос. органов */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Оспаривание действий гос. органов
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Оспаривание действий государственных органов</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Установление юридических фактов</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Оспаривание решений третейских судов, МИФНС, УФАС, Таможенных
								органов и др.
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Представление интересов в спорах в области страхования</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представление интересов в спорах в сфере интеллектуальной
								собственности
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представление интересов в рамках административного и уголовного
								преследования
							</div>
						</li>
					</ul>
				</div>
				{/* Банкротство */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Банкротство
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Правовой анализ экономического состояния юридического лица (ООО,
								ЗАО, ОАО) или индивидуального предпринимателя (ИП), являющегося
								кредитором, либо должником
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Оценка рыночной стоимости предприятий (бизнеса, акций,
								недвижимости и других активов)
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Оценка преимущества процедуры банкротства по сравнению с иными
								способами решения проблем неплатежеспособности
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представление интересов кредитора при банкротстве должника
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Участие в собраниях кредиторов, разработка плана проведения
								процедуры реструктуризации, обжалование включения в реестр
								требований иных кредиторов
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Участие в судебном процессе на стадиях реструктуризации долга и
								реализации имущества должника
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Подбор арбитражного управляющего и взаимодействие с ним</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представление интересов должника, выбор наиболее подходящего
								способа банкротства предприятия
							</div>
						</li>
					</ul>
				</div>
				{/* Исполнительное производство */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Исполнительное производство
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Подача исполнительного листа в службу судебных приставов для
								возбуждения исполнительного производства
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Розыск имущества и других активов должника</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Взаимодействие с судебными приставами, контроль взыскания
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представление интересов Клиента по обжалование действий
								(бездействий) судебного пристава-исполнителя в суде
							</div>
						</li>
					</ul>
				</div>
				{/* Корпоративные споры */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Корпоративные споры
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Нарушение прав акционеров, участников</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Выкуп акций, а также преимущественное право покупки акций
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Выкуп доли участников</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Внесение записей в реестр акционеров или аннулирование записей
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Формирование уставного капитала</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Выплата дивидендов, в том числе по искам вышедших участников
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Выплата номинальной стоимости доли участника при выходе или
								исключении такого участника из общества
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Признание недействительными собраний акционеров и собраний
								директоров
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Обжалование решений органов управления юридического лица
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Признание недействительными сделок, совершаемых обществом
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Признании недействительной записи, внесенной в ЕГРЮЛ</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Признание недействительными решений о создании обществ, устава и
								учредительных документов
							</div>
						</li>
					</ul>
				</div>
				{/* Защита права собственности на недвижимость */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Защита права собственности на недвижимость
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Сопровождение сделок с недвижимым имуществом, включая сделки
								купли-продажи, мены, дарения, аренды, залога (ипотеки)
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Правовая экспертиза и разработка оптимальных правовых схем
								реализации (приобретения) объекта недвижимости
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Регистрация прав на недвижимость, на земельный участок</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Приватизация квартир, комнат, объектов нежилого фонда и
								земельных участков
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Ведение дел в судах общей юрисдикции и арбитражных судах
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Разработка и осуществление плана мероприятий по разрешению
								правовых конфликтов, связанных с объектами недвижимости
							</div>
						</li>
					</ul>
				</div>
				{/* Защита интеллектуальной собственности */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Защита интеллектуальной собственности
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Регистрация, депонирование прав на результаты интеллектуальной
								деятельности: изобретения, полезные модели, промышленные
								образцы, товарные знаки и торговые марки
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представительство в ходе урегулирования споров о праве
								собственности в досудебном порядке
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Разработка, экспертиза лицензионных договоров, авторских
								соглашений, договоров о передаче исключительных прав
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Подготовка положений о коммерческой тайне, уведомление
								сотрудников{' '}
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представительство в арбитражных судах и в судах общей юрисдикции
								по защите интеллектуальной собственности
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Представительство в арбитражных судах и в судах общей юрисдикции
								по защите чести, достоинства, деловой репутации
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Консультирование в сфере рекламной деятельности</div>
						</li>
					</ul>
				</div>
				{/* Признание сделок недействительными */}
				<div>
					<h4 className='text-xl font-medium font-prata text-detailsPointTitle mb-6'>
						Признание сделок недействительными
					</h4>
					<ul className='pl-[20px] space-y-4 text-sm'>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Нецелевое расходование средств директором</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>Взыскание ущерба и убытков с генерального директора</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Изменение, либо признание недействительным концессионного
								соглашения – доказательства его убыточности для предприятия
							</div>
						</li>
						<li className='flex items-start'>
							<span className=' mr-2 flex-shrink-0'>•</span>
							<div>
								Изменение, либо признание недействительным договора лизинга –
								доказательство его убыточности для предприятия
							</div>
						</li>
						<li className='flex items-start'>
							<span className='mr-2 flex-shrink-0'>•</span>
							<div>
								Изменение, либо признание недействительным договоров
								купли-продажи движимого и недвижимого имущества
							</div>
						</li>
						<li className='flex items-start'>
							<span className='mr-2 flex-shrink-0'>•</span>
							<div>
								Изменение, либо признание недействительным договоров подряда,
								перевозки, экспедиции
							</div>
						</li>
						<li className='flex items-start'>
							<span className='mr-2 flex-shrink-0'>•</span>
							<div>
								Признание любых иных сделок в судебном порядке оспоримыми или
								ничтожными в силу закона
							</div>
						</li>
					</ul>
				</div>
			</div>
		),
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
					<span className='text-[28px] leading-[45px] w-96 font-prata text-background'>
						На данный момент у нас есть 3 основных направления
					</span>
				</div>

				{/* Кружки с направлениями */}
				<div className='mt-16 grid md:grid-cols-3 gap-8 mb-24'>
					{circlesInfo.map((circle, index) => (
						<Circle key={index} digit={circle.digit} title={circle.title} />
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
							Для получения подробной информации и заказе услуги
							<br />
							<span className='text-gray-500 font-normal'>
								закажите обратный звонок
							</span>
						</span>
					</div>

					<button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg'>
						Заказать звонок
					</button>
				</div>
			</div>
		</div>
	)
}

export default SecondElement
