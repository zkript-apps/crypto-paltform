import { T_Purchase_Orders } from "@/common/hooks/purchaseOrders/types"
import useGetPaginatedPurchaseOrders from "@/common/hooks/purchaseOrders/usetGetPaginatedPurchaseOrders"
import { loggedInAccount } from "@/common/store/sampleAccount"
import PurchaseOrderModal from "./PurchaseOrderModal"
import { useState } from "react";

export default function Example() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const { email } = loggedInAccount
  const { data } = useGetPaginatedPurchaseOrders(1, email)

  const status = (status: "Pending" | "Accepted" | "Rejected") => {
    if (status === "Pending") {
        return (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                Pending
            </span>
        );
    } else if (status === "Accepted") {
        return (
            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                Accepted
            </span>
        );
    } else {
        return (
            <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                Rejected
            </span>
        );
    }
  }
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="sm:flex sm:items-center justify-end">
        <div className="mt-4 sm:mt-0 sm:flex-none justify-end">
          <button
            type="button"
            onClick={() => setIsOpenModal(true)}
            className="block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Purchase Order
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Token Price when Ordered
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Estimated Token Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-left">
                  {data?.items?.map((purchase: T_Purchase_Orders) => (
                    <tr key={purchase.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {purchase.amountMoney}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{purchase.tokenCurrentPrice}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{purchase.estimatedTokenAmount}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{status(purchase.status!)}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <button onClick={() => {setIsOpenModal(true); setSelectedId(purchase._id!)}} className="text-primary-600 hover:underline">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <PurchaseOrderModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        id={selectedId} />
    </div>
  )
}
