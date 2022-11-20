import propTypes from 'prop-types';
import css from "./Section.module.css";

const Section = ({title, children}) => (
    <section>
        <h2 className={css.title}>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: propTypes.string.isRequired
    }

export default Section;