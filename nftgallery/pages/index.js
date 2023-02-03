import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          nft da <a href="https://artigos.banklessbr.com">bankless</a>!
        </h1>

        <p className={styles.description}>
          galaria com todos os nft da bankless
        </p>
        
      <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
          </a>

          <a href="" className={styles.card}>
  
          </a>

          <a href="" className={styles.card}>
            
          </a>
        </div>
      </main>
    </div>
  );
}
