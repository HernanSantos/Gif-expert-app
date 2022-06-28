import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs")

describe('pruebas en GifGrid', () => {
    const category = "One punch";
    
    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>)
        //screen.debug()
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se carga imagenes en useFetchGifs', () => {
        const gifs = [{
            id: "ABC",
            title: "Saitama",
            url: "https://prueba.jpg"
        },
        {
            id: "A123",
            title: "Goku",
            url: "https://pruebaGoku.jpg"
        }];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>)
        //screen.debug();
        expect(screen.getAllByRole("img").length).toBe(2);
    });
});