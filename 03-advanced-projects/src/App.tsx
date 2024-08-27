// import { UserChallenge } from "./tutorial/06-forms/02-user-challenge";
// import { MultipleInputs } from "./tutorial/06-forms/03-multiple-inputs";
// import { OtherInputs } from "./tutorial/06-forms/04-other-inputs";
// import { UncontrolledInputs } from "./tutorial/06-forms/05-form-data";

import Theme from "./tutorial/09-context-api/context/dark-mode/ThemeProvider";
import { Navbar } from "./tutorial/09-context-api/context/Navbar";


// import { UserContainer } from "./tutorial/09-context-api/context/UserContainer";


export function App() {
  return (
    <div className="container">
     {/* <Navbar/> */}
     <Theme/>
    </div>
  );
}
