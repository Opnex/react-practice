import './App.css'
import Font_Size from './components/Font_Size';
import Font_Weight from './components/Font_Weight';
import TextAlignment from './components/TextAlignment';
import TextColors from './components/Text_Color';
import TextStyles from './components/TextStyles';
import LineHeight_LetterSpacing from './components/LineHeight_LetterSpacing'
import BackgroundColors from './colors/BackgroundColors';
import NigerianFlag from './colors/NigerianFlagColors';
import ColorOpacity from './colors/Opacity';
import PaddingExamples from './SpacingSystem/Padding';
import MargingExamples from './SpacingSystem/Margin';
import SpaceBetween from './SpacingSystem/SpaceBetween'
import BorderWidth from './Borders&RoundedCorners/BorderWidth';
import BorderColors from './Borders&RoundedCorners/BorderColor';
import BorderRadius from './Borders&RoundedCorners/BorderRadius';

function App() {
  return(
    <>
      <Font_Size/>
      <Font_Weight/>
      <TextAlignment/>
      <TextColors/>
      <TextStyles/>
      <LineHeight_LetterSpacing/>
      <BackgroundColors/>
      <NigerianFlag/>
      <ColorOpacity/>
      <PaddingExamples/>
      <MargingExamples/>
      <SpaceBetween/>
      <BorderWidth/>
      <BorderColors/>
      <BorderRadius/>
    </>
  );
}
export default App;