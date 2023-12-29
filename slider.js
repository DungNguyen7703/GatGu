import ImageSlider from "./ImageSlider"
const App = () => {
  const Slides = [
    {url: 'E:\web\demo\header\photos\banphim_slider.jpeg'},
    {url: 'E:\web\demo\header\photos\tainghe_slider.webp'},
    {url: 'E:\web\demo\header\photos\Chuot_slider.jpg'},
    {url: 'E:\web\demo\header\photos\taycam_slider.webp'}
 
  ]
  reutrn (
    <ImageSlider slide={Slides} />
  );
};

export default App;