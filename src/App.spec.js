import React from 'react';
import {App} from './App';
import {shallow} from "enzyme";


describe('App', () => {
    describe('App initial', () => {
        const app = shallow(<App/>);
        it('App is initialized and rendered', () => {
            expect(app).toMatchSnapshot()
        });
    });
    describe('App loading', () => {
        const app = shallow(<App />);
        it('renders properly', () => {
            expect(App).toMatchSnapshot()
        });
        it('renders Loading', () => {
            expect(app.find('Loading')).toMatchSnapshot();
        })
    });
    describe('App renders with error', () => {
        const app = shallow(<App />);
        it('renders properly', () => {
            expect(app).toMatchSnapshot()
        });
        it('renders error', () => {
            expect(app.find('error')).toMatchSnapshot()
        })
    })
});