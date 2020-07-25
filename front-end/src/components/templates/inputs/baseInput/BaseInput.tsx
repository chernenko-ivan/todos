import {
	BaseInputContainer,
	BaseInputContainerProps,
} from './BaseInputContainer';
import {BaseInputView} from './BaseInputView';
import * as React from 'react';

export const BaseInput = React.memo<BaseInputContainerProps>(
	BaseInputContainer(BaseInputView),
);
