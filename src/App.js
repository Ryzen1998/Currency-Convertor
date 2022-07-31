import ConversionForm from "./components/ConversionForm";
import { conversionProvider as ConversionProvider } from "./context/conversionContext";




function App() {
  return (
    <>
    <ConversionProvider>

    <ConversionForm/>

    </ConversionProvider>
 

    </>
  );
}

export default App;
