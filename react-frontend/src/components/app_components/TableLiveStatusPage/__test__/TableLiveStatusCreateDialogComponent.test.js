import React from "react";
import { render, screen } from "@testing-library/react";

import TableLiveStatusCreateDialogComponent from "../TableLiveStatusCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tableLiveStatus create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TableLiveStatusCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tableLiveStatus-create-dialog-component")).toBeInTheDocument();
});
