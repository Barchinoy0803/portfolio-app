import LiquidEther from './LiquidEther';

const PortfolioBackground: React.FC = () => {
  return (
     <div className="background-container">
       <LiquidEther 
         colors={['#AD9EE8', '#E7BAE5', '#C5C0D7']}
         mouseForce={20}
         cursorSize={100}
         isViscous={false}
         viscous={30}
         iterationsViscous={32}
         iterationsPoisson={32}
         resolution={0.5}
         isBounce={false}
         autoDemo={true}
         autoSpeed={0.5}
         autoIntensity={2.2}
         takeoverDuration={0.25}
         autoResumeDelay={3000}
         autoRampDuration={0.6}
       />
     </div>
  )
}
export default PortfolioBackground;