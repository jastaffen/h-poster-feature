import { colors } from './colors';

export const randomColorPicker = () => {
    return colors.crayola[Math.floor(Math.random() * colors.crayola.length)];
}