const mapComponents = (COMPONENTS = {}) => {
    let view = {};
    let reducers = {};
    let initialState = {};

    for(let key in COMPONENTS) {
        let component = COMPONENTS[key];
        let name = component.name;

        if (!name) {
            console.warn(`Component has no name`);
            break;
        }

        if (!component.view ) {
            console.warn(`Component "${name}" has no component attached`);
        } else {
            view[name] = component.view;
        }

        if (component.reducer) {
            reducers[name] = component.reducer;
        }

        if (component.initialState) {
            initialState[name] = component.initialState;
        }
    }

    return {
        view,
        reducers,
        initialState
    };
};

export default mapComponents;
