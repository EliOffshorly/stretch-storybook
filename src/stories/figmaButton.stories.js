import { figmaButton } from "./figmaButton";

export default {
    title: 'Figma/Button',
    component: figmaButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Primary = {
    args: {
        primary: true,
        label: 'Default Button'
    }
}