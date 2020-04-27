import React from "react";

import styles from "./SCard.css"

const SCard = props => { 
    return (
      <div className={styles.Scard}>
        <div className={styles.cardText}>
          <p>{props.title}</p>
          <p>{props.url}</p>
          <p>{props.description}</p>
        </div>
      </div>
    );
};

export default SCard;
