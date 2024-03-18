import { T_Purchase_Orders } from "@/common/hooks/purchaseOrders/types"
import useGetPaginatedPurchaseOrders from "@/common/hooks/purchaseOrders/usetGetPaginatedPurchaseOrders"
import PurchaseOrderModal from "./components/PurchaseOrderModal"
import { useState } from "react"
import {
  BanknoteIcon,
  ChevronLeft,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
  Copy,
  CopyCheckIcon,
  HandCoins,
  PlusIcon,
  SendIcon,
  WalletIcon,
} from "lucide-react"
import useUpdatePurchaseOrder from "@/common/hooks/purchaseOrders/useUpdatePurchaseOrder"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"
import StatusBadge from "@/common/components/StatusBadge"
import ConfirmationModal from "./components/ConfirmationModal"
import useSessionStore from "@/common/store/useSessionStore"
import useTorusStore from "@/common/store/useTorusStore"
import AdminBankAccountModal from "./components/AdminBankAccountModal"

export default function Table() {
  const queryClient = useQueryClient()
  const torus = useTorusStore((state) => state.torus);
  const { email, role } = useSessionStore((state) => state);

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState("")
  const [isAdminBankAccountOpen, setIsAdminBankAccountOpen] = useState(false)

  const { data } = useGetPaginatedPurchaseOrders(
    pageNumber,
    email as string
  )

  const openTorusTransferPage = async () => {
    try {
      torus?.showWallet("transfer")
    } catch (error) {
      return error as string
    }
  }

  const openTorusWalletPage = async () => {
    try {
      torus?.showWallet("home")
    } catch (error) {
      return error as string
    }
  }

  const maxPageNumber = Math.ceil(data?.itemAllCount / 5)
  const { mutate, isPending } = useUpdatePurchaseOrder(selectedId)

  const handlePagination = (
    action: "Previous" | "Next" | "FirstPage" | "LastPage"
  ) => {
    switch (action) {
      case "Previous":
        if (pageNumber > 1) {
          setPageNumber(pageNumber - 1)
        }
        break
      case "Next":
        if (pageNumber < maxPageNumber) {
          setPageNumber(pageNumber + 1)
        }
        break
      case "FirstPage":
        setPageNumber(1)
        break
      case "LastPage":
        setPageNumber(maxPageNumber)
        break
      default:
        break
    }
    queryClient.invalidateQueries({
      queryKey: ["paginated-purchase-orders"],
    })
  }

  const copyWalletId = (value: string | null) => {
    navigator.clipboard.writeText(value ? value : "");
    toast.success("Die Wallet-ID wurde in die Zwischenablage kopiert")
  }

  const handleAcceptPurchaseOrder = () => {
    mutate(
      {
        status: "Accepted",
      },
      {
        onSuccess: (data) => {
          toast.success(
            `Bestellung bei ${data.item.email} wurde akzeptiert.`
          )
          queryClient.invalidateQueries({
            queryKey: ["paginated-purchase-orders"],
          })
          setIsAcceptModalOpen(false)
        },
        onError() {
          toast.error("Beim Annehmen einer Bestellung ist ein Fehler aufgetreten")
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
            `Bestellung bei ${data.item.email} wurde abgelehnt.`
          )
          queryClient.invalidateQueries({
            queryKey: ["paginated-purchase-orders"],
          })
          setIsRejectModalOpen(false)
        },
        onError() {
          toast.error("Beim Annehmen einer Bestellung ist ein Fehler aufgetreten")
        },
      }
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
      <div className="text-left text-2xl font-bold">
        <h3>Kaufen Bestelllisten</h3>
      </div>
      <div>
        {role === "User" && (
          <div className="sm:mt-0 sm:flex justify-end gap-2">
            <button
              type="button"
              onClick={() => openTorusWalletPage()}
              className="flex gap-1 items-center rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <WalletIcon /> Öffnen Sie die Brieftasche
            </button>
            <button
              type="button"
              onClick={() => openTorusTransferPage()}
              className="flex gap-1 items-center rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <HandCoins /> Münze übertragen
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpenModal(true)
                setSelectedId("")
              }}
              className="flex gap-1 items-center rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon /> Auftragsbestätigung
            </button>
            <button
              type="button"
              onClick={() => setIsAdminBankAccountOpen(!isAdminBankAccountOpen)}
              className="flex gap-1 items-center rounded-md bg-secondary-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <BanknoteIcon /> Senden Sie hier Geld
            </button>
          </div>
        )}
        {role === "Admin" && (
          <div className="sm:mt-0 sm:flex justify-end gap-2">
            <button
              type="button"
              onClick={() => openTorusWalletPage()}
              className="flex gap-1 items-center rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <WalletIcon /> Öffnen Sie die Brieftasche
            </button>
            <button
              type="button"
              onClick={() => openTorusTransferPage()}
              className="flex gap-1 items-center rounded-md bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <HandCoins /> Münze übertragen
            </button>
          </div>
        )}
      </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <div className="py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Betrag in Euro
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Token-Preis bei Bestellung
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Token zum Empfangen
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Wallet-ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Referenznummer übertragen
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
                      <span className="sr-only">Bearbeiten</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-left">
                  {data?.items?.map((purchase: T_Purchase_Orders) => (
                    <tr key={purchase._id}>
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
                        {purchase.email ? purchase.email : "-"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <button type="button" onClick={() => copyWalletId(purchase.walletId)} className="flex item-center gap-2 text-gray-500 hover:text-gray-800">
                          Kopieren <Copy className="h-5 w-5"/>
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {purchase.wireReferenceId ? purchase.wireReferenceId : "-"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <StatusBadge status={purchase.status!} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {role === "User" ? (
                          <button
                            onClick={() => {
                              setIsOpenModal(true)
                              setSelectedId(purchase._id!)
                            }}
                            className="text-primary-600 hover:underline"
                          >
                            Bearbeiten
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
                                Akzeptieren
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
                                Ablehnen
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
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => handlePagination("FirstPage")}
                disabled={pageNumber === 1}
                className="inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">First page</span>
                <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => handlePagination("Previous")}
                disabled={pageNumber === 1}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0">
                {pageNumber}
              </div>
              <button
                onClick={() => handlePagination("Next")}
                disabled={pageNumber === maxPageNumber}
                className="hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => handlePagination("LastPage")}
                disabled={pageNumber === maxPageNumber}
                className="inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Last Page</span>
                <ChevronsRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
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
        title={"Akzeptieren"}
        body={"Akzeptieren Sie diese Bestellung?"}
        actionFunction={handleAcceptPurchaseOrder}
        isLoading={isPending}
      />

      <ConfirmationModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
        title={"Ablehnen"}
        body={"Lehnen Sie diese Bestellung ab?"}
        actionFunction={handleRejectPurchaseOrder}
        isLoading={isPending}
      />

      <AdminBankAccountModal
        isOpen={isAdminBankAccountOpen}
        onClose={() => setIsAdminBankAccountOpen(false)}
      />
    </div>
  )
}
