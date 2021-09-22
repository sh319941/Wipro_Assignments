import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIssues } from "../Redux/Action/IssueActions";
import ErrorPage from "./ErrorPage";
import "./IssuePage.css";

function IssuePage() {
  const dispatch = useDispatch();
  const [Error, SetError] = useState(false);
  const Issues = useSelector((state) => state.allissues.Issue);
  const history = useHistory();

  const fetchIssues = async () => {
    await axios
      .get("http://localhost:3001/IssueList")
      .then((response) => {
        dispatch(setIssues(response.data));
        SetError(false);
      })
      .catch((err) => {
        SetError(true);
        console.log("Err: ", err);
      });
  };

  const onLinkClick = (id) => {
    const confirmbox = window.confirm("Are you Sure Want to View the Details?");
    if (confirmbox === true) {
      history.push(`Issues/${id}`);
    } else {
    }
  };

  useEffect(() => {
    document.title = "Issue Page";
    fetchIssues();
  }, []);

  return (
    <div>
      <h1>Issue Tracker</h1>
      {Issues.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
            {Issues.map((item) => (
              <tr key={item.id}>
                <td>
                  <a href="#" onClick={() => onLinkClick(item.id)}>
                    {item.Issue_Description}
                  </a>
                </td>
                <td>{item.Severity}</td>
                <td>{item.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <ErrorPage Flag={Error} />
        </div>
      )}
      <br></br>
      <div>
        <h4>
          <b>
            <Link to={"/issues/Addissues/New"}>Add Issue</Link>{" "}
          </b>
        </h4>
      </div>
    </div>
  );
}

export default IssuePage;
