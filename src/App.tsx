import { memo } from 'react'
import MainRouter from './routes'
import PortfolioBackground from './components/scrollAnimation'

const App = () => {
  return (
    <div style={{ width: '100%', height: "78vh", position: 'relative' }}>
      <PortfolioBackground />
      <MainRouter />
    </div>
  )
}

export default memo(App)