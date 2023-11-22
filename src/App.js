import './App.css';
import WebsiteHeading from './components/WebsiteHeading/WebsiteHeading';
import FormSection from './components/FormSection/SectionForm';
import OtherContacts from './components/OtherContacts/OtherContacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <WebsiteHeading />
      <FormSection />
      <OtherContacts />
      <Footer />
    </div>
  );
}

export default App;
