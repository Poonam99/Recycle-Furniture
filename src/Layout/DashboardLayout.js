import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/Contexts/AuthProvider';
import useAdmin from '../Pages/Hooks/User/UseAdmin/useAdmin';
import useBuyer from '../Pages/Hooks/User/UseBuyer/useBuyer';
import useSeller from '../Pages/Hooks/User/UseSeller/useSeller';
import Navber from '../Pages/Shared/Navber/Navber';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allseller">All seller</Link></li>
                                <li><Link to="/dashboard/allbuyer">All buyer</Link></li>
                                <li><Link to="/dashboard/allreportedproducts">All Reported Products</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/MyOrders">My Orders</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/MyProducts">All Products</Link></li>
                                <li><Link to="/dashboard/addproduct">Add A Product</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;