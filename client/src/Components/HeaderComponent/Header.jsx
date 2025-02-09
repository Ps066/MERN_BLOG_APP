import './header.css'
import bgImg  from './pxfuel.jpg'

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <div className="headerTitleSm">React & Node</div>
            <div className="headerTitleLg">Blog</div>
        </div>
        <img src={bgImg} alt="" className="headerImg" />
    </div>
  )
}

export default Header