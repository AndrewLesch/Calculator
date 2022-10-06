import React from 'react'
import { SettingsContainer, SettingsTitle, ThemeChangerContainer, DeleteButton, ThemeChangerDescription } from './components'

export const SettingsPage = () => {
    return (
        <SettingsContainer>
            <SettingsTitle>
                Settings
            </SettingsTitle>
            <ThemeChangerContainer>
                <ThemeChangerDescription>
                    Switch theme
                </ThemeChangerDescription>
            </ThemeChangerContainer>
            <DeleteButton >Clear all history</DeleteButton>
        </SettingsContainer>
    )
}
