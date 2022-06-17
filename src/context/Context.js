import React from 'react'

const Context = React.createContext({
  isDark: '',
  onToggleTheme: () => {},
  activeSavedVideosIds: [],
  savedVideosList: [],
  saveAndRemoveVideos: () => {},
  activeTabId: 'Home',
  onActiveTabId: () => {},
})

export default Context
