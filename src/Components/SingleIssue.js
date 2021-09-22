import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedIssue } from "../Redux/Action/IssueActions";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function SingleIssue(props) {
  const history = useHistory();
  const [Errorflag, SetErrorflag] = useState(false);
  const dispatch = useDispatch();
  const Issue = useSelector((state) => state.issue);
  const id = props.match.params.id;

  const fetchSingleIssue = async () => {
  await axios
      .get(`http://localhost:3001/IssueList/${id}`)
      .then((response) => {
        dispatch(selectedIssue(response.data));
        SetErrorflag(false);
      })
      .catch((err) => {
        console.log("Err: ", err);
        SetErrorflag(true);
      });
  
  
  };

  useEffect(() => {
    fetchSingleIssue();
  }, []);

  return (
    <div>
      <h2>Issue Details</h2>
      <br></br>
      {Object.keys(Issue).length > 0 ? (
        <h5>
          <b>Issue Description:</b>
          {Issue.Issue_Description}
        </h5>
      ) : (
        <div>
          <ErrorPage Flag={Errorflag} />{" "}
        </div>
      )}
      <br></br>
      <Link to="/issues">
        <h4>
          <b>Back</b>
        </h4>
      </Link>
    </div>
  );
}

export default SingleIssue;
