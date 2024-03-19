"use client"
import useGetLatestTokenPrice from '@/common/hooks/useGetLatestTokenPrice'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TokenChart = () => {
    const { data } = useGetLatestTokenPrice()

    const formatDate = (datetime: string) => {
        const dateObject = new Date(datetime)
        const month = dateObject.toLocaleString('default', { month: 'short' })
        const day = dateObject.getDate()
        return `${month} ${day}`
    }

    const formatTime = (datetime: string) => {
        const dateObject = new Date(datetime)
        const hours = dateObject.getHours().toString().padStart(1)
        const minutes = dateObject.getMinutes().toString().padStart(2, '0')
        return `${hours}:${minutes}`
    }

    const formatFullDate = (datetime: string) => {
        const dateObject = new Date(datetime)
        const month = dateObject.toLocaleString('default', { month: 'short' })
        const day = dateObject.getDate()
        const year = dateObject.getFullYear()
        return `${month} ${day}, ${year}`
    }

    const formatDateTime = (datetime: string) => {
        const dateObject = new Date(datetime)
        const month = dateObject.toLocaleString('default', { month: 'short' })
        const day = dateObject.getDate()
        const year = dateObject.getFullYear()
        const hours = dateObject.getHours().toString().padStart(1)
        const minutes = dateObject.getMinutes().toString().padStart(2, '0')
        return `${month} ${day}, ${year}, ${hours}:${minutes}`
    }

    const formatTooltip = (value: number, name: string) => {
        if (name === 'rate_open') {
            return [`Price: €${value.toFixed(2)}`]
        }
        return value
    };

    return (
        <div className='w-full h-[400px]'> 
        <ResponsiveContainer>
            <AreaChart
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time_period_start" tickFormatter={formatTime} />
            <YAxis domain={['auto', (dataMax: number) => Math.ceil(dataMax + 100)]} />
            <Tooltip labelFormatter={formatDateTime} formatter={formatTooltip} />
            <Area type="monotone" dataKey="rate_open" stroke="#EA5A00" fill="#EA5A00" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    )
}

export default TokenChart