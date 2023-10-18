import styles from "./style.module.css";
import Image from "next/image";

export default function index({ modal, projects }) {
  const { active, index } = modal;
  return (
    <div className={styles.modalContainer}>
      <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
        {projects.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              key={`modal_${index}`}
              style={{ backgroundColor: color }}
              className={styles.modal}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
