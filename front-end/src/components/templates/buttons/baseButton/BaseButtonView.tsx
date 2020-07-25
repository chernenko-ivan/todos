import * as React from 'react';
import {FC} from 'react';
import * as cn from 'classnames';
import './baseButton.less';

export enum ButtonType {
	white,
	red,
	green,
}

export interface BaseButtonViewProps {
	title: string;
	loading?: boolean;
	type: ButtonType;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

export const BaseButtonView: FC<BaseButtonViewProps> = ({
	title,
	loading,
	type = ButtonType.white,
	onClick,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={loading}
			className={cn(
				'button',
				type === ButtonType.white && 'button_white',
				type === ButtonType.red && 'button_red',
				type === ButtonType.green && 'button_green',
				className ?? '',
			)}
		>
			{title}
		</button>
	);
};
