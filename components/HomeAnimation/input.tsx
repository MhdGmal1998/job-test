interface InputProps {
    children: string;
    value: number;
    set: (newValue: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export function Input({
    value,
    children,
    set,
    min = -200,
    max = 200,
    step
}: InputProps) {
    return (
        <label>
            <code>{children}</code>
            <input
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value))}
                step={step}
            />
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
            />
        </label>
    );
}
