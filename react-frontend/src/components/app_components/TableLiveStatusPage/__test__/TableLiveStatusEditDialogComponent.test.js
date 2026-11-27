import React from "react";
import { render, screen } from "@testing-library/react";

import TableLiveStatusEditDialogComponent from "../TableLiveStatusEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tableLiveStatus edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TableLiveStatusEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tableLiveStatus-edit-dialog-component")).toBeInTheDocument();
});
