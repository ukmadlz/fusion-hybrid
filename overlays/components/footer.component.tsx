
import React from 'react'
import * as styles from './footer.css'

export default function FooterComponent () {
    return (
        <footer className={styles.footer} >
          <div className={styles.colourBar} />
          <div className={styles.footerContainer} >
            <div className={styles.logoContainer} >
              <img
                className={styles.logo}
                src="/images/FUSION-EVENTS.png"
                alt="Fusion Events"
              />
            </div>
          </div>
        </footer>
        )
}