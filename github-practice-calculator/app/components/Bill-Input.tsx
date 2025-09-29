"use client"
import { useState } from 'react';
import {DollarSign} from 'lucide-react';

export default function BillInput(){
    const [billAmount, setBillAmount] = useState<number | string>("");
    return(
        <>

            <label className="text-green-900 text-sm font-bold">
                Bill
            </label>
            <div className='relative'>
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    placeholder="0"
                    value={billAmount}
                    readOnly = {true} // temporary placeholder until functionalized
                    className="pl-12 bg-white-50 border-0 h-12 text-right text-2xl placeholder:text-gray-400"
                />
            </div>
        </>
    )
}