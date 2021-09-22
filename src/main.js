import {createApp} from 'vue'
import App from './App.vue'

const vueApp = createApp(App);

const components = [];
components.push(import.meta.globEager('./components/Examples/DescriptionLists/*.vue'));
components.push(import.meta.globEager('./components/Examples/StackedList/*.vue'));
components.push(import.meta.globEager('./components/Examples/StackedList/Headings/*.vue'));
components.push(import.meta.globEager('./components/Examples/StackedList/TwoColumnAvatar/*.vue'));
components.push(import.meta.globEager('./components/Examples/Stats/*.vue'));

for(let i = 0; i < components.length; i++) {
    Object.entries(components[i]).forEach(([path, definition]) => {
        // Get name of component, based on filename
        // "./components/Fruits.vue" will become "Fruits"
        const componentName = path.split('/').pop().replace(/\.\w+$/, '');

        // Register component on this Vue instance
        vueApp.component(componentName, definition.default);
    });
}

vueApp.mount('#app')