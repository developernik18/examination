import Timer from "../timer/Timer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../slices/userSlice";

import "./header.css";

export default function Header({ timerRequired }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="headerContainer">
      <div className="container headerItemsContainer">
        <Link to="/" className="logo">
          Exam Time
        </Link>
        {timerRequired && (
          <div className="timer">
            <Timer />
          </div>
        )}

        {user.loggedin && <div className="username">{user.username}</div>}
        {!user.loggedin && (
          <button
            onClick={() =>
              dispatch(updateUser({ username: "Ryan Sharma", loggedin: true }))
            }
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
