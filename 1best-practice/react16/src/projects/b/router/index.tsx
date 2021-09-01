import '@formatjs/intl-pluralrules/polyfill';
import React, { lazy, Suspense } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import zhCN from '@/lang/a/zh-CN';

const Page1 = lazy(() => import('../pages/page1/index'));
const Page2 = lazy(() => import('../pages/page2/index'));

export default () => {
    const match = useRouteMatch();

    return (
        <Suspense fallback={<div />}>
            <IntlProvider locale="zh" messages={zhCN}>
                <Switch>
                    <Route
                        path={`${match.path}/`}
                        render={() => {
                            return <Page1 />;
                        }}
                    />
                    <Route
                        path={`${match.path}/Page2`}
                        render={() => {
                            return <Page2 />;
                        }}
                    />
                </Switch>
            </IntlProvider>
        </Suspense>
    );
};
