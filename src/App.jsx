import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [conv, setConv] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(conv)
    setConv(amount)
  }

  const convert = () => {
    if (!currencyInfo[to]) return
    setConv(Number((amount * currencyInfo[to]).toFixed(2)))
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >
          {/* From Section */}
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyoption={options}
              amountchange={(val) => setAmount(val)}
              currencychange={(currency) => setFrom(currency)}
              selectcurrency={from}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Section */}
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={conv}
              currencyoption={options}
              amountchange={() => {}} // No-op
              currencychange={(currency) => setTo(currency)}
              selectcurrency={to}
              amdis={true}
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
