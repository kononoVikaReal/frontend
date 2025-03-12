'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

// Определяем типы городов
export type City = 'Saint-Petersburg' | 'Tula' | 'Krasnodar' | 'Sevastopol'

const cities: City[] = ['Saint-Petersburg', 'Tula', 'Krasnodar', 'Sevastopol']

// Определяем интерфейс контекста
interface CityContextProps {
	currentCity: City
	setCurrentCity: (city: City) => void
	cities: City[]
}

// Создаём контекст
const CityContext = createContext<CityContextProps | undefined>(undefined)

// Провайдер контекста
export const CityProvider = ({ children }: { children: ReactNode }) => {
	const [currentCity, setCurrentCity] = useState<City>('Saint-Petersburg')

	return (
		<CityContext.Provider value={{ currentCity, setCurrentCity, cities }}>
			{children}
		</CityContext.Provider>
	)
}

// Хук для использования контекста
export const useCity = (): CityContextProps => {
	const context = useContext(CityContext)
	if (!context) {
		throw new Error(
			'Контекст useCity должен использоваться в рамках провайдера CityProvider'
		)
	}
	return context
}
