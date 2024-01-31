import { RouterProvider } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';
import ThemeSwitcher from './Pages/Shared/ThemeSwitcher';
import { routes } from './Routes/Router';
import './assets/css/style.css';



function App() {
  return (
    <div>
      <ThemeSwitcher/>
      <RouterProvider router={routes} /> 
    </div>
  );
}

export default App;
