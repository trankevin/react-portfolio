
import ProfileCard from 'components/ProfileCard';
import SkillsList from 'components/SkillsList';
import WorkList from 'components/WorkList';
import './App.scss';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <main>
        <div className="container">
          <ProfileCard/>
          <WorkList/>
          <SkillsList/>
        </div>  
      </main>

      <Footer/>
    </>
  );
}

export default App;
