import React from "react";
import { render, screen } from "@testing-library/react";

import CashierLiveStatusPage from "../CashierLiveStatusPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders cashierLiveStatus page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CashierLiveStatusPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cashierLiveStatus-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cashierLiveStatus-add-button")).toBeInTheDocument();
});
