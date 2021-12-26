import { deviceReducer, initialState } from '../deviceReducer';
import { AppStateActions, Actions } from '../../actions/deviceActions';
import { AppState } from '../../models/dataModels';
import { DataViews } from '../../models/staticModels';

describe("Reducer testing", () => {
    let mockAction: AppStateActions;
    let mockState: AppState;
    let state: AppState;

    describe("test UPDATE_VIEW reducer action", () => {
        it("set the view to card view", () => {
            mockState = {...initialState};
            mockAction = Actions.updateView(DataViews.CARD);
            state = deviceReducer(mockState, mockAction);
            expect(state.currentView).toEqual(DataViews.CARD);
        });
    });
});