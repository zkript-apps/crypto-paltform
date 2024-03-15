import { T_Purchase_Orders } from "@/common/hooks/purchaseOrders/types"
import useGetPaginatedPurchaseOrders from "@/common/hooks/purchaseOrders/usetGetPaginatedPurchaseOrders"
import { loggedInAccount } from "@/common/store/sampleAccount"
import PurchaseOrderModal from "./components/PurchaseOrderModal"
import { useState } from "react"
import { PlusIcon } from "lucide-react"
import useUpdatePurchaseOrder from "@/common/hooks/purchaseOrders/useUpdatePurchaseOrder"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"
import StatusBadge from "@/common/components/StatusBadge"
import ConfirmationModal from "./components/ConfirmationModal"

export default function Example() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState("")
  const { email, userType } = loggedInAccount
  const { data } = useGetPaginatedPurchaseOrders(
    1,
    userType === "User" ? email : ""
  )
  const { mutate, isPending } = useUpdatePurchaseOrder(selectedId)
  const queryClient = useQueryClient()

  const handleAcceptPurchaseOrder = () => {
    mutate(
      {
        status: "Accepted",
      },
      {
        onSuccess: (data) => {
          toast.success(
            `Purchase order from ${data.item.email} has been accepted.`
          )
          queryClient.invalidateQueries({
            queryKey: ["paginated-purchase-orders"],
          })
          setIsAcceptModalOpen(false)
        },
        onError() {
          toast.error("An error occurred while accepting a purchase order")
        },
      }
    )
  }

  const handleRejectPurchaseOrder = () => {
    mutate(
      {
        status: "Rejected",
      },
      {
        onSuccess: (data) => {
          toast.success(
            `Purchase order from ${data.item.email} has been rejected.`
          )
          queryClient.invalidateQueries({
            queryKey: ["paginated-purchase-orders"],
          })
          setIsRejectModalOpen(false)
        },
        onError() {
          toast.error("An error occurred while rejecting a purchase order")
        },
      }
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="sm:flex sm:items-center justify-end mb-8">
        <div className="mt-4 sm:mt-0 sm:flex-none justify-end">
          {userType === "User" ? (
            <button
              type="button"
              onClick={() => {
                setIsOpenModal(true)
                setSelectedId("")
              }}
              className="flex gap-2 items-center rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon /> Purchase Order
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Token Price when Ordered
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Estimated Token Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
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
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {purchase.tokenCurrentPrice}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {purchase.estimatedTokenAmount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StatusBadge status={purchase.status!} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {userType === "User" ? (
                          <button
                            onClick={() => {
                              setIsOpenModal(true)
                              setSelectedId(purchase._id!)
                            }}
                            className="text-primary-600 hover:underline"
                          >
                            Edit
                          </button>
                        ) : (
                          <div className="flex gap-4 justify-center">
                            {purchase.status !== "Accepted" && (
                              <button
                                onClick={() => {
                                  setIsAcceptModalOpen(true)
                                  setSelectedId(purchase._id!)
                                }}
                                className="text-primary-600 hover:underline"
                              >
                                Accept
                              </button>
                            )}
                            {purchase.status !== "Rejected" && (
                              <button
                                onClick={() => {
                                  setIsRejectModalOpen(true)
                                  setSelectedId(purchase._id!)
                                }}
                                className="text-primary-600 hover:underline"
                              >
                                Reject
                              </button>
                            )}
                          </div>
                        )}
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
        id={selectedId}
      />

      <ConfirmationModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        title={"Accept"}
        body={"Accept this purchase order?"}
        actionFunction={handleAcceptPurchaseOrder}
        isLoading={isPending}
      />

      <ConfirmationModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        title={"Reject"}
        body={"Reject this purchase order?"}
        actionFunction={handleRejectPurchaseOrder}
        isLoading={isPending}
      />
    </div>
  )
}
