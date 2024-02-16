import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Container } from "./Container"

it("Container has children", () => {
  render(<Container>Hello world</Container>)
  expect(screen.getByText("Hello world")).toBeInTheDocument()
})