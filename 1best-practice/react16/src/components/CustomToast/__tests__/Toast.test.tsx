import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../index';

test('renders learn react link', () => {
    const { getByText } = render(
        <Loading
            type="loading"
            message="nihao"
            destory={() => {
                console.log('test');
            }}
        />,
    );
    const linkElement = getByText(/nihao/i);
    expect(linkElement).toBeInTheDocument();
});
