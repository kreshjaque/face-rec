import React from 'react'
import renderer from 'react-test-renderer';
import MainContainer from './MainContainer';

describe('MainContainer', () => {
    const component = renderer.create(<MainContainer><p>dummy test</p></MainContainer>)
    
    test('should render the component', () => {
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    })
    
})
