'use client'
import { City, useCity } from '../CityContext/CityContext'

interface Branch {
	city: City
	mapUrl: string
}

const branches: Branch[] = [
	{
		city: 'Saint-Petersburg',
		mapUrl:
			'https://yandex.ru/map-widget/v1/?um=constructor%3A9389bf8ae067cd097bb0590586b49b5d8138906947a507e01d96cea239025842&amp;source=constructor',
	},
	{
		city: 'Tula',
		mapUrl:
			'https://yandex.ru/map-widget/v1/?um=constructor%3A79ba0601a8b9625b9de01b476873f28f81b42d7ede633dd8fa38ab97515def4b&amp;source=constructor',
	},
	{
		city: 'Krasnodar',
		mapUrl:
			'https://yandex.ru/map-widget/v1/?um=constructor%3Aea2b443a19e857af460740c64d5f04de0e8156c45b9114ac01e505ff3e9ce471&amp;source=constructor',
	},
	{
		city: 'Sevastopol',
		mapUrl:
			'https://yandex.ru/map-widget/v1/?um=constructor%3Ad5849076fc5853191150adb9e2a3dbc169bfc136b465c0270c124657e51dc531&amp;source=constructor',
	},
]

const OfficesMap = () => {
	const { currentCity } = useCity()
	return (
		<iframe
			src={branches.find(branch => branch.city === currentCity)?.mapUrl}
			className='w-full h-full'
		></iframe>
	)
}

export default OfficesMap
