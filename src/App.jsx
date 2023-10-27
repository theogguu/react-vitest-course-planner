import './App.css';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDbData } from './utilities/firebase';
import TermPage from './components/TermPage/TermPage';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import EditForm from './components/EditForm';
import { AuthButton } from './components/AuthButton/AuthButton';
import { useProfile } from './utilities/profile';

const Main = () => {

  const [data, error] = useDbData('/');
  const [profile, profileLoading, profileError] = useProfile();
  
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading course data: {`${error}`}</h1>;

  const EditFormForUrl = ({ courses }) => {
    const { id } = useParams();
    return <EditForm id={id} profile={profile} course={courses[id]} />;
  };

  return (
    <div className="main">
      <AuthButton />
      <div>
        <Banner title={data.title} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TermPage profile={profile} courses={data.courses} />} />
            <Route path="/edit/:id" element={<EditFormForUrl profile={profile} courses={data.courses} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
)

export default App;