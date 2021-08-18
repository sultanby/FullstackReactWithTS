import { RenderResult, render } from "@testing-library/react"
import { createMemoryHistory, MemoryHistory } from "history"
import React from "react"
import { Router } from "react-router-dom"

type RenderWithRouter = (
    renderComponent: () => React.ReactNode,
    route?: string
) => RenderResult & { history: MemoryHistory }

declare global{
    namespace NodeJS {
        interface Global {
            renderWithRouter: RenderWithRouter
        }
    }

    namespace globalThis {
        const renderWithRouter: RenderWithRouter
    }
}

global.renderWithRouter = (renderComponent, route) => {
    const history = createMemoryHistory()
    if (route) {
        history.push(route)
    }
    return {
        ...render(
            <Router history={history}>{renderComponent()}</Router>
        ),
        history
    }
}

