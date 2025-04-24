
import TopHeader from '../TopHeader/page'
import Desktop from '../DesktopHeader/page'
import MobileHeader from '../MobileHeader/page'

export default function Header() {
  return (
    <>
      <header className='top-0 z-50 sticky bg-white shadow-md pb-3 w-full'>
        <TopHeader />
        <Desktop />
        <MobileHeader />
      </header>
    </>
  )
}
