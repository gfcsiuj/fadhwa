import React from 'react';
import { Theme } from '../App';
import { LightModeIcon, DarkModeIcon } from './icons/Icons';

interface ThemeSwitcherProps {
    theme: Theme;
    onThemeChange: (theme: Theme) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, onThemeChange }) => {
    const toggleTheme = () => {
        onThemeChange(theme === 'light' ? 'dark' : 'light');
    };

    const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

    return (
        <button
            type="button"
            className="theme-switcher-button"
            onClick={toggleTheme}
            aria-label={label}
            data-theme={theme}
        >
            <span className="theme-switcher-icon-wrapper">
                <LightModeIcon className="sun-icon" />
                <DarkModeIcon className="moon-icon" />
            </span>
        </button>
    );
};

export default ThemeSwitcher;
