import React from 'react'
import Navbar from './Navbar'
import { LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const customerGrowthData = [
        { year: "2020", customers: 1200 },
        { year: "2021", customers: 1800 },
        { year: "2022", customers: 2600 },
        { year: "2023", customers: 3400 },
        { year: "2024", customers: 4200 },
    ];
    const favouriteFoodData = [
        { year: "2020", paneerTikka: 400, biryani: 600 },
        { year: "2021", paneerTikka: 650, biryani: 900 },
        { year: "2022", paneerTikka: 900, biryani: 1200 },
        { year: "2023", paneerTikka: 1200, biryani: 1600 },
        { year: "2024", paneerTikka: 1600, biryani: 2100 },
    ];
    return (

        <div>
            <Navbar>
                <div className="px-20 mt-10">
                    <div className="bg-gray-100 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6">
                            📈 Customer Insights Report
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Customer Growth */}
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="text-lg font-semibold mb-4">
                                    Yearly Customer Growth
                                </h3>

                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={customerGrowthData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="customers"
                                            stroke="#16a34a"
                                            strokeWidth={3}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Favourite Food */}
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="text-lg font-semibold mb-4">
                                    Customer Favourite Food (Yearly)
                                </h3>

                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={favouriteFoodData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="paneerTikka"
                                            stroke="#f97316"
                                            strokeWidth={3}
                                            name="Paneer Tikka"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="biryani"
                                            stroke="#2563eb"
                                            strokeWidth={3}
                                            name="Veg Dum Biryani"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    {/* Image wrapper */}
                    <div className="relative">


                        {/* Text on Image */}

                        <div className="min-h-screen bg-gray-100 p-8">
                            {/* Heading */}
                            <h1 className="text-3xl font-bold mb-6">🍽️ Spice Villa Dashboard</h1>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                                <div className="bg-white rounded-xl p-6 shadow">
                                    <h3 className="text-gray-500">Total Orders</h3>
                                    <p className="text-2xl font-bold">1,245</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow">
                                    <h3 className="text-gray-500">Today Revenue</h3>
                                    <p className="text-2xl font-bold">₹32,450</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow">
                                    <h3 className="text-gray-500">Active Tables</h3>
                                    <p className="text-2xl font-bold">18</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow">
                                    <h3 className="text-gray-500">Rating</h3>
                                    <p className="text-2xl font-bold">⭐ 4.5</p>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Orders */}
                                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-2">Order ID</th>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-2">#1012</td>
                                                <td>Rahul</td>
                                                <td>₹850</td>
                                                <td className="text-green-600">Completed</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2">#1013</td>
                                                <td>Anita</td>
                                                <td>₹1,200</td>
                                                <td className="text-yellow-600">Preparing</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">#1014</td>
                                                <td>Vikram</td>
                                                <td>₹650</td>
                                                <td className="text-red-600">Pending</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-white rounded-xl shadow p-6">
                                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

                                    <div className="flex flex-col gap-4">
                                        <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                                            ➕ Add New Dish
                                        </button>

                                        <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                                            📋 Manage Menu
                                        </button>

                                        <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                                            🪑 Table Status
                                        </button>

                                        <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                                            📊 View Reports
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Navbar>
        </div>

    )
}

export default Dashboard
