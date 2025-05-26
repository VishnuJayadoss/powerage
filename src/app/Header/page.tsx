import TopHeader from "../TopHeader/page";
import Desktop from "../DesktopHeader/page";
import MobileHeader from "../MobileHeader/page";

export default function Header() {
  return (
    <>
      <header>
        <div className="mb-6 md:mb-0 lg:mb-0">
          <TopHeader />
        </div>
        <Desktop />
        <MobileHeader />
      </header>
    </>
  );
}
