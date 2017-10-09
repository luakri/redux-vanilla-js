import $ from 'jquery';
import SETTINGS from './settings';
import COMPONENTS from '../store/components';
import mapComponents from './map-components';
import configureStore from '../store/store';

const componentsMap = mapComponents(COMPONENTS);
const store = configureStore(componentsMap.reducers, componentsMap.initialState);

/**
 * Method that initialises components.
 *
 * @param {jQuery} $container The container where to initialise components.
 * @param {jQuery|null} $comp The collection of components without a container.
 */
export const initialiseComponents = ($container = $('body'), $comp = null, components = componentsMap.view) => {
    const $components = $comp ? $comp.filter(SETTINGS.COMPONENT_CLASS) : $container.find(SETTINGS.COMPONENT_CLASS);

    console.log('core/initialise:initialiseComponents');

    $components.each((index, elem) => {
        const $component = $(elem);
        const componentName = $component.attr(SETTINGS.COMPONENT_NAME_ATTR);
        const View = components[componentName] || null;

        if (View && !$component.hasClass('component-defer')) {
            new View($component, store);
        }
    });
};

/**
 * This is the main initialise controller.
 * Responsible for initialising app.
 */
export const initialise = () => {
    initialiseComponents();
};
