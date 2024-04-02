import { render, screen } from "@testing-library/react";

import Post from "..";

describe("Teste do Post", () => {
  test("Deve renderizar", () => {
    render(
      <Post imageUrl="https://via.placeholder.com/250x250">Testando...</Post>
    );
    expect(screen.getByText("Testando...")).toBeInTheDocument();
    const ImageComment = screen.getByAltText("imagem");
    expect(ImageComment).toBeInTheDocument();
    expect(ImageComment).toHaveAttribute(
      "src",
      "https://via.placeholder.com/250x250"
    );

    expect(screen.getByTestId("postagens")).toBeInTheDocument();
  });
});
