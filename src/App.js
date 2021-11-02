import SkillCard from './components/SkillCard';
import { DiReact } from 'react-icons/di'

import './styles/global.css'

function App() {
  return (
    <SkillCard
      image={<DiReact color="FF0A54" size={70} />}
      title="React"
    />
    );
}

export default App;
