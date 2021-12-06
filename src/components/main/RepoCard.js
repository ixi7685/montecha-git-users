import "./RepoCard.css";
import React from "react";
import { GoRepo } from "react-icons/go";

export default function RepoCard({ repo }) {
  const { name } = repo;

  return (
    <div className="body">
      <GoRepo color="white" fontSize="1.3em" />
      <span className="left">{name}</span>
    </div>
  );
}
