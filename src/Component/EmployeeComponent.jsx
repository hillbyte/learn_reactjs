import React, { Component, Fragment } from "react";
class EmployeeComponent extends Component {
  state = {
    emp_id: "emp0",
    emp_name: "Anonymous",
    emp_salary: 9000000,
    emp_city: "Bengaluru",
    emp_edu: "NULL",
    emp_designation: "Software Engineer",
    emp_email: "contact@anon.me",
    emp_photo:
      "https://images.unsplash.com/photo-1600267185393-e158a98703de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  };
  render() {
    return (
      <Fragment>
        <h1 className="profile-header"> Employees profile</h1>
        <section>
          <article>
            <img src={this.state.emp_photo} />
            <h1>{this.state.emp_name}</h1>
            <h4>Email: {this.state.emp_email}</h4>

            <h4>Designation: {this.state.emp_designation}</h4>
            <h4>Education: {this.state.emp_edu}</h4>

            <h4>Salary: {this.state.emp_salary}</h4>
            <h4>City: {this.state.emp_city}</h4>
          </article>
          <article>
            <img src={this.state.emp_photo} />
            <h1>{this.state.emp_name}</h1>
            <h4>Email: {this.state.emp_email}</h4>

            <h4>Designation:{this.state.emp_designation}</h4>
            <h4>Education:{this.state.emp_edu}</h4>

            <h4>Salary:{this.state.emp_salary}</h4>
            <h4>City:{this.state.emp_city}</h4>
          </article>
          <article>
            <img src={this.state.emp_photo} />
            <h1>{this.state.emp_name}</h1>
            <h4>Email: {this.state.emp_email}</h4>

            <h4>Designation:{this.state.emp_designation}</h4>
            <h4>Education:{this.state.emp_edu}</h4>

            <h4>Salary:{this.state.emp_salary}</h4>
            <h4>City:{this.state.emp_city}</h4>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default EmployeeComponent;
