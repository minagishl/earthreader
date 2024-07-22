import { Footer } from "@/components/Footer";
import Link from "next/link";
import classes from "@/components/Home.module.css";
export default function Home() {
  return (
    <div>
      <div className={classes.sidebar}>
      <div className={`${classes.Header} text-2xl font-logo`}>
        EarthQuake Live
      </div>
        <div>Wether</div>
        <div>Latest Earthquake</div>
        <div>Warning/advisory</div>
      </div>


      <main>
        <div className={classes.main}>Last data EarthQuake Map</div>
      </main>
      <Link href="status/">
        <button className={classes.button}>Go to Status</button>
      </Link>
      <Footer />
    </div>
  );
}
