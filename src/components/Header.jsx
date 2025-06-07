import BackgroundImage from "./BackgroundImage";

export default function Header() {
  return (
    <header>
      <BackgroundImage />
      <h1 className="first-heading ">
        word<span className="first-heading--thin">analytics</span>
      </h1>
    </header>
  );
}
