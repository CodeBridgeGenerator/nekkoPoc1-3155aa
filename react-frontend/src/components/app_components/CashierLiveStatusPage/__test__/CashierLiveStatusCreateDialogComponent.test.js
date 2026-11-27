import React from "react";
import { render, screen } from "@testing-library/react";

import CashierLiveStatusCreateDialogComponent from "../CashierLiveStatusCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cashierLiveStatus create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CashierLiveStatusCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cashierLiveStatus-create-dialog-component")).toBeInTheDocument();
});
