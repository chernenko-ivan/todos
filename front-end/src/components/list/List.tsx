import {ListContainer, ListContainerProps} from './ListContainer';
import {ListView} from './ListView';
import * as React from 'react';
import {FC} from 'react';

export const ListPlate: FC<ListContainerProps> = React.memo<ListContainerProps>(
	ListContainer(ListView),
);
