import React from "react";
import "./styles.css";

interface DocusignCardProps {
  title: string;
  description: string;
  btnTitle1: string;
  onClickBtn1: () => void;
}

const DocusignCard: React.FC<DocusignCardProps> = ({
  title,
  description,
  btnTitle1,
  onClickBtn1,
}) => {
  return (
    <div className="docusign-container">
      <div className="docusign-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          <button className="button-component2" onClick={onClickBtn1}>
            {btnTitle1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocusignCard;
