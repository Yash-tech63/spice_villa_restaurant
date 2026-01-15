import React from 'react'
import Navbar from './Navbar'

const Report = () => {
    return (
        <div>
            <Navbar>

                <div className="px-20">
                    <h1 className='text-center text-3xl'><b>Order Report</b></h1>
                    <ul className="list bg-base-100 rounded-box shadow-md">

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                            Most Ordered Dishes This Week
                        </li>

                        {/* Dish 1 */}
                        <li className="list-row">
                            <div className="text-lg font-bold opacity-60">1.</div>

                            <div>
                                <div className="font-semibold">Paneer Tikka</div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    Starter · North Indian
                                </div>
                            </div>

                            <button className="btn btn-square btn-ghost">
                                View
                            </button>

                            <button className="btn btn-square btn-ghost">
                                Order
                            </button>
                        </li>

                        {/* Dish 2 */}
                        <li className="list-row">
                            <div className="text-lg font-bold opacity-60">2.</div>

                            <div>
                                <div className="font-semibold">Veg Dum Biryani</div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    Main Course · Rice
                                </div>
                            </div>

                            <button className="btn btn-square btn-ghost">
                                View
                            </button>

                            <button className="btn btn-square btn-ghost">
                                Order
                            </button>
                        </li>

                        {/* Dish 3 */}
                        <li className="list-row">
                            <div className="text-lg font-bold opacity-60">3.</div>

                            <div>
                                <div className="font-semibold">Dal Bukhara</div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    Main Course · Signature Dish
                                </div>
                            </div>

                            <button className="btn btn-square btn-ghost">
                                View
                            </button>

                            <button className="btn btn-square btn-ghost">
                                Order
                            </button>
                        </li>

                        {/* Dish 4 */}
                        <li className="list-row">
                            <div className="text-lg font-bold opacity-60">4.</div>

                            <div>
                                <div className="font-semibold">Butter Naan</div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    Indian Bread
                                </div>
                            </div>

                            <button className="btn btn-square btn-ghost">
                                View
                            </button>

                            <button className="btn btn-square btn-ghost">
                                Order
                            </button>
                        </li>

                        {/* Dish 5 */}
                        <li className="list-row">
                            <div className="text-lg font-bold opacity-60">5.</div>

                            <div>
                                <div className="font-semibold">Manchow Soup</div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    Soup · Chinese
                                </div>
                            </div>

                            <button className="btn btn-square btn-ghost">
                                View
                            </button>

                            <button className="btn btn-square btn-ghost">
                                Order
                            </button>
                        </li>

                    </ul>

                    {/* Image wrapper */}
                    <div className="min-h-screen bg-gray-100 p-8 mt-5">
                        {/* Header */}

                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold">📊 Spice Villa Reports</h1>

                            <select className="border rounded-lg px-4 py-2">
                                <option>Today</option>
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Year</option>
                            </select>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                            <div className="bg-white p-6 rounded-xl shadow">
                                <p className="text-gray-500">Total Revenue</p>
                                <h2 className="text-2xl font-bold">₹4,85,320</h2>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow">
                                <p className="text-gray-500">Total Orders</p>
                                <h2 className="text-2xl font-bold">2,340</h2>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow">
                                <p className="text-gray-500">Avg Order Value</p>
                                <h2 className="text-2xl font-bold">₹420</h2>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow">
                                <p className="text-gray-500">Customer Rating</p>
                                <h2 className="text-2xl font-bold">⭐ 4.5</h2>
                            </div>
                        </div>

                        {/* Reports Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Sales Report */}
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-4">Sales Report</h3>

                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>Online Orders</span>
                                        <span className="font-medium">₹2,65,000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Dine-In Orders</span>
                                        <span className="font-medium">₹1,75,000</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Takeaway Orders</span>
                                        <span className="font-medium">₹45,320</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Top Dishes */}
                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-4">Top Selling Dishes</h3>

                                <ol className="list-decimal ml-5 space-y-2">
                                    <li>Paneer Tikka</li>
                                    <li>Veg Dum Biryani</li>
                                    <li>Dal Bukhara</li>
                                    <li>Butter Naan</li>
                                    <li>Manchow Soup</li>
                                </ol>
                            </div>
                        </div>

                        {/* Order Status Report */}
                        {/*  */}
                        <div className="min-h-screen bg-gray-100 p-8">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-3xl font-bold">💰 Spice Villa – Finance Report</h1>

                                <select className="border rounded-lg px-4 py-2">
                                    <option>This Month</option>
                                    <option>Last Month</option>
                                    <option>This Quarter</option>
                                    <option>This Year</option>
                                </select>
                            </div>

                            {/* Financial Summary */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-500">Total Revenue</p>
                                    <h2 className="text-2xl font-bold text-green-600">₹8,45,000</h2>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-500">Total Expenses</p>
                                    <h2 className="text-2xl font-bold text-red-600">₹5,20,000</h2>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-500">Net Profit</p>
                                    <h2 className="text-2xl font-bold">₹3,25,000</h2>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-500">Profit Margin</p>
                                    <h2 className="text-2xl font-bold">38%</h2>
                                </div>
                            </div>

                            {/* Income & Expense Breakdown */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Income */}
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <h3 className="text-xl font-semibold mb-4">Income Sources</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between">
                                            <span>Dine-In Sales</span>
                                            <span className="font-medium">₹3,90,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Online Orders</span>
                                            <span className="font-medium">₹3,10,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Takeaway</span>
                                            <span className="font-medium">₹1,45,000</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Expenses */}
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <h3 className="text-xl font-semibold mb-4">Expense Breakdown</h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between">
                                            <span>Raw Materials</span>
                                            <span className="font-medium">₹2,10,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Staff Salaries</span>
                                            <span className="font-medium">₹1,65,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Rent & Utilities</span>
                                            <span className="font-medium">₹85,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Marketing</span>
                                            <span className="font-medium">₹60,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white p-6 rounded-xl shadow mt-8">
                                <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                    <div>
                                        <p className="text-gray-500">UPI</p>
                                        <p className="text-xl font-bold">45%</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Cash</p>
                                        <p className="text-xl font-bold">30%</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Card</p>
                                        <p className="text-xl font-bold">20%</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Wallet</p>
                                        <p className="text-xl font-bold">5%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mt-8">
                                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                                    ⬇ Download PDF
                                </button>

                                <button className="border px-6 py-2 rounded-lg hover:bg-gray-200">
                                    📤 Export CSV
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow mt-8">
                            <h3 className="text-xl font-semibold mb-4">Order Status Summary</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <p className="text-gray-500">Completed</p>
                                    <p className="text-xl font-bold text-green-600">1,890</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-500">Preparing</p>
                                    <p className="text-xl font-bold text-yellow-600">320</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-500">Pending</p>
                                    <p className="text-xl font-bold text-red-600">130</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-gray-500">Cancelled</p>
                                    <p className="text-xl font-bold text-gray-600">45</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Navbar>
        </div>

    )
}

export default Report
