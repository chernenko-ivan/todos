import {ListsView, ListsViewProps} from './ListsView';
import {RootState} from '../../../stores/createStore';
import {listsActions} from '../../../stores/lists/listsReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
	lists: state.lists.lists,
});

const mapDispatchToProps = {
	editList: listsActions.editList,
	deleteList: listsActions.deleteList,
	createList: listsActions.createList,
	editTask: listsActions.editTask,
};

export const Lists = connect(mapStateToProps, mapDispatchToProps)(ListsView);
