import React from 'react';
import { useLayoutEffect, useState } from 'react';
import { Router, RouterProps } from 'react-router-dom';
import { BrowserHistory } from 'history';

interface CustomRouterProps extends Partial<RouterProps> {
    history: BrowserHistory;
}

export const CustomRouter = ({ history, ...props }: CustomRouterProps) => {
    const { action, location } = history;
    const [state, setState] = useState({ action, location });

    useLayoutEffect(() => history.listen(setState), [history]);

    return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};