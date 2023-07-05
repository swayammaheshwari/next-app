import Nav from '@components/Nav';
import '@styles/globals.css';
import { ReactNode } from 'react';


export const metadata = {
  title:"Next-app",
  description: "Discover & Share AI Prompts"
}

const RootLayout: React.FC<{ children: ReactNode }> = ({children}) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} >
        <div className="main">
          <div className='gradiant'/>
        </div>
        <main className='app'>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout