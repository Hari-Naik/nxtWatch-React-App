import React from 'react'

const Context = React.createContext({
  isDark: '',
  onToggleTheme: () => {},
  savedVideosList: [],
  saveAndRemoveVideos: () => {},
  activeTabId: 'Home',
  onActiveTabId: () => {},
})

export default Context
