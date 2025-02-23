import React, { useState } from 'react';

interface TextAreaProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
    placeholder = 'Type a message as a customer',
    value,
    onChange,
    className,
}) => {
    const [input, setInput] = useState(value || '');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <textarea
            placeholder={placeholder}
            value={input}
            onChange={handleChange}
            className={className}
        />
    );
};

export default TextArea;

