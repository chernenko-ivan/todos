import * as React from 'react';
import {FC, ForwardRefExoticComponent, useRef, useState} from 'react';
import {BaseInputProps} from './BaseInputView';
import {RefAttributes} from 'react';

export interface BaseInputContainerProps {
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	className?: string;
	title?: string;
}

export const BaseInputContainer = (
	Component: ForwardRefExoticComponent<
		BaseInputProps & RefAttributes<HTMLInputElement>
	>,
): FC<BaseInputContainerProps> => ({
	value,
	onChange,
	placeholder,
	title,
	className,
}) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const ref = useRef<HTMLInputElement>();

	const onBlur = () => {
		ref.current.blur();
		setIsFocused(false);
	};

	const onFocus = () => {
		ref.current.focus();
		setIsFocused(true);
	};

	return (
		<Component
			className={className}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			title={title}
			onFocus={onFocus}
			onBlur={onBlur}
			ref={ref}
			isFocused={isFocused}
		/>
	);
};
