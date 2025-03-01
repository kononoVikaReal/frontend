'use client'
import { useEffect, useState } from 'react'
import YandexMapConstructor from 'react-yandex-maps-constructor'
import OfficeInformation, { City } from '../OfficeInformation/OfficeInformation'

const cityToMap = (city: City) => {
	switch (city) {
		case 'Saint-Petersburg':
			return (
				<YandexMapConstructor
					key={city}
					script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9389bf8ae067cd097bb0590586b49b5d8138906947a507e01d96cea239025842&amp;width=1280&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>'
				/>
			)
		case 'Tula':
			return (
				<YandexMapConstructor
					key={city}
					script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A79ba0601a8b9625b9de01b476873f28f81b42d7ede633dd8fa38ab97515def4b&amp;width=1280&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>'
				/>
			)
		case 'Krasnodar':
			return (
				<YandexMapConstructor
					key={city}
					script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aea2b443a19e857af460740c64d5f04de0e8156c45b9114ac01e505ff3e9ce471&amp;width=1280&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>'
				/>
			)
		case 'Sevastopol':
			return (
				<YandexMapConstructor
					key={city}
					script='<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad5849076fc5853191150adb9e2a3dbc169bfc136b465c0270c124657e51dc531&amp;width=1280&amp;height=720&amp;lang=ru_RU&amp;scroll=true"></script>'
				/>
			)
		default:
			return null
	}
}

const OfficeMap = () => {
	const [city, setCity] = useState<City>('Saint-Petersburg')
	useEffect(() => {
		console.log(city)
	}, [city])
	return (
		<div className='relative max-w-[1270px] h-[838px] mx-auto rounded-xl overflow-hidden mb-6'>
			<OfficeInformation shareCity={setCity} />
			<div className='rounded-md overflow-hidden'>{cityToMap(city)}</div>
		</div>
	)
}

export default OfficeMap
