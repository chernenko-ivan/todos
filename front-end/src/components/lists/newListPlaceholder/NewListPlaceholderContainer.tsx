import * as React from 'react';
import {FC, useEffect, useRef, useState} from 'react';
import {NewListPlaceholderViewProps} from './NewListPlaceholderView';
import {ForwardRefExoticComponent} from 'react';
import {RefAttributes} from 'react';

export interface NewListPlaceholderContainerProps {
	createList: (NewListPayload) => void;
}

export const NewListPlaceholderContainer = (
	Component: ForwardRefExoticComponent<
		NewListPlaceholderViewProps & RefAttributes<HTMLDivElement>
	>,
): FC<NewListPlaceholderContainerProps> => ({createList}) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [title, setTitle] = useState<string>('');
	const ref = useRef<HTMLDivElement>();

	useEffect(() => {
		window.addEventListener('click', clickChecker);
		return () => {
			window.removeEventListener('click', clickChecker);
		};
	}, []);

	const onBlur = (e?: React.MouseEvent) => {
		e.stopPropagation();
		setIsFocused(false);
		setTitle('');
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const clickChecker = (e: MouseEvent) => {
		if (!ref.current.contains(e.target as Node))
			onBlur((e as unknown) as React.MouseEvent);
	};

	const createNewList = e => {
		createList({title});
		onBlur(e);
	};

	return (
		<Component
			ref={ref}
			createNewList={createNewList}
			isFocused={isFocused}
			onFocus={onFocus}
			title={title}
			setTitle={setTitle}
			blur={onBlur}
		/>
	);
};
