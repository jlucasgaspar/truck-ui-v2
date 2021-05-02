//import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

export type IStep = {
    stepNumber: number;
    title: string;
    status: 'process' | 'wait' | 'finish' | 'error' | undefined;
    icon?: any; // FIXME
}

export const ctesSteps: IStep[] = [
    {
        stepNumber: 0,
        title: 'Primeiro',
        status: 'process',
        //icon: UserOutlined
    },
    {
        stepNumber: 1,
        title: 'Segundo',
        status: 'wait',
        //icon: SolutionOutlined
    },
    {
        stepNumber: 2,
        title: 'Terceiro',
        status: 'wait',
        //icon: LoadingOutlined
    },
    {
        stepNumber: 3,
        title: 'Ultimo',
        status: 'wait',
        //icon: SmileOutlined
    },
];