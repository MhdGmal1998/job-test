export default interface column {
    id: 'id' | 'title' | 'view' | 'edit' | 'delete',
    label: string | React.ReactElement | React.ReactNode,
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string;
}