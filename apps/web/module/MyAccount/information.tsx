import { loggedInAccount } from '@/common/store/sampleAccount'
import { Bell, UserRound } from 'lucide-react'
import React from 'react'

function Information() {
  const { email, walletId } = loggedInAccount
  const information = [
    {
      title: "Email",
      value: email,
      icon: Bell
    },
    {
      title: "Wallet ID",
      value: walletId,
      icon: UserRound
    },
    {
      title: "Investment",
      value: "$2,000.00",
      icon: Bell
    },
  ]
  return (
    <div className='px-4 text-left sm:px-6 lg:px-8 w-full'>
      <div className="sm:flex-auto">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">Other Information</h1>
        <p className="text-sm font-semibold text-gray-600">
         User, wallet, and coin information for viewing.
        </p>
      </div>
      <div className='w-full mt-4 flex flex-col gap-2'>
        {
          information.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className='flex items-center gap-x-4 p-2 hover:bg-gray-100 rounded-2xl hover:cursor-default'>
                <div>
                  <Icon/>
                </div>
                <div className='flex flex-col'>
                  <div className='font-medium'>
                    {item.title}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {item.value}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Information