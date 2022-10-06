import React from 'react'
import { ThemeChanger } from '@/components/ThemeChanger'
import { SettingsContainer, SettingsTitle, ThemeChangerContainer, DeleteButton, ThemeChangerDescription } from './components'
import { CALCULATOR_VALUE_LS_KEY, HISTORY_VALUE_LS_KEY } from '@/constants/localStorage'

export const SettingsPage = () => {
    const clearCalculatorData = () => {
        localStorage.setItem(HISTORY_VALUE_LS_KEY, [])
        localStorage.setItem(CALCULATOR_VALUE_LS_KEY, "")
    }

    return (
        <SettingsContainer>
            <SettingsTitle>
                Settings
            </SettingsTitle>
            <ThemeChangerContainer>
                <ThemeChangerDescription>
                    Switch theme
                </ThemeChangerDescription>
                <ThemeChanger />
            </ThemeChangerContainer>
            <DeleteButton onClick={() => clearCalculatorData()}>Clear all history</DeleteButton>
        </SettingsContainer>
    )
}
