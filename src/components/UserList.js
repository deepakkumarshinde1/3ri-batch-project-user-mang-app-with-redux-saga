import { getUser } from "../redux/user.reducer";
import Header from "./Header";
import UserListItem from "./UserListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  let dispatch = useDispatch();
  let { userList } = useSelector((state) => state.users);

  // mounting
  useEffect(() => {
    if (userList.length === 0) dispatch(getUser());
  }, []);
  //[] --> dependency array

  return (
    <>
      <section className="row">
        <Header />
        <section className="col-8 m-auto mt-3 ">
          <h4 className="text-center">Users List</h4>
          {userList.map((user) => {
            return <UserListItem key={user.id} user={user} />;
          })}

          {/* <ul className="pages ">
            <li>
              <button>
                <i className="fa fa-angle-double-left"></i>
              </button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
            <li>
              <button>4</button>
            </li>
            <li>
              <button>5</button>
            </li>
            <li>
              <button>
                <i className="fa fa-angle-double-right"></i>
              </button>
            </li>
          </ul> */}
        </section>
      </section>
    </>
  );
}

export default UserList;

// birth
// update
// die

// birth --> initialization (memory alloc) & mounting
// init --> render --> mount (once)
// update --> update ( multi )
// die --> unmount (once)
// functional --> m -> up -> un
// hooks --> useEffect() , useLayoutEffect()
