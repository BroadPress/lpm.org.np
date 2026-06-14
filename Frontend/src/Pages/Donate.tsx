import { useState } from 'react'

import PageBanner from '../Components/PageBanner'
import bannerDonate from '../assets/banner-donate.jpg'
import payIcon1 from '../assets/pay-icon-1.png'
import payIcon2 from '../assets/pay-icon-2.png'
import payIcon3 from '../assets/pay-icon-3.png'
import payIcon4 from '../assets/pay-icon-4.png'

const donationAmounts = ['50', '100', '200'] as const

const paymentMethods = [
  { id: 'card-1', image: payIcon1, alt: 'Visa' },
  { id: 'card-2', image: payIcon2, alt: 'Mastercard' },
  { id: 'card-3', image: payIcon3, alt: 'PayPal' },
  { id: 'card-4', image: payIcon4, alt: 'American Express' },
] as const

const inputClassName =
  'w-full rounded-full bg-[#f5f5f5] px-5 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-500'

const textareaClassName =
  'w-full resize-none rounded-2xl bg-[#f5f5f5] px-6 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-500'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>('50')
  const [selectedPayment, setSelectedPayment] = useState<string>('card-1')

  return (
    <div>
      <PageBanner title="Donate Now" image={bannerDonate} />

      <section className="bg-gray-100 px-4 py-12 sm:px-8 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <form
            className="space-y-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="rounded-[25px] bg-white p-6 md:p-10">
              <h3 className="mb-6 font-serif text-xl font-bold text-[#1e2a4a] md:text-2xl">
                Your Donation
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {donationAmounts.map((amount) => (
                  <label
                    key={amount}
                    className={`flex h-14 min-w-[100px] cursor-pointer items-center justify-center rounded-full border px-6 text-lg font-semibold transition ${
                      selectedAmount === amount
                        ? 'border-[#364F75] bg-[#364F75] text-white'
                        : 'border-[#dedede] text-[#1e2a4a] hover:border-[#364F75]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={amount}
                      checked={selectedAmount === amount}
                      onChange={() => setSelectedAmount(amount)}
                      className="sr-only"
                    />
                    ${amount}
                  </label>
                ))}
                <input
                  type="number"
                  name="custom-amount"
                  placeholder="Enter Donation Amount"
                  onFocus={() => setSelectedAmount('')}
                  className={`${inputClassName} min-w-[220px] flex-1`}
                />
              </div>
            </div>

            <div className="rounded-[25px] bg-white p-6 md:p-10">
              <h3 className="mb-6 font-serif text-xl font-bold text-[#1e2a4a] md:text-2xl">
                Your Details
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  className={inputClassName}
                />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  className={inputClassName}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={inputClassName}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className={inputClassName}
                />
                <textarea
                  name="note"
                  rows={7}
                  placeholder="Case Description..."
                  className={`${textareaClassName} col-span-full`}
                />
              </div>
            </div>

            <div className="rounded-[25px] bg-white p-6 md:p-10">
              <h3 className="mb-6 font-serif text-xl font-bold text-[#1e2a4a] md:text-2xl">
                Choose Your Payment Method
              </h3>
              <div className="mb-8 flex flex-wrap gap-3">
                {paymentMethods.map(({ id, image, alt }) => (
                  <label
                    key={id}
                    className={`flex h-[60px] w-[100px] cursor-pointer items-center justify-center rounded-md border p-2 transition ${
                      selectedPayment === id
                        ? 'border-[#dedede] bg-[#dedede]'
                        : 'border-[#ececec] bg-white hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={id}
                      checked={selectedPayment === id}
                      onChange={() => setSelectedPayment(id)}
                      className="sr-only"
                    />
                    <img src={image} alt={alt} className="max-h-full max-w-full object-contain" />
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1e2a4a]">
                    Card holder Name
                  </label>
                  <input type="text" name="card-name" className={inputClassName} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1e2a4a]">
                    Card Number
                  </label>
                  <input type="text" name="card-number" className={inputClassName} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1e2a4a]">
                    CVV
                  </label>
                  <input type="text" name="cvv" className={inputClassName} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1e2a4a]">
                    Expire Date
                  </label>
                  <input type="text" name="expire-date" className={inputClassName} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#f05a42] px-8 py-3 text-sm font-bold text-white hover:bg-[#e04a2d]"
            >
              Donate Now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Donate
