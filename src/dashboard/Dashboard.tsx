import React, { ReactElement } from 'react';
// import '.'; // Import corresponding CSS file for styling
import { DashboardStyle } from './Dashboard.styled';

// Sample static data
const data = {
    totalOrders: 75,
    totalDelivered: 70,
    totalCancelled: 5,
    totalRevenue: '$12K',
    netProfit: '$6759.25',
    activity: [
        { day: '5', value: 3000 },
        { day: '9', value: 5000 },
        { day: '13', value: 7000 },
        { day: '17', value: 10000 },
        { day: '21', value: 9000 },
        { day: '25', value: 8000 },
        { day: '27', value: 6000 },
    ],
    recentOrders: [
        { customer: 'Wade Warren', orderNo: '15487256', amount: '$124.00', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48985788', amount: '$385.02', status: 'Delivered' },
        { customer: 'Guy Hawkins', orderNo: '73958215', amount: '$45.88', status: 'Cancelled' },
        { customer: 'Kristin Watson', orderNo: '20064732', amount: '$85.00', status: 'Pending' },
        { customer: 'Cody Fisher', orderNo: '95716520', amount: '$545.00', status: 'Delivered' },
        { customer: 'Savannah Nguyen', orderNo: '78154568', amount: '$128.20', status: 'Delivered' },
    ],
    feedback: [
        { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', rating: 5 },
        { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service', rating: 5 },
        { name: 'Devon Lane', feedback: 'Normally when I eat at wings hut, their ribs are lean meaty and tender and...', rating: 4 },
    ]
};

// Type definitions
type Order = {
    customer: string;
    orderNo: string;
    amount: string;
    status: string;
};

type Feedback = {
    name: string;
    feedback: string;
    rating: number;
};

function Dashboard(): ReactElement {
    return (
        <DashboardStyle>
            <div className="dashboard">
                <header className="dashboard-headers">
                    <div className="header-left">
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="header-right">
                        <img src="profile.jpg" alt="Profile" className="profile-icon" />
                    </div>
                </header>
                <div className="dashboard-container">
                    <aside className="sidebar">
                        <div className="sidebar-icon">🏠</div>
                        <div className="sidebar-icon">📦</div>
                        <div className="sidebar-icon">👥</div>
                        <div className="sidebar-icon">💬</div>
                        <div className="sidebar-icon">⚙️</div>
                    </aside>
                    <div className="dashboard-header">
                        <h1>Dashboard</h1>
                    </div>
                    <main className="grid-container">


                        <div className="dashboard-stats">
                            <div className='grid-item item1'>
                                <div className="stat">
                                    <h3>Total Orders</h3>
                                    <p>{data.totalOrders}</p>
                                </div>
                                <div className="stat">
                                    <h3>Total Delivered</h3>
                                    <p>{data.totalDelivered}</p>
                                </div>
                                <div className="stat">
                                    <h3>Total Cancelled</h3>
                                    <p>{data.totalCancelled}</p>
                                </div>
                                <div className="stat">
                                    <h3>Total Revenue</h3>
                                    <p>{data.totalRevenue}</p>
                                </div>
                            </div>
                            <div className='grid-item item2'>
                                <div className="stat">
                                    <h3>Net Profit</h3>
                                    <p>{data.netProfit}</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid-item item3'>
                            <div className="activity">
                                <h3>Activity</h3>
                                <div className="chart">
                                    {data.activity.map((item, index) => (
                                        <div key={index} className="bar" style={{ height: `${item.value / 1000}px` }}>
                                            <span>{item.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='grid-item item5'>
                            <div className="recent-orders">
                                <h3>Recent Orders</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Order No.</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.recentOrders.map((order: Order, index: number) => (
                                            <tr key={index}>
                                                <td>{order.customer}</td>
                                                <td>{order.orderNo}</td>
                                                <td>{order.amount}</td>
                                                <td>{order.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='grid-item item6'>
                            <div className="customer-feedback">
                                <h3>Customer's Feedback</h3>
                                {data.feedback.map((fb: Feedback, index: number) => (
                                    <div key={index} className="feedback">
                                        <h4>{fb.name}</h4>
                                        <p>{fb.feedback}</p>
                                        <div className="rating">
                                            {Array.from({ length: fb.rating }).map((_, i) => (
                                                <span key={i}>&#9733;</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>

            </div>
        </DashboardStyle>
    );
};

export default Dashboard;
