import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';
import { BuilderStateTypes } from '../reducers/builder/builder.reducer.types';
import { AppReducerTypes } from '../reducers/app/app.reducer.types';


const loadedState = loadState();

const store = configureStore(loadedState);

store.subscribe(() => {
    saveState({
        app: store.getState().app
    })
});

export interface StoreState {
    builder: BuilderStateTypes;
    app: AppReducerTypes
}

export default store;
