// import { UserChallenge } from "./tutorial/06-forms/02-user-challenge";
// import { MultipleInputs } from "./tutorial/06-forms/03-multiple-inputs";
// import { OtherInputs } from "./tutorial/06-forms/04-other-inputs";
// import { UncontrolledInputs } from "./tutorial/06-forms/05-form-data";
import { UserContainer } from "./tutorial/09-context-api/prop-drilling/UserContainer";

export function App() {
  return (
    <div className="container">
      <UserContainer user={user} logout={logout}/>
    </div>
  );
}
