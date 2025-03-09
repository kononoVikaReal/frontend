import FeedBackForm from '../FeedBackForm/FeedBackForm'
import { CourtCaseCard } from '../LawyerCases/CourtCaseCard'

const cases = [
	{
		attorney: {
			fullName: 'Ерхов В.Г.',
			imageUrl: '/VadimGennadevich.png',
			lawyerType: 'Юрист',
		},
		caseDetails: {
			court: 'Арбитражный суд города Москвы',
			caseNumber: 'А40-105535/22-72-742',
			documentationUrl: 'https://sudact.ru/arbitral/doc/vlh19EjeGjbB',
			headline:
				'Спасли клиента от потери 8,5 млн рублей, авария ГПУ — вина истца!',
			outcome:
				'Мы доказали, что 8-миллионный иск из-за поломки генератора — результат халатности заказчика, а не нашей работы. Полная победа в Арбитражном суде!',
			monetaryAward: '₽8 млн рублей',
			precedent:
				'Решение подтверждает, что для взыскания ущерба за ненадлежащее исполнение услуг недостаточно факта аварии — необходимо доказать вину исполнителя, причинно-следственную связь и отсутствие нарушений со стороны заказчика. Установлено: Истец нарушил регламент ТО (переработка оборудования на 1956 часов). Экспертизы подтвердили, что поломка вызвана эксплуатационными ошибками истца, а не работами ответчика.Штрафные санкции неприменимы, если ненадлежащее исполнение не доказано. Ключевая ссылка: ст. 1064 ГК РФ (вред возмещается только при доказанной вине причинителя).',
			lawType: 'Арбитражное право',
		},
	},
	{
		attorney: {
			fullName: 'Юрист МПЦ',
			imageUrl: '/MPCIcon.png',
			lawyerType: 'Юрист',
		},
		caseDetails: {
			court: 'Гагаринский районный суд города Москвы',
			caseNumber: '2A-0860/2022',
			documentationUrl:
				'https://mos-gorsud.ru/rs/gagarinskij/services/cases/kas/details/a79616b0-ea4f-11ec-b174-35589cb5e950',
			headline: 'Суд отменил запрет на въезд: отец и муж гражданки РФ победил!',
			outcome:
				'Мы доказали, что запрет на въезд в РФ для отца российского ребенка незаконен. Решение Гагаринского суда в пользу семьи!',
			precedent:
				'Решение подтверждает, что запрет на въезд иностранцу может быть отменен, если нарушены принципы пропорциональности и уважения семейной жизни (ст. 8 Конвенции о защите прав человека). Установлено: Истец имеет устойчивые семейные связи с РФ (жена — гражданка РФ, несовершеннолетний ребенок). Истец владеет недвижимостью в РФ и официально трудоустроен. Административные правонарушения (два штрафа за нарушение ПДД) не являются достаточным основанием для запрета въезда с учетом личных обстоятельств. Ключевые ссылки: Ст. 27 Конституции РФ (право на свободное передвижение). Ч. 4 ст. 26 ФЗ №114 (запрет въезда при неоднократных нарушениях). Позиция ЕСПЧ: баланс между публичными интересами и правом на семейную жизнь.',
			lawType: 'Административное право',
		},
	},
	{
		attorney: {
			fullName: 'Юрист МПЦ',
			imageUrl: '/MPCIcon.png',
			lawyerType: 'Юрист',
		},
		caseDetails: {
			court: 'Химкинский городской суд Московской области',
			caseNumber: '2-1325/2022',
			documentationUrl:
				'https://himki--mo.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=case&case_id=542358073&case_uid=5f0c55be-f816-4575-8654-063fb2e9d117&delo_id=1540005',
			headline:
				'Суд взыскал 1,5 млн с мошенников: победа потерпевшего в деле о фиктивных поставках!',
			outcome:
				'Мы вернули 1,5 млн рублей за обман с продуктами: суд удовлетворил иск против участников ОПГ. Решение Химкинского суда о солидарном взыскании ущерба и процентов!',
			monetaryAward: '₽1,5 млн рублей',
			precedent:
				'Решение подтверждает, что вступивший в силу приговор по уголовному делу служит неоспоримым доказательством факта причинения вреда в гражданском процессе (ч. 4 ст. 61 ГПК РФ). Установлено: Приговор Бабушкинского суда (ч. 1 ст. 210, ч. 4 ст. 159 УК РФ) признал ответчиков виновными в мошенничестве в составе ОПГ. Истец, как потерпевший, получил право на возмещение ущерба через гражданский иск. Суд взыскал солидарно материальный ущерб и проценты по ст. 395 ГК РФ за весь период неисполнения обязательств. Ключевые ссылки: Ст. 1064 ГК РФ (обязанность возместить вред, причиненный преступлением).',
			lawType: 'Гражданское право',
		},
	},
]

const ThirdElement = () => {
	return (
		<div className='mx-auto max-w-[1200px] mb-14'>
			<div className='pt-10 mb-16'>
				<div className="relative before:content-[''] before:block before:border before:border-elite before:absolute before:w-[1000px] before:-left-[1039px] before:top-3 mb-4">
					<span className='text-[28px] leading-[45px] font-prata '>
						Судебная практика
					</span>
				</div>
			</div>
			{/* <LawyerCaseFiles /> */}
			<div className='flex gap-4'>
				{cases.map(caseItem => (
					<CourtCaseCard
						key={caseItem.caseDetails.caseNumber}
						attorney={caseItem.attorney}
						caseDetails={caseItem.caseDetails}
					/>
				))}
			</div>

			<button
				className='
    bg-gradient-to-r from-blue-600 to-blue-500
    hover:from-blue-700 hover:to-blue-600
    active:from-blue-800 active:to-blue-700
    text-white/95 font-semibold
    px-8 py-3.5
    rounded-2xl
    border-b-4 border-blue-700/30
    hover:border-blue-800/40
    transform
    transition-[transform,background,box-shadow]
    duration-300
    ease-[cubic-bezier(0.4,0,0.2,1)]
    hover:scale-[1.02]
    active:scale-[0.98]
    shadow-lg
    hover:shadow-xl
    shadow-blue-900/20
    hover:shadow-blue-900/30
    relative
    overflow-hidden
    before:absolute
    before:inset-0
    before:bg-gradient-to-r
    before:from-white/10
    before:to-transparent
    before:opacity-20
    hover:before:opacity-30
    focus-visible:ring-4
    focus-visible:ring-blue-400/50
		mx-auto
		flex
		mt-4
'
			>
				<span className='relative flex items-center gap-2'>
					<svg
						className='w-5 h-5 text-white/80 transition-transform group-hover:translate-x-0.5'
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
					Смотреть все
				</span>
			</button>
			<FeedBackForm beforeFooter={false} />
		</div>
	)
}

export default ThirdElement
