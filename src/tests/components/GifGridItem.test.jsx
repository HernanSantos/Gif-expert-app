import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../components/GifGridItem";


describe('pruebas en gifgriditem', () => {

    const title = "Goku";
    const url = "https://goku.com.ar/";

    test('debe fallar si no paso valores ', () => {
        const {container} = render(<GifGridItem title={title} url = {url}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y atl', () => {
        render(<GifGridItem title={title} url = {url}/>);
        //screen.debug();
        //expect(screen.getByRole("img").src).toBe(url);
        //expect(screen.getByRole("img").alt).toBe(title);
        const {src,alt} = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
});