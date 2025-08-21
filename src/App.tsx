import Counter from './Counter';
import PasswordField from './components/PasswordField';
import NavesEspaciales from './NavesEspaciales';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Counter />
      <PasswordField />
      <NavesEspaciales />
    </div>
  );
}

