import React from "react";
import { render, screen } from "@testing-library/react";
import { useFetchProducts } from "./hooks/table";
import { MemoryRouter } from "react-router-dom";
import TableComponent from "./TableComponent";

// Mocking the useFetchProducts hook
jest.mock("./hooks/table", () => ({
  useFetchProducts: jest.fn(() => ({
    data: {
      products: [
        {
          id: 1,
          title: "Test Product",
          brand: "Test Brand",
          category: "Test Category",
          price: 50,
          stock: 10,
          description: "Test Description"
        }
      ]
    },
    isFetching: false,
    isFetched: true
  }))
}));

describe("Table Component", () => {
  it("renders table headers", () => {
    (useFetchProducts as jest.Mock).mockReturnValueOnce({
      data: { products: [
        {
          id: 1,
          title: "Test Product",
          brand: "Test Brand",
          category: "Test Category",
          price: 50,
          stock: 10,
          description: "Test Description"
        }
      ] },
      isFetching: true,
      isFetched: false
    });
    render(
      <MemoryRouter>
        <TableComponent />
      </MemoryRouter>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Stock")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders product data", () => {
    (useFetchProducts as jest.Mock).mockReturnValueOnce({
      data: { products: [
        {
          id: 1,
          title: "Test Product",
          brand: "Test Brand",
          category: "Test Category",
          price: 50,
          stock: 10,
          description: "Test Description"
        }
      ] },
      isFetching: true,
      isFetched: false
    });
    render(
      <MemoryRouter>
        <TableComponent />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Brand")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it('renders "Loading" when data is still being fetched', () => {
    (useFetchProducts as jest.Mock).mockReturnValueOnce({
      data: { products: [] },
      isFetching: true,
      isFetched: false
    });
    render(
      <MemoryRouter>
        <TableComponent />
      </MemoryRouter>
    );
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
