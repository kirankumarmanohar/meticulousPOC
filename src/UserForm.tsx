import React, { useEffect, useState } from "react";
import "./App.css";
import Menu from "./Menu";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Card,
  Input,
  Option,
  Typography,
} from "@material-tailwind/react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function UserForm() {
  const [countryList, setCountryList]: any = useState([]);
  const [stateList, setStateList]: any = useState([]);
  const [cityList, setCityList]: any = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [user, setUser]: any = React.useState({});

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName:"",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      country: {
        label: "",
        value: "",
      },
      state: {
        label: "",
        value: "",
      },
      city: {
        label: "",
        value: "",
      },
      zipcode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      middleName: Yup.string().required("middleName is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Invalid Phone number")
        .required("Phone Number is required")
        .max(10, "Phone Number must be 10 digits")
        .min(10, "Phone Number must be 10 digits"),
      country: Yup.object().shape({
        label: Yup.string(),
        value: Yup.string(),
      }),
      state: Yup.object().shape({
        label: Yup.string(),
        value: Yup.string(),
      }),
      city: Yup.object().shape({
        label: Yup.string(),
        value: Yup.string(),
      }),
      zipcode: Yup.string().required("Zipcode is required"),
    }),
    onSubmit: (values) => {
      setUser(values);
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    },
  });

  useEffect(() => {
    setCountryList(Country.getAllCountries());
  }, []);

  useEffect(() => {
    console.log(State.getStatesOfCountry(formik.values.country.value));
    setStateList(State.getStatesOfCountry(formik.values.country.value));
  }, [formik.values.country]);

  useEffect(() => {
    setCityList(
      City.getCitiesOfState(
        formik.values.country.value,
        formik.values.state.value
      )
    );
  }, [formik.values.state]);

  return (
    <div>
      <Menu />
      <div className="py-10 flex flex-col justify-center items-center	">
        <div>
          <h1 className="text-6xl font-bold text-white">User Form</h1>
        </div>
        <div className="py-10 mt-8 mb-2 w-2/4">
          <Card
            color="white"
            shadow={false}
            placeholder={undefined}
            className="p-5 rounded-md"
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  First Name
                </Typography>
                <Input
                  placeholder="First Name"
                  className="pl-2"
                  crossOrigin={"false"}
                  color="light-blue"
                  size="md"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.firstName}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-6">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Middle Name
                </Typography>
                <Input
                  placeholder="middle Name"
                  className="pl-2"
                  crossOrigin={"false"}
                  color="light-blue"
                  size="md"
                  name="middleName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.middleName && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.middleName}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-3 mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Last Name
                </Typography>
                <Input
                  placeholder="Last Name"
                  crossOrigin={"false"}
                  color="light-blue"
                  className="pl-2"
                  size="md"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.lastName}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-3 mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Password
                </Typography>
                <Input
                  placeholder="Password"
                  crossOrigin={"false"}
                  color="light-blue"
                  className="pl-2"
                  size="md"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.password}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-3 mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Confirm Password
                </Typography>
                <Input
                  placeholder="Confirm Password"
                  crossOrigin={"false"}
                  color="light-blue"
                  className="pl-2"
                  size="md"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.confirmPassword && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.confirmPassword}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-3 mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Phone Number
                </Typography>
                <Input
                  placeholder="Phone Number"
                  crossOrigin={"false"}
                  color="light-blue"
                  className="pl-2"
                  size="md"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phoneNumber && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.phoneNumber}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-3 mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Email
                </Typography>
                <Input
                  placeholder="Email"
                  crossOrigin={"false"}
                  color="light-blue"
                  className="pl-2"
                  size="md"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.email}
                  </Typography>
                )}
              </div>
              <div className="mb-1 flex flex-col gap-6 mt-3 align-left">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Country
                </Typography>
                <Select
                  placeholder="Select Country"
                  name="country"
                  onChange={(country: any) => {
                    console.log(country);
                    formik.setFieldValue("country", country);
                  }}
                  value={formik.values.country}
                  options={countryList.map((country: any) => ({
                    label: country.name,
                    value: country.isoCode,
                  }))}
                />
                {formik.errors.country &&
                  typeof formik.errors.country === "string" && (
                    <Typography
                      variant="paragraph"
                      color="red"
                      style={{ marginTop: "-10px" }}
                      className="text-red-500 sm:text-sm"
                      placeholder={""}
                    >
                      {formik.errors.country}
                    </Typography>
                  )}
              </div>
              <div className="mb-1 flex flex-col gap-3 text-align-left mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  State
                </Typography>
                <Select
                  placeholder="Select State"
                  name="state"
                  onChange={(state: any) => {
                    console.log(state);
                    formik.setFieldValue("state", state);
                  }}
                  value={formik.values.state}
                  options={stateList.map((state: any) => ({
                    label: state.name,
                    value: state.isoCode,
                  }))}
                />
                {formik.errors.state &&
                  typeof formik.errors.state === "string" && (
                    <Typography
                      variant="paragraph"
                      color="red"
                      style={{ marginTop: "-10px" }}
                      className="text-red-500 sm:text-sm"
                      placeholder={""}
                    >
                      {formik.errors.state}
                    </Typography>
                  )}
              </div>
              <div className="mb-1 flex flex-col gap-3 text-align-left mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  City
                </Typography>
                <Select
                  placeholder="Select City"
                  name="city"
                  onChange={(city: any) => {
                    formik.setFieldValue("city", city);
                  }}
                  value={formik.values.city}
                  options={cityList.map((city: any) => ({
                    label: city.name,
                    value: city.isoCode,
                  }))}
                />
                {formik.errors.city &&
                  typeof formik.errors.city === "string" && (
                    <Typography
                      variant="paragraph"
                      color="red"
                      style={{ marginTop: "-10px" }}
                      className="text-red-500 sm:text-sm"
                      placeholder={""}
                    >
                      {formik.errors.city}
                    </Typography>
                  )}
              </div>
              <div className="mb-1 flex flex-col gap-3 mt-3">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                  placeholder={""}
                >
                  Zip Code
                </Typography>
                <Input
                  placeholder="Zip Code"
                  crossOrigin={"false"}
                  color="light-blue"
                  className="pl-2"
                  size="md"
                  name="zipcode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.zipcode && (
                  <Typography
                    variant="paragraph"
                    color="red"
                    style={{ marginTop: "-10px" }}
                    className="text-red-500 sm:text-sm"
                    placeholder={""}
                  >
                    {formik.errors.zipcode}
                  </Typography>
                )}
              </div>
              <div className="mt-6">
                <Button
                  color="light-blue"
                  size="lg"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  placeholder={""}
                  fullWidth
                  onClick={formik.submitForm}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-1/2	">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">User details</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {user && (
                  <div className="relative p-6 flex-auto ">
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">First Name:</label>
                      <p>{user.firstName}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Last Name:</label>
                      <p>{user.lastName}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Email:</label>
                      <p>{user.email}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold"> Phone Number </label>
                      <p>{user.phoneNumber}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold"> Country </label>
                      <p>{user.country.label}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold"> State </label>
                      <p>{user.state.label}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold"> City </label>
                      <p>{user.city.label}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="font-semibold"> ZipCode </label>
                      <p>{user.zipcode}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}

export default UserForm;
