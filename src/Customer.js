import React, { Component } from "react";

export default class Customer extends Component {
  render() {
    return (
      <>
        <h2>(Customer) Enter Your Details</h2>
        <br />
        <form className="row g-3">
          <div class="col-md-3">
            <label for="name" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>

          <div class="col-md-3">
            <label for="name" class="form-label">
              Middle Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>

          <div class="col-md-3">
            <label for="name" class="form-label">
              Last Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>

          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              placeholder="abc@xyz.com"
              type="email"
              class="form-control"
              id="inputEmail4"
            />
          </div>

          <div class="col-md-3">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>

          <div class="col-md-3">
            <label for="phone" class="form-label">
              Phone No.
            </label>
            <input type="tel" class="form-control" id="phone" />
          </div>

          <div class="col-md-3">
            <label for="date" class="form-label">
              BirthDate
            </label>
            <input type="date" class="form-control" id="date" />
          </div>

          <div class="col-md-4">
            <label for="inputNationality" class="form-label">
              Nationality
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>India</option>
              <option>Nepal</option>
              <option>ShriLanka</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="adhaarno" class="form-label">
              Adhaar No.
            </label>
            <input
              placeholder="1111 22222 3333 4444"
              type="number"
              class="form-control"
              id="adhaarno"
            />
          </div>

          <div class="col-md-3">
            <label for="panno" class="form-label">
              PAN No.
            </label>
            <input type="text" class="form-control" id="panno" />
          </div>
          <div class="">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label">Check me out</label>
            </div>
          </div>
          <div class="">
            <button type="submit" className="btn btn-success">
              Sign in
            </button>
          </div>
        </form>
      </>
    );
  }
}
