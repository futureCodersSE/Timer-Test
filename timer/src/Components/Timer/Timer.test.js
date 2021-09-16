import React from "react";
import {render, screen} from '@testing-library/react';
import Timer from './Timer';

const waitForLoad = () => {
    return null;
}

describe("Timer", () => {
    render(<Timer />);
    var element = screen.getByTestId('timer');

    it('should not show a time on load', () => {
        expect(element.textContent).toBe("--:--:--");
    });

    // wait for load before testing for a time set
    let timer1 = setTimeout(() => waitForLoad(), 1000)

    it('should show a time after load', () => {
        expect(element.textContent).not.toBe("--:--:--");
    });
})
