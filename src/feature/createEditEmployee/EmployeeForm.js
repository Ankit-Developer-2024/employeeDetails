import { useForm, Controller } from "react-hook-form";
import "./employeeForm.css";
import { useState } from "react";

export default function EmployeeForm() {
  let [employeeDesignation, setEmployeeDesignation] = useState(false);
  let [employeeCourse, setEmployeeCourse] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Watch checkbox values (for demonstration)
  const checkboxValues = watch("checkboxes", []);

  return (
    <>
      <div className="EmployeeForm">
        <form
          className="EmployeeDetails"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <fieldset className="EmployeeDetailss">
            <legend className="details">Employee Details</legend>
            <table>
              <tr>
                <td>
                  {" "}
                  <label className="employeeName" htmlFor="employeeName">
                    Name :{" "}
                  </label>{" "}
                </td>
                <td>
                  <input
                    {...register("employeeName", {
                      required: "Employee name is required",
                    })}
                    type="text"
                    name="employeeName"
                  ></input>
                  {errors.employeeName && (
                    <p className="EmployeeError">
                      {errors.employeeName?.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label className="employeeEmail" htmlFor="employeeEmail">
                    Email :{" "}
                  </label>{" "}
                </td>
                <td>
                  <input
                    {...register("employeeEmail", {
                      required: "Employee email is required",pattern:{
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,message:"Email is not valid"
                        }
                    })}
                    type="text"
                    name="employeeEmail"
                  ></input>
                  {errors.employeeEmail && (
                    <p className="EmployeeError">
                      {errors.employeeEmail?.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="employeeMobileNumber"
                    htmlFor="employeeMobileNumber"
                  >
                    Mobile No. :{" "}
                  </label>
                </td>
                <td>
                  <input
                    {...register("employeeMobileNumber", {
                      required: "Mobile number is required",pattern:{
                        value:/^[1-9]{1}\d{2}[-.]?\d{3}[-.]?\d{4}$/i,message:"Please enter 10 digit valid number"
                      }
                    })}
                    type="number"
                    name="employeeMobileNumber"
                  ></input>
                  {errors.employeeMobileNumber && (
                    <p className="EmployeeError">
                      {errors.employeeMobileNumber?.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="employeeDesignation"
                    htmlFor="employeeDesignation"
                  >
                    Designation :{" "}
                  </label>
                </td>
                <td>
                  <select
                    {...register("employeeDesignation", {
                      required: "Employee designation is required",
                    })}
                    className="employeeDesignationValue"
                  >
                    <option value="">--Select Designation--</option>
                    <option value="hR">HR</option>
                    <option value="manager">Manager</option>
                    <option value="sales">Sales</option>
                  </select>
                  {errors.employeeDesignation && (
                    <p className="EmployeeError">
                      {errors.employeeDesignation?.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="employeeGenderTitle"
                    htmlFor="employeeGender"
                  >
                    Gender :{" "}
                  </label>{" "}
                </td>
                <td>
                  <input
                    {...register("employGender", {
                      required: "Employee gender is required",
                    })}
                    type="radio"
                    id="male"
                    value="Male"
                    name="employGender"
                  />
                  <label className="gender" htmlFor="employeeGender">
                    Male
                  </label>
                  <input
                    {...register("employGender", {
                      required: "Employee gender is required",
                    })}
                    type="radio"
                    id="female"
                    value="Female"
                    name="employGender"
                  />
                  <label className="gender" htmlFor="employeeGender">
                    Female
                  </label>
                  {errors.employGender && (
                    <p className="EmployeeError">
                      {errors.employGender?.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="employeeCourseTitle"
                    htmlFor="employeeCourse"
                  >
                    Course:
                  </label>
                </td>
                <td>
                  <div>
                    <Controller
                      name="employeeCourse"
                      control={control}
                      defaultValue={[]}
                      rules={{
                        validate: (value) =>
                          value.length > 0 ||
                          "Please select at least one course",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <label  className="employeeCourse"    >
                            <input
                             className="employeeCourseCheckbox"
                              type="checkbox"
                              value="MCA"
                              checked={value.includes("MCA")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...value, e.target.value]
                                  : value.filter(
                                      (item) => item !== e.target.value
                                    );
                                onChange(newValue);
                              }}
                            />
                            MCA
                          </label>
                          <label  className="employeeCourse"  >
                            <input
                              className="employeeCourse"
                              type="checkbox"
                              value="BCA"
                              checked={value.includes("BCA")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...value, e.target.value]
                                  : value.filter(
                                      (item) => item !== e.target.value
                                    );
                                onChange(newValue);
                              }}
                            />
                            BCA
                          </label>
                          <label  className="employeeCourse"  >
                            <input
                              className="employeeCourse"  
                              type="checkbox"
                              value="CSE"
                              checked={value.includes("CSE")}
                              onChange={(e) => {
                                const newValue = e.target.checked
                                  ? [...value, e.target.value]
                                  : value.filter(
                                      (item) => item !== e.target.value
                                    );
                                onChange(newValue);
                              }}
                            />
                            CSE
                          </label>
                          {errors.employeeCourse && (
                            <p className="EmployeeError">
                              {errors.employeeCourse.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="employeeImage" htmlFor="employeeImage">
                    Image :{" "}
                  </label>{" "}
                </td>
                <td>
                  <input
                    {...register("employeeImage", {
                      required: "Employee image is required",
                    })}
                    type="file"
                    id="employeeImage"
                    name="employeeImage"
                  />
                  {errors.employeeImage && (
                    <p className="EmployeeError">
                      {errors.employeeImage?.message}
                    </p>
                  )}
                </td>
              </tr>
            </table>
            <input className="employeeSumbit" type="submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
}
