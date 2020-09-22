import React from 'react';
import { Form, FormType, } from '../../shared/interfaces/form';
import __UnixTimeConverter from '../../utils/unixTimeConverter'
import { Button } from 'antd';
import  { PrinterTwoTone } from '@ant-design/icons';
export const transactionColumns = [
    {
        title: "Customer",
        dataIndex: ["customer","username"]
    },
    {
        title: "Cashier",
        dataIndex: ["cashier", "username"]
    },
    {
        title: "Transaction Type",
        dataIndex: "type"
    },
    {
        title: "Amount in ETB",
        dataIndex: "amount"
    },
    {
        title: "Date",
        dataIndex: "createdAt",
        render: (createdDate:any)=><p>{__UnixTimeConverter(createdDate)}</p>
        
    },
    {
        dataIndex: "_id",
        render: (id:any) => <Button onClick={()=>window.print()}><PrinterTwoTone translate/></Button>
    }
]

export const transactionFilters: Form[] = [
    {
        label: "Customer Username",
        name: "customerUsername",
        type: FormType.TEXT
    },
    {
        label: "Cashier Username",
        name: "cashierUsername",
        type: FormType.TEXT
    },
    {
        label: "Transaction Type",
        name: "type",
        type: FormType.SELECT
    },
    {
        label: "Date Range",
        name: "range",
        type: FormType.DATE
    },
]