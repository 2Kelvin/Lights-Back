import './App.css';
import FormSection from './components/FormSection/SectionForm';
import OtherContacts from './components/OtherContacts/OtherContacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <FormSection />
      <OtherContacts />
      <Footer />
    </div>
  );
}

export default App;

// to update new app changes run: npm run deploy