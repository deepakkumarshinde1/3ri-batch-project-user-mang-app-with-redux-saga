import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddNewUser() {
  let navigate = useNavigate();
  return (
    <>
      <section className="row">
        <Header />
        <section
          className="col-12 d-flex justify-content-center align-items-center 
        "
        >
          <section className="card rounded-0 p-3 m-3">
            <h3 className="h4 mb-3 text-center text-secondary">
              <i className="fa fa-user-plus" aria-hidden="true"></i> Add User
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
                />
              </div>
              <div className="input-group mb-3 ">
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
              </div>
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
                  onClick={() => navigate("/")}
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
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default AddNewUser;
