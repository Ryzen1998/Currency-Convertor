import ConversionForm from "./components/ConversionForm";
import ResultView from "./components/ResultView";
import { conversionProvider as ConversionProvider } from "./context/conversionContext";




function App() {
  return (
    <>
    <ConversionProvider>

    <ConversionForm/>
    <ResultView/>

    </ConversionProvider>
 

    </>
  );
}

export default App;
