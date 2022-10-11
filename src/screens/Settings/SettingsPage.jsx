import React from 'react'
import { ThemeChanger } from '@/components/ThemeChanger'
import { SettingsContainer, SettingsTitle, ThemeChangerContainer, DeleteButton, ThemeChangerDescription } from './components'
import { clearCalculatorData } from '@/utils/clearCalculatorData'

export const SettingsPage = () => (
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
        <DeleteButton onClick={clearCalculatorData}>Clear all history</DeleteButton>
    </SettingsContainer>
)
