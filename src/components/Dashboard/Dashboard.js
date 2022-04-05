import React from 'react';
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid} from 'recharts';

const Dashboard = () => {
    const data = 
    [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid grid-cols-2 gap-3 mr-8'>
             <div className='grid justify-items-start'>
                <h4 className='text-2xl ml-60 mt-20 font-bold text-blue-600'>MONTH WISE SELL</h4>
                <LineChart width={600} height={400} data={data} margin={{ top: 50, right: 20, bottom: 50, left: 80 }}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <XAxis dataKey="month" />
                <YAxis dataKey="sell" />
                <Tooltip />
                <Legend />
                </LineChart>
             </div>

             <div className='grid justify-items-start mr-8'>
                <h4 className='text-2xl ml-60 mt-20 font-bold text-blue-600'>INVESTMENT VS REVENUE</h4>
                <BarChart width={620} height={400} data={data} margin={{ top: 50, right: 90, bottom: 50, left: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
             </div>
        </div>
        
        
    );
};

export default Dashboard;