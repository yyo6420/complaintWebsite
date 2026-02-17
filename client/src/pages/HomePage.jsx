import { NavLink } from "react-router";

function HomePage() {
  return (
    <>
      <nav className="navBar">
        <h1>דף הבית</h1>
      </nav>
      <div className="page">
        <h1 className="welcomeTitle">ברוך הבא</h1>
        <p className="descriptionText">
          באתר זה ניתן להגיש תלונות ופניות באופן אנונימי ומאובטח למערכות צה"ל
          לצורך טיפול ובירור על-ידי הגורמים המוסמכים.
        </p>
        <NavLink to="/ComplaintsTable" className="link ComplaintsTableLink">לשליחת תלונה לחץ כאן</NavLink>
        <NavLink to="/AdminLoginPage" className="link AdminLoginPageLink">כניסת מפקד</NavLink>
        <img
          className="mainPageLogo"
          src="../public/tzahalLogo.webp"
          alt="הלוגו של צה''ל"
        />
      </div>
    </>
  );
}

export default HomePage;
