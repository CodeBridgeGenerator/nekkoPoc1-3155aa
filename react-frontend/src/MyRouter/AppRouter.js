import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleTableLiveStatusPage from "../components/app_components/TableLiveStatusPage/SingleTableLiveStatusPage";
import TableLiveStatusProjectLayoutPage from "../components/app_components/TableLiveStatusPage/TableLiveStatusProjectLayoutPage";
import SingleCashierLiveStatusPage from "../components/app_components/CashierLiveStatusPage/SingleCashierLiveStatusPage";
import CashierLiveStatusProjectLayoutPage from "../components/app_components/CashierLiveStatusPage/CashierLiveStatusProjectLayoutPage";
import SingleRicelivestatusPage from "../components/app_components/RicelivestatusPage/SingleRicelivestatusPage";
import RicelivestatusProjectLayoutPage from "../components/app_components/RicelivestatusPage/RicelivestatusProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
<Route path="/tableLiveStatus/:singleTableLiveStatusId" exact element={<SingleTableLiveStatusPage />} />
<Route path="/tableLiveStatus" exact element={<TableLiveStatusProjectLayoutPage />} />
<Route path="/cashierLiveStatus/:singleCashierLiveStatusId" exact element={<SingleCashierLiveStatusPage />} />
<Route path="/cashierLiveStatus" exact element={<CashierLiveStatusProjectLayoutPage />} />
<Route path="/ricelivestatus/:singleRicelivestatusId" exact element={<SingleRicelivestatusPage />} />
<Route path="/ricelivestatus" exact element={<RicelivestatusProjectLayoutPage />} />
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>{/* ~cb-add-protected-route~ */}</Route>
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
