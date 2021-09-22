import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import * as Yup from "yup";
import axios from "axios";

export const AddIssues = () => {
  const [Errorflag, SetErrorflag] = useState(false);
  const [Isloading, SetIsloading] = useState(false);
  const history = useHistory();
  const style = { color: "Red" };
  document.title = "Add Issues";
  const SignupSchema = Yup.object().shape({
    Issue_Description: Yup.string().required("Isue Description Required"),
    Severity: Yup.string().required("Required"),
    Status: Yup.string().required("Required"),
  });

  async function submitdata(values) {
    const Submitconfirm = window.confirm("Are you Sure want to Submit?");
    if (Submitconfirm === true) {
      SetIsloading(true);
      await axios
        .post("http://localhost:3001/IssueList", values)
        .then((res) => {
          SetIsloading(false);
          alert("Issue Added Sucessfully");
          history.push("/Issues");
          SetErrorflag(false);
        })
        .catch((err) => {
          SetErrorflag(true);
        });
    } else {
    }
  }

  return (
    <div>
      <h1>Add Issues</h1>
      <Formik
        initialValues={{
          Issue_Description: "",
          Severity: "",
          Status: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          submitdata(values);
          resetForm({});
        }}
      >
        {({ errors, touched, dirty, issubmitting }) => (
          <div>
            {Isloading ? (
              <ErrorPage Flag={Errorflag} />
            ) : (
              <Form>
                <table>
                  <tr>
                    <td>Issue Description</td>
                    <td>
                      <Field name="Issue_Description" />
                      {errors.Issue_Description && touched.Issue_Description ? (
                        <div style={style}>{errors.Issue_Description}</div>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Severity</td>
                    <td>
                      <Field as="select" name="Severity">
                        <option value="Critial">Critial</option>
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                      </Field>
                      {errors.Severity && touched.Severity ? (
                        <div style={style}>{errors.Severity}</div>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>
                      <Field type="radio" name="Status" value="Open" />
                      Open
                      <Field type="radio" name="Status" value="In Progress" />
                      In Progress
                      <Field type="radio" name="Status" value="Closed" />
                      Closed
                      {errors.Status && touched.Status ? (
                        <div style={style}>{errors.Status}</div>
                      ) : null}
                    </td>
                  </tr>
                </table>
                {/* <Prompt when={dirty} message="Are you sure??" /> */}
                <Field type="submit" name="Submit" disabled={issubmitting} />
                <Prompt when={dirty} message="Are you sure??" />
              </Form>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};
