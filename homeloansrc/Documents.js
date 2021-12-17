import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Documents extends Component {
  render() {
    return (
      <>
        <h1>Upload Documents</h1>
        <h1>...</h1>

        <form>
          <div class="col ">
            <label for="photograph">Photograph</label>
          </div>
          <div class="col-8 mb-3">
            <input
              type="file"
              class="form-control"
              accept="image/jpeg,image/png,application/pdf"
              name="photograph"
              id="photograph"
            />
          </div>

          <div className="row mb-3">
            <label for="customFile" className="form-label">
              Pan Card
            </label>
            <div className="col-sm-3">
              <input type="file" className="form-control" id="customFile" />
            </div>
          </div>

          <div className=" mb-3">
            <label for="customFile" className="form-label">
              UserName
            </label>
            <input type="file" className="form-control" id="customFile" />
          </div>

          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-3">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Sign in
          </button>
        </form>
      </>
    );
  }
}
