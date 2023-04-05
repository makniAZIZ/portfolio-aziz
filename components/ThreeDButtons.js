import styles from '../styles/ThreeDButtons.module.scss';


function ThreeDButtons(props) {
    return (
        <button className={styles.button}>{props.text}
        </button>
    );
}

export default ThreeDButtons;
