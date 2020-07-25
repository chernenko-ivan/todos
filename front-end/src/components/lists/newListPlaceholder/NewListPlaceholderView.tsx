import * as React from 'react';
import {BaseInput} from '../../templates/inputs/baseInput/BaseInput';
import './NewListPlaceHolder.less';
// TODO: remove @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Plus from '../../../../images/plus.svg';
import {BaseButton} from '../../templates/buttons/baseButton/BaseButton';
import {ButtonType} from '../../templates/buttons/baseButton/BaseButtonView';

export interface NewListPlaceholderViewProps {
	createNewList: (e: React.MouseEvent) => void;
	isFocused: boolean;
	onFocus: () => void;
	title: string;
	setTitle: (value: string) => void;
	forwardedRef?: React.Ref<HTMLDivElement>;
	blur: () => void;
}

export const NewListPlaceholderView = React.forwardRef<
	HTMLDivElement,
	NewListPlaceholderViewProps
>(({createNewList, isFocused, title, onFocus, setTitle, blur}, ref) => {
	const renderNewList = () => {
		return (
			<div className='newListPlaceholder__newListContainer'>
				<BaseInput
					className='newListPlaceholder__input'
					placeholder='title'
					value={title}
					onChange={setTitle}
				/>
				<BaseButton
					onClick={createNewList}
					type={ButtonType.green}
					title='Create'
					className='newListPlaceholder__button'
				/>
			</div>
		);
	};

	const renderPlaceholder = () => {
		return (
			<div className='newListPlaceholder__plusContainer'>
				<Plus
					onClick={e => {
						e.stopPropagation();
						onFocus();
					}}
				/>
			</div>
		);
	};

	return (
		<div ref={ref} className='newListPlaceholder' onClick={onFocus}>
			{isFocused ? renderNewList() : renderPlaceholder()}
		</div>
	);
});
