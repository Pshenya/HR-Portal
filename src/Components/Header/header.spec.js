import React from 'react';
import {shallow} from 'enzyme';
import {Header} from "./header";


describe('Header', () => {
    const props = {
        userData: {},
        loading: false,
        error: null,
        getUser: () => {
        }
    };

    describe('Header initial', () => {
        const mockGetUser = jest.fn();
        const nextProps = { // создали новые свойства
            ...props,
            getUser: mockGetUser,
        };
        const header = shallow(
            <Header {...nextProps} />
        );

        it('Header is initialized and rendered', () => {
            expect(header).toMatchSnapshot()
        });

        it('dispatches the `getUser()` method it receives from props', () => {
            expect(mockGetUser).toHaveBeenCalledTimes(1) // создали ожидание с нужным ассертом
        })
    });
    describe('Header loading', () => {
        const nextProps = {
            ...props,
            loading: true,
        };

        const header = shallow(
            <Header {...nextProps} />
        );

        it('renders properly', () => {
            expect(header).toMatchSnapshot()
        });

        it('renders Loading', () => {
            expect(header.find('Loading')).toMatchSnapshot();
        })
    });

    describe('Header render userData', () => {
        const nextProps = {
            ...props,
            userData: {name: 'log'},
        };

        const header = shallow(
            <Header {...nextProps} />
        );

        it('renders properly', () => {
            expect(header).toMatchSnapshot()
        });

        it('renders userData', () => {
            expect(header.find('userData')).toMatchSnapshot()
        })
    });

    describe('Header renders with error', () => {
        const nextProps = {
            ...props,
            error: 'Unknown error'
        };

        const header = shallow(
            <Header {...nextProps} />
        );

        it('renders properly', () => {
            expect(header).toMatchSnapshot()
        });

        it('renders error', () => {
            expect(header.find('error')).toMatchSnapshot()
        })
    })
});

// здесь будут будущие it

