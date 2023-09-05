// common css style for every page
import styles from "@/app/styles/common.module.css";
// Link Tag is for change page routing
import Link from "next/link";

// if page is not found
const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Could not find requested resource</p>
        {/* Routing for going to home page */}
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
