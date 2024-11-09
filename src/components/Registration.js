import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { handelInput, saveUser, updateUserState } from "../redux/user.reducer";

function Registration() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { newUserState, newUserDetails } = useSelector((state) => state.users);

  useEffect(() => {
    if (newUserState) {
      Swal.fire({
        title: "Success",
        text: "Registration done successfully.",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        dispatch(updateUserState(false));
        navigate("/login");
      });
    }
  }, [newUserState]);
  return (
    <>
      <section className="row" style={{ height: "100vh" }}>
        <section
          className="col-12 bg-back d-flex justify-content-center align-items-center 
        "
        >
          <section className="card rounded-0">
            <h3 className="h4 mb-3 text-center text-white">
              <i className="fa fa-edit" aria-hidden="true"></i> User
              Registration
            </h3>
            <form action="">
              <div className="input-group mb-3">
                <span className="input-group-text bg-warning rounded-0">
                  <i className="fa fa-user-secret fa-2x" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter User Name"
                  value={newUserDetails.name}
                  onChange={(event) =>
                    dispatch(
                      handelInput({
                        value: event.target.value,
                        name: event.target.name,
                      })
                    )
                  }
                  name="name"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text bg-warning rounded-0">
                  <i
                    className="fa fa-envelope-open fa-2x"
                    aria-hidden="true"
                  ></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter Email"
                  value={newUserDetails.email}
                  onChange={(event) =>
                    dispatch(
                      handelInput({
                        value: event.target.value,
                        name: event.target.name,
                      })
                    )
                  }
                  name="email"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text bg-warning rounded-0 px-3">
                  <i
                    className="fa fa-mobile-phone fa-3x"
                    aria-hidden="true"
                  ></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter User Mobile"
                  value={newUserDetails.mobile}
                  onChange={(event) =>
                    dispatch(
                      handelInput({
                        value: event.target.value,
                        name: event.target.name,
                      })
                    )
                  }
                  name="mobile"
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text bg-warning">
                  <i className="fa fa-file-image-o fa-2x"></i>
                </label>
                <input type="file" className="form-control p-3" />
              </div>
              <div className="input-group mb-3 ">
                <span className="input-group-text px-3 bg-info rounded-0">
                  <i
                    className="fa fa-unlock-alt fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter Password"
                  value={newUserDetails.password}
                  onChange={(event) =>
                    dispatch(
                      handelInput({
                        value: event.target.value,
                        name: event.target.name,
                      })
                    )
                  }
                  name="password"
                />
              </div>
              {/* <div className="input-group mb-3 ">
                <span className="input-group-text bg-warning rounded-0">
                  <i className="fa fa-users me-2"></i>
                  Gender
                </span>
                <div className="input-group-text rounded-0">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    value=""
                    name="gender"
                    aria-label="Radio button for following text input"
                  />
                </div>
                <span className="input-group-text rounded-0 bg-white text-success">
                  <i className="fa fa-male me-1" aria-hidden="true"></i>
                  Male
                </span>
                <div className="input-group-text rounded-0">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    value=""
                    name="gender"
                    aria-label="Radio button for following text input"
                  />
                </div>
                <span className="input-group-text bg-white text-success rounded-0">
                  <i className="fa fa-female me-1" aria-hidden="true"></i>
                  Female
                </span>
                <div className="input-group-text rounded-0">
                  <input
                    className="form-check-input mt-0"
                    type="radio"
                    value=""
                    name="gender"
                    aria-label="Radio button for following text input"
                  />
                </div>
                <span className="input-group-text text-success bg-white rounded-0">
                  <i
                    className="fa fa-question-circle me-1"
                    aria-hidden="true"
                  ></i>
                  Other
                </span>
              </div> */}
              <div className="input-group mb-3 ">
                <span className="input-group-text px-3 bg-warning rounded-0">
                  <i
                    className="fa fa-unlock-alt fa-2x text-white"
                    aria-hidden="true"
                  ></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div className=" text-center">
                <button
                  className="btn btn-success px-5 me-2 rounded-0"
                  type="button"
                  onClick={() => dispatch(saveUser(newUserDetails))}
                >
                  <i className="fa fa-save me-2"></i>
                  Save
                </button>
                <button
                  className="btn btn-outline-danger rounded-0"
                  type="reset"
                >
                  <i className="fa fa-history me-2"></i>
                  Reset
                </button>
              </div>
              <div>
                <p className="m-0 text-white text-center h5 mt-2">
                  Have account ?{" "}
                  <Link to="/loginb" className="text-white-50">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Registration;
