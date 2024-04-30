import UserAccountHeader from "./UserAccountHeader";
import QuizResultsList from "../Result/QuizResultsList";
import UserMenu from './UserMenu';
const UserAccount = () => {
  return (
    <div className="user-page-layout">
        <UserAccountHeader/>
        <UserMenu/>
        <QuizResultsList/>
    </div>
  )
}

export default UserAccount