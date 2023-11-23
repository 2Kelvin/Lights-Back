import './SectionForm.css';
import Tips from '../Tips/Tips';
import { ContactUs } from '../ContactForm/ContactForm';

function FormSection() {
    return (
        <section className="formSection">
            <Tips />
            <ContactUs />
        </section>
    );
}

export default FormSection;