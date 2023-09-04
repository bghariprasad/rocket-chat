import UserAction from "../UserAction"
import UserList from "../UserList"
import UserSearch from "../UserSearch"

function UserWrapper({ className }) {
  return (
    <section className={className}>
      <UserAction />
      <UserSearch />
      <UserList />
    </section>
  )
}

export default UserWrapper