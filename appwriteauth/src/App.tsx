import { View, Text } from 'react-native'
import React from 'react'
import { Router } from './routes/Router'
import AppwriteProvider from './appwrite/AppwriteContext'

const App = () => {
  return (
    <AppwriteProvider>
      <Router/>
    </AppwriteProvider>
  )
}

export default App