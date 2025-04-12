function App(): JSX.Element {
  return (
    <>
      <ButtonUsage>Send IPC</ButtonUsage>
    </>
  )
}

import Button from '@mui/material/Button'

function ButtonUsage({ children }: { children: React.ReactNode }): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <Button onClick={ipcHandle} variant="contained">
      {children}
    </Button>
  )
}

export default App
