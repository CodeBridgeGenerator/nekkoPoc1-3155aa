import React from "react";
import { render, screen } from "@testing-library/react";

import RicelivestatusEditDialogComponent from "../RicelivestatusEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders ricelivestatus edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RicelivestatusEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("ricelivestatus-edit-dialog-component")).toBeInTheDocument();
});
