import configureStore from './configure.store';
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';
import { BuilderStateTypes } from '../reducers/builder/builder.reducer.types';


const loadedState = loadState();

const store = configureStore(loadedState);

store.subscribe(() => {
    saveState({
        builder: store.getState().builder
    })
});

export interface StoreState {
    builder: BuilderStateTypes
}

export default store;
