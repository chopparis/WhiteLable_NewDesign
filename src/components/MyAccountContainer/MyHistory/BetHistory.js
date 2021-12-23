import React, { useState, useEffect } from 'react';
// import styles from './style.module.scss';
import styles from '../style.module.scss';
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BetHistory = () => {
  return (

    <div>

      <div className={`${styles.form_contanier} ${styles.bg_color} `}>
        <div className={styles.heading}>
          <h2>Bets Summary</h2>
        </div>
        <div className={styles.summary_block}>
          <div className={`${styles.summary_block_content} ${styles.form_group_50} `}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} className={styles.my_HistryIcon} />
            <div className={styles.content_block}>
              <span className={styles.blue_color_font}>Total Bets</span>
              <span>$0.00</span>
            </div>
          </div>
          <div className={`${styles.summary_block_content} ${styles.form_group_50} `}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} className={styles.my_HistryIcon} />
            <div className={styles.content_block}>
              <span className={styles.blue_color_font}>Total Winnings</span>
              <span>$0.00</span>
            </div>
          </div>

        </div>
      </div>
      <h5 className={styles.blue_color_font}>GAME NAME</h5>
      <div className={styles.transaction_table}>
        <div className={styles.form_contanier}>
          <div className={styles.table_header}>
            <div className={styles.tr}>
              <div className={styles.th}>
                <span className={styles.blue_color_font}>DATE/TIME</span>
              </div>
              <div className={styles.th}>
                <span className={styles.blue_color_font}>BET</span>
              </div>
              <div className={styles.th}>
                <span className={styles.blue_color_font}>WIN</span>
              </div>
              <div className={styles.th}>
                <span className={styles.blue_color_font}>BALANCE</span>
              </div>
            </div>
          </div>
          <div className={styles.table_body}>
            <div className={styles.tr}>
              <div className={`${styles.td} ${styles.date_time} `}>
                <span>11AUG2021 11:26:45</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
            </div>
            <div className={styles.tr}>
              <div className={`${styles.td} ${styles.date_time} `}>
                <span>11AUG2021 11:26:45</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
            </div>
            <div className={styles.tr}>
              <div className={`${styles.td} ${styles.date_time} `}>
                <span>11AUG2021 11:26:45</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
            </div>
            <div className={styles.tr}>
              <div className={`${styles.td} ${styles.date_time} `}>
                <span>11AUG2021 11:26:45</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
              <div className={styles.td}>
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BetHistory;