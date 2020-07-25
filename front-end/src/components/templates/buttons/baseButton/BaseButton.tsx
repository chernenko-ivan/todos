import * as React from 'react';
import {
	BaseButtonContainer,
	BaseButtonContainerProps,
} from './BaseButtonContainer';
import {BaseButtonView} from './BaseButtonView';

export const BaseButton = React.memo<BaseButtonContainerProps>(
	BaseButtonContainer(BaseButtonView),
);
