import styles from '../styles/Titles.module.scss';


function Titles(props) {
    

    return (
            <h2 className={`${styles.sectionTitle} mb-lg-5 mb-3`}>{props.value}</h2>
    );
}

export default Titles;
