import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useQueryClient } from "@tanstack/react-query"
import useAddPurchaseOrder from "@/common/hooks/purchaseOrders/useAddPurchaseOrder"
import useGetPurchaseOrder from "@/common/hooks/purchaseOrders/useGetPurchaseOrder"
import useUpdatePurchaseOrder from "@/common/hooks/purchaseOrders/useUpdatePurchaseOrder"
import useSessionStore from "@/common/store/useSessionStore"
import useGetExchangeRate from "@/common/hooks/useGetExchangeRate"

type FormValues = {
  amountMoney: number
  tokenCurrentPrice: number
  estimatedTokenAmount: number
  wireReferenceId: string
}

interface GroupEstimateFormProps {
  onClose: () => void
  id?: string
}

const PurchaseOrderForm = ({ onClose, id }: GroupEstimateFormProps) => {
  const { data: exchangeRate } = useGetExchangeRate();
  const { email, walletId } = useSessionStore();

  const queryClient = useQueryClient()
  const { data, isLoading } = useGetPurchaseOrder(id!)
  const { mutate: addPurchaseOrder, isPending: isAddPurchaseOrderPending } =
    useAddPurchaseOrder()
  const {
    mutate: updatePurchaseOrder,
    isPending: isUpdatePurchaseOrderPending,
  } = useUpdatePurchaseOrder(id!)

  const [tokenAmount, setTokenAmount] = useState(0)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    values: {
      ...data?.item,
      ...(!id ? { tokenCurrentPrice: exchangeRate?.rate } : {})
    }
  })

  const getEstimatedTokenAmount = (amountMoney: number) => {
    setTokenAmount(amountMoney / (id ? data.item?.tokenCurrentPrice : exchangeRate?.rate))
  }

  const onSubmit = (data: FormValues) => {
    const formattedData = {
      ...data,
      email,
      estimatedTokenAmount: tokenAmount,
      walletId,
    }
    if (!id) {
      addPurchaseOrder(formattedData, {
        onSuccess: () => {
          toast.success("Your purchase order has been successfully placed")
          queryClient.invalidateQueries({
            queryKey: ["paginated-purchase-orders"],
          })
          reset(), setTokenAmount(0)
          onClose()
        },
        onError() {
          toast.error("An error occurred while placing your purchase order")
        },
      })
    } else {
      updatePurchaseOrder(formattedData, {
        onSuccess: () => {
          toast.success("Your purchase order has been successfully updated")
          queryClient.invalidateQueries({
            queryKey: ["paginated-purchase-orders"],
          })
          queryClient.invalidateQueries({ queryKey: ["purchase-order"] })
          reset(), onClose()
        },
        onError() {
          toast.error("An error occurred while updating your purchase order")
        },
      })
    }
  }

  return (
    <>
      <form
        className="p-2 overflow-y-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 grid-cols-3">

          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="tokenCurrentPrice"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >

                Aktueller Token-Preis in Euro
              </label>
              <input
                type="number"
                disabled
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("tokenCurrentPrice")}
              />
              {errors.tokenCurrentPrice && (
                <p>{errors.tokenCurrentPrice.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="amountMoney"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Betrag, den Sie in Euro kaufen möchten*
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("amountMoney", { required: true })}
                onChange={(e) =>
                  getEstimatedTokenAmount(Number(e.currentTarget.value))
                }
                type="number"
                disabled={
                  isLoading ||
                  isAddPurchaseOrderPending ||
                  isUpdatePurchaseOrderPending
                }
              />
              {errors.amountMoney && <p>{errors.amountMoney.message}</p>}
            </div>
          </div>

          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="estimatedTokenAmount"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Token zum Empfangen
              </label>
              <input
                type="number"
                disabled
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("estimatedTokenAmount")}
                value={tokenAmount}
              />
              {errors.estimatedTokenAmount && (
                <p>{errors.estimatedTokenAmount.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="amountMoney"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Referenznummer übertragen
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("wireReferenceId")}
                disabled={
                  isLoading ||
                  isAddPurchaseOrderPending ||
                  isUpdatePurchaseOrderPending
                }
              />
              {errors.wireReferenceId && <p>{errors.wireReferenceId.message}</p>}
            </div>
          </div>

        </div>
        <div className="flex mt-6 gap-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Stornieren
          </button>
          <button
            type="submit"
            className="block hover:cursor-pointer rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={!isValid}
          >
            Speichern
          </button>
        </div>
      </form>
    </>
  )
}

export default PurchaseOrderForm
