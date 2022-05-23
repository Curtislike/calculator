import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import Header from '@/containers/Header'

import Loader from '@/components/Loader'
import { PageLayout } from '@/layouts'
import Calculator from '@/containers/Calculator/Calculator'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => (
  <Suspense fallback={<Loader />}>
    <PageLayout>
      <Header />
      <Switch>
        <Route
          exact
          path={HOME_PAGE_ROUTE}
          component={HomePage}
        />
        <Route
          path={SETTINGS_PAGE_ROUTE}
          component={SettingsPage}
        />
      </Switch>
    </PageLayout>
  </Suspense>
)
