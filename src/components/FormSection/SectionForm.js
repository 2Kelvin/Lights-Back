import './SectionForm.css';
import Tips from '../Tips/Tips';
import { ContactUs } from '../ContactForm/ContactForm';

// this component contains the Tips and the actual Form
function FormSection() {
    return (
        <section className="formSection">
            <Tips />
            <ContactUs />
        </section>
    );
}

export default FormSection;