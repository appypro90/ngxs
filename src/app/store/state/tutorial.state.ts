import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from 'src/app/models/tutorial.model';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial/tutorial.actions';

export class TutorialStateModel {
    items: Tutorial[] = [];
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        items: []
    }
})

export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel): Tutorial[] {
        return state.items;
    }

    @Action(AddTutorial)
    add({getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial): void {
        const state = getState();
        patchState({
            items: [...state.items, payload]
        });
    }

    @Action(RemoveTutorial)
    remove({getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial): void {
        patchState({
            items: getState().items.filter(a => a.name !== payload)
        });
    }

}
