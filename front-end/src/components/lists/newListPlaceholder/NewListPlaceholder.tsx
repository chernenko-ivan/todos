import {FC} from 'react';
import {NewListPlaceholderView} from './NewListPlaceholderView';
import {
	NewListPlaceholderContainer,
	NewListPlaceholderContainerProps,
} from './NewListPlaceholderContainer';
import * as React from 'react';

export const NewListPlaceholder: FC<NewListPlaceholderContainerProps> = React.memo<
	NewListPlaceholderContainerProps
>(NewListPlaceholderContainer(NewListPlaceholderView));
