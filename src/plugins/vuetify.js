import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: '#000000',
                primary: '#114B5F',
                secondary: '#ff5722',
                accent: '#9c27b0',
                error: '#e91e63',
                warning: '#ffc107',
                info: '#2196f3',
                success: '#4caf50'
            },
            dark: {
                background: '#FFFFFF',
                primary: '#114B5F',
                secondary: '#ff5722',
                accent: '#9c27b0',
                error: '#e91e63',
                warning: '#ffc107',
                info: '#2196f3',
                success: '#4caf50'
            }
        }
    }
});
