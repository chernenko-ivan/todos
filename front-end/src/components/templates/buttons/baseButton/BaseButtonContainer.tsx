import {FC} from 'react';
import * as React from 'react';
import {BaseButtonViewProps, ButtonType} from './BaseButtonView';

export interface BaseButtonContainerProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	loading?: boolean;
	type: ButtonType;
	title: string;
	className?: string;
}

export const BaseButtonContainer = (
	Component: FC<BaseButtonViewProps>,
): FC<BaseButtonContainerProps> => ({
	onClick,
	loading,
	title,
	type,
	className,
}) => {
	return (
		<Component
			onClick={onClick}
			loading={loading}
			title={title}
			className={className}
			type={type}
		/>
	);
};
