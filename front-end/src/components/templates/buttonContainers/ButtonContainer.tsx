import {FC} from 'react';
import * as React from 'react';
import './buttonContainer.less';

interface ButtonContainerProps {
	width: number;
	margin?: number;
	marginTop?: number;
	marginRight?: number;
	marginBottom?: number;
	marginLeft?: number;
}

export const ButtonContainer: FC<ButtonContainerProps> = ({
	children,
	width,
	margin,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
}) => {
	return (
		<div
			className='buttonContainer'
			style={{
				width,
				margin,
				marginTop,
				marginBottom,
				marginRight,
				marginLeft,
			}}
		>
			{children}
		</div>
	);
};
