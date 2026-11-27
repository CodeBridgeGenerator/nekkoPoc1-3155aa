import React from "react";
import { render, screen } from "@testing-library/react";

import TableLiveStatusPage from "../TableLiveStatusPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders tableLiveStatus page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TableLiveStatusPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tableLiveStatus-datatable")).toBeInTheDocument();
    expect(screen.getByRole("tableLiveStatus-add-button")).toBeInTheDocument();
});
