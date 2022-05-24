import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import Header from '@/containers/Header'
import Loader from '@/components/Loader'
import { PageLayout } from '@/layouts'
import Calculator from '@/containers/Calculator/Calculator'
import { ThemeContext } from '@/context/themeContext'
import GlobalStyles from '@/globalStyles'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => {
  const { selectedTheme } = useContext(ThemeContext)

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
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
      </ThemeProvider>
    </Suspense>
  )
}
