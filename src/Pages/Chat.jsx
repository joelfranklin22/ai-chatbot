import { useState } from "react";
import styles from "../styles/Chat.module.css";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        {/* Left Nav Side */}

        <div className={`${styles.leftNav} ${isOpen ? styles.open : ""}`}>
          <div className={styles.closeButton}>
            <button onClick={() => setIsOpen(!isOpen)}>✕</button>
          </div>
          <div className={styles.botName}>Bot name</div>
          <div className={styles.chatNav}>
            <ul className={styles.chatOptions}>
              <li>
                <button className={styles.chatItems}>
                  <i>a</i> Chat
                </button>
              </li>
              <li>
                <button className={styles.chatItems}>
                  <i>a</i> History
                </button>
              </li>
              <li>
                <button className={styles.chatItems}>
                  <i>a</i> Settings
                </button>
              </li>
            </ul>
            <div className={styles.divider}></div>
            <div className={styles.profile}>
              <p>Profile joel</p>
              <button>Signout</button>
            </div>
          </div>
        </div>

        {/* Right Nav Side */}
        <div className={styles.rightNav}>
          {/* Header */}

          <header className={styles.headerNav}>
            <div className={styles.menuButton}>
              <button onClick={() => setIsOpen(!isOpen)}>☰</button>
            </div>
            <p>Chatname</p>
          </header>
          {/* section */}
          <section className={styles.chat}>
            <div className={styles.resMessage}>
              <p>
                Use flexbox — display flex, align items center, justify content
                center.
              </p>
            </div>
            <div className={styles.reqMessage}>
              <p>Hi, how do I center a div?</p>
            </div>
          </section>
          {/* Footer */}
          <footer className="messageFooter">
            <form action="" className={styles.messageBox}>
              <input type="text" name="" id="" placeholder="Type a message" />
              <button className={styles.sendChat}>Send</button>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Chat;
