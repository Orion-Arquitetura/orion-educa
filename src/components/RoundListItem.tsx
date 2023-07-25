/* eslint-disable @next/next/no-img-element */
import styles from "../styles/RoundListItem.module.scss";
export default function RoundListItem({
  imgHref,
  alt,
}: {
  imgHref: string;
  alt: string;
}) {
  return (
    <li className={styles["li"]}>
      <img src={imgHref} alt={alt} />
      <span><i>{alt}</i></span>
    </li>
  );
}
