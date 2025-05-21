import TopHeader from "../TopHeader/page";
import Desktop from "../DesktopHeader/page";
import MobileHeader from "../MobileHeader/page";

export default function Header() {
  return (
    <>
      <header>
        <TopHeader />
        <Desktop />
        <MobileHeader />
      </header>
    </>
  );
}
