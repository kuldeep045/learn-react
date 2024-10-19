import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import Card from './component/Card'
import Button from './component/Button'

function App() {
  const [themeMode, setThemeMode] = useState()
  const LightTheme = () => {
    setThemeMode("light")
  }
  const darktheme = () => {
    setThemeMode("dark")
  }

  useEffect(()=>{
    const body = document.querySelector("html")
    body.classList.remove('dark', 'light')
    body.classList.add(themeMode)

  },[themeMode])


  return <ThemeProvider value={{themeMode, LightTheme, darktheme}}>

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>
                    </div>
                </div>
            </div>



</ThemeProvider>

}

export default App
