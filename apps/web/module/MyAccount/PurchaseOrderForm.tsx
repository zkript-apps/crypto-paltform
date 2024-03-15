import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'next/dist/client/components/navigation';
import { useQueryClient } from '@tanstack/react-query';
import useAddPurchaseOrder from '@/common/hooks/purchaseOrders/useAddPurchaseOrder';
import { loggedInAccount } from '@/common/store/sampleAccount';
import useGetPurchaseOrder from '@/common/hooks/purchaseOrders/useGetPurchaseOrder';
import useUpdateUser from '@/common/hooks/user/useUpdateUser';
import useUpdatePurchaseOrder from '@/common/hooks/purchaseOrders/useUpdatePurchaseOrder';

type FormValues = {
  amountMoney: number;
  tokenCurrentPrice: number
  estimatedTokenAmount: number
};

interface GroupEstimateFormProps {
  onClose: () => void;
  id?: string
}

const PurchaseOrderForm = ({ onClose, id }: GroupEstimateFormProps) => {
  const [tokenAmount, setTokenAmount] = useState(0);
  const tokenCurrentPrice = 25023
  const { email, walletId, _id: userId } = loggedInAccount

  const queryClient = useQueryClient();
  const { data, isLoading } = useGetPurchaseOrder(id!)
  const { mutate: addPurchaseOrder, isPending: isAddPurchaseOrderPending } = useAddPurchaseOrder()
  const { mutate: updatePurchaseOrder, isPending: isUpdatePurchaseOrderPending } = useUpdatePurchaseOrder(id!)
  
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      tokenCurrentPrice,
    },
    values: {
      ...data?.item
    }
  });

  const getEstimatedTokenAmount = (amountMoney: number) => {
    setTokenAmount(amountMoney / tokenCurrentPrice)
  }

  
  const onSubmit = (data: FormValues) => {
    const formattedData = {
      ...data,
      userId,
      email,
      estimatedTokenAmount: tokenAmount,
      walletId
    }
    if (!id) {
      addPurchaseOrder(formattedData, {
        onSuccess: () => {
          console.log('success')
          toast.success("Your purchase order has been successfully placed");
          queryClient.invalidateQueries({ queryKey: ['paginated-purchase-orders'] })
          reset(),
          setTokenAmount(0)
        },
        onError(err) {
          console.log(err)
        }
      })
    } else {
      updatePurchaseOrder(formattedData, {
        onSuccess: () => {
          console.log('success')
          toast.success("Your purchase order has been successfully updated");
          queryClient.invalidateQueries({ queryKey: ['paginated-purchase-orders'] })
          reset(),
          setTokenAmount(0)
        },
        onError(err) {
          console.log(err)
        }
      })
    }
  };

  return (
    <>
      <form
        className="p-4 md:p-5 overflow-y-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 grid-cols-3 mt-8">
          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="amountMoney"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Amount money
              </label>
              <input 
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50" 
              {...register('amountMoney')}
              onChange={(e) => getEstimatedTokenAmount(Number(e.currentTarget.value))}
              disabled={isLoading || isAddPurchaseOrderPending || isUpdatePurchaseOrderPending}
              />
              {errors.amountMoney && <p>{errors.amountMoney.message}</p>}
            </div>
          </div>

          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="tokenCurrentPrice"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Token current price
              </label>
              <input 
              type='number' 
              disabled 
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
              {...register('tokenCurrentPrice')} />
              {errors.tokenCurrentPrice && <p>{errors.tokenCurrentPrice.message}</p>}
            </div>
          </div>

          <div className="col-span-3 items-start">
            <div className="text-left">
              <label
                htmlFor="estimatedTokenAmount"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Estimated Token Amount
              </label>
              <input 
              type='number' 
              disabled 
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-450 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
              {...register('estimatedTokenAmount')}
              value={tokenAmount} />
              {errors.estimatedTokenAmount && <p>{errors.estimatedTokenAmount.message}</p>}
            </div>
          </div>
        </div>
        <div className="flex mt-6 gap-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="block hover:cursor-pointer rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={!isValid}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default PurchaseOrderForm