import * as React from 'react';
import * as cn from 'classnames';
import './BaseInput.less';

export interface BaseInputProps {
	value: string;
	onChange: (value: string) => void;
	isFocused: boolean;
	onFocus: () => void;
	onBlur: () => void;
	title?: string;
	placeholder: string;
	className?: string;
}

export const BaseInputView = React.forwardRef<HTMLInputElement, BaseInputProps>(
	(
		{
			title,
			value,
			onChange,
			isFocused,
			onFocus,
			onBlur,
			placeholder,
			className,
		},
		ref,
	) => {
		return (
			<div
				onClick={onFocus}
				className={cn(
					'baseInput',
					isFocused && 'baseInput_focused',
					className ?? '',
				)}
			>
				{title && <div className='baseInput__title'>{title}</div>}
				<input
					ref={ref}
					className={cn(
						'baseInput__input',
						isFocused && 'baseInput__input_focused',
					)}
					value={value}
					onChange={e => onChange(e.target.value)}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder={placeholder}
				/>
			</div>
		);
	},
);
